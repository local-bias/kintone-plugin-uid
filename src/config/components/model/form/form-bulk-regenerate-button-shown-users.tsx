import { cybozuGroupsAtom, cybozuOrganizationsAtom, cybozuUsersAtom } from '@/config/states/cybozu';
import { PluginCondition } from '@/lib/plugin';
import { useArray } from '@konomi-app/kintone-utilities-jotai';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, MenuItem, Skeleton, TextField, Tooltip } from '@mui/material';
import { useAtomValue } from 'jotai';
import { FC, Suspense } from 'react';
import { getConditionPropertyAtom } from '../../../states/plugin';

type UserType = PluginCondition['bulkRegenerateButtonShownUsers'][0]['type'];

const USER_TYPE = [
  { label: 'ユーザー', value: 'user' },
  { label: 'グループ', value: 'group' },
  { label: '組織', value: 'organization' },
];

const conditionPropertyAtom = getConditionPropertyAtom('bulkRegenerateButtonShownUsers');

const UserSelect: FC = () => {
  const users = useAtomValue(conditionPropertyAtom);
  const { addItem, deleteItem, updateItem } = useArray(conditionPropertyAtom);
  const cybozuUsers = useAtomValue(cybozuUsersAtom);
  const cybozuGroups = useAtomValue(cybozuGroupsAtom);
  const cybozuOrganizations = useAtomValue(cybozuOrganizationsAtom);

  const onTypeChange = (index: number, type: UserType) => {
    updateItem({ index, newItem: { ...users[index]!, type } });
  };

  const onCodeChange = (index: number, code: string) => {
    updateItem({ index, newItem: { ...users[index]!, code } });
  };

  return (
    <div className='flex flex-col gap-4 mt-8'>
      {users.map((user, i) => {
        const entities =
          user.type === 'user'
            ? cybozuUsers
            : user.type === 'group'
              ? cybozuGroups
              : cybozuOrganizations;

        const label =
          user.type === 'user' ? 'ユーザー名' : user.type === 'group' ? 'グループ名' : '組織名';

        return (
          <div key={i} className='flex items-center gap-2'>
            <TextField
              select
              value={user.type}
              sx={{ width: '160px' }}
              onChange={(e) => onTypeChange(i, e.target.value as UserType)}
              label='許可の範囲'
            >
              {USER_TYPE.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              value={user.code}
              onChange={(e) => onCodeChange(i, e.target.value)}
              label={label}
              sx={{ minWidth: '400px' }}
            >
              {entities.map((entity) => (
                <MenuItem key={entity.code} value={entity.code}>
                  {entity.name}
                </MenuItem>
              ))}
            </TextField>
            <Tooltip title='追加'>
              <IconButton
                size='small'
                onClick={() => addItem({ index: i + 1, newItem: { type: 'user', code: '' } })}
              >
                <AddIcon fontSize='small' />
              </IconButton>
            </Tooltip>
            {users.length > 1 && (
              <Tooltip title='削除'>
                <IconButton size='small' onClick={() => deleteItem(i)}>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            )}
          </div>
        );
      })}
    </div>
  );
};

const BulkRegenerateButtonShownUsersPlaceholder: FC = () => (
  <div className='flex flex-col gap-4 mt-8'>
    {new Array(3).fill('').map((_, i) => (
      <div key={i} className='flex items-center gap-2'>
        <Skeleton variant='rounded' width={160} height={56} />
        <Skeleton variant='rounded' width={400} height={56} />
        <Skeleton variant='circular' width={24} height={24} />
        <Skeleton variant='circular' width={24} height={24} />
      </div>
    ))}
  </div>
);

const BulkRegenerateButtonShownUsersForm: FC = () => {
  return (
    <Suspense fallback={<BulkRegenerateButtonShownUsersPlaceholder />}>
      <UserSelect />
    </Suspense>
  );
};

export default BulkRegenerateButtonShownUsersForm;

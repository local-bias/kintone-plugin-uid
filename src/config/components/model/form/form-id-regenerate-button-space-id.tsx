import { currentAppSpacesAtom } from '@/config/states/kintone';
import { getConditionPropertyAtom } from '@/config/states/plugin';
import { Autocomplete, Skeleton, TextField } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { Suspense, type FC } from 'react';

const fieldPropertyAtom = getConditionPropertyAtom('idRegenerateButtonSpaceId');

const IdRegenerateButtonSpaceIdFormComponent: FC = () => {
  const [spaceId, setSpaceId] = useAtom(fieldPropertyAtom);
  const spaces = useAtomValue(currentAppSpacesAtom);

  return (
    <Autocomplete
      value={spaces.find((spacer) => spacer.elementId === spaceId) ?? null}
      sx={{ width: '350px' }}
      options={spaces}
      isOptionEqualToValue={(option, v) => option.elementId === v.elementId}
      getOptionLabel={(option) => option.elementId}
      onChange={(_, group) => setSpaceId(group?.elementId ?? '')}
      renderInput={(params) => (
        <TextField {...params} label='対象スペースID' variant='outlined' color='primary' />
      )}
    />
  );
};

const IdRegenerateButtonSpaceIdPlaceholder: FC = () => {
  return <Skeleton variant='rounded' width={350} height={56} />;
};

const IdRegenerateButtonSpaceIdForm: FC = () => {
  return (
    <Suspense fallback={<IdRegenerateButtonSpaceIdPlaceholder />}>
      <IdRegenerateButtonSpaceIdFormComponent />
    </Suspense>
  );
};

export default IdRegenerateButtonSpaceIdForm;

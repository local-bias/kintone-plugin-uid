import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { type PrimitiveAtom, useAtom } from 'jotai';
import { ChangeEventHandler, FC, forwardRef, Suspense } from 'react';

type Props<T extends string = string> = {
  atom: PrimitiveAtom<T>;
  options: { label: string; value: string }[];
  width?: number;
} & Omit<TextFieldProps, 'value' | 'onChange'>;

const JotaiSelectComponent = forwardRef<HTMLDivElement, Props>(({ atom, ...props }, ref) => {
  const [value, setValue] = useAtom(atom);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => setValue(event.target.value);
  return (
    <TextField {...props} value={value} onChange={onChange} inputRef={ref} select>
      {props.options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
});
JotaiSelectComponent.displayName = 'JotaiSelectComponent';

const JotaiSelectPlaceHolder: FC<Props> = (props) => <TextField {...props} disabled />;

export const JotaiSelect: FC<Props> = (props) => {
  const completed: Props = {
    ...props,
    sx: {
      width: props.width ?? 400,
      ...props.sx,
    },
  };

  return (
    <Suspense fallback={<JotaiSelectPlaceHolder {...completed} />}>
      <JotaiSelectComponent {...completed} />
    </Suspense>
  );
};

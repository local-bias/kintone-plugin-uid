import { Checkbox, FormControlLabel, FormGroup, FormGroupProps, MenuItem } from '@mui/material';
import { type PrimitiveAtom, useAtom } from 'jotai';
import { ChangeEventHandler, FC, forwardRef, Suspense } from 'react';

type Props = {
  atom: PrimitiveAtom<Record<string, boolean>>;
  options: { property: string; label: string }[];
} & FormGroupProps;

const JotaiCheckboxComponent: FC<Props> = ({ atom, options, ...formGroupProps }) => {
  const [value, setValue] = useAtom(atom);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <FormGroup {...formGroupProps}>
      {options.map(({ property, label }) => (
        <FormControlLabel
          key={property}
          control={<Checkbox checked={value[property]} name={property} onChange={onChange} />}
          label={label}
        />
      ))}
    </FormGroup>
  );
};
JotaiCheckboxComponent.displayName = 'JotaiCheckboxComponent';

const JotaiCheckboxPlaceHolder: FC<Props> = (props) => (
  <FormGroup>
    {props.options.map(({ property, label }) => (
      <FormControlLabel
        key={property}
        control={<Checkbox checked={false} disabled />}
        label={label}
      />
    ))}
  </FormGroup>
);

export const JotaiCheckbox: FC<Props> = (props) => {
  const completed: Props = {
    ...props,
  };

  return (
    <Suspense fallback={<JotaiCheckboxPlaceHolder {...completed} />}>
      <JotaiCheckboxComponent {...completed} />
    </Suspense>
  );
};

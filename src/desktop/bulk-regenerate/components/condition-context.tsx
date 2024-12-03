import { createContext, useContext, type FC, type ReactNode } from 'react';
import invariant from 'tiny-invariant';
import { PluginCondition } from '@/lib/plugin';

type ContextType = { condition: PluginCondition };

const Context = createContext<ContextType | undefined>(undefined);

type InProviderProps = {};

type ProviderProps = Omit<ContextType, keyof InProviderProps> & {
  children: ReactNode;
};

export const ConditionProvider: FC<ProviderProps> = (props) => {
  const { children, ...rest } = props;
  return <Context.Provider value={{ ...rest }}>{children}</Context.Provider>;
};

export const useCondition = () => {
  const context = useContext(Context);
  invariant(context, `${useCondition.name} must be used within a ${ConditionProvider.displayName}`);
  return context;
};

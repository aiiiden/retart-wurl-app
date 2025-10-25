import { type ComponentType, type ReactNode } from 'react';
import { TanstackQueryProvider } from './tanstack-query';

type ProviderProps = {
  children: ReactNode;
};

const providers: ComponentType<ProviderProps>[] = [
  TanstackQueryProvider,
  // Add more providers here
];

export function Providers({ children }: ProviderProps) {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
}

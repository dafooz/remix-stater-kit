import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

export function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;

  return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>;
}

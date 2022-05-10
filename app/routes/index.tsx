import { ColorModeSwitcher } from '~/components/generic/colorModeSwitcher';

import { Button, Text } from '@chakra-ui/react';
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <Text as="h1" fontSize="4xl">
        YOUR LANDING PAGE
      </Text>
      <Text>Theme switcher</Text>
      <ColorModeSwitcher />
      <div>
        <Text>Main page action</Text>
        <Button as={Link} to="/login" prefetch="intent">
          Go to app
        </Button>
      </div>
    </div>
  );
}

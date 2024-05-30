import { CSSProperties } from 'react';
import { Decorator } from '@storybook/react';

const styles: CSSProperties = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const CenterDecorator: Decorator = (Story) => (
  <div style={styles}>
    <Story />
  </div>
);

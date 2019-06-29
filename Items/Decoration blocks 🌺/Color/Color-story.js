import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import ColorRed from './ColorRed';
import ColorCustom from './ColorCustom';


storiesOf('🌺 Color', module)
  .add('Color Red', () => <ColorRed />)
  .add('Color Custom', () => <ColorCustom />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import ImportingIcons from './ImportingIcons';
import UsingIcons from './UsingIcons';

storiesOf('🎨 Importing Icons', module)
  .add('Importing Icons', () => <ImportingIcons />)
  .add('Using Icons', () => <UsingIcons />);

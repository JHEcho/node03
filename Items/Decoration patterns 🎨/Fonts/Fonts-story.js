import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import ImportingFonts from './ImportingFonts';
import UsingFonts from './UsingFonts';

storiesOf('🎨 Importing Fonts', module)
  .add('Importing Fonts', () => <ImportingFonts />)
  .add('Using Fonts', () => <UsingFonts />);

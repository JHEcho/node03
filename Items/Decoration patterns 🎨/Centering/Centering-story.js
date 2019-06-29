import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import CenteringWithIcon01 from './CenteringWithIcon01';
import CenteringWithIcon02 from './CenteringWithIcon02';

storiesOf('🎨 Centering', module)
  .add('Centering With Icon (horizontal)', () => <CenteringWithIcon01 />)
  .add('Centering With Icon (vertical)', () => <CenteringWithIcon02 />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BorderRadius10 from './BorderRadius10';
import BorderRadius30 from './BorderRadius30';
import BorderRadius50p from './BorderRadius50p';

storiesOf('🌺 BorderRadius', module)
  .add('BorderRadius 10px', () => <BorderRadius10 />)
  .add('BorderRadius 30px', () => <BorderRadius30 />)
  .add('BorderRadius 50%', () => <BorderRadius50p />);

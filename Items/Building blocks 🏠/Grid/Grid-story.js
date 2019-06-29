import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import Grid4Columns from './Grid4Columns';
import Grid6Columns from './Grid6Columns';
// Import Styles!
import './grid.scss';

storiesOf('🏠  Grid', module)
  .add('Grid 4Columns', () => <Grid4Columns />)
  .add('Grid 6Columns', () => <Grid6Columns />);

import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Items!
import UseData from './UseData';

storiesOf('🔻 UseData', module).addWithInfo(
  'UseData (in React)',
  `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pPUAAo9fP4c?ecver=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `,
  () => <UseData />
);

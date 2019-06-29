import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Items!
import GetData from './GetData';

storiesOf('🔻 GetData', module).addWithInfo(
  'GetData (in React)',
  `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6W9BdLStu9s?ecver=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `,
  () => <GetData />
);

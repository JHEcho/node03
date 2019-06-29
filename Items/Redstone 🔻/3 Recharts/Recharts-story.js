import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Items!
import Recharts from './Recharts';


storiesOf('🔻 Recharts', module).addWithInfo(
  'Recharts',
    <div>
      <a href="http://recharts.org"><strong>recharts.org</strong></a>
      <iframe src="http://recharts.org" name="" scrolling="auto" align="bottom" height="500" width="100%">
      </iframe>
    </div>
      ,
  () => <Recharts />
);

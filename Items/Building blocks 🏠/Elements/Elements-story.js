import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Paragraph from './Paragraph';
import Span from './Span';
import AwesomeElement from './AwesomeElement';

storiesOf('🏠  Elements', module)
  .add('Heading1 (h1)', () => <Heading1 />)
  .add('Heading2 (h2)', () => <Heading2 />)
  .add('Paragraph (p)', () => <Paragraph />)
  .add('AwesomeElement (어썸)', () => <AwesomeElement />);

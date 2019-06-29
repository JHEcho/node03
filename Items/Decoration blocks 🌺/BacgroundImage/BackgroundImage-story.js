import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Items!
import BackgroundImageCover from './BackgroundImageCover';
import BackgroundImageContain from './BackgroundImageContain';

storiesOf('🌺 BackgroundImage', module)
  .add('BackgroundImage Cover', () => <BackgroundImageCover />)
  .add('BackgroundImage Contain', () => <BackgroundImageContain />);

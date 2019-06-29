import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { checkA11y } from 'storybook-addon-a11y';
import Container from './Container';
import { setOptions } from '@storybook/addon-options';
import '@storybook/addon-console';


addDecorator(story => <Container story={story} />);
setAddon(infoAddon);

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: '치프메이트 Items 💊🔫',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off mulitple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: null,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

// automatically import all files ending in *.stories.js
function loadStories() {
  // req.keys().forEach(filename => req(filename));
  const req = require.context('../Items', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

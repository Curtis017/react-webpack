/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import App from 'components/App';

describe('AppComponent', function () {

  beforeEach(function () {
    this.AppComponent = createComponent(App);
  });

  it('should have its component name as default className', function () {
    expect(this.AppComponent.props.className).to.equal('index');
  });
});

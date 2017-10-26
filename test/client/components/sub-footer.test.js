import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SubFooter from '../../../app/client/js/components/sub-footer';

describe('<SubFooter />', () => {
  it('should render a .sub-footer element', () => {
    const wrapper = shallow(<SubFooter />);
    expect(wrapper.find('.sub-footer')).to.have.length(1);
  });

  it('should render a link', () => {
    const wrapper = shallow(<SubFooter />);
    expect(wrapper.find('a')).to.have.length(1);
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Work from '../../../app/client/js/components/work';

describe('<Work />', () => {
  it('should render a .work', () => {
    const wrapper = shallow(<Work />);
    expect(wrapper.find('.work')).to.have.length(1);
  });

  it('should render a 3 element grid', () => {
    const wrapper = shallow(<Work />);
    expect(wrapper.find('.grid-item')).to.have.length(3);
  });
});
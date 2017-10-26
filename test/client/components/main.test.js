import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Main from '../../../app/client/js/components/main';

describe('<Main />', () => {
  it('should render a main', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('main')).to.have.length(1);
  });

  it('should render a 3 element grid', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('.grid-item')).to.have.length(3);
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Footer from '../../../app/client/js/components/footer';

describe('<Footer />', () => {
  it('should render a footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).to.have.length(1);
  });

  it('should render 5 icons', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.icons li')).to.have.length(5);
  });
});
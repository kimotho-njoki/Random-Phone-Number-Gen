import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhoneNumbers from '../components/phone-numbers-view';

configure({ adapter: new Adapter() })

const props = {
  phoneNumbers: ['0464159160', '0298537051']
}

describe('Test cases for Phone Numbers view', () => {
  const wrapper = shallow(<PhoneNumbers {...props} />);



  it('should find a List', () => {
    expect(wrapper.find('List').length).toEqual(1)
  });
});

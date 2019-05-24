import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from '../components/content';
import PhoneNumbers from '../components/phone-numbers-view';

configure({ adapter: new Adapter() })

describe('Test cases for Content component', () => {
  const wrapper = shallow(<Content />);
  const instance = wrapper.instance();

  instance.setState({
    limit : 1,
    phoneNumbers: [],
    maxValue: '',
    minValue: '',
    status: '',
    isDisabled: true
  })

  it('should find a form', () => {
    expect(wrapper.find('Form').length).toEqual(1)
  });

  it('should find a button', () => {
    expect(wrapper.find('Button').length).toEqual(6)
  });

  it('should render once', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('render a list of phone numbers', () => {
    expect(wrapper.find(PhoneNumbers).length).toEqual(1)
  });

  it('should call generatePhoneNumbers when Generate button is clicked', () => {
    wrapper.setState({ limit: 10 });
    instance.generatePhoneNumbers();
    expect(instance.state.phoneNumbers.length).toEqual(10);
  });

  it('should call handleInput when a user types in a limit', () => {
    const event = { target: { value: 20 }};
    instance.handleInput(event);
    expect(instance.state.limit).toEqual(20);
  });

  it('should call sortAsc when a user wants to sort in ascending order', () => {
    wrapper.setState({
      phoneNumbers: ['0751840235', '0308435879']
    });

    instance.sortAsc();
    expect(instance.state.phoneNumbers).toEqual([ '0308435879', '0751840235' ]);
  });

  it('should call sortDesc when a user wants to sort in descending order', () => {
    wrapper.setState({
      phoneNumbers: ['0686428753', '0116252159', '0673695862']
    });

    instance.sortDesc();
    expect(instance.state.phoneNumbers).toEqual([ '0686428753', '0673695862',  '0116252159']);
  });

  it('should call maxValue when user wants to view maximum value', () => {
    wrapper.setState({
      phoneNumbers: ['0464159160', '0298537051']
    });

    instance.maxValue();
    expect(instance.state.maxValue).toEqual(parseInt('0464159160'));
  });

  it('should call minValue when user wants to view minimum value', () => {
    wrapper.setState({
      phoneNumbers: ['0464159160', '0298537051']
    });

    instance.minValue();
    expect(instance.state.minValue).toEqual(parseInt('0298537051'));
  });

  it('shound call exportPhoneNumbers', () => {
    const button = wrapper.find('.Export-btn');

    global.URL.createObjectURL = jest.fn();

    instance.exportPhoneNumbers()
    button.simulate('click');
    expect(instance.state.status).toEqual('saved');
  });
});

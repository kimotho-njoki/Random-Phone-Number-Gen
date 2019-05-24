import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

class PhoneNumbers extends React.Component {
  render() {
    const { phoneNumbers } = this.props;
    return (
      <div>
        <List>
        {phoneNumbers.map((phoneNumber) => {
          return <List.Item>{phoneNumber}</List.Item>
        })}
        </List>
      </div>
    )
  }
}

PhoneNumbers.propTypes = {
  phoneNumbers: PropTypes.array.isRequired
};

export default PhoneNumbers;

import React from 'react';
import { Container } from 'semantic-ui-react';
import PhoneNumbersHeader from './header';
import Content from './content';

class PhoneNumbersWrapper extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Container>
          <PhoneNumbersHeader />
        </Container>
        <Content />
      </React.Fragment>
    )
  }
}

export default PhoneNumbersWrapper;

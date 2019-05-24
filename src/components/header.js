import React from 'react';

class PhoneNumbersHeader extends React.Component {
  render() {
    return (
      <div className="PhoneNumbers-header">
        <h2>Generate Phone Numbers</h2>
        <p>Set a limit (must be a number from 0 to 10, 000) then click on the generate button.</p>
        <p>
          You can view the maximum value, the minimum value and order your Phone Numbers
          in an ascending or descending manner. You can export/save the phone numbers for future
          reference as well (Generate a phone number to enable these options).
        </p>
      </div>
    )
  }
}

export default PhoneNumbersHeader;

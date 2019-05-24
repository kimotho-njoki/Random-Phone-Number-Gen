import React from 'react';
import { Button, Divider, Form, Label } from 'semantic-ui-react';
import FileSaver from 'file-saver';
import PhoneNumbers from './phone-numbers-view';


class Content extends React.Component {
  state = {
    limit : 1,
    phoneNumbers: [],
    maxValue: '',
    minValue: '',
    isDisabled: true
  }

  generatePhoneNumbers = () => {
    const { limit } = this.state;
    let phoneNumbers = []
    let phoneNumber = 0

    while (phoneNumber < limit) {
      phoneNumbers.push("0" + Math.floor(100000000 + Math.random() * 900000000))
      phoneNumber++
    }

    this.setState({
      phoneNumbers,
      isDisabled: false
    })
  }

  handleInput = (event) => {
    const { value } = event.target
    Math.floor(Number(value))

    this.setState({
      limit: value
    })
  }

  sortAsc = () => {
    const { phoneNumbers } = this.state
    let sortedPhoneNumbers = []
    sortedPhoneNumbers = phoneNumbers.sort((a, b) =>  a - b)
    this.setState({
      phoneNumbers: sortedPhoneNumbers
    })
  }

  sortDesc = () => {
    const { phoneNumbers } = this.state
    let sortedPhoneNumbers = []
    sortedPhoneNumbers = phoneNumbers.sort((a, b) =>  b - a)
    this.setState({
      phoneNumbers: sortedPhoneNumbers
    })
  }

  maxValue = () => {
    const { phoneNumbers } = this.state
    let maxValue
    maxValue = Math.max(...phoneNumbers)
    this.setState({
      maxValue
    })
  }

  minValue = () => {
    const { phoneNumbers } = this.state
    let minValue
    minValue = Math.min(...phoneNumbers)
    this.setState({
      minValue
    })
  }

  exportPhoneNumbers = () => {
   const { phoneNumbers } = this.state;
   if (phoneNumbers.length > 0) {
     let blob = new Blob(phoneNumbers, { type: "text/plain;charset=utf-8" })
     FileSaver.saveAs(blob, "phone numbers.txt")
   }
 };

  render() {
    const { phoneNumbers, maxValue, minValue, isDisabled } = this.state

    return (
      <div>
        <Form>
          <Form.Field>
            <input
              type="number"
              min="0"
              max="10000"
              placeholder="Type something..."
              onChange={this.handleInput}
            />
            <Label pointing className="Input-label">Must be a number</Label>
            <Button size="large" onClick={this.generatePhoneNumbers} className="Generate-btn">
              Generate
            </Button>
            <Button size="large" onClick={this.exportPhoneNumbers} className="Export-btn" disabled={isDisabled}>
              Export
            </Button>
            <Divider />
          </Form.Field>
        </Form>

        <Button onClick={this.maxValue} className="Stats-max-btn" disabled={isDisabled}>
          show maximum value
        </Button>
        <span>{maxValue && "0" + maxValue}</span>
        <Divider />
        <Button onClick={this.minValue} className="Stats-min-btn" disabled={isDisabled}>
          show minimum value
        </Button>
        <span>{minValue && "0" + minValue}</span>
        <Divider />

        <Button onClick={this.sortAsc} className="Sort-btn" disabled={isDisabled}>
          Ascending order
        </Button>
        <Button onClick={this.sortDesc} className="Sort-btn" disabled={isDisabled}>
          Descending order
        </Button>
        <Divider />

        <p>You have {phoneNumbers.length} phone number(s):</p>
        <PhoneNumbers phoneNumbers={phoneNumbers} />
      </div>
    )
  }
}

export default Content;

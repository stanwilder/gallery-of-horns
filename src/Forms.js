import { Button } from 'bootstrap';
import React from 'react';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label> Number of Horns
            <Form.Control type="text" name="name">
            </Form.Control>
          </Form.Label>
          <Form.Select name="select" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="one">One</option>
            <option value="two">Two</option>
          </Form.Select>

          <Button type="submit">Submit</Button>
        </Form>

      </>
    )
  }
}

export default Forms;
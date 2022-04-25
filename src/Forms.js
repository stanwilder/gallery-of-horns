// import { Button } from 'react-bootstrap';
import React from 'react';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
  render() {
    return(
      <>
      <Form>

      {/* <Form onSubmit={this.props.handleSubmit}> */}
       <Form.Label> Number of Horns
        {/* <Form.Control type="text" name="name"/> */}
          <Form.Label>
            <Form.Select name="select" onChange={this.props.handleSelect}>
              <option value="all">All</option>
              <option value="one">One</option>
              <option value="two">Two</option>
           </Form.Select>
           {/* <Button type="submit">Submit</Button> */}
            </Form.Label> 
         
        </Form.Label> 
      {/* </Form> */}
      </Form>
      
      </>
    )
}}

export default Forms;
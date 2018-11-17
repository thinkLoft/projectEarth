import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Form.css";

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="examplePassword">Start</Label>
          <Input
            type="data"
            name="time1"
            id="startTime"
            placeholder="MM/DD/YY 00:00"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">End</Label>
          <Input
            type="data"
            name="time2"
            id="endTime"
            placeholder="MM/DD/YY 00:00"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button className="submit">Submit</Button>
      </Form>
    );
  }
}

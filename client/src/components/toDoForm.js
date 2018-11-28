import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './toDoForm.css';

export default class freeForm extends React.Component {

  render() {
    return (
      <div className="container task-list">
        <Form>
          <FormGroup>
            <div className="row">
              <div className="col-lg-8 title">
                <Label for="title">Title</Label>
                <Input id="task-title"
                />
                <label for="exampleFormControlTextarea1">Details</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <Label for="dueDate">Complete by:</Label>
                <Input
                  type="date"
                  id="task-dueDate"
                />

                <Button
                  className="submit"
                >
                  Add Task
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
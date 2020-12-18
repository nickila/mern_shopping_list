import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  // having the following set to e.target.name it will grab from anything with onChange and set its value to the value
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
    };

    // Add item via addItem action
    this.props.addItem(newItem);
    // Close modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add To Shopping ListGroup
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="item">Item</Label>
                  <Input
                    type="text"
                    name="name"
                    id="item"
                    placeholder="Add shopping item"
                    onChange={this.onChange}
                  />
                  <Button color="dark" style={{ marginTop: "2rem" }} block>
                    Add Item
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // we call this item cuz that's what we called it in the reducer
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
// This is a container. If you're using redux state inside of a component, it's called a container. A component that's hooked to redux. Sometimes people will keep these components in a separate folder called containers. We're just going to be keeping it in the components folder.

import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { v1 as uuid } from "uuid";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

// We only need uuid for setting up static data, not from database. We won't need it then
// it's just to create IDs
// When you bring in an action from redux it's going to be stored as a prop
// so this.props.getItems
class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  // this is grabbing the id from the mapped list below
  // it's calling on the deleteAction action from itemActions
  // which is getting called in itemReducer with the switch statement which filters out the id passed
  // so it goes from here, to itemActions, to itemReducer
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };
  render() {
    // the following doesn't work anymore cuz we're getting state elsewhere
    // const { items } = this.state;
    // In the following line 'item' represents the object, the initialState from itemReducer
    // 'items' represents the items within it cuz it's called items in the object
    // this.props.item.items
    // instead of the above line, we'll use destructuring
    const { items } = this.props.item;
    // Now our state lives in the line above in redux
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem
                  onMouseEnter={this.mouseEnter}
                  onMouseLeave={this.mouseLeave}
                >
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>

                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  // object represents our state
  item: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  // we call this item cuz that's what we called it in the reducer
  item: state.item,
});
// connect takes in two things
// 1. a function
// 2. an action
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);

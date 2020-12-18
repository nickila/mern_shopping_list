import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemModal from "./components/ItemModal";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
// in order to use redux and store we need to wrap it all in a provider
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;

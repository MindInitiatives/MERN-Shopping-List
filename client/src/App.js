import React, { Component } from 'react'
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { loadUser } from './actions/authActions'

class App extends Component {

componentDidMount() {
  store.dispatch(loadUser());
}

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
        <ItemModal />
        </Container>
        <ShoppingList />
      </div>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInandSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up-component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth,createUserProfileDocument } from './Firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action.js';

import './App.css';


class App extends React.Component {

  unsubscribFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribFromAuth = auth.onAuthStateChanged( async usersAuth => {
      if (usersAuth) {
        const userRef = await createUserProfileDocument(usersAuth);

        userRef.onSnapshot(Snapshot => {
          setCurrentUser({
              id: Snapshot.id,
              ...Snapshot.data()
          });
        });
      }
      
      setCurrentUser(usersAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInandSignUp />) } />
        </Switch>
      </div>
    );
  }  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
}); 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

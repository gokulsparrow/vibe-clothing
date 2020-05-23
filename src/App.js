import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInandSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up-component';
import { Switch,Route } from 'react-router-dom';
import { auth,createUserProfileDocument } from './Firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state= {
      currentUser: null
    };
  }
  componentDidMount(){
    this.unsubscribFromAuth = auth.onAuthStateChanged( async usersAuth => {
      if (usersAuth) {
        const userRef = await createUserProfileDocument(usersAuth);

        userRef.onSnapshot(Snapshot => {
          this.setState({
            currentUser: {
              id: Snapshot.id,
              ...Snapshot.data()
            }
          });
        });
      }
      
      this.setState({currentUser: usersAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUp} />
        </Switch>
      </div>
    );
  }  
}

export default App;

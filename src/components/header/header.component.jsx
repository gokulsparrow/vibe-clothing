import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/vimeo.svg';
import { auth } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import CartIcon from '../Cart-icon/Cart-icon.component';

import './header.style.scss';

const Header = ({ currentUser,hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                <h3>HOME</h3>
            </Link>
            <Link className='option' to='/shop'>
                <h3>SHOP</h3>
            </Link>
            <Link className='option' to='/contact'>
                <h3>CONTACT</h3>
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'> <h3>SIGNIN</h3> </Link>
            }

            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropDown />
        }    
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,hidden
});

export default connect(mapStateToProps)(Header);
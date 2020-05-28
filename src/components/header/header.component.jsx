import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/vimeo.svg';
import { auth } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import './header.style.scss';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
);

const mapStateToProps = state  => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
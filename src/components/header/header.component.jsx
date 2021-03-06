import  React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.components';

import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.style';

const Header = ({ currentUser,hidden }) => (
    <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>  
        </OptionsContainer>
        {
            hidden ? null: <CartDropdown/>
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

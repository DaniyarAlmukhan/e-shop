import { Outlet } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase/firebase'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/userSelector'
import { selectIsCartOpen } from '../../store/cart/cartSelector'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import Cart from '../../components/cart/Cart'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './styles'

export const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <>
            <NavigationContainer>
                <LogoContainer className='logo-container' to="/">
                    <Logo className='logo' />
                </LogoContainer>

                <NavLinksContainer>
                    <NavLink className='nav-link' to="/shop">SHOP</NavLink>
                    {currentUser
                        ? <NavLink as='span' className='nav-link' onClick={signOutUser}>SIGN OUT</NavLink>
                        : <NavLink className='nav-link' to="/auth">SIGN IN</NavLink>
                    }
                    <Cart />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}

            </NavigationContainer>

            <Outlet />
        </>
    )
}



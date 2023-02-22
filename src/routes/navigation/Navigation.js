import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import Cart from '../../components/cart/Cart'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'
import { signOutUser } from '../../utils/firebase/firebase'
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './styles'

export const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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
                    {/* <Link className='nav-link' to="/shop">CONTACT</Link> */}
                    <Cart />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}

            </NavigationContainer>

            <Outlet />
        </>
    )
}



import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import Cart from '../../components/cart/Cart'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import './Navigation.scss'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'
import { signOutUser } from '../../utils/firebase/firebase'


export const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <Logo className='logo' />
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to="/shop">SHOP</Link>
                    {currentUser ? <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> : <Link className='nav-link' to="/auth">SIGN IN</Link>}
                    {/* <Link className='nav-link' to="/shop">CONTACT</Link> */}
                    <Cart />
                </div>
                {isCartOpen && <CartDropdown />}

            </div>

            <Outlet />
        </>
    )
}



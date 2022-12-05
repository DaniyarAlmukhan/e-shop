import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Navigation.scss'
import { UserContext } from '../../context/userContext'
import { useContext } from 'react'
import { signOutUser } from '../../utils/firebase/firebase'

export const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
                </div>
            </div>
            <Outlet />
        </>
    )
}



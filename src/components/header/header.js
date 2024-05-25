import { NavLink } from 'react-router-dom';
import './header.css';
import UserProfileIcon from '../userProfileIcon/userProfileIcon';

function Header(props) {
    return (
        <header>
            <nav>
                <NavLink to='/'>Logo</NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/opportunities'>Opportunities</NavLink>
                {
                    props.loggedIn ? <UserProfileIcon></UserProfileIcon> : <button className='Sign-up-btn'>SignUp</button>
                }
            </nav>
        </header>
    )
}

export default Header
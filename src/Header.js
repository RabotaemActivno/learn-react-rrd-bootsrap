import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {Link} from 'react-router-dom'

export function Header () {
    return (
        <div className='header__wrapper'>
            <ul className='nav'>
                <li className='nav-item'><Link to='/' className='nav-link'>Main</Link></li>
                <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
                <li className='nav-item'><Link to='/users' className='nav-link'>Users</Link></li>
            </ul>
        </div>
    )
}
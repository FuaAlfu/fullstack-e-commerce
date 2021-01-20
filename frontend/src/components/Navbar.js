import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
        <div className="navbar__logo">
            <h2>shopping cart</h2>
        </div>
            {/*links*/} 
            <ul className="navbar__links">
            <li><Link to="/cart">
            <i></i>
            </Link></li>
            </ul>
        </div>
    )
}

export default Navbar

import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar () {
    return (
        <nav>
            <Link to="/" className='no-underline logo'><i class="fa-solid fa-film"></i></Link> 
            <h2><Link to="/about" className='no-underline'>About</Link></h2>      
        </nav>
    );
}

export default NavBar;
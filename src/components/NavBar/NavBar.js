import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar () {
    return (
        <nav>
            <h2><Link to="/about" className='no-underline'>About</Link></h2>      
            <Link to="/" className='no-underline logo'><i class="fa-solid fa-film"></i></Link> 
            <input placeholder='Search'></input>
        </nav>
    );
}

export default NavBar;
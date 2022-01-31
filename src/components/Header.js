import { Link } from 'react-router-dom';
import '../style/header.css';

function Header()
{
    return(
        <div className="header_wrapper">
            <div className="header_logo">
                <img className='profile' src='images.jpg' alt='hero'/>
            </div>

            <div className='header_search'>
                <div className='header_searchContainer'>
                    <input placeholder='Search' type='text' />
                </div>
            </div>
            <div className='header_menuitems'>
                <Link className='Home'     exact to='/home'    >Home</Link>
                <Link className='Movies'   exact to='/movies'  >Movies</Link>
                <Link className='TvShows'  exact to='/tv_shows'>Tv Shows</Link>
                <Link className='Trending' exact to='/trending'>Trending</Link>
            </div>            
        </div>
    );
}

export default Header;
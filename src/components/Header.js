import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../style/header.css';
import { Redirect } from "react-router-dom";

function Header()
{
    const [input, setInput] = useState('');

    const search = (a) =>
    {
        a.preventDefault();
        console.log('inp : ',input);
        window.location.href = `/details/movie/${input}`;
    }

    return(
        <div className="header_wrapper">
            <div className="header_logo">
                <img className='profile' src='images.jpg' alt='hero'/>
            </div>

            <div className='header_search'>
                <div className='header_searchContainer'>
                    <form >
                        <input  className='searchinput' placeholder='Search ...' type='text' value={input} onChange={ e=>setInput(e.target.value)} />
                            <button className='searchsubmit' type='submit' onClick={search} >search</button> 
                    </form>
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
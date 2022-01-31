import axios from 'axios';
import {  useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/box.css';

function Box(props)
{
    const [poster, setPoster] = useState([]);

    axios.get(`https://www.omdbapi.com/?t=${props.data}&apikey=e2edfeab`)
    .then(result => {
        setPoster( result.data.Poster);

    } )
    return(
        <Link exact to = {`/details/movie/${props.data}`}>
            <div className='box'>
                <div className='box_container'>
                    <img className='image_box' src={poster} alt='poster'/>
                </div>
            </div>
        </Link>
    )
}

export default Box
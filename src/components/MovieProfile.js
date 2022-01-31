import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/movieprofile.css';

function MovieProfile(props)
{
    const name = useParams();
    const [data, setData] = useState([]);

    useEffect( ()=>{
        axios.get(`https://www.omdbapi.com/?t=${name.id}&apikey=e2edfeab`)
        .then(result => {
            setData( result.data);
            } )
        })

    return(
        <div className='details'>
            <div className='details_wrap'>
                
                <div className='detail_header'>
                    <div className='movie_name'>{data.Title}</div>
                    <div className='rating'>
                        <div className='IMDb_RATING'> IMDb RATING <div className='r'  style={{color:'white'}} > {data.imdbRating} </div> </div>
                        <div className='YOUR_RATING'> YOUR RATING <div className='r'  style={{color:'white'}} > RATE   </div> </div>
                        <div className='POPULARITY' > POPULARITY  <div className='r'  style={{color:'white'}} > 258    </div> </div>
                    </div>
                </div>

                <div className='title_data'>
                    <div>{data.Type}</div>
                    <div>{data.Year}</div>
                    <div>{data.Rated}</div>
                    <div>{data.Runtime}</div>
                </div>
                
                <div className='sub_block'>
                    <div className='empt'></div>
                    <div className='cast'>Cast & crew</div>
                    <div>User Reviw</div>
                </div>

                <div className='movie_poster'>
                    <div className='movie_wraper'>
                        <img className='poster' src={data.Poster} alt='poster'/>
                    </div>

                    <div className='type'>
                        <div className='type_wrap'>
                            <button>Action</button>
                            <button>Adventure</button>
                            <button>Sci-Fi</button>
                        </div>
                    </div>

                    <div className='plot'>
                        <div>{data.Plot}</div>
                    </div>

                    <div className='director'>
                        <div> Director : {data.Director}</div>
                    </div>

                    <div className='writer'>
                        <div>Writers : {data.Writer}</div>
                    </div>

                    <div className='stars'>
                        <div>Stars : {data.Actors}</div>
                    </div>

                    <div className='stars'>
                        <div>Released : {data.Released}</div>
                    </div>
                    
                    <div className='stars'>
                        <div>Language : {data.Language}</div>
                    </div>

                    <div className='stars'>
                        <div>Country : {data.Country}</div>
                    </div>

                    <div className='stars'>
                        <div>Awards : {data.Awards}</div>
                    </div>

                    <div className='stars'>
                        <div>BoxOffice : {data.BoxOffice}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieProfile
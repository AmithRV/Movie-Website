import '../style/Home.css';
import Box from './Box';
import React from 'react';
import '../style/Trending.css';

function Trending()
{ 
    let movies = ['Iron Man 3','The Avengers', 'Thor', 'Thor: Ragnarok', 'Avengers: Infinity War','Interstellar','Avengers: Endgame','Guardians of the Galaxy','batman','jocker', 'ironman', 'superman', 'titanic', 'avatar', 'it', 'steel', 'friends','The Big Bang Theory','Money Heist','Titans', 'The Witcher', 'daredevil', 'vikings', 'iron fist', 'wandavision', 'hawkeye', 'falcon and the winter soldier', 'game of thrones']

    return(
        <div className='trending'>
            <div className='trending_movies'>
                <h1>Popular movies</h1>
                <div className='trending_movies_container'>
                    <div className='trending_movies_content'>
                        {
                            movies.map( (e)=>(<Box key={e} data={e}/> ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Trending
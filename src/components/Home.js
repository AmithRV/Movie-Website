import '../style/Home.css';
import Box from './Box';
//import { useEffect } from 'react';
import React  from 'react';
//import { useDispatch } from 'react-redux';
//import { GetData } from '../redux/Actions/index.js';


function Home()
{ 
    //const dispatch = useDispatch();

    let movies = ['Iron Man 3','The Avengers', 'Thor', 'Thor: Ragnarok', 'Avengers: Infinity War','Interstellar','Avengers: Endgame','Guardians of the Galaxy','batman','jocker', 'ironman', 'superman', 'titanic', 'avatar', 'it', 'steel'];
    let Tvshow = ['friends','The Big Bang Theory','Money Heist','Titans', 'The Witcher', 'daredevil', 'vikings', 'iron fist', 'wandavision', 'hawkeye', 'falcon and the winter soldier', 'game of thrones']

    

    //console.log(useSelector(e=> e.setdataReducer))
    return(
        <div className='home'>
            <div className='body'>
                <h1>Popular movies</h1>
                <div className='body_container'>
                    <div className='content'>
                        {
                            movies.map( (e)=>(<Box key={e} data={e}/> ))
                        }
                    </div>
                </div>
            </div>

            <div className='body' >
                <h1>Popular Tv Shows</h1>
                <div className='body_container'>
                    <div className='content'>
                        {
                            Tvshow.map( (e)=>(<Box key={e} data={e}/> ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
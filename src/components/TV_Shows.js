import Box from "./Box";
import '../style/movies.css';

function Tv_Shows()
{
    let Tvshow = ['friends','The Big Bang Theory','Money Heist','Titans', 'The Witcher', 'daredevil', 'vikings', 'iron fist', 'wandavision', 'hawkeye', 'falcon and the winter soldier', 'game of thrones', ' Scam 1992: The Harshad Mehta Story', ' Death Note', ' True Detective ', ' Attack on Titan', 'Breaking Bad', ' Chernobyl', 'The Wire', ' Sex Education',  ' The Underground Railroad','Cobra Kai', 'Peacemaker','Yellowstone','The Witcher', 'Attack on Titan' ,'Yellowjackets',
    'Game of Thrones', 'Stranger Things', 'The Walking Dead', '13 Reasons Why', 'The 100', 'Orange Is the New Black' ,'Riverdale', 'Grey\'s Anatomy',
    'The Punisher',    'Spider-Man: Into the Spider-Verse', 'Agents of S.H.I.E.L.D.','Jessica Jones' ,' The Defenders', 'Luke Cage' ,'Legion','Loki', 'Modern family', 'HOw i met your mother', 'detective', 'cosmos', 'moon knight', 'what if', 'What If...?']
    return(
        <div className='movie_body' >
                <h1>Popular Movies</h1>
                <div className='movie_body_container'>
                    <div className='movie_content'>
                        {
                            Tvshow.map( (e)=>(<Box key={e} data={e}/> ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Tv_Shows;
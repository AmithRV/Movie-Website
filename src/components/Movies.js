import '../style/movies.css';
import Box from './Box';

function Movies()
{
    let movies = ['Iron Man 3','The Avengers', 'Thor', 'Thor: Ragnarok', 'Avengers: Infinity War','Interstellar','Avengers: Endgame','Guardians of the Galaxy','batman','jocker', 'ironman', 'superman', 'titanic', 'avatar', 'it', 'steel', 'Star Wars: The Force Awakens', 'Jurassic World', 'The Lion King', 'Furious 7', 'Frozen II', 'Avengers: Age of Ultron', 'Black Panther', 'Harry Potter and the Deathly Hallows Part 2', 'eternals', 'Jurassic World: Fallen Kingdom', 'Frozen', 'Beauty and the Beast', 'Incredibles 2', 'The Fate of the Furious', 'Minions',
    'Captain America: Civil War', 'Aquaman', 'Lord of the Rings: The Return of the King', 'Spider-Man: Far From Home', 'Captain Marvel', 'Transformers: Dark of the Moon',
    'Skyfall', 'Transformers: Age of Extinction', 'The Dark Knight Rises', 'Joker', 'Star Wars: Episode IX - The Rise of Skywalker', 'Toy Story 4', 'Toy Story 3', 'Pirates of the Caribbean: Dead Man\'s Chest','Rogue One: A Star Wars Story', 'Aladdin', 'Pirates of the Caribbean: On Stranger Tides', 'The Dark Knight', 'Despicable Me 3', 'Finding Dory', 'Star Wars: Episode I - The Phantom Menace',  'Alice in Wonderland', 'Zootopia', 'The Hobbit: An Unexpected Journey', 'Harry Potter and the Sorcerer\'s Stone', 'Harry Potter and the Deathly Hallows Part 1', 'Despicable Me 2', 'Despicable Me', 'hobbs&shaw', 'how to train your dragon', 'how to train your dragon homecoming', 'How to Train Your Dragon: The Hidden World', 'Spider-Man: No Way Home', 'venom'];


    return(
        <div className='movie_body' >
                <h1>Popular Movies</h1>
                <div className='movie_body_container'>
                    <div className='movie_content'>
                        {
                            movies.map( (e)=>( <Box key={e} data={e} />))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Movies
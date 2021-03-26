import { MovieCard } from '../components/MovieCard';

interface ContentProps {
  movieList: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
  selectGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
}

export function Content({ movieList, selectGenre }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movieList.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}
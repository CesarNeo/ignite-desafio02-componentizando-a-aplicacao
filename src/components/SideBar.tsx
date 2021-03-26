import { Button } from '../components/Button';


interface SideBarProps {
  genreList: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>;
  onClickButton: (id: number) => void;
  selectedGenre: number;
}

export function SideBar({ genreList, onClickButton, selectedGenre }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genreList.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}
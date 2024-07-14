import { SearchInput } from './searchInput';
import './header.css'

export const Header = (
{
    searchWord,
    updateSearchWord
}:{
    searchWord: string,
    updateSearchWord: (word: string) => void
}) => {
    return (
    <>
    <header className="headerContainer">
      <h1 className="headerTitle">StickyNotes</h1>
      <SearchInput
        searchWord={searchWord}
        updateSearchWord={updateSearchWord} />
    </header>
    </>
    );
};

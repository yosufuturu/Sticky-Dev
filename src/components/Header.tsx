import React from 'react';
import './header.css'

export const Header = (
        {updateSearchWord}:
        {updateSearchWord: (word: string) => void}
) => {
    return (
    <>
    <header className="headerContainer">
      <h1 className="headerTitle">StickyNotes</h1>
      <input type="text" className="searchInput"
      placeholder="search..." 
      onChange={(e)=>{updateSearchWord(e.target.value)}}
      />
    </header>
    </>
    );
};

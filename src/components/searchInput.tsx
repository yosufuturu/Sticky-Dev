import cross from './assets/crossMark.svg'
import './searchInput.css'

export const SearchInput = (
{
    searchWord,
    updateSearchWord
}:{
    searchWord: string,
    updateSearchWord: (word: string) => void}
) => {
    return (
        <div className="searchInputContainer">
            <input type="text" className="searchInput"
            placeholder="search..." value={searchWord}
            onChange={(e)=>{updateSearchWord(e.target.value)}}
            />
            <div>
                <button type="reset" className="rstBtn" 
                onClick={()=>{updateSearchWord("")}}>
                    <img src={cross} className="rstIcon" />
                </button>
            </div>
        </div>
    );
};
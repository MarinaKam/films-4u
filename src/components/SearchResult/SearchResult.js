import React  from 'react';
import List from "../List/List";

const SearchResult = ({searchResults, query}) => {
        return (
            <div>
                <h1>Search result</h1>
                   {searchResults ?
                    <div>
                         <p>There are <b>{searchResults.length}</b>  results for: "{ query }".</p>
                         <List list={ searchResults }/>
                     </div>
                     :
                     <div>
                         <p>¯\_(ツ)_/¯</p>
                         <p>There are no movies, try again.</p>
                     </div>
                 }
            </div>
        );
};

export default SearchResult;
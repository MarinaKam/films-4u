import React  from 'react';
import List from "../List/List";

const SearchResult = ({searchResults, query}) => {
    if(!searchResults) return <div>Loading...</div>;
    return (
        <div>
            <h1>Search result</h1>
               {searchResults.length > 0 ?
                <div>
                     <p>There are <b>{searchResults.length}</b>  results for: "{ query }".</p>
                     <List list={ searchResults }/>
                 </div>
                 :
                 <div style={{textAlign: 'center', fontSize: '26px'}}>
                     <p style={{fontSize: '56px', color: 'red'}}>¯\_(ツ)_/¯</p>
                     <p>There are no movies, try again.</p>
                 </div>
             }
        </div>
    );
};

export default SearchResult;
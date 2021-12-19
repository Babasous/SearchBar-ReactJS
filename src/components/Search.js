import React from 'react';
import "./Search.css";

function Search(){
    return (
        <>
            <div className="searchBar">
                <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher le vin par le nom" />
            </div>
            <div className="search_results">
                <div className="search_result">Données</div>
            </div>
        </>
    );
}

export default Search
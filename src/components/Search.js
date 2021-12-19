import React from 'react';
import { useState, useEffect} from "react";
import "./Search.css";

function Search(){

    const [wines, setWines] = useState([]);
    const [searchWine, setSearchWines] = useState('');

    useEffect(() => {
        fetch('https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines')
          .then((res) => res.json())
          .then((json) => setWines(json));
      }, []);

      const handleSearchWine = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchWines(value);
      };

    return (
        <>
            <div className="searchBar">
                <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher le vin par le nom" onChange={handleSearchWine} />
            </div>
            <div className="search_results">
            {wines
                .filter((wine) => {
                    return wine.name.toLowerCase().includes(searchWine.toLowerCase());
                })
                .map((wine) => {
                    return (
                        <div className="search_result" key={wine.id}>
                            {wine.name}
                        </div>
                    );
                })}                
            </div>
        </>
    );
}

export default Search
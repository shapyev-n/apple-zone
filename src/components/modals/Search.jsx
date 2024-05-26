import React, { useEffect, useState } from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";
import searchImg from "../../images/search.png";
import { footerTxt } from "../../helpers/const";

function searchInFooterNavs(obj, query) {
  let results = [];
  for (let i in obj) {
    if (Array.isArray(obj[i])) {
      for (let k = 0; k < obj[i].length; k++) {
        if (obj[i][k].toLowerCase().includes(query.toLowerCase())) {
          results.push(obj[i][k]);
        }
      }
    }
  }
  return results.slice(0, 6);
}

const Search = ({ handleMouseLeave }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = searchInFooterNavs(footerTxt.footerNavs, "");
    setSearchResults(results);
  }, []);

  return (
    <div id="modalsBarS">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="search">
            <img src={searchImg} alt="" />
            <input
              onChange={(e) => {
                const results = searchInFooterNavs(
                  footerTxt.footerNavs,
                  e.target.value
                );
                setSearchResults(results);
              }}
              type="search"
              name=""
              id=""
              placeholder="Search apple.com"
            />
          </div>
          <div className="mainLinks">
            <div className="nav_s">
              <p>Quick Links</p>
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <Link key={index} to={"/"}>{result}</Link>
                ))
              ) : (
                <p style={{fontSize:"20px"}}>No results</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

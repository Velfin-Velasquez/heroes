import React, { useMemo } from "react";
import queryString from "query-string";

import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCards } from "../heroes/HeroCards";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleImputChange] = useForm({
    searchInput: q,
  });

  const { searchInput } = formValues;

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchInput}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search..."
              className="form-control"
              name="searchInput"
              value={searchInput}
              onChange={handleImputChange}
              autoComplete="false"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Has una busqueda</div>}

          {q !== "" && heroesFilter.length === 0 && (
            <div className="alert alert-danger">
              El heroe con este nombre  <b>{q}</b> no existe
            </div>
          )}

          {heroesFilter.map((hero) => (
            <HeroCards key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

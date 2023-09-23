import axios from 'axios';
import css from './Movies.module.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultList, setResultList] = useState([]);
  const location = useLocation();

  const handleSubmit = async e => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    setSearchParams({ query: query });
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a6f1a167469b842b62ef942bf0dd3d8a`
    );
    setResultList(response.data.results);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.get('query')) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchParams.get(
            'query'
          )}&api_key=a6f1a167469b842b62ef942bf0dd3d8a`
        );
        setResultList(response.data.results);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          className={css.input}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
      {resultList.length !== 0 && (
        <ul>
          {resultList.map(movie => (
            <li key={nanoid()}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;

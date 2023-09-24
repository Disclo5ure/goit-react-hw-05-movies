import css from './Movies.module.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'fetchData/fetchData';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultList, setResultList] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    setQuery(query);
  };

  const fetchData = async query => {
    const response = await fetchMovies(query);
    setResultList(response);
  };

  useEffect(() => {
    if (searchParams.get('query')) {
      setQuery(searchParams.get('query'));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (query) {
      setSearchParams({ query: query });
      fetchData(query);
    } else if (!query) {
      setSearchParams({});
      fetchData(query);
    }
    // eslint-disable-next-line
  }, [query]);

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

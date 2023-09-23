import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=a6f1a167469b842b62ef942bf0dd3d8a'
      );
      console.log(response);
      setTrending(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className={css.header}>Trending today</h2>
      <ul>
        {trending.map(movie => (
          <li key={movie.id} className={css.trendingItem}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

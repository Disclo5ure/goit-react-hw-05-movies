import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import { fetchTrending } from 'fetchData/fetchData';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTrending();
      setTrending(response);
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

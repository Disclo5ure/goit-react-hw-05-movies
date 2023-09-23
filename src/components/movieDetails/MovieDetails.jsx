import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import { nanoid } from 'nanoid';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [], release_date: '' });
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a6f1a167469b842b62ef942bf0dd3d8a`
      );
      console.log(response);
      setMovie(response.data);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Link to={location.state?.from ?? '/'} className={css.goBack}>
        Go back
      </Link>
      <div className={css.mainInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt=""
          className={css.poster}
        />
        <div className={css.mainDetails}>
          <h2>
            {movie.title} ({movie.release_date.split('-')[0]})
          </h2>
          <p>User score: {(movie.vote_average * 10).toFixed()}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>
            {movie.genres.map(genre => (
              <span key={nanoid()} className={css.genre}>
                {genre.name}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

import css from './Cast.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a6f1a167469b842b62ef942bf0dd3d8a`
      );
      setCast(response.data.cast);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {cast.map(actor => (
        <li key={nanoid()} className={css.actor}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
              alt=""
            />
          )}
          <p>{actor.original_name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

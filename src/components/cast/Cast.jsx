import css from './Cast.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'fetchData/fetchData';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cast = await fetchCast(id);
      setCast(cast);
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

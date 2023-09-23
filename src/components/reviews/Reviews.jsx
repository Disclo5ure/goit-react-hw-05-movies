import axios from 'axios';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a6f1a167469b842b62ef942bf0dd3d8a`
      );
      setReviews(response.data.results);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(review => (
          <li key={nanoid()}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
    </ul>
  );
};

export default Reviews;

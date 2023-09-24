import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'fetchData/fetchData';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchReviews(id);
      setReviews(response);
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

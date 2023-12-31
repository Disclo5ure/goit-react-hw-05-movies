import { Routes, Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Movies = lazy(() => import('../pages/movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

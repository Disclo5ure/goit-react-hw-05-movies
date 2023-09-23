import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

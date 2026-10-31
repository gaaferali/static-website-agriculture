import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="container not-found__content">
        <p className="eyebrow">404 error</p>
        <h1>This page could not be found.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <Link to="/" className="button button--primary">
          Return home
        </Link>
      </div>
    </main>
  );
}

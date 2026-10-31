import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="GreenHarvest Agriculture home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img">
          <path d="M16 25V13" />
          <path d="M16 17C10 17 6 13 6 7c6 0 10 4 10 10Z" />
          <path d="M16 13c0-5 4-8 10-8 0 6-4 10-10 10Z" />
        </svg>
      </span>
      <span className="logo__text">
        GreenHarvest
        <small>Agriculture</small>
      </span>
    </Link>
  );
}

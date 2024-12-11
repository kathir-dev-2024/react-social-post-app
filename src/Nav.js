import { Link } from "react-router-dom";

const Nav = ({ search, setsearch }) => {
  return (
    <nav className="Nav">
      <form onSubmit={(e) => e.preventDefault()} className="searchForm">
        <label htmlFor="search">Search Posts</label>
        <input
          type="text"
          placeholder="Search items"
          id="serach"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="post">Post</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <h1>Denicek dvou lidi</h1>
      <Link to="/addPost">Přidat</Link>
    </header>
  );
}

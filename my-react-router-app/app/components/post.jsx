import { Form, Link } from "react-router";

export default function Post({ id, img, date, title, category }) {
  return (
    <article>
      <img src={img} alt={title} />
      <h4> {date} </h4>
      <h2> {title} </h2>
      <h4> {category} </h4>
      <Form action="/delPost" method="post">
        <input type="hidden" name="id" value={id} />
        <button type="submit">Delete</button>
      </Form>
      <Link to={`/post/${id}`}>Zobrazit detaily</Link>
    </article>
  );
}

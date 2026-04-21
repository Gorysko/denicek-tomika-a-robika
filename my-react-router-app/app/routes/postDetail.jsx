import { Form, Link, useLoaderData } from "react-router";
import { sql } from "../api/sql";
import Header from "../components/header";

export async function loader({ params }) {
  const id = params.postDetail;

  let post = await sql(`SELECT * FROM prep_denicek_content WHERE id = ${id}`);

  return { post };
}

export default function postDetail() {
  const { post } = useLoaderData();

  return (
    <section>
      <article>
        <img src={post[0].img} alt={post[0].title} />
        <h2>{post[0].date}</h2>
        <h1>{post[0].title}</h1>
        <h4>{post[0].short}</h4>
        <section>
          <Form action="/delPost" method="post">
            <input type="hidden" name="id" value={post.id} />

            <button type="submit">Delete</button>
          </Form>
        </section>
      </article>
      <Link to={`/`}>Zpět</Link>
    </section>
  );
}

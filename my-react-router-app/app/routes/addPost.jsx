import Header from "../components/header";
import NewPost from "../components/newpost";
import { Link, redirect, useLoaderData } from "react-router";
import { getCategory } from "../api/load.db";
import { insertCon } from "../api/add.db";

export async function loader() {
  let categoryList = "";
  categoryList = await getCategory();

  return categoryList;
}

export default function addPost() {
  let categoryList = useLoaderData();
  return (
    <body>
      <Header />
      <NewPost categoryList={categoryList} />
      <Link to={`/`}>Zpět</Link>
    </body>
  );
}

export async function action({ request }) {
  const newConData = await request.formData();
  const newCon = {
    img: newConData.get("img"),
    date: newConData.get("date"),
    title: newConData.get("title"),
    short: newConData.get("short"),
  };

  console.log(newCon);

  await insertCon(newCon);

  return redirect("/");

  return null;
}

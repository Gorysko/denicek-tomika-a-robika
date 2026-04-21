import { redirect } from "react-router";
import { delPost } from "../api/del.db";
import Header from "../components/header";

export async function action({ request }) {
  const formData = await request.formData();

  const id = formData.get("id");
  await delPost(id);

  return redirect("/");
}
export default function DelPost() {
  return <Header />;
}

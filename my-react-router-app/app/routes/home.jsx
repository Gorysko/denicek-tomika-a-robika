import { useLoaderData } from "react-router";
import Header from "../components/header";
import { getCategory, getContent } from "../api/load.db";
import Categories from "../components/categories";
import Content from "../components/content";

export function meta() {
  return [
    { title: "Deníček dvou lidí" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  let categoryList = "";
  categoryList = await getCategory();

  let contentList = "";
  contentList = await getContent();

  return { categoryList, contentList };
}

export default function Home() {
  let { categoryList, contentList } = useLoaderData();
  return (
    <body>
      <Header />;
      <Categories categoryList={categoryList} />
      <Content contentList={contentList} />
    </body>
  );
}

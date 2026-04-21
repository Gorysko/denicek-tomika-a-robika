import { sql } from "./sql";

export async function getCategory() {
  const response = await sql(`SELECT * FROM prep_denicek_category`);
  console.log(response);
  let categoryList = response;
  return categoryList;
}

export async function getContent() {
  const response =
    await sql(`SELECT prep_denicek_content.id, prep_denicek_content.img, prep_denicek_content.date, prep_denicek_content.title, prep_denicek_category.name FROM prep_denicek_content
    INNER JOIN prep_denicek_category ON prep_denicek_content.short = prep_denicek_category.short   `);
  console.log(response);
  let contentList = response;
  return contentList;
}

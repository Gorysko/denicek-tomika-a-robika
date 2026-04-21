import { sql } from "./sql";

export async function insertCon(newCon) {
  const response = await sql(
    `INSERT INTO prep_denicek_content (img, date, title, short) VALUES ("${newCon.img}", "${newCon.date}", "${newCon.title}" , "${newCon.short}")`,
  );
  console.log(response);
}

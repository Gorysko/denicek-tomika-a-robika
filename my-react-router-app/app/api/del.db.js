import { sql } from "./sql";

export async function delPost(id) {
  const response = await sql(
    `DELETE FROM prep_denicek_content WHERE id = ${id}`,
  );
  return response;
}

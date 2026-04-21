import { Form } from "react-router";

export default function NewPost({ categoryList }) {
  return (
    <Form method="POST">
      <input type="text" name="img" id="img" placeholder="Obrázek" />
      <input type="date" name="date" id="date" placeholder="Datum" />
      <input type="text" name="title" id="title" placeholder="Název" />
      {/* Dynamický otevírací seznam */}
      <select name="short" id="short" defaultValue="">
        <option value="" disabled>
          Vyberte kategorii
        </option>
        {/* Procházíme pole kategorií z databáze */}
        {categoryList.map((cat) => (
          <option key={cat.short} value={cat.short}>
            {cat.name}
          </option>
        ))}
      </select>
      <button type="submit">Přidat</button>
    </Form>
  );
}

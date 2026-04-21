import Category from "./category";

export default function Categories({ categoryList }) {
  return (
    <div>
      {categoryList.map((fill) => (
        <Category name={fill.name} />
      ))}
    </div>
  );
}

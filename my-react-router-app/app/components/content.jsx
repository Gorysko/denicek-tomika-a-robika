import Post from "./post";

export default function Content({ contentList }) {
  return (
    <main>
      {contentList.map((fill) => (
        <Post
          id={fill.id}
          img={fill.img}
          date={fill.date}
          title={fill.title}
          category={fill.name}
        />
      ))}
    </main>
  );
}

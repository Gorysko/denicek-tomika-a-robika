import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("addPost", "routes/addPost.jsx"),
  route("delPost", "routes/delPost.jsx"),
  route("/post/:postDetail", "routes/postDetail.jsx"),
];

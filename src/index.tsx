import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BlogCard from "./BlogCard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BlogCard />
  </React.StrictMode>
);

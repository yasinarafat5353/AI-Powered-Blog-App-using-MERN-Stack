import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/admin/Layout";
import Dashbord from "./pages/admin/Dashbord";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";

export default function App() {
  const isAuthenticated = true; // Replace with actual auth logic
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/admin" element={isAuthenticated ? <Layout/> : <Login/>}>
          <Route index element={<Dashbord/>} />
          <Route path="addBlog" element={<AddBlog/>} />
          <Route path="listBlog" element={<ListBlog/>} />
          <Route path="comments" element={<Comments/>} />
        </Route>
      </Routes>
    </div>
  )
}

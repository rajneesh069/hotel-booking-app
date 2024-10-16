import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

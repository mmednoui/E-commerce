import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import BlogPage from "./components/Blog/BlogPage";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import CategoryGrid from "./components/CategoryGridView/CategoryGrid";
import CategoriyList from "./components/CategoryListView/CategoryList";
import Checkout from "./components/Checkout/Checkout";
import Detail from "./components/Detail/Detail";
import About from "./components/Homepage/About";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Homepage/Navbar";
import Navigation from "./components/Homepage/Navigation";
import Search from "./components/Homepage/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catgrid" element={<CategoryGrid />} />
          <Route path="/catlist" element={<CategoriyList />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
        </Routes>
        <About />
      </Router>
    </div>
  );
}

export default App;

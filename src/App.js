
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Contact from './components/Contact.jsx'
import Blog from './components/Blog.jsx'
import Footer from "./components/Footer";
import "./styles/App.css";



function App() {
  return (

    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/writeablog' element={<Blog/>}/>
    </Routes>
    <Footer/>
    </Router>

  );
}

export default App;

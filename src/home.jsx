/* import logo from './logo.svg';
import './App.css'; */

import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Events from "./pages/events/Events";
import Hero from "./pages/hero/Hero";
import Menu from "./pages/menu/Menu";

function Home() {
  return (
  <>
   <Layout>
   <Hero/>
   <About/>
   <Menu/>
   <Events/>
   <Contact/>
   </Layout>
   </>
  );
}

export default Home;

import ExploreTech from "./components/ExploreTech";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <ExploreTech />
      <Footer />
    </div>
  );
};

export default App;

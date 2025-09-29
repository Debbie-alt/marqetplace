import FeaturedCategories from "./components/Homepage/FeaturesSection";
import Footer from "./components/Homepage/Footer";
import Hero from "./components/Homepage/Hero";
import VerifiedSection from "./components/Homepage/VerifySection";
import ViewProducts from "./components/Homepage/ViewProducts";

export default function Home() {
  return (
    <div >
        <Hero/>
       <ViewProducts/>
       <VerifiedSection/>
       <FeaturedCategories/>
       <Footer/>
          
      
    </div>
  );
}

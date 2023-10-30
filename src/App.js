import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Block from "./container/block";
import Card from "./container/card";
import Contact from "./container/contact";
import Dream from "./container/dream";
import Feature from "./container/feature";
import Info from "./container/info";
import Main from "./container/main";
import Pricing from "./container/pricing";
import Proces from "./container/proces";
import Services from "./container/services";
import Team from "./container/team";
import Testimonials from "./container/testimonials";
import Us from "./container/us";

function App() {
  return (
    <div className="dark:bg-zinc-800">
      <Navbar />
      {/* Navbar End */}
      {/* Home Start */}
      <Main />
      {/* Home Start */}
      {/* Video Modal Start */}
      <Card />
      {/* Video Modal Start */}
      {/* Service Start */}
      <Services />
      {/* Service End */}
      {/* feature Start */}
      <Feature />
      {/* feature End */}
      {/* Web Info Start */}
      <Dream />
      {/* Web Info End */}
      {/* Pricing Start */}
      <Pricing />
      {/* Pricing End */}
      {/* Behind the People Start */}
      <Team />
      {/* Behind the People End */}
      {/* Work Process Start */}
      <Proces />
      {/* Work Process end */}
      {/* testimonials Start */}
      <Testimonials />
      {/* testimonials End */}
      {/* Web Info-2 Start */}
      <Info />
      {/* Web Info-2 end */}
      {/* Blog Start */}
      <Block />
      {/* Blog End */}
      {/* Contact Start */}
      <Contact />
      {/* Contact End */}
      {/* Contact us Start */}
      <Us />
      {/* Contact us Start */}
      {/* Footer Start */}

      <Footer/>
      {/* Footer Start */}
    </div>
  );
}

export default App;

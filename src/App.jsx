import {Navbar, About, Home, Contact, Footer, Services, Shop, Testimonials } from "./components"
import styles from "./style";

const App = () => (
    <div className="w-full bg-secondary overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <Shop />
          <Contact />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
);

export default App

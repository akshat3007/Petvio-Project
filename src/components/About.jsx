
import styles from "../style";
import { pets2 } from "../assets";

const About = () => (
  <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY} mb-60`}>
    <div className={`flex-1 flex ${styles.flexCenter} xl:mt-0 mt-10 relative py-1`}>
    <img src={pets2} alt="pets" className="w-[90%] h-[90%] relative z-[5] rounded-[30px]" />
    </div>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-Rubik font-medium ss:text-[62px] text-[42px] ss:leading-[100px] leading-[75px] text-dark">
        A few lines <br className="sm:block hidden"/>
      <span className="text-secondary"> About us</span> <br className="md:hidden"/>
      what we do and who we are
      😸
    </h1>
  </div>
    <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-[5px] text-dark`}>
    We cover all the dimensions of your pet needs, from ecommerce to pet community, from pet services to veterinary, from NGOs to articles, we are there for your furry friends!
    </p>
  </div>
</section>
  );

export default About
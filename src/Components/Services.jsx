import "./CSS/services.css";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { SiCloudflarepages } from "react-icons/si";
import { RxMagicWand } from "react-icons/rx";
import { CgPerformance } from "react-icons/cg";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div id="services" className="services-container">
      <h1 data-aos="fade-up">Services</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Explore My Offerings
      </p>
      <div className="services-list">
        <ServicesCard
        // In icon={} place the icon or image which you want it culd be as html tag, as react component and so on.
          icon={<FaReact size={55} color="#FD6F00" />}
          // Write here a header of your service
          servicesHeader={"Customized React Website Development"}
          // Write the short description of your service
          servicesDescription={`Craft visually appealing and interactive user interfaces using
            React.js, a powerful JavaScript library for building user
            interfaces.`}
            // fadeSide defines on which side your card will fade when appears on the screen
          fadeSide={"fade-right"}
          // delayTime is how much time to wait(in miliseconds) to start showing fade animation
          delayTime={0}
        />

        <ServicesCard
          icon={<CgPerformance size={55} color="#FD6F00" />}
          servicesHeader={"Performance Optimization"}
          servicesDescription={`Enhance website performance and speed through code optimization,
            leveraging React.js features like code splitting and lazy loading
            for improved efficiency.`}
          fadeSide={"fade-left"}
          delayTime={100}
        />

        <ServicesCard
          icon={<CiMobile1 size={55} color="#FD6F00" />}
          servicesHeader={"Responsive Design for All Devices"}
          servicesDescription={`Create websites that seamlessly adapt to all devices and screen
            sizes, providing an optimal viewing experience for users on
            desktops, tablets, and smartphones.`}
          fadeSide={"fade-right"}
          delayTime={200}
        />

        <ServicesCard
          icon={<RxMagicWand size={55} color="#FD6F00" />}
          servicesHeader={"Captivating UI Design"}
          servicesDescription={`Build dynamic and interactive web applications with fast load times
            and smooth navigation, powered by React.js for a seamless user
            experience.`}
          fadeSide={"fade-left"}
          delayTime={100}
        />

        <ServicesCard
          icon={<SiCloudflarepages size={55} color="#FD6F00" />}
          servicesHeader={"Dynamic Single Page Applications (SPAs)"}
          servicesDescription={`Build dynamic and interactive web applications with fast load times
            and smooth navigation, powered by React.js for a seamless user
            experience.`}
          fadeSide={"fade-right"}
          delayTime={200}
        />

        <ServicesCard
          icon={<FaGitAlt size={55} color="#FD6F00" />}
          servicesHeader={"Version Control and Collaboration"}
          servicesDescription={`Implement version control using Git and platforms like GitHub to
            manage code repositories and facilitate seamless collaboration with
            team members.`}
          fadeSide={"fade-left"}
          delayTime={300}
        />
      </div>
    </div>
  );
};

export default Services;

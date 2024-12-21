import { GrLanguage } from "react-icons/gr";
import "./CSS/portfolio.css";
import { GiTicTacToe } from "react-icons/gi";
import { SlCalculator } from "react-icons/sl";
import { MdModeOfTravel } from "react-icons/md";
import { LuEarth } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import logo from "../assets/logo.png";
import ProjectsCard from "./ProjectsCard";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <h1 data-aos="fade-up">Portfolio</h1>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ color: "#959595", textAlign: "center", marginBlock: "20px" }}
      >
        Here you will see my big projects or projects with different logics
        <br />
        others you can see on my GitHub Profile
      </p>

      <div className="portfolio-list">
        <ProjectsCard
        // In icon place you can place react component or html tag.
          icon={<img style={{ width: "70px" }} src={logo} alt="logo" />}
          // title will change the header of the project card
          title={"Web Canvas"}
          // In here you can write the status of your project such as: In progress, paused, completed and so on.
          status={"In Progress"}
          // A short description of your project.
          description={`My Own Company Web Canvas is an emerging startup offering a unique
          online platform, offering fully ready made websites.`}
          // Write the url of your project.
          URL={"https://webcanvasgeo.netlify.app/"}
          fadeSide={"fade-right"}
          fadeDelay={100}
        />

        <ProjectsCard
          icon={<CiShop size={50} color="white" />}
          title={"MelinaMShop"}
          status={"Completed"}
          description={`A website for selling restaurant products and more, made on MERN
            Stack
            Launched in 01.05.2024`}
          URL={"https://melinamshop.netlify.app/"}
          fadeSide={"fade-up"}
          fadeDelay={200}
        />

        <ProjectsCard
          icon={<MdModeOfTravel size={50} color="white" />}
          title={"TravelPulse"}
          status={"Paused"}
          description={`Here you can share and view a stories about travel beautiful places
            and alot more, made on MERN Stack`}
          URL={"https://travelpulse.netlify.app/"}
          fadeSide={"fade-left"}
          fadeDelay={300}
        />

        <ProjectsCard
          icon={<LuEarth size={50} color="white" />}
          title={"Planets Fact Site"}
          status={"Completed"}
          description={`Here You will see a facts about planets designed with comfortable
            UI/UX`}
          URL={"https://planetsfactfromgio.netlify.app/"}
          fadeSide={"fade-right"}
          fadeDelay={400}
        />

        <ProjectsCard
          icon={<GrLanguage size={50} color="white" />}
          title={"GeorgiaProCode"}
          status={"Paused"}
          description={`A Website with free programming courses for childrens from 10 years
            and other ages at georgian`}
          URL={"https://georgianprocode.netlify.app/"}
          fadeSide={"fade-up"}
          fadeDelay={500}
        />

        <ProjectsCard
          icon={<GiTicTacToe size={50} color="white" />}
          title={"Tic Tac Toe"}
          status={"Completed"}
          description={`Tic Tac Toe Game, you can play it with your friends, enjoy the game.`}
          URL={"https://tictactoefromgio.netlify.app/"}
          fadeSide={"fade-left"}
          fadeDelay={550}
        />

        <ProjectsCard
          icon={<SlCalculator size={50} color="white" />}
          title={"Calculator"}
          status={"Completed"}
          description={`A mini version of calculator, which can perform basic math operations.`}
          URL={"https://calculatorfromgio.netlify.app/"}
          fadeSide={"fade-up"}
          fadeDelay={550}
        />
      </div>
    </div>
  );
};

export default Portfolio;

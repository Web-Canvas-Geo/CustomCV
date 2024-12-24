import {
  FaCss3,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import "./CSS/aboutme.css";
import { TbBrandJavascript } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import SkillsCard from "./SkillsCard";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="aboutme-container">
      <div className="about-text-container">
        <div>
          <h1 data-aos="fade-up">About Me</h1>
          {/* Inside of this p write the information about you, your skills, experience and so on. */}
          <p
            style={{ textAlign: "justify" }}
            data-aos="fade-up"
            data-aos-delay="250"
            className="aboutme-text"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            cum, deserunt nemo voluptate esse eaque iusto qui voluptates quas
            aliquam amet ducimus sit quos quia. Iste eius laudantium aliquid
            suscipit. Inventore perspiciatis molestiae, dolorem rerum nam
            perferendis alias, similique quos ipsum debitis dolores culpa. Velit
            laborum quam sed doloribus, delectus, tempore dolor libero unde
            corporis iusto inventore, nemo beatae explicabo! Laudantium veniam
            eius repudiandae quae repellendus fuga, asperiores, atque fugit
            libero enim et, dicta magni dolor veritatis non suscipit ipsam?
            Provident, delectus. Asperiores odit voluptas debitis laborum. Quam,
            dolorem quaerat! Dicta tenetur distinctio repellat quod cupiditate
            blanditiis debitis dolores itaque porro officia beatae, nesciunt
            facilis voluptas ducimus velit molestiae voluptatem vel quasi?
          </p>
        </div>

        <div>
          <h1 data-aos="fade-up">Why Me</h1>
          {/* You can either delete this part or rewrite it, write the reasons why customer should choose you */}
          <p
            style={{ textAlign: "justify" }}
            data-aos="fade-up"
            data-aos-delay="250"
            className="aboutme-text"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            maiores non vel totam nisi commodi quia explicabo voluptatum, sunt
            aspernatur alias fugiat hic illum soluta quibusdam autem recusandae,
            iste dignissimos. Nisi error doloribus officia placeat beatae
            accusantium dolores labore iste id maiores repellat cum impedit,
            harum recusandae nemo quasi excepturi qui rem vitae eveniet.
            Eligendi sequi autem similique esse omnis! Voluptatem libero velit
            temporibus expedita nisi est, enim laborum aliquid autem tempora?
            Repudiandae officia, delectus, molestias hic perferendis ab nam nisi
            accusantium eos itaque incidunt magni qui eveniet natus iure. Labore
            ipsum amet dicta hic et culpa temporibus veritatis dolor ut. Tempore
            ducimus aperiam, modi earum perspiciatis optio nemo! Aliquam vero
            dolor provident cum obcaecati perferendis ex ipsum consequuntur quo.
          </p>
        </div>
      </div>

      {/* In href write the path to your pdf resume which is located in public folder
      / means the out path which contains also a folder named public*/}
      <a
        href="/HereYourResume.pdf"
        download="/HereYourResume.pdf"
        data-aos="fade-up"
        data-aos-delay="300"
        className="download-cv"
      >
        Download CV
      </a>

      {/* If you want to add skills just copy and paste SkillsCard but dont forget to change values */}
      <div className="skills-container">
        {/* titleValue is what will be shown as in the
        skills orange circle as on the title when you
        stop mouse on this circle*/}
        <SkillsCard
          titleValue={"HTML"}
          fadeSide={"fade-up"}
          fadeDelay={0}
          // As in previous icon places here you can also put any react component or html tag code
          icon={<FaHtml5 size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"CSS"}
          fadeSide={"fade-up"}
          fadeDelay={100}
          icon={<FaCss3 size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"JAVASCRIPT"}
          fadeSide={"fade-up"}
          fadeDelay={150}
          icon={<TbBrandJavascript size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"REACT"}
          fadeSide={"fade-up"}
          fadeDelay={200}
          icon={<FaReact size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"NODEJS"}
          fadeSide={"fade-up"}
          fadeDelay={250}
          icon={<FaNodeJs size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"PYTHON"}
          fadeSide={"fade-up"}
          fadeDelay={300}
          icon={<FaPython size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"Animate On Scroll"}
          fadeSide={"fade-up"}
          fadeDelay={350}
          icon={<h2>AOS</h2>}
        />

        <SkillsCard
          titleValue={"PHOTOSHOP CS6"}
          fadeSide={"fade-up"}
          fadeDelay={400}
          icon={<SiAdobephotoshop size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"Framer Motion"}
          fadeSide={"fade-up"}
          fadeDelay={450}
          icon={<FiFramer size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"FIGMA"}
          fadeSide={"fade-up"}
          fadeDelay={500}
          icon={<FaFigma size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"CLOUDINARY"}
          fadeSide={"fade-up"}
          fadeDelay={550}
          icon={<p style={{ color: "white" }}>Cloudinary</p>}
        />
      </div>
    </div>
  );
};

export default AboutMe;

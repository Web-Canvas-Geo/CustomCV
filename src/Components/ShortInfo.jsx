import "./CSS/shortinfo.css";
import triangle from "../assets/image.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ShortInfo = () => {
  const [facebookColor, setFacebookColor] = useState("gray");
  const [githubColor, setGithubColor] = useState("gray");
  const [gmailColor, setGmailColor] = useState("gray");
  const [linkedIn, setLinkedIn] = useState("gray");
  const [gmailState, setGmailState] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="shortInfo-container">
      <div className="text-info-container">
        <motion.p
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Hi I am
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Name Surname
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <span>Your Position</span>
        </motion.h1>

        <div className="socialLinks-container">
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            // Write your Facebook link in href
            href="FacebookLink"
            target="_blank"
            transition={{ delay: 0.1 }}
          >
            <FaFacebook
              size={30}
              color={facebookColor}
              transition={{ delay: 0.2 }}
              onMouseEnter={() => setFacebookColor("white")}
              onMouseLeave={() => setFacebookColor("gray")}
            />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            // Write your LinkedIn link in href
            href="LinkedInLink"
            target="_blank"
          >
            <FaLinkedin
              size={30}
              color={linkedIn}
              onMouseEnter={() => setLinkedIn("white")}
              onMouseLeave={() => setLinkedIn("gray")}
            />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            // Write your GitHub link in href
            href="GithubLink"
            target="_blank"
          >
            <BsGithub
              size={30}
              color={githubColor}
              onMouseEnter={() => setGithubColor("white")}
              onMouseLeave={() => setGithubColor("gray")}
            />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            href="#"
            className="gmail-a-container"
          >
            <SiGmail
              size={30}
              color={gmailColor}
              onMouseEnter={() => {
                setGmailColor("white");
                setGmailState(true);
              }}
              onMouseLeave={() => {
                setGmailColor("gray");
                setGmailState(false);
              }}
            />
            {gmailState && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="gmail-container"
              >
                {/* Change "Your Email" to your real Email */}
                Your Email
              </motion.div>
            )}
          </motion.a>
        </div>

        <Link to="contactMe" smooth={true} duration={800} offset={-80}>
          <motion.button
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hires-btn"
          >
            Hire Me
          </motion.button>
        </Link>

        <motion.a
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="cv-btn"
          // Change "HereYourResume.pdf to the name of your resume in "public" folder", also same in download
          href="/HereYourResume.pdf"
          download="/HereYourResume.pdf"
        >
          Download CV
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="experience-projects-container"
        >
          <p>
            {/* Write amount of the your year experience */}
            <span style={{ color: "#FD6F00" }}>0</span> <br /> <br />
            <span style={{ color: "#DFDFDF" }}>Years Experience</span>
          </p>
          <hr />
          <p>
            {/* Write the amount of the projects you have in number for example 7 */}
            <span style={{ color: "#FD6F00" }}>0</span> <br /> <br />
            <span style={{ color: "#DFDFDF" }}>Projects Done</span>
          </p>
        </motion.div>
      </div>
      <div className="image-container">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          src={triangle}
          alt="part of skills triangel image"
        />
      </div>
    </div>
  );
};

export default ShortInfo;

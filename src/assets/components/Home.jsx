import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Skill2 from "./Skill2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle ,faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Projects from "./Projects";


export default function Home() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);

  return (
    <div
      className="h-screen lg:bg-cover mt-[-32px] lg:w-screen"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/49/4b/b8/494bb87ea545115cdf7a51ac7ead9363.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      

        <motion.div
          className="h-full flex items-center text-left ml-10"
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} 
        >
        
          <div className="max-w-lg">
            <h1 className="text-white text-5xl font-bold">Hey! I'm Yaseen</h1>
            <h4 className="text-white mt-4 text-lg mr-7">
              I am a passionate <b>Full stack Software Developer</b> specializing in Java Spring Boot.
              With a strong foundation in backend development, I build scalable and secure applications.
              Always eager to learn new technologies and solve complex problems.
            </h4>
            
            <div className="flex-col space-x-4 mt-3">
      
      <a href="https://www.linkedin.com/in/yaseen-khan-5248482bb" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className=" lg:bg-white rounded-1xl" size="2x" />
      </a>
      <a href="https://github.com/YaseenJava" className="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}  className="lg:bg-white border rounded-2xl" size="2x" />
      </a>
      <a href="mailto:shibukha249@gmail.com" className="lg:h-4  " target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGoogle}  className="lg:bg-white rounded-2xl" size="2x" />

      </a> 
    </div>

          </div>
        </motion.div>
        {path === "skills" ? <Skill2 />:<></>}
        {path === "project" ? <Projects/>:<></>}

    </div>
  );
}


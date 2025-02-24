
import { faJava, faHtml5, faCss3Alt, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";


export default function Skill() {
  return (
    
    <div
    className="h-screen w-screen absolute top-[40px] bg-right lg:bg-cover p-8"
    style={{
      backgroundImage:
        "url('https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/90813/249181/1673843299129_FC10CE40-C3E7-419B-88EB-CC920D5C2404__11770.1686999915.jpg?c=2&imbypass=on')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  >
    
      
      
      <div className=" lg:grid grid-cols-2 md:grid-cols-4 lg:gap-6">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="h-[180px] w-[220px] border-2 border-white rounded-2xl bg-opacity-70 hover:border-gray-700 text-white p-5 flex flex-col items-center justify-center shadow-lg m-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
          {(skill.icon == null) ? (  
          <img src={skill.url} alt="skill" />  
          ) : (  
          <FontAwesomeIcon icon={skill.icon} className={`text-5xl ${skill.color}`} />  
          )}

            <h2 className="text-xl font-semibold mt-2">{skill.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
}

const skillsData = [
  { name: "React JS", icon: faReact, color: "text-blue-400" },
  // { name: "HTML", icon: faHtml5, color: "text-orange-500" },
  // { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
  // { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
  { name: "Java-Spring Boot", icon: faJava, color: "text-red-500" },
  // { name: "spring boot", url:"https://miro.medium.com/v2/resize:fit:1000/1*XtjiQD35ja0DcA9H-JuM-g.png", color: "text-red-500" },
  // { name: "spring boot", url:"https://www.clipartmax.com/png/middle/282-2825344_dockerize-your-spring-boot-application-spring-boot-with-docker.png", color: "text-red-500" }


];

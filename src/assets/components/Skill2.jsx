import { motion } from "framer-motion";

function Skill2() {
  const data = [
    { technoly: "Java Spring Boot", rating: "4.5", url: "https://i.ytimg.com/vi/MGGAjrMwEAE/hqdefault.jpg" },
    { technoly: "ReactJs", rating: "4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&s" },
    { technoly: "MySql", rating: "4.3", url: "https://www.webasha.com/uploads/course/images/65193baacd09d1696152490.sql-mysql_training.jpg" },
    { technoly: "Docker &Git ", rating: "3", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVC0pUcHoF66qutPf96ya5IyttVCl8HcGLpA&s" },

  ];

  return (
    <div className="flex flex-wrap w-[100%]  gap-6 p-6 justify-center items-center bg-black absolute lg:top-[60px] lg:h-[400px] lg:w-[50%]">
      {data.map((skill, key) => (
        <motion.div
          key={key}
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut", delay: key * 0.2 }} 
          className="border-2 h-[160px] w-[180px] p-4 rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="relative w-full h-[60px] flex justify-center bg-black items-center overflow-hidden">
            <img
              src={skill.url}
              alt={skill.technoly}
              className="w-29 h-18"
            />
          </div>
          <h4 className="text-center font-semibold mt-3 text-white">{skill.technoly}</h4>
          <div className="relative w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
            <div
              className="h-full bg-green-600 rounded-full transition-all duration-500"
              style={{ width: `${(skill.rating / 5) * 100}%` }}
            ></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Skill2;

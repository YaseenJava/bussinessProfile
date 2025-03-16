import { motion } from "framer-motion";

function Skill2() {
 // https://eventos.uclm.es/_files/_event/_71181/_header_img/_94323.png
  const data = [
    { technoly: "Java Spring Boot", rating: "4.5", url: "https://e4developer.com/wp-content/uploads/2018/01/spring-boot.png" },
    { technoly: "ReactJs", rating: "4", url: "https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png" },
    { technoly: "MySql", rating: "4.3", url: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2021-09/ECX-1909_Hero_MySQL_600x400%402x-1.png" },
    { technoly: "Docker &Git ", rating: "3", url: "https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png" },

  ];

  return (
    <div className="flex flex-wrap w-[100%]  h-[900px] gap-6 p-6 justify-center items-center absolute top-[0.2px] lg:h-screen lg:w-screen"
    style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/b2/6e/5d/b26e5d4de7f638680a42b0e4cc50dc56.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"bottom"
  }}
  >
      {data.map((skill, key) => (
        <motion.div
          key={key}
          initial={{ y: -1, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut", delay: key * 0.2 }} 
          className=" h-[160px] w-[180px] p-4 rounded-xl shadow-2xl  transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="relative w-full h-[60px] flex justify-center items-center overflow-hidden">
            <img
              src={skill.url}
              alt={skill.technoly}
              className="w-29 h-15 "
            />
          </div>
          <h4 className="text-center font-semibold mt-3 text-white">{skill.technoly}</h4>
          <div className="relative w-full bg-gray-500 rounded-full h-3 mt-2 overflow-hidden">
            <div
              className="h-full bg-gray-100 rounded-full transition-all duration-500"
              style={{ width: `${(skill.rating / 5) * 100}%` }}
            ></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Skill2;

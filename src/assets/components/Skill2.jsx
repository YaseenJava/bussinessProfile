import { motion } from "framer-motion";

function Skill2() {
  const data = [
    { technoly: "Java Spring Boot", rating: "4.5", url: "https://eventos.uclm.es/_files/_event/_71181/_header_img/_94323.png" },
    { technoly: "ReactJs", rating: "4", url: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon.png" },
    { technoly: "MySql", rating: "4.3", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLIsoAHea-BOhRzeFAqp8P9OChYR2Fch6mQ&s" },
    { technoly: "Docker &Git ", rating: "3", url: "https://e7.pngegg.com/pngimages/256/416/png-clipart-docker-github-node-js-mongodb-computer-software-github-blue-marine-mammal-thumbnail.png" },

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
          className=" h-[160px] w-[180px] p-4 rounded-xl shadow-2xl hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="relative w-full h-[60px] flex justify-center items-center overflow-hidden">
            <img
              src={skill.url}
              alt={skill.technoly}
              className="w-29 h-15"
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

import { motion } from "framer-motion";

export default function Projects() {
  const projectDetail = [
    { id: 1, name: "MiniTube", desc: "A clone of Youtube.", tech: "React js, Tailwind, Java Spring boot" },
    { id: 2, name: "ShopSphere", desc: "E-commerce platform for CRUD operation with payment gateway.", tech: "Spring Boot, React, MySQL" },
    { id: 3, name: "CineFlix", desc: "A Movie streaming Web App.", tech: "spring boot ,thymleaf HTML,JavaScript&CSS" },
    { id: 4, name: "CharityLink", desc: "A donation web app for NGOs", tech: "Java Spring boot,HTML,JavaScript&CSS Razorpay" },
  ];

  return (
    <div className="flex flex-wrap w-[100%] bg-cover h-[900px] lg:w-screen lg:h-full gap-6 p-6 justify-center items-center absolute top-[0.2px]"
    
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/736x/d6/b7/dc/d6b7dc0c137d55814414e8615abd6a61.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition:"top"
}}

    
    >
      {projectDetail.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ y: 1, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          className=" rounded-xl shadow-2xl bg-blur-1xl p-6 w-[250px] text-white hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <h3 className="text-lg font-bold text-orange-400">{project.name}</h3>
          <p className="text-sm text-gray-300 mt-2">{project.desc}</p>
          <p className="text-xs text-gray-400 mt-2">Tech Stack: <span className="font-medium text-gray-200">{project.tech}</span></p>
        </motion.div>
      ))}
    </div>
  );
}

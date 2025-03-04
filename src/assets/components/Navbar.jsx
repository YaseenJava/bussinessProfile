 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";

 function Navbar() {
    return (
      <nav className="bg-opacity-50 text-white py-4 z-[999]">
        <motion.div
         initial={{ y: -100, opacity: 0 }} 
         animate={{ y: 0, opacity: 1 }} 
         transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} 
        
        
        >
        <div className="container mx-auto flex justify-center space-x-8 fixed  z-10">
          <a href="/" className="hover:text-gray-400">Home</a>
        <Link to="/skills" className="hover:text-gray-400">Skills</Link>
        <Link to="/project" className="hover:text-gray-400">Projects</Link>
          <a href="/contact" className="hover:text-gray-400">Contacts</a>


        </div>
        </motion.div>
      </nav>
    );
  }
  export default Navbar
import { Home, FolderOpen, Edit,Briefcase,Clipboard } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
  return (

    <nav className="bg-black w-full p-10">
      <div className="h-10 flex bg-zinc-900 justify-evenly items-center max-w-md mx-auto px-4 rounded-full">
        {[
          { icon: Home, title: "Home" },
          { icon: FolderOpen, title: "Projects" },
          { icon: Briefcase, title: "Experience" },
          { icon: Clipboard, title: "Certificates" },
          { icon: Edit, title: "Thoughts" },
        ].map(({ icon: Icon, title }) => (
          <div key={title} className="relative" onClick={() => {
            {title==="Home" ? navigate("/") : navigate(`${title.toLowerCase()}`)}
          }}>
            <motion.button
              title={title}
              className="p-2 text-white hover:text-gray-300 hover:cursor-pointer"
              whileHover="hover"
            >
              <Icon size={24} />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                variants={{
                  hover: { opacity: 4, y: 25 }
                }}
                className="absolute bg-zinc-900 left-1/2 -translate-x-1/2  text-zinc-500 text-sm px-2 py-1 rounded-full whitespace-nowrap"
              >
                {title}
              </motion.span>
            </motion.button>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Hero
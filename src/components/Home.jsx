import React from 'react'
import Projects from './Projects'
import Experience from './Experience'
import Certificates from './Certificates'
import  WorkForm  from './WorkForm'
import { motion } from "framer-motion"
import { useCountAnimation } from '../hooks/useCountAnimation'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div className="text-white flex flex-col items-center  lg:items-start w-auto space-y-10 px-10 lg:px-0">
      {/* Main Title Section */}
      <div className="space-y-4 text-center lg:text-left w-full lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
          SOFTWARE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-500">
          ENGINEER
        </motion.h2>
        <p className="text-gray-400 max-w-xl pt-5 md:pt-10 text-lg md:text-xl">
          Passionate about creating intuitive and engaging user experiences. 
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-2xl mx-auto lg:mx-0 my-10 lg:px-10">
        <div className="space-y-2">
          <h3 className="text-5xl font-bold">+{useCountAnimation(2)}</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            Years of<br />Experience
          
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-5xl font-bold">+{useCountAnimation(15)}</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            Projects<br />Completed
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-5xl font-bold">+{useCountAnimation(3)}</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            Worldwide<br />Clients
          </p>
        </div>
      </div>
      <Projects/>
      <Carousel/>
      <Experience/>
      <Certificates/>
      <WorkForm/>
    </div>
  )
}

export default Home
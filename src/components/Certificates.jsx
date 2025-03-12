import React from 'react'
import { motion } from 'framer-motion'

const Certificates = () => {
    const certificates = [
        {
            "title" : "SIH 2024",
            "link" : "https://drive.google.com/file/d/1_f3tgd1A3ndC9uvDWSy5bmzD-kEAL2wW/view"
        },
        {
            "title" : "Internship Certificate",
            "link" : "https://drive.google.com/file/d/1_f3tgd1A3ndC9uvDWSy5bmzD-kEAL2wW/view"
        },
        {
            "title" : "Spring Boot Certificate",
            "link" : "https://drive.google.com/file/d/1HWpDySxMAa_1GTMu1T427Gj19UIm4D-x/view"
        },
        {
            "title" : "Resume",
            "link" : "https://drive.google.com/file/d/1BD4xW3-x9LIQzBW1_iEXVOFLMfXW1SwY/view?usp=drive_link"
        }
    ]
  return (
    <div className='lg:px-10 text-center lg:text-left h-96'>
        <motion.h1
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5}}
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-500">
                CERTIFICATES
        </motion.h1>
        {
            certificates.map((certificate,index) => (
                <motion.div 
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{ duration: 0.5, delay: index * 0.2 }}

                key={index} 
                className="mt-5 mx-4">
                <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-bold text-xl md:text-2xl lg:text-4xl hover:text-gray-300 hover:cursor-pointer"
                >
                    {certificate.title}
                </a>
                </motion.div>
            ))
        }
    </div>
  )
}

export default Certificates
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const ExperienceCard = ({ experience }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=" mb-10 lg:px-10 w-full"
  >
    <Card className="bg-black text-white border-none hover:bg-zinc-900 transition-all duration-300 md:p-4 roounded-lg w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold">{experience.title}</h3>
          <p className="text-secondary text-base font-semibold">{experience.company_name}</p>
          <p className="text-muted-foreground text-sm">{experience.date}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-gray-300 text-sm tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

const Experience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center lg:text-left md:px-10"
      >
        <h1 className="text-white font-black text-4xl md:text-6xl lg:text-8xl -tracking-tight">
          2 YEAR OF
        </h1>
        <h1 className="text-gray-500 font-black text-4xl md:text-6xl lg:text-8xl">
            EXPERIENCE
        </h1>
      </motion.div>

      <div className="mt-20 space-y-8 px-4 lg:px-0">
        {[
          {
            title: "Flutter Developer Intern",
            company_name: "Act T Connect",
            date: "June 2024 – July 2024 ",
            points: [
              "Worked on 4 projects in 2 months from June 2024 to July 2024",
              "Fixed bugs on all the 4 applications ",
              "Implemented Push Notification using Firebase Cloud Messaging and Apple Push Notification. ",
              "Integrated various APIs in all the projects.",
              "Uploaded 5 applications on Google Play Console"
            ],
          },
        ].map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </>
  )
}

export default Experience
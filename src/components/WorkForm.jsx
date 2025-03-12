import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const WorkForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <div className="w-full max-w-[800px] px-4 md:px-8 mb-10 mx-auto">
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">LET'S WORK</h1>
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-500">TOGETHER</p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 flex flex-col gap-2">
            <Label htmlFor="name" className="text-xl">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              className=" border-none bg-zinc-900 text-white"
            />
          </div>

          <div className="space-y-2 flex flex-col gap-2">
            <Label htmlFor="email" className="text-xl">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              className="border-none bg-zinc-900 text-white "
            />
          </div>
        </div>

        <div className="space-y-2 flex flex-col gap-2 ">
          <Label htmlFor="budget" className="text-xl">Budget</Label>
          <Select name="budget">
            <SelectTrigger className="border-none bg-zinc-900 text-white">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-white gap-2">
              <SelectItem value="small" className="text-white hover:bg-gray-900">Less than $5,000</SelectItem>
              <SelectItem value="medium" className="text-white hover:bg-gray-900">$5,000 - $10,000</SelectItem>
              <SelectItem value="large" className="text-white hover:bg-gray-900">$10,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 flex flex-col gap-2">
          <Label htmlFor="message" className="text-xl">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            className="min-h-[150px] border-none bg-zinc-900 text-white"
          />
        </div>

        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 hover:cursor-pointer">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default WorkForm
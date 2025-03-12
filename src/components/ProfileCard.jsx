import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Globe, 
  Twitter, 
  Instagram, 
  Mail 
} from "lucide-react"
import profile from "@/assets/profileImage.jpg"

const ProfileCard = () => {
  return (
    <Card className="w-[90%] md:w-[400px] mx-auto bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl min-h-[600px] border border-orange-500/10 mb-10 lg:sticky lg:top-10 lg:h-screen">
      <CardContent className="pt-6 flex flex-col items-center gap-6">
        {/* Profile Image */}
        <div className="relative group w-full px-4">
          <div className='aspect-square ring-4 ring-orange-500/20 rounded-xl hover:ring-orange-500/40 transition-all duration-300 hover:scale-105'>
            <img src={profile} alt="Profile picture" className='w-full h-full object-cover rounded-xl'/>
          </div>
        </div>

        {/* Name and Description */}
        <div className="text-center space-y-3 px-4">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all duration-500">
            PRINCE KUMAR
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[280px] leading-relaxed hover:text-gray-800 transition-colors">
            A passionate software engineer with a knack for creating intuitive and engaging user experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 md:gap-4 mt-4">
          <Button variant="ghost" size="icon" className="text-black rounded-full hover:bg-orange-500/10 hover:text-orange-500 hover:scale-110 transition-all size-10">
            <Globe className="h-5 w-5 md:h-7 md:w-7" />
          </Button>
          <Button variant="ghost" size="icon" className="text-black rounded-full hover:bg-blue-500/10 hover:text-blue-500 hover:scale-110 transition-all size-10">
            <Twitter className="h-5 w-5 md:h-7 md:w-7" />
          </Button>
          <Button variant="ghost" className="text-black rounded-full hover:bg-pink-500/10 hover:text-pink-500 hover:scale-110 transition-all size-10">
            <Instagram className="h-5 w-5 md:h-7 md:w-7" />
          </Button>
          <Button variant="ghost" size="icon" className="text-black rounded-full hover:bg-red-500/10 hover:text-red-500 hover:scale-110 transition-all size-10">
            <Mail className="h-5 w-5 md:h-7 md:w-7" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
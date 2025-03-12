import  Hero  from "./Hero"
import ProfileCard from "./ProfileCard"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="w-full min-h-screen bg-black">
            <Hero />
            <div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto px-4 md:px-8 gap-8">
                <div className="lg:w-[30%] mx-auto lg:mx-0">
                    <ProfileCard />
                </div>
                <div className="w-full lg:w-[70%] h-full scroll-smooth overflow-hidden">
                    <Outlet />
                </div>
            </div>
            <div className="w-full h-20 flex gap-2 text-lg md:text-xl justify-center items-center text-white">
                Made By <span className="text-blue-500">Price Kumar</span>
            </div>
        </div>
    )
}

export default Layout

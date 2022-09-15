import { useState } from "react";
import logo from "../assets/react.svg"

const Button = ({ children }: { children: string }) => {
    return (
        <div className="rounded active:bg-purple-600 hover:bg-purple-700">
            <button className="p-1 rounded">{ children }</button>
        </div>
    )
}

const Navbar = () => {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <nav className="p-2 flex flex-row justify-between items-center relative border-b-2 border-purple-700 bg-primary" >
            <div>
                <img src={logo} />
            </div>
            <div className="cursor-pointer relative">
                <svg  
                    onClick={() => setShowProfile(prev => !prev)}
                    onMouseEnter={() => setShowProfile(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-12 h-12 stroke-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {showProfile && 
                     <div onMouseLeave={() => setShowProfile(false)} className="p-2 flex flex-col absolute right-6 text-center rounded border border-purple-700 bg-primary">
                        <Button>Settings</Button>
                        <Button>Profile</Button>
                        <Button>Friends</Button>
                    </div>
                }

            </div>
        </nav>
    )
}

export default Navbar;

import React from 'react'

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JAVASCRIPT from "../assets/javascript.png"
import REACT from "../assets/react.png"
import TAILWIND from "../assets/tailwind.png"
import THREE from "../assets/three.png"
import GITHUB from "../assets/github.png"
import JAVA from "../assets/java.png"
import PYTHON from "../assets/python.png"
import GIT from "../assets/git.png"

const Skills = () => {
  return (
    <div id="skills" className='w-full h-screen bg-[#0e141f] text-indigo-50'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='justify-center items-center px-9'>
                <p className='text-5xl font-bold inline border-b-8 border-indigo-500'>Skills</p>
                <p className=' pt-12 pb-6 text-2xl w-full'>
                    These are technologies that I currently work with and have used in the past.
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center pt-5 text-xl font-semibold">
                <div className="hover:scale-110 duration-500">
                    <img src={HTML} alt="HTML logo" className='w-20 mx-auto'/>
                    <p className='my-3'>HTML</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={CSS} alt="CSS logo" className='w-20 mx-auto'/>
                    <p className='my-3'>CSS</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={JAVASCRIPT} alt="JavaScript logo" className='w-20 mx-auto'/>
                    <p className='my-3'>JavaScript</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={JAVA} alt="Java logo" className='w-20 mx-auto'/>
                    <p className='my-3'>Java</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={PYTHON} alt="Python logo" className='w-20 mx-auto'/>
                    <p className='my-3'>Python</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={REACT} alt="React logo" className='w-20 mx-auto'/>
                    <p className='my-3'>React</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={TAILWIND} alt="Tailwind logo" className='w-20 mx-auto'/>
                    <p className='my-3'>Tailwind</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={THREE} alt="Three logo" className='w-20 mx-auto'/>
                    <p className='my-3'>Three.js</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={GIT} alt="Git logo" className='w-20 mx-auto'/>
                    <p className='my-3'>Git</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img src={GITHUB} alt="GitHub logo" className='w-20 mx-auto'/>
                    <p className='my-3'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
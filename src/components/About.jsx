import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0e141f] text-indigo-50'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full'>
                <div className='justify-center items-center pb-12 px-9'>
                    <p className='text-5xl font-bold inline border-b-8 border-indigo-500'>About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full px-9 text-2xl">
                <div className='pb-4'>
                    <p>Hi there! Welcome to my portfolio, please take a look around!</p>
                </div>
                <div>
                    <p>
                        I am passionate about building programs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illo tempore ullam, nam eligendi, ex, doloremque voluptatum dolorum cupiditate repellat quia veniam facilis optio nisi! Aliquam saepe velit libero labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum commodi odit officiis inventore modi, sint dolor est nam enim vitae vero corrupti! Delectus repudiandae harum, magni dolores repellat modi?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
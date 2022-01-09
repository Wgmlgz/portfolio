import React from 'react'

interface ProjProps {
  img: string
  badges: JSX.Element
  title: string
  description: string
  link: string
}

const Proj = (props: ProjProps) => (
  <div className='bg-paper rounded-3xl p-[35px] h-full'>
    <img alt='img' src={props.img} className='rounded-[20px] w-full' />
    <div className='text-textPrimary text-5xl font-bold p-2 text-center'>
      {props.badges}
    </div>
    <p className='text-textPrimary text-5xl font-bold p-2 text-center'>
      {props.title}
    </p>
    <p className='text-textPrimary text-2xl text-justify'>
      {props.description}
    </p>
    <div className='flex items-center justify-center mt-4'>
      <div className='transition ease-in-out rounded-full bg-primary inline-block py-2 px-4  hover:bg-secondary duration-500'>
        <a
          target='_blank'
          href={props.link}
          rel='noreferrer'
          className='text-xl font-bold text-textSecondary'>
          VISIT
        </a>
      </div>
    </div>
  </div>
)

export default Proj

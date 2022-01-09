import React, { FC } from 'react'
import { IProj } from './projects'
import { makeBadges } from './badges'

const images_url = process.env.PUBLIC_URL + '/images/'

interface IButtonProps {
  name: string
  link: string
}
const Button: FC<IButtonProps> = ({ name, link }) => (
  <div className='transition ease-in-out rounded-full bg-primary inline-block py-2 px-4 mx-2 hover:bg-secondary duration-500'>
    <a
      target='_blank'
      href={link}
      rel='noreferrer'
      className='text-xl font-bold text-textSecondary'>
      {name}
    </a>
  </div>
)

interface IProjProps {
  proj: IProj
}
export const Proj: FC<IProjProps> = ({ proj }) => (
  <div className='lg:col-span-6 md:col-span-12'>
    <div className='bg-paper rounded-3xl p-[35px] h-full'>
      <img
        alt='img'
        src={images_url + proj.img}
        className='rounded-[20px] w-full'
      />
      <div className='text-textPrimary text-5xl font-bold p-2 text-center'>
        {makeBadges(proj.badges)}
      </div>
      <p className='text-textPrimary text-5xl font-bold p-2 text-center'>
        {proj.title}
      </p>
      <p className='text-textPrimary text-2xl text-justify'>
        {proj.description}
      </p>
      <div className='flex items-center justify-center mt-4'>
        {proj.githubLink && <Button name='GitHub' link={proj.githubLink} />}
        {proj.webLink && <Button name='Try it' link={proj.webLink} />}
        {proj.gpLink && <Button name='GooglePlay' link={proj.gpLink} />}
        {proj.wikiLink && <Button name='Wikipedia' link={proj.wikiLink} />}
      </div>
    </div>
  </div>
)

import React, { FC, useState } from 'react'
import { Link, Element } from 'react-scroll'

import { makeBadges } from './badges'

import Contacts from './Contacts'
import { Proj } from './Proj'
import Background from './background'
import { projects } from './projects'

export const App: FC = () => {
  const [bntHovered, setBntHovered] = useState(false)
  return (
    <div>
      <Background />
      <Element name='top'>
        <div id='frog' className='grid h-screen'>
          <div className='m-auto p-[50px] border-solid border-[5px] rounded-[16px] border-red'>
            <p className='text-center font-bold text-primary text-8xl'>
              [ Wgmlgz (test) ]
            </p>
            <br />
            <p className='text-center text-secondary text-3xl'>
              {`printf("%s\\n", "hi")`}
            </p>
          </div>
        </div>
      </Element>
      <div className='grid place-items-center'>
        <div className='p-16 grid gap-5 ax-w-5xl grid-cols-12 max-w-[1536px]'>
          <div className='lg:col-span-8 md:col-span-12'>
            <div className='bg-paper rounded-3xl p-[35px] h-full flex items-center justify-center'>
              <div>
                <p className='text-center font-bold text-secondary text-7xl m-4'>
                  [ Who I am? ]
                </p>
                <p className='text-center self-center justify-self-center text-4xl'>
                  I'm a Frontend Developer and primarily working with React,
                  Material-Ui, Web Assembly and C++. I have great knowledge of
                  C++ and programming in general, but now now starting with
                  Frontend development. Truly love programming and frogs🐸.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:col-span-4 md:col-span-12'>
            <div className='flex items-center rounded-3xl p-[35px] bg-paper'>
              <div>
                <p className='text-center font-bold text-secondary text-7xl'>
                  [ Skills ]
                </p>
                <div className='text-center'>
                  {makeBadges([
                    'c++',
                    'wasm',
                    'c',
                    'rust',
                    'react',
                    'mui',
                    'css',
                    'tailwind',
                    'html',
                    'js',
                    'js',
                    'c#',
                    'unity',
                  ])}
                </div>
              </div>
            </div>
            <div className='w-full mt-[20px]'>
              <div className='h-full grid border-red border-solid border-[5px] rounded-[16px] justify-center items-center p-4'>
                <Link
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  duration={1000}>
                  <button className='font-bold text-center text-6xl text-primary hover:text-secondary duration-500'>
                    Best projects
                    <br />
                    <img
                      src={process.env.PUBLIC_URL + '/images/keyboard_arrow_down.svg'}
                      className='h-[70px]'
                      alt='KeyboardArrowDownIcon'
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-span-12 h-[300px]' />
          <div className='lg:col-span-6 md:col-span-12'>
            <Element name='projects'>
              <Proj proj={projects.zhaba} />
            </Element>
          </div>
          <Proj proj={projects.warehouse} />
          <Proj proj={projects.trees} />
          <Proj proj={projects.polarization} />
          <div className='h-[80vh] grid content-center items-center col-span-12 text-secondary font-bold m-auto text-center text-8xl'>
            Other smaller projects, but still cool
          </div>
          <Proj proj={projects.fractals} />
          <Proj proj={projects.planets} />
          <Proj proj={projects.graphs} />
          <Proj proj={projects['wayfarer frog']} />
          <Proj proj={projects.turing} />
          <Proj proj={projects['cute frog']} />
          <div className='col-span-12 h-[80vh] grid items-center justify-center'>
            <Contacts />
          </div>
          <div className='col-span-12 h-[20vh] w-full text-center mb-40'>
            <div
              style={{
                marginLeft: bntHovered ? '400px' : '0px',
                display: 'inline-block',
              }}>
              <div
                className='transition ease-in-out rounded-full bg-primary inline-block py-2 px-4 hover:bg-secondary duration-500'
                onMouseEnter={() => setBntHovered(!bntHovered)}
                onClick={() => setBntHovered(!bntHovered)}>
                <button className='text-xl font-bold text-textSecondary'>
                  {'>>> Go to top <<<'}
                </button>
              </div>
            </div>
            <br />
            <br />
            <div className='inline-block'>
              <Link
                activeClass='active'
                to='top'
                spy={true}
                smooth={true}
                duration={3000}>
                <div className='transition ease-in-out rounded-full bg-primary inline-block py-2 px-4  hover:bg-secondary duration-500'>
                  <button className='text-xl font-bold text-textSecondary'>
                    {'>>> Go to top <<<'}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

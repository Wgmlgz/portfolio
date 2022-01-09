import React, { useState } from 'react'
import Mandelbrot from './images/Mandelbrot.png'
import Graph from './images/Graph.png'
import Frog from './images/Frog.jpg'
import Planets from './images/Planets.png'
import Polarization from './images/Polarization.png'
import TreesGif from './images/Trees.png'
import FizzBuzzGif from './images/FizzBuzz.png'
import TheWayfarerFrog from './images/TheWayfarerFrog.png'
import WarehouseGif from './images/Warehouse.png'
import Turing from './images/Turing.png'
import { Link, Element } from 'react-scroll'

import KeyboardArrowDownIcon from './images/keyboard_arrow_down.svg'
import {
  CS_B,
  CSS_B,
  CPP_B,
  C_B,
  HTML_B,
  JS_B,
  TS_B,
  REACT_B,
  UNITY_B,
  WASM_B,
  MUI_B,
  RUST_B,
  TAILWIND_B,
} from './Badges'

import Contacts from './Contacts'
import Proj from './Proj'
import Background from './background'
const badges = (arr: (() => JSX.Element)[]) => (
  <div>{arr.map(badge => badge())}</div>
)

export default function App() {
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
                  {badges([
                    CPP_B,
                    WASM_B,
                    C_B,
                    RUST_B,
                    REACT_B,
                    MUI_B,
                    CSS_B,
                    TAILWIND_B,
                    HTML_B,
                    JS_B,
                    TS_B,
                    CS_B,
                    UNITY_B,
                  ])}
                </div>
              </div>
            </div>
            <div className='w-full mt-[20px]'>
              <div className='h-full grid border-red border-solid border-[5px] rounded-[16px] justify-center items-center p-4'>
                <div>
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
                        src={KeyboardArrowDownIcon}
                        className='h-[70px]'
                        alt='KeyboardArrowDownIcon'
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12'>
            <div style={{ height: '300px' }}></div>
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Element name='projects'>
              <Proj
                title='Zhaba script programming language 🐸'
                description='Zhaba script (Russian: ˈʐabə, жаба(frog)) - is a multi-paradigm, high-level, statically typed programming language, that compiles to C and focuses at minimaizing your code size. It has partial OOP support, including user-created types, member functions and operators overloading, also there is support for generic types such as Vec<T>.'
                img={FizzBuzzGif}
                link='https://github.com/Wgmlgz/Zhaba-script'
                badges={badges([CPP_B, C_B])}
              />
            </Element>
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Warehouse simulator'
              description='This project is a simulation of the warehouse management. Warehouse sells goods to customers and when there are not enough of them, buys needed packages from factory. Some types of products are also have limited lifetime and when long enough time has passed, they are moved to trash. Simulation is written in C++ and compiled into webassembly, UI uses ReactJs and material-ui components.'
              img={WarehouseGif}
              link='/Warehouse'
              badges={badges([MUI_B, REACT_B, CPP_B, WASM_B])}
            />
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Binary search trees visualization 🌳'
              description="Learn more about self-balancing binary search trees, such as Red-Black, AVL, Splay or Treap by exploring the visualization of inserting/removing elements from them. Each tree has its unique coloring based on it's type, like gradient of priorities of treap or Red-Black tree colors. Trees are implemented in C++ (compiled into webassembly) and UI is a web application."
              img={TreesGif}
              link='https://wgmlgz.github.io/trees/'
              badges={badges([HTML_B, CSS_B, JS_B, CPP_B, WASM_B])}
            />
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Polarization'
              description="In this game, you have to complete 20 levels, each of which is unique and based on an unusual (or usual) idea. Control a robot that, as you progress through the game, will receive various new abilities that will make your adventure more interesting. And so that you don't feel lonely, you can talk to a cat who can tell you something interesting or even give you a coin!"
              img={Polarization}
              link='https://play.google.com/store/apps/details?id=com.Wgmlgz.Polarization'
              badges={badges([CS_B, UNITY_B])}
            />
          </div>
          <div className='h-[80vh] grid content-center items-center col-span-12'>
            <p className='text-secondary font-bold m-auto text-center text-8xl'>
              Other smaller projects, but still cool
            </p>
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Nice fractals'
              description='Explore different beauteafull fractals such as Mandelbrot set, Burning Ship, or fractal tree. This is a web app written in 1 day with vallina Javascript frontend and C++ backend, compiled to webassembly for best performance.'
              img={Mandelbrot}
              link='https://wgmlgz.github.io/fractals/'
              badges={badges([HTML_B, CSS_B, JS_B, CPP_B, WASM_B])}
            />
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Planets simulator 🌍'
              description='View the gravity simulation and play with planets parameters such as mass, velocity and position. Main simulation is written in C (compiled into webassembly) because high-level programming languages are too easy. Frontend is a web app, because why not.'
              img={Planets}
              link='https://wgmlgz.github.io/planets/'
              badges={badges([HTML_B, CSS_B, JS_B, C_B, WASM_B])}
            />
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Graph plotter 📈'
              description='This program can draw some graphs and calculate their intersection area. Calculations are implemented in C++ (compiled into webassembly) and UI is a web application.'
              img={Graph}
              link='https://wgmlgz.github.io/graphs/'
              badges={badges([HTML_B, CSS_B, JS_B, CPP_B, WASM_B])}
            />
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='The wayfarer frog 🐸'
              description='Become a frog and glide forward to your adventure through the beautiful desert. Travel between different cities through the map and complete tasks to earn coins for upgrades.'
              img={TheWayfarerFrog}
              link='https://play.google.com/store/apps/details?id=com.Wgmlgz.TheWayfarerfrog'
              badges={badges([CS_B, UNITY_B])}
            />
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Turing machine'
              description="A turing machine emulator written in C++ with Unity as UI. Edit state table and simulate is's work in automatic or manual mode. This project also contains Turing machine interpreter for the Brainfuck language using 26*25 base table extended with 256 rows and columns."
              img={Turing}
              link='https://github.com/Wgmlgz/Turing-emulator'
              badges={badges([CS_B, UNITY_B, CPP_B])}
            />
          </div>
          <div className='lg:col-span-6 md:col-span-12'>
            <Proj
              title='Cute frog'
              description='I have others small projects, but I think that this frog is much nicer.'
              img={Frog}
              link='https://en.wikipedia.org/wiki/Frog'
              badges={<div></div>}
            />
          </div>
          <div className='col-span-12 h-[80vh] grid items-center justify-center'>
            <Contacts />
          </div>
          <div className='col-span-12'>
            <div className='h-[20vh]'>
              <div className='w-full text-center mb-40'>
                <div
                  style={{
                    marginLeft: bntHovered ? '400px' : '0px',
                    display: 'inline-block',
                  }}>
                  <div
                    className='transition ease-in-out rounded-full bg-primary inline-block py-2 px-4  hover:bg-secondary duration-500'
                    onMouseEnter={() => setBntHovered(!bntHovered)}
                    onClick={() => setBntHovered(!bntHovered)}>
                    <button className='text-xl font-bold text-textSecondary'>
                      {'>>> Go to top <<<'}
                    </button>
                  </div>
                </div>
                <br />
                <br />
                <div
                  style={{
                    display: 'inline-block',
                  }}>
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
      </div>
    </div>
  )
}

import React from 'react'

const badge_style = { borderRadius: '0.375rem', margin: '3px', height: '30px' }

export type Badge =
  | 'c++'
  | 'mui'
  | 'github'
  | 'tailwind'
  | 'c'
  | 'html'
  | 'css'
  | 'js'
  | 'ts'
  | 'rust'
  | 'wasm'
  | 'react'
  | 'c#'
  | 'unity'
  | 'mongo'
  | 'express'
  | 'node'
  | 'py'

export const badges_map = new Map<Badge, JSX.Element>([
  [
    'c++',
    <img
      src='https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white'
      alt='C++'
      key='C++'
      style={badge_style}
    />,
  ],
  [
    'mui',
    <img
      src='https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white'
      alt='Mui'
      key='Mui'
      style={badge_style}
    />,
  ],
  [
    'github',
    <img
      src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
      alt='github'
      key='github'
      style={badge_style}
    />,
  ],
  [
    'tailwind',
    <img
      src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white'
      alt='Tailwind'
      key='Tailwind'
      style={badge_style}
    />,
  ],
  [
    'c',
    <img
      src='https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white'
      alt='C'
      key='C'
      style={badge_style}
    />,
  ],
  [
    'html',
    <img
      src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
      alt='html'
      key='html'
      style={badge_style}
    />,
  ],
  [
    'css',
    <img
      src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
      alt='CSS'
      key='CSS'
      style={badge_style}
    />,
  ],
  [
    'js',
    <img
      src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
      alt='Js'
      key='Js'
      style={badge_style}
    />,
  ],
  [
    'ts',
    <img
      src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
      alt='Ts'
      key='Ts'
      style={badge_style}
    />,
  ],
  [
    'rust',
    <img
      src='https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white'
      alt='Rust'
      key='Rust'
      style={badge_style}
    />,
  ],
  [
    'wasm',
    <img
      src='https://img.shields.io/badge/WebAssembly-654FF0?style=for-the-badge&logo=WebAssembly&logoColor=white'
      alt='wasm'
      key='wasm'
      style={badge_style}
    />,
  ],
  [
    'react',
    <img
      src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
      alt='React.js'
      key='React.js'
      style={badge_style}
    />,
  ],
  [
    'c#',
    <img
      src='https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white'
      alt='C#'
      key='C#'
      style={badge_style}
    />,
  ],
  [
    'unity',
    <img
      src='https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white'
      alt='Unity'
      key='Unity'
      style={badge_style}
    />,
  ],
  [
    'mongo',
    <img
      src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
      alt='Mongo'
      key='Mongo'
      style={badge_style}
    />,
  ],
  [
    'express',
    <img
      src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge'
      alt='Express'
      key='Express'
      style={badge_style}
    />,
  ],
  [
    'node',
    <img
      src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'
      alt='Node'
      key='Node'
      style={badge_style}
    />,
  ],
  [
    'py',
    <img
      src='https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'
      alt='Python'
      key='Python'
      style={badge_style}
    />,
  ],
])

export const makeBadges = (badges: Badge[]) =>
  badges.map(badge => badges_map.get(badge) ?? <></>)

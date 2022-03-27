import { Badge } from './badges'

export interface IProj {
  title: string
  description: string
  img: string
  githubLink?: string
  webLink?: string
  gpLink?: string
  wikiLink?: string
  badges: Badge[]
}

export let projects = {
  zhaba: {
    title: 'Zhaba script programming language 🐸',
    description:
      'Zhaba script (Russian: ˈʐabə, жаба(frog)) - is a multi-paradigm, high-level, statically typed, interpreted or source to source compiled language, which focuses at minimizing programs size and maximizing development speed and comfort. There is also a web playground.',
    img: 'FizzBuzz.png',
    githubLink: 'https://github.com/wgmlgz/Zhaba-script',
    webLink: 'https://wgmlgz.github.io/zhaba',
    badges: ['c++', 'react', 'mui', 'wasm', 'c'],
  } as IProj,
  warehouse: {
    title: 'Warehouse simulator',
    description:
      'This project is a simulation of the warehouse management. Warehouse sells goods to customers and when there are not enough of them, buys needed packages from factory. Some types of products are also have limited lifetime and when long enough time has passed, they are moved to trash. Simulation is written in C++ and compiled into webassembly, UI uses ReactJs and material-ui components.',
    img: 'Warehouse.png',
    githubLink: 'https://github.com/wgmlgz/warehouse',
    webLink: 'https://wgmlgz.github.io/Warehouse/',
    badges: ['c++', 'wasm', 'react', 'mui'],
  } as IProj,
  trees: {
    title: 'Binary search trees visualization 🌳',
    description:
      "Learn more about self-balancing binary search trees, such as Red-Black, AVL, Splay or Treap by exploring the visualization of inserting/removing elements from them. Each tree has its unique coloring based on it's type, like gradient of priorities of treap or Red-Black tree colors. Trees are implemented in C++ (compiled into webassembly) and UI is a web application.",
    img: 'Trees.png',
    githubLink: 'https://github.com/wgmlgz/trees',
    webLink: 'https://wgmlgz.github.io/trees',
    badges: ['html', 'css', 'js', 'c++', 'wasm'],
  } as IProj,
  polarization: {
    title: 'Polarization',
    description:
      "In this game, you have to complete 20 levels, each of which is unique and based on an unusual (or usual) idea. Control a robot that, as you progress through the game, will receive various new abilities that will make your adventure more interesting. And so that you don't feel lonely, you can talk to a cat who can tell you something interesting or even give you a coin!",
    img: 'Polarization.png',
    gpLink:
      'https://play.google.com/store/apps/details?id=com.Wgmlgz.Polarization',
    badges: ['c#', 'unity'],
  } as IProj,
  fractals: {
    title: 'Nice fractals',
    description:
      'Explore different beauteafull fractals such as Mandelbrot set, Burning Ship, or fractal tree. This is a web app written in 1 day with vallina Javascript frontend and C++ backend, compiled to webassembly for best performance.',
    img: 'Mandelbrot.png',
    webLink: 'https://wgmlgz.github.io/fractals/',
    githubLink: 'https://github.com/wgmlgz/fractals/',
    badges: ['html', 'css', 'js', 'c++', 'wasm'],
  } as IProj,
  planets: {
    title: 'Planets simulator 🌍',
    description:
      'View the gravity simulation and play with planets parameters such as mass, velocity and position. Main simulation is written in C (compiled into webassembly) because high-level programming languages are too easy. Frontend is a web app, because why not.',
    img: 'Planets.png',
    webLink: 'https://wgmlgz.github.io/planets/',
    githubLink: 'https://github.com/wgmlgz/planets/',
    badges: ['html', 'css', 'js', 'c', 'wasm'],
  } as IProj,
  graphs: {
    title: 'Graph plotter',
    description:
      'This program can draw some graphs and calculate their intersection area. Calculations are implemented in C++ (compiled into webassembly) and UI is a web application.',
    img: 'Graph.png',
    webLink: 'https://wgmlgz.github.io/graphs/',
    githubLink: 'https://github.com/wgmlgz/graphs/',
    badges: ['html', 'css', 'js', 'c++', 'wasm'],
  } as IProj,
  'wayfarer frog': {
    title: 'The wayfarer frog 🐸',
    description:
      'Become a frog and glide forward to your adventure through the beautiful desert. Travel between different cities through the map and complete tasks to earn coins for upgrades.',
    img: 'TheWayfarerFrog.png',
    gpLink:
      'https://play.google.com/store/apps/details?id=com.Wgmlgz.TheWayfarerfrog',
    badges: ['c#', 'unity'],
  } as IProj,
  turing: {
    title: 'Turing machine',
    description:
      "A turing machine emulator written in C++ with Unity as UI. Edit state table and simulate is's work in automatic or manual mode. This project also contains Turing machine interpreter for the Brainfuck language using 26*25 base table extended with 256 rows and columns.",
    img: 'Turing.png',
    githubLink: 'https://github.com/Wgmlgz/Turing-emulator',
    badges: ['c#', 'unity', 'c++'],
  } as IProj,
  'cute frog': {
    title: 'Cute frog',
    description:
      'I have others small projects, but I think that this frog is much nicer.',
    img: 'Frog.jpg',
    wikiLink: 'https://en.wikipedia.org/wiki/Frog',
    badges: ['c#', 'unity', 'c++'],
  } as IProj,
}

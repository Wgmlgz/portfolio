import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import FrogModel from './models/frog.glb'
import { useEffect } from 'react'
import React from 'react'

const setupBackground = () => {
  /* Util */
  const rng = (min: number, max: number) => Math.random() * (max - min) + min
  const clamp = (x: number, min: number, max: number) =>
    Math.min(Math.max(x, min), max)

  /** Scene setup */
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  /** Light */
  const pointLight = new THREE.PointLight(0xffffff)
  pointLight.position.set(5, 30, 30)
  const ambientLight = new THREE.AmbientLight(0xffffff)
  scene.add(pointLight, ambientLight)

  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('background')?.appendChild(renderer.domElement)

  const materials = [
    new THREE.MeshBasicMaterial({ color: 0xbd93f9 }),
    new THREE.MeshBasicMaterial({ color: 0x50fa7b }),
    new THREE.MeshBasicMaterial({ color: 0xff5555 }),
  ]

  const loader = new GLTFLoader()

  /** Load frogs */
  let frog1: THREE.Group
  let frog2: THREE.Group
  loader.load(
    FrogModel,
    gltf => {
      frog1 = gltf.scene
      frog1.position.y = -3
      frog1.position.x = -2
      scene.add(frog1)
    },
    undefined,
    error => console.error(error)
  )
  loader.load(
    FrogModel,
    gltf => {
      frog2 = gltf.scene
      frog2.position.y = -3
      frog2.position.x = 2
      scene.add(frog2)
    },
    undefined,
    error => console.error(error)
  )

  /** Load cubes */
  const cube_geometry = new THREE.BoxGeometry(1, 1, 1)
  const cubes: Array<
    [
      THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  > = Array(100)
    .fill(null)
    .map(_ => {
      const cube = new THREE.Mesh(
        cube_geometry,
        materials[Math.floor(rng(0, 3))]
      )
      const [offsetx, offsety, offsetz] = [
        rng(-50, 50),
        rng(-50, 50),
        rng(-50, 50),
      ]
      ;[cube.position.x, cube.position.y, cube.position.z] = [
        offsetx,
        offsety,
        offsetz,
      ]
      cube.geometry.translate(rng(-1, 1), rng(-1, 1), rng(-1, 1))
      scene.add(cube)
      return [
        cube,
        offsetx,
        offsety,
        offsetz,
        rng(-0.01, 0.01),
        rng(-0.01, 0.01),
        rng(-0.01, 0.01),
      ]
    })

  /** Mouse data */
  let mouse_x = 0
  let mouse_y = 0
  let mouse_tolerance = 0.0002
  let mouse_last_x = 0
  let mouse_last_y = 0

  /** Document offset */
  let offset = 0

  /** Time shif */
  let shift = 0

  /** Functions */
  const onAnimate = () => {
    cubes.forEach(element => {
      const [cube, , , , scalex, scaley, scalez] = element
      cube.rotation.x += scalex
      cube.rotation.y += scaley
      cube.rotation.z += scalez
    })
    if (frog1 !== undefined) {
      shift += 0.01
      frog1.rotation.y = offset * 0.005 + shift
      frog2.rotation.y = -(offset * 0.005 + shift)
    }
    let centerX = window.innerWidth * 0.5
    let centerY = window.innerHeight * 0.5

    camera.rotation.y = -((mouse_x - centerX) * mouse_tolerance)
    camera.rotation.x = -(
      (mouse_y - centerY) * mouse_tolerance -
      offset * 0.0002
    )
    renderer.render(scene, camera)
    requestAnimationFrame(onAnimate)
  }

  const onMouseMove = (evt: MouseEvent) => {
    mouse_x = evt.clientX
    mouse_y = evt.clientY

    let delta_x = evt.clientX - mouse_last_x
    let delta_y = evt.clientY - mouse_last_y
    mouse_last_x = evt.clientX
    mouse_last_y = evt.clientY

    if (frog1 !== undefined) {
      shift += delta_x / 100
      frog1.rotation.x += delta_y / 100
      frog1.rotation.x = clamp(frog1.rotation.x, -0.8, 0.1)
      frog2.rotation.x += delta_y / 100
      frog2.rotation.x = clamp(frog2.rotation.x, -0.8, 0.1)
    }
  }

  const onScroll = () => {
    cubes.forEach(element => {
      const [cube, , , , scalex, scaley, scalez] = element
      cube.rotation.x += scalex
      cube.rotation.y += scaley
      cube.rotation.z += scalez
    })
    offset = document.body.getBoundingClientRect().top
  }

  const onResize = () => {
    const [width, height] = [window.innerWidth, window.innerHeight]
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  /** Events */
  onAnimate()
  onResize()
  window.addEventListener('mousemove', onMouseMove, false)
  window.addEventListener('resize', onResize)
  document.body.onscroll = onScroll
}

export default function Background() {
  useEffect(() => setupBackground(), [])
  return <div id='background'></div>
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from '../Components/meta'

export default function Home() {
  return (
    <div className="container">
      <Meta title="Dalton's site" />
      <div className="text-sm">
        <p className='mb-3'>I&#39;m a video editor, designer, developer, and writer.</p>
        <p className='mb-3'>I love to read books, especially old ones. Currently studying history, science, programming and writing about what I learn.</p>
        <p className='mb-1'>Work: Video, design, and marketing at <a href="https://fs.blog/" target="blank">Farnam Street.</a></p>
        <p className='mb-1'>Writing: <a className='text-blue-600 underline decoration-dotted underline-offset-4' href="https://atomsofuniverse.substack.com/" target="blank">Atoms of the Universe</a></p>
        <p className='mb-3'>Elsewhere: <a href="https://twitter.com/daltonmabery" target="blank">Twitter</a>, <a>YouTube</a>, <a href="https://github.com/dmabery" target="blank">Github</a></p>
        <ul className='list-disc pl-3'>
          <li>Graduated high school in 2017</li>
          <li>Worked at Bayside Church for 3 years as Social Media Manager and Communications Coordinator</li>
          <li>Graduated from Southeastern University in 2021 with a degree in Digital Media and Design</li>
          <li>Started programming in 2021</li>
        </ul>
      </div>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from '../components/meta'
import { getLatestFromContentful } from '../lib/contentful'
import Link from 'next/link'

export const getStaticProps = async () => {
  return getLatestFromContentful();
}

export default function Home(posts) {

      const slugFunction = (contentType) => {
    
        if (contentType === 'bookNotes') {
            return 'book/';
        } else if (contentType === 'tinyThought') {
            return 'thought/';  
        } else if (contentType === 'snippet') {
            return 'post/';
    }
}
  return (
    <div className="container">
      <Meta title="Dalton's site" />
      <div className="text-sm mb-5 max-w-lg">
        <p className='mb-3'>I&#39;m a video editor, designer, developer, and writer interested in to using technology to increase the diffusion of knowledge. </p>
        <p className='mb-5'>I&rsquo;m currently studying physics and computer science.</p>
        <h3 className='text-sm mb-2 font-bold uppercase'>Where you can find me</h3>
        <p className='mb-1'>Work: Video, design, and marketing at <a href="https://fs.blog/" target="blank">Farnam Street.</a></p>
        <p className='mb-1'>Writing: <Link className='text-blue-600 underline decoration-dotted underline-offset-4' href="/writing" target="blank">Atoms of the Universe</Link></p>
        <p className='mb-3'>Elsewhere: <a href="https://twitter.com/daltonmabery" target="blank">Twitter</a>, <a>YouTube</a>, <a href="https://github.com/dmabery" target="blank">Github</a></p>
      </div>
      <div>
        <h3 className='text-sm mb-2 text- font-bold uppercase'>Latest Posts</h3>
          <ul className="max-w-lg text-blue-600 list-disc ml-3" >
                  {posts.posts.map(post => (
                              <li className='mb-2' key={post.fields.slug}>
                                  <Link href={'/' + slugFunction(post.sys.contentType.sys.id) + post.fields.slug} passHref>
                                  <a className="text-sm col-span-3">{post.fields.title}</a>
                                  </Link>
                              </li>

                  ))}
              </ul>
      </div>
    </div>
  )
}

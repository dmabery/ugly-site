import { getAllPostsFromContentful, getLatestFromContentful } from '../lib/contentful'
import Link from 'next/link'
import Meta from "../components/meta";
import SubscribeSimple from '../components/SubscribeSimple';


export const getStaticProps = async () => {
    return getAllPostsFromContentful();
  }

const Writing = ({ posts }) => {
    
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
    <>
         <Meta title="Dalton's writing" />
         <p className='mb-2 max-w-md'>“I... a universe of atoms, an atom in the universe.” – Richard Feynman</p>
         <p className='mb-2 max-w-md'>The following is a codex of my personal journey to understand the mysteries, curiosities, and fundamental questions about the world through a study of science and applied history. <span className='font-bold'>In other words, using the atoms in the universe to learn about the atoms of the universe.</span></p>
         <p className='mb-2 max-w-md'>If you want to get new posts through email, subscribe below:</p>
         <div className='mb-5'><SubscribeSimple /></div>
            <ul className="max-w-lg list-disc ml-4" >
                {posts.map(post => (
                            <li className='mb-2' key={post.fields.slug}>
                                <Link href={'/' + slugFunction(post.sys.contentType.sys.id) + post.fields.slug} passHref>
                                <a className="text-sm col-span-3">{post.fields.title}</a>
                                </Link>
                            </li>

                ))}
            </ul>
        </>
)}

export default Writing;
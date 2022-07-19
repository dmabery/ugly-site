import { getAllPostsFromContentful, getLatestFromContentful } from '../lib/contentful'
import Link from 'next/link'
import Meta from "../components/meta";


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
            <ul className="max-w-lg text-blue-600 list-disc ml-3" >
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
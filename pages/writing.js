import { getAllPostsFromContentful, getLatestFromContentful } from '../lib/contentful'
import Link from 'next/link'

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
        <div>
            {posts.map(post => (
                         <div className="max-w-lg text-blue-600 mb-2" key={1}>
                         <Link href={'/' + slugFunction(post.sys.contentType.sys.id) + post.fields.slug} passHref>
                               <a><span className="text-sm col-span-3 list-disc text-l hover:decoration-amber-700 hover:text-amber-700 hover:decoration-2">{post.fields.title}</span></a>
                         </Link>
                         </div>

            ))}
   
        </div>
)}

export default Writing;
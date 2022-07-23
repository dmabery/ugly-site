import Link from 'next/link'
import Meta from "../components/meta";

const Now = () => {
return (
    <>
         <Meta title="Now" />
         <div className='max-w-lg text-sm'>
            <p className='mb-5'>These are some things I spend my time working on and thinking about outside of work.</p>
            <h3 className='text-sm mb-1 font-bold uppercase'>Computer Science</h3>
            <p>Computers govern our daily lives, but there are still a lot of things that could be better with them. I started my discovery into computers in 2020, began programming in 2021, and am now studying to understand the future of computing.</p>
        </div>
    </>
)}

export default Now;
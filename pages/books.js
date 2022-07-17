import Link from "next/link";
import { getNotesFromContentful } from "../lib/contentful";

const bookList = [
    {
        title: 'Da Vinci' ,
        link: '/leonardo-da-vinci' ,
        rating: '⭐️⭐️⭐️⭐️' , 
    },
    {
        title: 'Niels Bohr: The Man, His Science, and the World They Changed' ,
        link: '' ,
        rating: '⭐️⭐️' , 
    },
    {
        title: 'The Rise and Fall of the Dinosaurs' ,
        link: '/the-rise-and-fall-of-dinosaurs-by-steven-brusatte' ,
        rating: '⭐️⭐️⭐️' , 
    },
    {
        title: 'On Writing Well' ,
        link: '/on-writing-well-by-william-zinsser' ,
        rating: '⭐️⭐️⭐️⭐️' , 
    },
    {
        title: 'A Short History of Everything',
        link: '/a-short-history-of-nearly-everything-by-bill-bryson',
        rating: '⭐️⭐️⭐️'
    },
    {
        title: '12 Rules for Life',
        link: '/12-rules-for-life',
        rating: '⭐️⭐️⭐️⭐️'
    },
    {
        title: 'What We See When We Read',
        link: '/what-we-see-when-we-read',
        rating: '⭐️⭐️'
    },
    {
        title: 'Think Like a Rocket Scientist',
        link: '/think-like-a-rocket-scientist',
        rating: '⭐️⭐️⭐️'
    },
    {
        title: 'The Tipping Point',
        link: '/the-tipping-point-by-malcolm-gladwell',
        rating: '⭐️⭐️⭐️'
    },
    {
        title: 'The Ride of a Lifetime',
        link: '/the-ride-of-a-lifetime-lessons-from-15-years-as-ceo-of-the-walt-disney',
        rating: '⭐️⭐️⭐️⭐️'
    },
    {
        title: 'The Dip',
        link: '/the-dip-by-seth-godin',
        rating: '⭐️⭐️⭐️'
    }, 
    {
        title: 'Show Your Work',
        link: '/show-your-work-by-austin-kleon',
        rating: '⭐️⭐️⭐️'
    },
    {
        title: 'Range',
        link: '/range-by-david-epstein',
        rating: '⭐️⭐️⭐️⭐️'
    },
]

export const getStaticProps = async () => {
    return getNotesFromContentful()
  }

const Books = (notes) => {
    console.log(notes)
    return (
        <div className=''>
            <p className="mb-5 max-w-md">These are the books I&aposve read (ordered by most recent) along with my arbitrary rating that you can totally disagree with. If it&aposs linked, I&aposve published my notes.</p>
            <p className="mb-5 max-w-md">If you&aposre looking for books to read, skim this list or check out <a gref='https://tommycollison.com/greatbooks' target="blank">The Great Books Project</a>. I&aposve yet to embark on it, but plan to.</p>
            <ul>
                {notes.notes.map((book) => (
                        book.fields.content2 ? (<li className="mb-2"><a href={`book/${book.fields.slug}`}>{book.fields.title}</a> - {book.fields.rating}</li>)
                        : (<li className="mb-2">{book.fields.title} - {book.fields.rating}</li>)
                    ))}
            </ul>
        </div>
    )
}

export default Books;
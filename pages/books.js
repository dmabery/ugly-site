import Link from "next/link";

const bookList = [
    {
        title: 'Da Vinci' ,
        link: '/book/leonardo-da-vinci' ,
        rating: '⭐️⭐️⭐️⭐️' , 
    },
    {
        title: 'Niels Bohr: The Man, His Science, and the World They Changed' ,
        link: '' ,
        rating: '⭐️⭐️' , 
    },
    {
        title: 'The Rise and Fall of the Dinosaurs' ,
        link: '/book/the-rise-and-fall-of-dinosaurs-by-steven-brusatte' ,
        rating: '⭐️⭐️⭐️' , 
    },
    {
        title: 'On Writing Well' ,
        link: '/book/on-writing-well-by-william-zinsser' ,
        rating: '⭐️⭐️⭐️⭐️' , 
    },
]


const Books = () => {
    return (
        <div className=''>
            <p className="mb-5 max-w-md">These are the books I've read (ordered by most recent) along with my arbitrary rating that you can totally disagree with. If it's linked, I've published my notes.</p>
            <p className="mb-5 max-w-md">If you're looking for books to read, skim this list or check out <a gref='https://tommycollison.com/greatbooks' target="blank">The Great Books Project</a>. I've yet to embark on it, but plan to.</p>
            <ul>
                {bookList.map((book) => (
                        book.link ? (<li className="mb-2"><a href={book.link}>{book.title}</a> - {book.rating}</li>)
                        : (<li className="mb-2">{book.title} - {book.rating}</li>)
                    ))}
            </ul>
        </div>
    )
}

export default Books;
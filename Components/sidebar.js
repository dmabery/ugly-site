import Link from "next/link";

const links = [
    {
        title: 'Home',
        slug: '/'
    },
    {
        title: 'Book list',
        slug: '/books'
    },
    {
        title: 'Archive',
        slug: '/writing'
    }
]

const Sidebar = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col text-sm">
    <div className="flex flex-col-reverse md:flex-row flex-1">
      <aside className="w-full md:w-60 p-5">
      <div className="mb-10">
      {links.map(link => (
                <p key={link.title}><Link href = {`${link.slug}`} passHref>
                    <a className="font-medium py-1 text-blue-600 rounded-lg underline underline-offset-4 text-sm decoration-dotted inline-block">{link.title}</a>
                 </Link></p>
            ))}
        </div>
      </aside>
      <main className="flex-1 p-5 md:pl-10 md:pr-10 border-b md:border-b-0">
        {children}
      </main>
      </div>
      </div>
  )
}

export default Sidebar;
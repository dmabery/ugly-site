import Link from "next/link";

const links = [
    {
        title: 'Home',
        slug: '/'
    },
    {
        title: 'Book List',
        slug: '/books'
    },
    {
        title: 'Archive',
        slug: '/writing'
    }
]

const SideBar = ({ children }) => {

  return (
    <div className="min-h-screen flex text-sm sm:p-0 md:p-10">
    <div className="flex flex-col md:flex-row">
        <aside className="p-5 sm:mr-0 md:mr-10">
          <div className="flex flex-row md:flex-col">
          {links.map(link => (
                    <div className="m-1" key={link.title}><Link href = {`${link.slug}`} passHref>
                        <a className="font-medium py-1 text-blue-600 rounded-lg underline underline-offset-4 text-sm decoration-dotted md:mb-2">{link.title}</a>
                    </Link></div>
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

export default SideBar;
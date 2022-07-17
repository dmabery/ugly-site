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

const SideBar = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col text-sm  sm:p-0 md:p-10">
    <div className="flex md:flex-row flex-1">
        <aside className="p-5 sm:mr-0 md:mr-10">
          <div className="mb-10">
          {links.map(link => (
                    <div key={link.title}><Link href = {`${link.slug}`} passHref>
                        <a className="font-medium py-1 text-blue-600 rounded-lg underline underline-offset-4 text-sm decoration-dotted inline-block">{link.title}</a>
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
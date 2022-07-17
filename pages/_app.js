import '../styles/globals.css'
import Sidebar from '../Components/sidebar'
import "prismjs";
import "../styles/prism-theme.css"

function MyApp({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  )
}

export default MyApp

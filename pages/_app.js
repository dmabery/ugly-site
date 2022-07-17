import '../styles/globals.css'
import Sidebar from '../components/sidebar';
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

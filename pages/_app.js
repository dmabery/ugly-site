import '../styles/globals.css'
import SideBar from '../components/SideBar.js'
import "prismjs";
import "../styles/prism-theme.css"

function MyApp({ Component, pageProps }) {
  return (
    <SideBar>
      <Component {...pageProps} />
    </SideBar>
  )
}

export default MyApp

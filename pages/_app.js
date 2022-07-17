import '../styles/globals.css'
import Sidebar from '../Components/sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  )
}

export default MyApp

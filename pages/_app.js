import { ShiftControlProvider } from '../context/shiftControlProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ShiftControlProvider>
<Component {...pageProps} />
  </ShiftControlProvider>
  )
}

export default MyApp

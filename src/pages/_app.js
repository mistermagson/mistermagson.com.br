import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const App = ({ Component, pageProps }) => {
  return (
      <Layout>
          <Nav/>
          <Component {...pageProps} />
          <Footer>footer</Footer>
      </Layout>
  )
}

export default App

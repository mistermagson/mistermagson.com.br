import styles from "../styles/globals.scss";

import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout className={styles.content}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

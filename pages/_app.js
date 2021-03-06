import PropTypes from 'prop-types'
import Meta from '../components/common/Meta'
import Layout from '../components/common/Layout'
import GlobalStyle from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <GlobalStyle />
      <Layout title={pageProps.title}>
        {/* eslint-disable-next-line */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({ title: PropTypes.string }).isRequired,
}

export default MyApp

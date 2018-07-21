import Head from 'next/head'
import Navbar from '../components/Navbar';

const Layout = (props) => (

  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {props.children}
    <style jsx>{`

      body {
        margin: 0;
        padding: 0;
        width: 80%;
      }

      p {
        // color: blue;
      }
      div {
        //background: blue;
      }
      @media (max-width: 600px) {
        div {
          // background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        // background: black;
      }
    `}</style>
  </div>


);

export default Layout
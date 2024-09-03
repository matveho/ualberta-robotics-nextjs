import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>University of Alberta Robotics Association</title>
      </Head>

      <main>
        <Header title="Welcome! We're still working on the design, as you can see." />
        <p className="description">
          Reach out if you can help us build our website!
        </p>
      </main>

      <Footer />
    </div>
  )
}

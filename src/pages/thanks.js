import { Link } from 'gatsby'
import React from 'react'
import Head from '../components/Head'


const Thanks = () => {
  return (
    <>
      <Head
        title="Thanks"
        description='Furkan Setbaşı Portfolio Site Thanks Page'
      />
      <div className="side-page">
        <h1 className="side-page__title">Got your message, thanks!</h1>
        <p className="side-page__message">I will respond you back as soon as possible.</p>
        <Link className="side-page__go-back-btn" to="/">Go back</Link>
      </div>
    </>
  )
}

export default Thanks

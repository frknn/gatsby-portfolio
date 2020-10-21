import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/Head'

const NotFound = () => {
  return (
    <>
      <Head
        title="Not Found"
        description='Furkan Setbaşı Portfolio Site Not Found Page'
      />
      <div className="side-page">
        <h1 className="side-page__title">Page not found!</h1>
        <Link className="side-page__go-back-btn" to="/">Go back</Link>
      </div>
    </>
  )
}

export default NotFound

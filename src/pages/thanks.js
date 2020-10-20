import React from 'react'

const Thanks = () => {
  return (
    <div className="thanks-page">
      <h1 className="thanks-page__title">Got your message, thanks!</h1>
      <p className="thanks-page__message">I will respond you back as soon as possible.</p>
      <a className="thanks-page__go-back-btn" aria-label="go back to home page" href="/">Go back</a>
    </div>
  )
}

export default Thanks

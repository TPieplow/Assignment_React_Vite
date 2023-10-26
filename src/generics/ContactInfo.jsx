import React from 'react'

const ContactInfo = ({ iconClass, title, desciption, secondDescription }) => {
  return (
    <div className="information">
      <div className="icon">
        <i className={ iconClass }></i>
      </div>
      <div className="info-text">
        <h3>{ title }</h3>
        <p>{ desciption }</p>
        <p>{ secondDescription }</p>
      </div>
    </div>
  )
}

export default ContactInfo
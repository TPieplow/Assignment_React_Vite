import React from 'react';


import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../componentsContact/form/form';
import ContactInformation from '../componentsContact/contactInformation/contactInformation';
import Iframe from '../componentsContact/iframe/iframe';


const Contact = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <ContactInformation />
        <Form />
        <Iframe />
      </main>
      <Footer />

    </div>
  )
}

export default Contact
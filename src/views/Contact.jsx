import React from 'react';



import '../App.css';
import '../components/Header/Navigation/Navigation.css'
import Footer from '../components/Footer/Footer';
import Form from '../componentsContact/form/form';
import ContactInformation from '../componentsContact/contactInformation/contactInformation';
import Iframe from '../componentsContact/iframe/iframe';
import HeaderContact from '../componentsContact/HeaderContact/HeaderContact';
import ShowCaseContact from '../componentsContact/ShowCaseContact/ShowCaseContact';




const Contact = () => {
  return (
    <div className="wrapper">

      <HeaderContact />
      <ShowCaseContact />
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
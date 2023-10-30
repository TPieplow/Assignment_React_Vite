import React from 'react';



import '../App.css';
import '#components/Home/Header/Navigation/Navigation.css'
import Footer from '#components/Home/Footer/Footer';
import Form from '#components/Contact/form/form';
import ContactInformation from '#components/Contact/ContactInformation/ContactInformation';
import Iframe from '#components/Contact/Iframe/Iframe';
import HeaderContact from '#components/Contact/HeaderContact/Header';
import ShowCaseContact from '#components/Contact/ShowCaseContact/ShowCaseContact';




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
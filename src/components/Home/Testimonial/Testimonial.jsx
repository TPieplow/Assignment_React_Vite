import React from 'react';

import './Testimonial.css';
import Button from '#button';
import SectionTitle from '#sectiontitle';

import img_cassandraWarren from '#images/cassandra_warren.png';
import img_amandaTulling from '#images/amanda_tulling.png';
import img_jackMcdogglas from '#images/jack_mcdogglas.png';
import Reviews from '../../../generics/Reviews';

const Testimonial = () => {
    const reviews = [
        { description: "'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'", img: img_cassandraWarren, alt: "image of cassandra warren", name: "Cassandra Warren", jobTitle: "Business Manager, Dorfus" },
        { description: "'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'", img: img_amandaTulling, alt: "iamge of amanda tulling", name: "Amanda Tulling", jobTitle: "Senior Developer, Square" },
        { description: "'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'", img: img_jackMcdogglas, alt: "image of jack mcdogglas", name: "Jack McDogglas", jobTitle: "Key Account Manager, Gobona" },
    ];
  return (
    <section className="testimonial">
    <div className="borders">
        <div className="container">
            <SectionTitle title="Testimonial" description="What Our Clients Says" />
            <div className="review-wrapper">

                {
                    reviews.map((review, index) => (
                        <Reviews key={ index } description={ review.description } img={ review.img } alt={ review.alt } name={ review.name } jobTitle={ review.jobTitle } />
                    ))
                }
               
            </div>
            <div className="btn-box">
                <Button type="dark" text="All Reviews" url="/reviews" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Testimonial
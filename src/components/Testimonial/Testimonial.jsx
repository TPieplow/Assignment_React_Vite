import React from 'react';

import './Testimonial.css';

import Button from '#button';
import SectionTitle from '#sectiontitle';

import img_cassandraWarren from '#images/cassandra_warren.png';
import img_amandaTulling from '#images/amanda_tulling.png';
import img_jackMcdogglas from '#images/jack_mcdogglas.png';

const Testimonial = () => {
  return (
    <section className="testimonial">
    <div className="borders">
        <div className="container">
            <SectionTitle title="Testimonial" description="What Our Clients Says"/>
            <div className="review-wrapper">
                <div className="review">
                    <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <img src={ img_cassandraWarren } alt="image of cassandra warren" loading="lazy" />
                        <div className="title">
                            <h2>Cassandra Warren</h2>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <img src={ img_amandaTulling } alt="picture of amanda tulling" loading="lazy" />
                        <div className="title">
                            <h2>Amanda Tulling</h2>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p className="text-2-lh">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <img src={ img_jackMcdogglas } alt="picture of jack mcdogglas" loading="lazy" />
                        <div className="title">
                            <h2>Jack McDogglas</h2>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-box">
                <Button type="dark" text="All Reviews" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Testimonial
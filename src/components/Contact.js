import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default function Contact () {


    return (
        <Element id='contact'>
            <section className='contact-section'>
                <h1>Contact me</h1>
                <p>
                Am I the young web developer<span> (who’s craving for more knowledge and experience)</span> that you are looking for? :)
You can contact me via email or through call.
                </p>


                <section className='contact-info'>
                    <section>
                        <h5>Via Email</h5>
                        <h4>abdollahfrsn@gmail.com</h4>
                    </section>
                    <section>
                        <h5>Through phone call</h5>
                        <h4>+39 351 915 9111</h4>
                    </section>
                </section>
            </section>
        </Element>
    )
}
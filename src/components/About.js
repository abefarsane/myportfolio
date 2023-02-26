import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function About () {


    return (
        <Element id='about'>
            <section>
                <h1>About me!</h1>
                <p>Hello! I’m Abdollah Farsane, I’m 21 years old and I live in Italy!
I was always interested in the programming field and I’ve realized only recently the great things that I can actually make just by having a few skills and a bit of patience! 
I’ve recently graduated from a<span> Full Stack Coding Bootcamp</span> that I attended in Amsterdam, Netherlands at<span> Le Wagon</span>. 
I had the opportunity to practice and perfect my English and, above all, I learned how to work in team and deliver my code and ideas in an efficient way.</p>

            <p>Here are a few technologies I’ve been working with recently:</p>
                <section className='tech-stack'>
                    <ul>
                        <li><FontAwesomeIcon icon={faCircle}/>Javascript ES6+</li>
                        <li><FontAwesomeIcon icon={faCircle}/>React</li>
                        <li><FontAwesomeIcon icon={faCircle}/>Node.js</li>
                        <li><FontAwesomeIcon icon={faCircle}/>Figma</li>
                        <li><FontAwesomeIcon icon={faCircle}/>Wordpress</li>
                        <li><FontAwesomeIcon icon={faCircle}/>MySql</li>
                        <li><FontAwesomeIcon icon={faCircle}/>Java</li>
                    </ul>
                </section>
            </section>
        </Element>
    )
}
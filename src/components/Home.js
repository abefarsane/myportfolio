import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default function Home() {


    return (
        <Element id="home">
            <section>
                <h5>Hello there! I'm</h5>
                <h1>Abdollah Farsane</h1>
                <h3>I build things for the web</h3>
                <p>I’m a junior full stack developer specializing in building and designing beautiful web pages. I’m currently looking for a React.JS front-end developer position<span> (not necessarly that exact framework, I can learn new things very quickly!)</span></p>
                <a href="CV.pdf" download>
                  <button className='cv-btn'>Resume</button>
                </a>
            </section> 
        </Element>
    )
}
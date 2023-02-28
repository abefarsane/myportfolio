import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMouse } from '@fortawesome/free-solid-svg-icons';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ModalCustom from './ModalCustom'


//IMAGES


export default function Projects () {

    const navigate = useNavigate()

    const projects = [
        {
            id: 1,
            title: "MoroccoMyTrip",
            description: "MoroccoMyTrip is a platform that aims to allow its customers to access a wide choice of travel packages specially curated and organized to guarantee a quality service for its customers.",
            link: "https://kaleidoscopic-puffpuff-01bb54.netlify.app/",
            github: "https://github.com/abefarsane/moroccomytrip-stack.git",
            stack: [
                "React", "Node", "MySql", "Bootstrap"
            ],
            
        },
        {
            id: 2,
            title: "Coffee Table",
            description: "It takes a lot of time & effort to research and reach out to people who might have specific knowledge that you’re interested in. CoffeeTable is there to solve that problem!",
            link: "",
            github: "https://github.com/dmitriyesayan/coffee_table",
            stack: [
                "RUBY", "MYSQL", "PHP", "BOOTSTRAP"
            ],
        }
    ]



    return (
        <Element id='projects'>
            
            <section>
                <h1>Projects</h1>
        
                <section className='projects-section'>
                    {
                        projects.map(x => {
                            return (
                                <section>
                                    <h2>{x.title}</h2>
                                    <section className='info'>
                                        <p>{x.description}</p>
                                        <section className='imgs'>
                                            <ModalCustom id={x.id} />
                                        </section>
                                    </section>

                                    <section className='links'>
                                        <a href={x.github}><FontAwesomeIcon icon={faGithub} />Code</a>
                                        <a href={x.link}><FontAwesomeIcon icon={faMouse} />{x.link == "" ? ("WEBSITE OFFLINE"): "WEBSITE"}</a>
                                    </section>    

                                    <section className='tech-list'>
                                    {
                                        x.stack.map(t => {
                                            return (
                                                <section className='stack'>
                                                    {t}
                                                </section>
                                            )
                                        })
                                    }
                                    </section>
                                </section>
                            )
                        })
                    }
                </section>
                
            </section>
        </Element>
    )
}
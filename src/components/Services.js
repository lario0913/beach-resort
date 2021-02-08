import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Collaborated with three other developers to build a static website using HTML5, Bootstrap, CSS3, SASS, Node.js, Git and GitHub."
            },
            {
                icon: <FaHiking />,
                title: "free cocktails",
                info: "Collaborated with three other developers to build a static website using HTML5, Bootstrap, CSS3, SASS, Node.js, Git and GitHub."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Collaborated with three other developers to build a static website using HTML5, Bootstrap, CSS3, SASS, Node.js, Git and GitHub."
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Collaborated with three other developers to build a static website using HTML5, Bootstrap, CSS3, SASS, Node.js, Git and GitHub."
            }
        ]
    }
    
    render() {
        return (
            <section className="services">
                <Title title='Services' />
                <div className="services-center">
                    {
                        this.state.services.map((item, index)=> {
                            return <article key={index} className="service">
                                        <span>{item.icon}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                    </article>
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Services

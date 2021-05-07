import {useEffect, useState} from 'react';
import Section from './Section';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const About = () => {
    return <div className='about'>
        <section>
            <h1>Hey, I'm <span>Thomas.</span></h1>
            <p>A web developer/Software Engineer from Utah. I specialize in backend programming and have a love of learning.</p>
        </section>
        <div className='triangle' />
    </div>
}

export default About;
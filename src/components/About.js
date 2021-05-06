import {useEffect, useState} from 'react';
import Section from './Section';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const About = () => {

    const [projects, setProjects] = useState();

    useEffect(() => {
        axios.get('/api/shortProjects').then(res => {
            setProjects(res.data)
            console.log(res.data);
        }).catch(err => console.log(err));
    }, [])

    const history = useHistory();
    
        

    return <div className='about'>
            {/* <p>
                Since I was a little kid I always loved learning and finding challenging problems to solve. Coding gives me the opportunity to put my problem solving to the test daily; sometimes finding tried and true solutions, other times finding something unique.
            </p>
            <div className="sections">
                {about.map((el, i) => <Section work={el.work} title={el.title} date={el.date} desc={el.desc}/>)}
            </div> */}
            
            <div className="projectsList">
                <h1>Projects</h1>
                {projects?.map((p, i) => <section className="projects" key={i}>
                    <h1 onClick={_ => {
                    history.push(`/project/${p.name.toLowerCase().replace(' ', '')}`);
                }}>{p.name}</h1>
                    <figure onClick={_ => {
                    history.push(`/project/${p.name.toLowerCase().replace(' ', '')}`);
                }}>
                        <img src={p.pic} alt={p.name} />
                        <figcaption>{p.desc}</figcaption>
                    </figure>
                    <section className='project-buttons'>
                        {p.link !== '' && <button onClick={_ => {window.open(p.link)}}>Visit site</button>}
                        <button onClick={_ => {history.push(`/project/${p.name.toLowerCase().replace(' ', '')}`);}}>Learn more</button>
                    </section>
                </section>)}
            </div>
        </div>
}

export default About;
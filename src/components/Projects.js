import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Projects = () => {
    const history = useHistory();
    const [projects, setProjects] = useState();

    useEffect(() => {
        axios.get('/api/shortProjects').then(({data}) => {
            setProjects(data);
        }).catch(err => console.log(err));
    }, []);

    return <div className='projectsList'>
        {projects?.map((p, i) => {
            return <section key={i} className='projects'>
                {/* onClick={_ => history.push(`/project/${p.name.toLowerCase().replace(/\s/g, '')}`)} */}
                <div className='project-triangle' >
                    {/* {i + 1} */}
                </div>
                <div className='img'>
                    <img src={p.pic} alt={p.name} />
                </div>
                <section className='about-project'>
                    <h2>{p.name}</h2>
                    <p>{p.desc}</p>
                </section>
                {p.link !== '' && <button onClick={_ => window.open(p.link)}>VISIT SITE</button>}
            </section>
        })}
    </div>

}

export default Projects;
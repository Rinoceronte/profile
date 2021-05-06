import {useEffect, useState} from 'react';
import axios from 'axios';

const Project = (props) => {
    const [project, setProject] = useState();

    useEffect(() => {
        console.log(props.match.params)
        axios.get(`/api/project/${props.match.params.name}`).then(res => {
            setProject(res.data);
            // console.log(res);
        }).catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get(`/api/project/${props.match.params.name}`).then(res => {
            setProject(res.data);
            // console.log(res);
        }).catch(err => console.log(err));
    }, [props.match.params.name])

    return <div className='project'>
        <h1>{project?.name}</h1> {project?.link && <button onClick={_ => {window.open(project.link)}}>Visit site</button>}
        <p>{project?.tech}</p>
        {project?.pictures.map((p, i) => <img src={p.src} alt={p.alt} />)}
        <p>{project?.desc}</p>
    </div>
}

export default Project;
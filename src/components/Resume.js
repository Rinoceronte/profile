import axios from 'axios';
const Resume = () => {

    const skills = ['HTML5', 'CSS3', 'Javascript', 'ExtJS', 'PHP', 'MySQL', 'Sql Server', 'React', 'MongoDB', 'Bootstrap', 'Redux', 'NodeJS', 'Git', 'Java', 'C#', '.NET', 'Wordpress', 'JQuery'];

    // const link = 'https://docs.google.com/document/d/1vYP1IF_-SpZk8xfh5YOfa9unloYA18pzmXqyGKhEX_Y/edit?usp=sharing';

    // const about = [
    //     {work: 'DevMountain', title: 'Student Developer', location: 'Salt Lake City, UT',desc: ['React, PostgreSql, NodeJS, Javascript, CSS, SCSS, HTML, Github', 'Improved success rate of fellow students by educating on topics they were struggling with', 'Nutrition calculator - Generate meal plans from foods you like based off of your macros', 'Capoeira Mastery - Discover more about an amazing martial art, take your own notes while learning and growing', 'Brainify - Challenge your brain with daily games to improve your mental health'], date: 'Jan 2021 - Apr 2021'}, 
    //     {work: "Arthur Murray", title: "Dance Instructor", location: 'Salt Lake City, UT', desc: ['Salsa, Chacha, Waltz, Tango, Foxtrot, Bachata, Swing, Rumba, Country', 'Improved confidence and ability of every student I had contact with by putting them at ease, showing them they can learn, and instructing in skills.', 'Communicated goals and results on an individual basis', 'Quickly identified technical difficulties for each individual student and came up with ways to correct on the spot'], date: "Mar 2019 - Feb 2021"}, 
    //     {work: "Best Buy", title: "Agent", location: 'St. George, UT', desc: ['PC, Mac, Software, Troubleshooting', 'Assisted customers with different electronics, educating on correct use', 'Quickly troubleshot new devices to determine best path of action to resolving issue'], date: "Sep 2018 - Mar 2019"}, 
    //     {work: "Balance of Nature", title: "Programmer", location: 'St. George, UT', desc: ['ExtJS, PHP, MySQL, Wordpress, Javascript, HTML, CSS, RESTful API, JQuery', 'Improved site reliability of customer facing products by finding improperly functioning code and fixing it', 'Created multiple extra features on internal applications to assist with manager access, making sure regular employees could not override common practices', 'Improved HR capabilities through better employee identification'], date: "Jul 2018 - Sep 2018"},
    //     {work: "CenturyLink", title: "Technical Support", desc: ['PrismTV, Phone, Internet', 'Improved customer satisfaction by always going above and beyond to resolve problems', 'Troubleshot technical problems over phone with non-technical users', 'Identified connectivity issues and quickly found the best way to resolve', 'Trained new agents as well as educated customers on ways to improve device performance'], date: "Aug 2015 - Mar 2017"}];

    const about = [
        {
            work: 'Devmountain', location: 'Lehi, UT', date:'January 2021 - April 2021', role: 'Web Developer / Software Engineer (student)', projects: [{name: 'Capoeira Mastery', links: ['https://github.com/Rinoceronte/capoeira-mastery', 'https://capoeiramastery.com/'], tech: ['React', 'Redux', 'NodeJS', 'Express', 'PostgreSQL', 'CSS'], about: ['Developed a web application to display demonstration videos for improving capoeira skills with React, Javascript etc', 'Utilized Regex for form validation', 'Integrated user authentication with Bcrypt for a secure user experience', 'Used Amazon S3 to store and display profile image for a more personal user interface']}, {name: 'Brainify', links: ['https://github.com/braini-fy/brainify', 'https://brainifygames.com/'], tech: ['React', 'Context', 'NodeJS', 'Express', 'PostgreSQL', 'SCSS', 'Semantic UI'], about: ['Developed web application to allow free access to multiple educational mini games to improve user brain health', 'Used Git to develop project with a remote team as the Lead Backend Developer', 'Used Material-UI to better display features creating a simple front end for the user', 'Worked within React Context for data storage']}]
        },
        {
                work: 'Arthur Murray', location: 'Salt Lake City, UT', date: 'March 2019 - February 2021', role: 'Dance Instructor', projects: [{about: ['Instructed daily on social dancing for individuals, couples, and groups', 'Collaborated with students individually to set goals to achieve results', 'Improved confidence and ability of students by demonstrating and introducing new skills over time', 'Identified technical difficulties for each individual and quickly identified methods for improvement']}]
        },
        {
            work: 'Best Buy', location: 'St. George, UT', date: 'September 2018 - March 2019', role: 'Tech Agent', projects: [{about: ['Assisted customers with different electronics, educating on correct use', 'Quickly identified problems and implemented solutions', 'Researched common hardware and software issues and learned methods to solve problems']}]
        },
        {
            work: 'Balance of Nature', location: 'St. George, UT', date: 'July 2018 - September 2018', role: 'Software Developer', projects: [{about: ['Improved site reliability of customer facing website by identifying non-working code and implementing solutions', 'Developed multiple features for internal web applications from manager required access to better employee use', 'Improved HR capabilities with better employee identification']}]
        },
        {
            work: 'CenturyLink', location: 'Salt Lake City, UT', date: 'August 2015 - March 2017', role: 'Technical Support', projects: [{about: ['Improved customer satisfaction by ensuring the problem was solved the first time they spoke to me', 'Performed troubleshooting for technical problems over the phone with non-technical users', 'Assisted new-agents-in-training to learn best ways to assist customers']}]
        }
    ]

    const education = [{school: 'Devmountain', graduate: 'Graduated April 2021', degree: 'Web Development Program'}, {school: 'Helios', graduate: 'Graduated May 2017', degree: 'Web Development Program'}, {school: 'Stevens Henager College', graduate: 'Graduated August 2016', degree: 'B.S. Computer Science'}];

    const viewHandler = async () => {
        axios(`/api/resume`, {
          method: "GET",
          responseType: "blob"
        })
          .then(response => {
            const file = new Blob([response.data], {
              type: "application/pdf"
            });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
          })
          .catch(error => {
            console.log(error);
          });
      };

    return <div className='resume'>
        <section className='resume-header'><h1>.Resume()</h1><button onClick={_ => viewHandler()} className='download'>PDF Version</button></section>
        
        <section className='skills'>
            {skills.map((s, i) => <section className='skill'><h4 key={i}>{s}</h4><span>{i >= skills.length-1 ? ' ' : ' | '}</span> </section>)}
        </section>
        <h1>.Education</h1>
        <section className='education'>
            {education.map((e, i) => <section key={i} className='school'>
                <div className='project-triangle' />
                <section className='school-about'>
                    <section className='education-header'>
                        <h1>{e.school}</h1>
                        <h1>{e.graduate}</h1>
                    </section>
                    <li className='bullet'>{e.degree}</li>
                </section>
                <div className='project-triangle flip' /></section>)}
        </section>
        <div className='divider' />
        <h1>.Work History</h1>
        {about.map((w, i) => <section key={i} className='resume-sections'>
            {console.log(w)}
        <div className='project-triangle' />
            {/* <div className='resume-section'>
            <section className='resume-section-header'>
                <span className='work-loc'><h2>{w.work}, {w.title}</h2> <h2>{w.location}</h2></span>
                <h2>{w.date}</h2> 
            </section>
            <section className='resume-section-description'>
                {w.desc.map((bullet, i) => <li key={i} className='bullet'>{bullet}</li>)}
            </section>
            </div> */}

            <div className='resume-section'>
                <section className='resume-section-header'>
                    <span className='work-loc'><h2>{w.work}, {w.location}</h2> <h2>{w.date}</h2></span>
                    <h2>{w.role}</h2> 
                </section>
                <section className='resume-section-description'>
                    {w.projects?.map((project, i) => <div className='resume-projects' key={i}>
                        {project.name && <section className='resume-project-header'><h2>{project.name} -&nbsp;</h2><button onClick={_ => window.open(project.links[0])}>Github</button>&nbsp;<button onClick={_ => window.open(project.links[1])}>Demo</button></section>}
                        <section className='resume-project-about'>
                            {project.tech && <ul className='resume-project-tech'>{project.tech.map((t, i) => <li key={i}>{t}{i !== project.tech.length-1 && <span>&nbsp;|&nbsp;</span>}</li>)}</ul>}
                            <ul className='resume-project-bullets'>
                                {project.about.map((b, i) => <li key={i} className='about-bullet bullet'>{b}</li>)}
                            </ul>
                        </section>
                    </div>)}
                </section>
            </div>

        <div className='project-triangle flip' />
        </section>)}
    </div>
}

export default Resume;
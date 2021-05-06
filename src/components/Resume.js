const Resume = () => {

    const skills = ['HTML5', 'CSS3', 'Javascript', 'ExtJS', 'PHP', 'MySQL', 'Sql Server', 'React', 'MongoDB', 'Bootstrap', 'Redux', 'NodeJS', 'Git', 'Java', 'C#', '.NET', 'Wordpress', 'JQuery'];

    const about = [
        {work: 'DevMountain', title: 'Student Developer', location: 'Salt Lake City, UT',desc: ['React, PostgreSql, NodeJS, Javascript, CSS, SCSS, HTML, Github', 'Improved success rate of fellow students by educating on topics they were struggling with', 'Nutrition calculator - Generate meal plans from foods you like based off of your macros', 'Capoeira Mastery - Discover more about an amazing martial art, take your own notes while learning and growing', 'Brainify - Challenge your brain with daily games to improve your mental health'], date: 'Jan 2021 - Apr 2021'}, 
        {work: "Arthur Murray", title: "Dance Instructor", location: 'Salt Lake City, UT', desc: ['Salsa, Chacha, Waltz, Tango, Foxtrot, Bachata, Swing, Rumba, Country', 'Improved confidence and ability of every student I had contact with by putting them at ease, showing them they can learn, and instructing in skills.', 'Communicated goals and results on an individual basis', 'Quickly identified technical difficulties for each individual student and came up with ways to correct on the spot'], date: "Mar 2019 - Feb 2021"}, 
        {work: "Best Buy", title: "Agent", location: 'St. George, UT', desc: ['PC, Mac, Software, Troubleshooting', 'Assisted customers with different electronics, educating on correct use', 'Quickly troubleshot new devices to determine best path of action to resolving issue'], date: "Sep 2018 - Mar 2019"}, 
        {work: "Balance of Nature", title: "Programmer", location: 'St. George, UT', desc: ['ExtJS, PHP, MySQL, Wordpress, Javascript, HTML, CSS, RESTful API, JQuery', 'Improved site reliability of customer facing products by finding improperly functioning code and fixing it', 'Created multiple extra features on internal applications to assist with manager access, making sure regular employees could not override common practices', 'Improved HR capabilities through better employee identification'], date: "Jul 2018 - Sep 2018"},
        {work: 'SerHun Enterprises', title: 'Full Stack Developer', location: 'St. George, UT', desc: ['HTML, CSS, Javascript, JQuery, PHP, MySQL', 'Improved overall income by 30% with better data tracking', 'Developed better internal web application for production and waste tracking'], date: 'Jan 2017 - May 2018'}, 
        {work: "CenturyLink", title: "Technical Support", desc: ['PrismTV, Phone, Internet', 'Improved customer satisfaction by always going above and beyond to resolve problems', 'Troubleshot technical problems over phone with non-technical users', 'Identified connectivity issues and quickly found the best way to resolve', 'Trained new agents as well as educated customers on ways to improve device performance'], date: "Aug 2015 - Mar 2017"}];

    return <div className='resume'>
        <section className='skills'>
            {skills.map((s, i) => <section className='skill'><h4 key={i}>{s}</h4><span>{i >= skills.length-1 ? ' ' : ' | '}</span> </section>)}
        </section>
        {about.map((w, i) => <section key={i} className='resume-section'>
            <section className='resume-section-header'>
                <span className='work-loc'><h2>{w.work}, {w.title}</h2> <h2>{w.location}</h2></span>
                <h2>{w.date}</h2> 
            </section>
            <section className='resume-section-description'>
                {w.desc.map((bullet, i) => <li key={i} className='bullet'>{bullet}</li>)}
            </section>
        </section>)}
    </div>
}

export default Resume;
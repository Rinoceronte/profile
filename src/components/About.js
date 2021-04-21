import Section from './Section';

const About = () => {

    const about = [{work: "Arthur Murray", title: "Dance Instructor", desc: "Instruct in dance education, all the way from knowing nothing to becoming good social dancers who are confident of their skills. Logging every lesson and using an extensive syllabus to teach and show progress. Selling add on events and other miscellaneous tasks around the studio.", date: "Mar 2019 - Feb 2021"}, {work: "Best Buy", title: "Agent", desc: "Assisting customers with technology issues from bad hardware to resetting passwords. Verified use and condition of returned electronics.", date: "Sep 2018 - Mar 2019"}, {work: "Balance of Nature", title: "Programmer", desc: "Maintaing multiple projects. Working with CTO and team leads in other divisions in order to improve systems for critical business needs", date: "Jul 2018 - Sep 2018"}, {work: "CenturyLink", title: "Technical Support", desc: "Answering phone calls, identifying network issues as well as PrismTV(CenturyLink TV) related issues and landline telephone problems. Walking customers through troubleshooting steps over the phone to help identify the problem as well as educating the customer as needed. Resolving issues to the satisfaction of the customer and as satisfied as I could be that the issue would not happen again. Dispatching technicians as needed. Help train new agents with their first few weeks on the phones.", date: "Aug 2015 - Mar 2017"}];

    return <div>
            <p>
                Since I was a little kid I always loved learning and finding challenging problems to solve. Coding gives me the opportunity to put my problem solving to the test daily; sometimes finding tried and true solutions, other times finding something unique.
            </p>
            <div className="sections">
                {about.map((el, i) => <Section work={el.work} title={el.title} date={el.date} desc={el.desc}/>)}
            </div>
        </div>
}

export default About;
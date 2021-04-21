const Section = (props) => {
    return <section className="section">
            <section className="job">
                <h2>{props.work} - {props.title}</h2>
                <h2>{props.date}</h2>
            </section>
            <section className="desc">
                {props.desc}
            </section>
        </section>
}

export default Section;
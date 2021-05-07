import {useState} from 'react';

const Contact = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
    }

    return <div className='contact'>
        <div className='contact-me'>
            <h1>.ContactMe()</h1>
            <section className='social'></section>
            <form onSubmit={e => submitForm(e)}>
                <label>Email</label><input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
                <label>Name</label><input type="text" onChange={e => setName(e.target.value)} value={name} />
                <label>Message</label><textarea className='message' type="textfield" onChange={e => setMessage(e.target.value)} value={message} />
                <button type="submit">Submit</button>
            </form>
        </div>

        <div className='triangle' />
    </div>
}

export default Contact;
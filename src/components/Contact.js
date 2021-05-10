import {useState} from 'react';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';

const Contact = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(name, email, message)
        axios.post('/api/email', {name, email, message})
            .then(res => {
                setSuccess(true);
            })
            .catch(err => console.log(err));
    }

    return <div className='contact'>
        <div className='contact-me'>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={success} onClose={() => {
                setSuccess(false);
                setEmail('');
                setName('');
                setMessage('');
            }} message='Successfully sent email' autoHideDuration={1000} />
            <h1>.ContactMe()</h1>
            <section className='social'></section>
            <form onSubmit={e => submitForm(e)}>
                <label>Email</label><input type="text" onChange={e => setEmail(e.target.value)} value={email} name='email'/>
                <label>Name</label><input type="text" onChange={e => setName(e.target.value)} value={name} name='name'/>
                <label>Message</label><textarea className='message' type="textfield" onChange={e => setMessage(e.target.value)} value={message} name='message' />
                <button type="submit">Submit</button>
            </form>
        </div>

        <div className='triangle' />
    </div>
}

export default Contact;
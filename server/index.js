require('dotenv').config();
const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(express.json());
// app.use(express.urlencoded());
app.use(express.static(__dirname + '/../build'));

const {API_KEY} = process.env;
sgMail.setApiKey(API_KEY);

const projects = [
    {name: 'nutritioncalculator', pictures: [{src: 'https://i.ibb.co/VB1Cc8g/5days.png', alt: '5 day meal plan'}, {src: 'https://i.ibb.co/Smm3rxS/editfood.png', alt: 'Edit foods'}], desc: 'It becomes difficult to decide what you want to eat that\'s also healthy and within your diet. This nutrition calculator reverses the roles normally assigned by such apps like myFitnessPal. Simple decide which foods you prefer and for what meals you like them and it will determine based off of your calorie and macro nutrient goals meals so you can have variety in your diet while still being healthy.', tech: 'React, HTML5, CSS3, Redux, Material-UI, Axios, C#, Postgresql', link: ''},
    {name: 'capoeiramastery', pictures: [{src: 'https://i.ibb.co/Qk27Bgs/form-validation.png', alt: 'form validation'}, {src: 'https://i.ibb.co/znmtVKp/home.png', alt: 'home page'}], desc: 'One of the best martial arts out there. Maybe not in terms of deadliness, but in enjoyment, unique movements, and community. Learn different moves to improve your game. Take your own personal notes to help as you\'re learning the moves.', tech: 'React, HTML5, CSS3, S3 Bucket, Axios, NodeJS, Express, Massive, Postgresql, Git', link: 'https://capoeiramastery.com/'},
    {name: 'brainify', pictures: [{src: 'https://i.ibb.co/jv23nMV/speedmatch-played.png', alt: 'Speed match'}, {src: 'https://i.ibb.co/R3n6LB8/mathdrop-played.png', alt: 'Math Drop'}, {src: 'https://i.ibb.co/Lgb1HmQ/brainshift-played.png', alt: 'Brainshift'}], desc: 'Help train your brain in a few minutes each day. We spend a lot of time looking after our physical health (e.g. gym, nutrition), but our mental health is just as important.', tech: 'React, HTML5, CSS3, SCSS, Material-UI, Context, Axios, NodeJS, Express, Massive, Postgresql, Git', link: 'https://brainifygames.com/'}
];

const shortprojects = [
    {name: 'Nutrition Calculator', desc: 'Get meals created for you based off of foods you like for your nutrition goals', link: '', pic: 'https://i.ibb.co/VB1Cc8g/5days.png'},
    {name: 'Capoeira Mastery', desc: 'Learn new moves for one of the best martial arts there is.', link: 'https://capoeiramastery.com', pic: 'https://i.ibb.co/znmtVKp/home.png'},
    {name: 'Brainify', desc: 'Improve your brain health with short minigames.', link: 'https://brainifygames.com', pic: 'https://i.ibb.co/jv23nMV/speedmatch-played.png'}
];

app.get('/api/project/:name', function(req, res) {
    const name = req.params.name;
    const project = projects[projects.findIndex(p => p.name.toLowerCase() === name)];
    return res.status(200).send(project);
})

app.get('/api/projects', function(req, res) {
    return res.status(200).send(projects);
})

app.get('/api/shortProjects', (req, res) => {
    return res.status(200).send(shortprojects);
})

app.post('/api/email', function(req, res) {
    const {name, email, message} = req.body;
    const msg = {
        to: 'thomas.crockett24@gmail.com',
        from: 'thomas.crockett24@gmail.com',
        subject: `Contact for work from ${name}`,
        text: message + ' \n contact email: ' + email
    }

    sgMail.send(msg).then(() => {
        return res.sendStatus(200);
    }).catch(err => {
        return res.status(500).send(err) 
    });
    
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(3005, () => console.log('running on 3005'));

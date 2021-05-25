import {useEffect, useState} from 'react';
import Section from './Section';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { init } from 'ityped';
import ITyped from 'react-ityped';

import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// const StyledBadge = withStyles((theme) => ({
//     badge: {
//       backgroundColor: '#44b700',
//       color: '#44b700',
//       boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//       '&::after': {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         borderRadius: '50%',
//         animation: '$ripple 1.2s infinite ease-in-out',
//         border: '1px solid currentColor',
//         content: '""',
//       },
//     },
//     '@keyframes ripple': {
//       '0%': {
//         transform: 'scale(.8)',
//         opacity: 1,
//       },
//       '100%': {
//         transform: 'scale(2.4)',
//         opacity: 0,
//       },
//     },
//   }))(Badge);
  
//   const SmallAvatar = withStyles((theme) => ({
//     root: {
//       width: 22,
//       height: 22,
//       border: `2px solid ${theme.palette.background.paper}`,
//     },
//   }))(Avatar);
  
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));
  
//   export default function BadgeAvatars() {
//     const classes = useStyles();
  
//     return (
//       <div className={classes.root}>
//         <StyledBadge
//           overlap="circle"
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'right',
//           }}
//           variant="dot"
//         >
//           <Avatar alt="Remy Sharp" src="https://i.ibb.co/KWFbnd3/self2.jpg" />
//         </StyledBadge>
//         <Badge
//           overlap="circle"
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'right',
//           }}
//           badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
//         >
//           <Avatar alt="Thomas Crockett" src="/static/images/avatar/2.jpg" />
//         </Badge>
//       </div>
//     );

const About = () => {

    // const el = document.querySelector('#typing');
    // init(el, { showCurstor: false, strings: ['Test', 'Tests1']})
    const strings = ['A Web Developer/Software Engineer from Utah. I specialize in backend programming and have a love of learning growth and development.'];

    return <div className='about'>
        <section>
            <h1>Hey, I'm <span>Thomas.</span></h1>
            {/* <p id="typing">A web developer/Software Engineer from Utah. I specialize in backend programming and have a love of learning, growth, and development.</p> */}
            <ITyped className='container typed-cursor' showCursor={false} strings={strings} typeSpeed={50} backSpeed={5} startDelay={100} backDelay={250} loop={false}/>
        </section>
        
        <div className='triangle' />
    </div>
}

export default About;
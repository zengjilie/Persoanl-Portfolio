//get viewport height
//fill gradient color to the entire body
const {innerHeight:height} = window;
const backgroundcolor = 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)';

document.body.style.minHeight = `${height * 5}px`;//!!back quote es6
document.body.style.backgroundImage = backgroundcolor;

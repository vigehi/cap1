// import _ from 'lodash';
import './style.css';;

const content = document.querySelector('.main-container')

function component() {
  // const element = document.createElement('div');

  // // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('icon');

  const elem = document.getElementById('logo');
  elem.classList.add('logo');
  elem.appendChild(myIcon);



  // return element;
}

document.body.appendChild(component());

export default content;
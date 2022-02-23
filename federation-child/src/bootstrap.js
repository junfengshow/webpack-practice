// import favicon from './assets/favicon.png'
// import font1 from './assets/ahr.woff'
import './base.css'
import React from 'react'
import ReactDOM from 'react-dom'
// ;(function () {
//   const node = document.createElement('div')
//   const oImage = new Image()
//   oImage.src = favicon
//   node.appendChild(oImage)
//   document.body.appendChild(node)
//   // console.log(font1)
// })();
import User from './User';
import Person from './Person';

const node = document.getElementById('app')
ReactDOM.render(<div><User /><Person /></div>, node)

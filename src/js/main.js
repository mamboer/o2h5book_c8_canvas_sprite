require('../index.html')
require('../css/package.scss')
require('./lib/easeljs.min.js')
var drawHXR = require('./animation.js')

var assets = [
  { src: '//m.360buyimg.com/babel/jfs/t15856/292/1862972521/438826/504615d4/5a672c40N7e688648.png', id: 'hxr0' },
  { src: '//m.360buyimg.com/babel/jfs/t19054/65/261996559/427323/29a5739f/5a672c40N2d2b1b57.png', id: 'hxr1' },
  { src: '//m.360buyimg.com/babel/jfs/t15868/305/1847656358/431705/bdf35e0b/5a672c40N50602fca.png', id: 'hxr2' },
  { src: '//m.360buyimg.com/babel/jfs/t15850/128/1812095449/429143/d616b563/5a672c40Nfbe0e555.png', id: 'hxr3' },
  { src: '//m.360buyimg.com/babel/jfs/t18112/8/259183796/432687/a779bb9c/5a672c40Na6f66c4c.png', id: 'hxr4' },
  { src: '//m.360buyimg.com/babel/jfs/t18118/13/263740378/50890/850e076e/5a672c40N3ea5c619.png', id: 'hxr5' },
]

window.preload = new createjs.LoadQueue(true)
window.preload.loadManifest(assets)
window.preload.on('complete', completeHandle)


function completeHandle () {
  $('.loading').addClass('hide')
  $('.main').removeClass('hide')
  drawHXR()
}

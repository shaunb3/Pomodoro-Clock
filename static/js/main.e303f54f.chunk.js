(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/play.ab742698.svg"},function(e,t,n){e.exports=n.p+"static/media/pause.7d76ade1.svg"},function(e,t,n){e.exports=n.p+"static/media/reset.05bc37d1.svg"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s,a=n(0),i=n.n(a),r=n(2),c=n.n(r),o=(n(15),n(3)),l=n(4),m=n(9),d=n(8),u=(n(16),n(5)),h=n.n(u),g=n(6),b=n.n(g),v=n(7),p=n.n(v),k=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={breakLength:5,sessionLength:25,sessionTimeRemaining:1500,sessionActive:!1,breakActive:!1,currentDisplay:"Session",ringColor:"#E48F2E"},a.convertTime=function(e){var t=e%60,n=Math.floor(e/60);return t=t<10?"0"+t:t,"".concat(n=n<10?"0"+n:n,":").concat(t)},a.playPause=function(){!1===a.state.sessionActive?(a.setState({ringColor:"#E48F2E"}),s=setInterval((function(){0===a.state.sessionTimeRemaining?(a.audio.current.play(),"Session"===a.state.currentDisplay?a.setState({sessionTimeRemaining:60*a.state.breakLength,currentDisplay:"Break"}):a.setState({sessionTimeRemaining:60*a.state.sessionLength,currentDisplay:"Session"})):a.setState((function(e){return{sessionTimeRemaining:e.sessionTimeRemaining-1}}))}),1e3),a.setState({sessionActive:!0,ringColor:"green"})):(clearInterval(s),a.setState({sessionActive:!1,ringColor:"#E48F2E"}))},a.reset=function(){clearInterval(s),a.setState({sessionTimeRemaining:1500,breakLength:5,sessionLength:25,breakActive:!1,sessionActive:!1,currentDisplay:"Session"}),a.audio.current.pause(),a.audio.current.currentTime=0},a.handleClick=function(e){"break-increment"===e.target.id?a.state.breakLength<60&&a.setState((function(e){return{breakLength:e.breakLength+1}})):"break-decrement"===e.target.id?a.state.breakLength>1&&a.setState((function(e){return{breakLength:e.breakLength-1}})):"session-increment"===e.target.id?a.state.sessionLength<60&&a.setState((function(e){return{sessionLength:e.sessionLength+1}})):"session-decrement"===e.target.id&&a.state.sessionLength>1&&a.setState((function(e){return{sessionLength:e.sessionLength-1}}))},a.audio=i.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){this.state.sessionLength!==t.sessionLength&&this.setState({sessionTimeRemaining:60*this.state.sessionLength})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"timer-body"},i.a.createElement("div",{className:"display"},i.a.createElement("div",{className:"digits"},i.a.createElement("div",{id:"timer-label"},this.state.currentDisplay),i.a.createElement("div",{id:"time-left"},this.convertTime(this.state.sessionTimeRemaining)),i.a.createElement("div",{className:"secondary-display"},i.a.createElement("div",{id:"break-length"},this.state.breakLength),i.a.createElement("div",{id:"session-length"},this.state.sessionLength))),i.a.createElement("div",{className:"buttons-con"},i.a.createElement("div",{className:"btn-ring",style:{backgroundColor:"".concat(this.state.ringColor)}},i.a.createElement("div",{className:"button",id:"start_stop",onClick:this.playPause},this.state.sessionActive?i.a.createElement("img",{className:"icon pause-icon",src:b.a}):i.a.createElement("img",{className:"icon",src:h.a}))),i.a.createElement("div",null,i.a.createElement("div",{className:"button",id:"reset",onClick:this.reset},i.a.createElement("img",{className:"icon",src:p.a})))),i.a.createElement("audio",{ref:this.audio,id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})),i.a.createElement("div",{className:"secondary-buttons"},i.a.createElement("div",{className:"break"},i.a.createElement("h3",{id:"break-label"},"Break length"),i.a.createElement("div",{className:"input-btn-con"},i.a.createElement("div",{className:"input-btn",onClick:this.handleClick,id:"break-increment"},"+"),i.a.createElement("div",{className:"input-btn",onClick:this.handleClick,id:"break-decrement",disabled:1===this.state.breakLength},"-"))),i.a.createElement("div",{className:"session"},i.a.createElement("h3",{id:"session-label"},"Session length"),i.a.createElement("div",{className:"input-btn-con"},i.a.createElement("div",{className:"input-btn",id:"session-increment",onClick:this.handleClick},"+"),i.a.createElement("div",{className:"input-btn",id:"session-decrement",onClick:this.handleClick,disabled:1===this.state.sessionLength},"-"))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.e303f54f.chunk.js.map
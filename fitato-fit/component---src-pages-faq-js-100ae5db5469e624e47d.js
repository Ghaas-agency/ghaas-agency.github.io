webpackJsonp([87192162464282],{9:function(e,t,a){var n,o;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=a.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(a.default=a,e.exports=a):(n=[],o=function(){return a}.apply(t,n),!(void 0!==o&&(e.exports=o)))}()},58:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(9),u=n(s),c=a(1),d=n(c),f=a(5),p=n(f),m=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.duration,o=e.easing,r=e.expanded,l=e.maxHeight,i=e.overflow,s=e.rootTag,c=e.uuid,f={maxHeight:l,overflow:i,transition:"max-height "+n+"ms "+o};return d.default.createElement(s,{"aria-hidden":!r,"aria-labelledby":"react-safona-item-title-"+c,className:(0,u.default)("react-sanfona-item-body",a),id:"react-safona-item-body-"+c,style:f},d.default.createElement("div",{className:"react-sanfona-item-body-wrapper"},t))}}]),t}(c.Component);t.default=m,m.defaultProps={rootTag:"div"},m.propTypes={className:p.default.string,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),duration:p.default.number,easing:p.default.string,expanded:p.default.bool,maxHeight:p.default.oneOfType([p.default.string,p.default.number]),overflow:p.default.string,rootTag:p.default.string,uuid:p.default.string}},59:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.className,a=e.expanded,n=e.onClick,o=e.rootTag,l=e.title,s=e.uuid,c={cursor:"pointer",margin:0};return"object"===("undefined"==typeof l?"undefined":r(l))?u.default.cloneElement(l,{onClick:n,id:"react-safona-item-title-"+s,"aria-controls":"react-sanfona-item-body-"+s}):u.default.createElement(o,{"aria-controls":"react-sanfona-item-body-"+s,"aria-expanded":a,className:(0,i.default)("react-sanfona-item-title",t),id:"react-safona-item-title-"+s,onClick:n,style:c},l)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=a(9),i=n(l),s=a(1),u=n(s),c=a(5),d=n(c);o.defaultProps={rootTag:"h3"},o.propTypes={className:d.default.string,expanded:d.default.bool,onClick:d.default.func,rootTag:d.default.string,title:d.default.oneOfType([d.default.string,d.default.node]),uuid:d.default.string}},136:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(9),d=n(c),f=a(1),p=n(f),m=a(5),h=n(m),y=a(39),v=n(y),g=a(140),b=n(g),w=a(58),E=n(w),x=a(59),k=n(x),C=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={maxHeight:e.expanded?"none":0,overflow:e.expanded?"visible":"hidden"},a}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.uuid=this.props.uuid||b.default.v4()}},{key:"componentDidMount",value:function(){this.setMaxHeight(!1)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.children,n=t.disabled,o=t.expanded;if(e.expanded!==o){if(n)return;o?this.handleExpand():this.handleCollapse()}else e.children!==a&&this.setMaxHeight(!1)}},{key:"handleExpand",value:function(){var e=this.props,t=e.index,a=e.onExpand,n=e.slug;this.setMaxHeight(!1),a&&(n?a(n,t):a(t))}},{key:"handleCollapse",value:function(){var e=this.props,t=e.index,a=e.onClose,n=e.slug;this.setMaxHeight(!0),a&&(n?a(n,t):a(t))}},{key:"setMaxHeight",value:function(e){var t=this,a=this.props,n=a.duration,o=a.expanded;clearTimeout(this.timeout);var r=v.default.findDOMNode(this.refs.body),l=r.querySelectorAll("img");return l.length>0?this.preloadImages(r,l):(this.setState({maxHeight:o||e?r.scrollHeight+"px":0,overflow:"hidden"}),void(o?this.timeout=setTimeout(function(){t.setState({maxHeight:"none",overflow:"visible"})},n):this.timeout=setTimeout(function(){t.setState({maxHeight:0})},0)))}},{key:"preloadImages",value:function(e){for(var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.props.expanded,o=0,r=function(){o++,o===a.length&&t.setState({maxHeight:n?e.scrollHeight+"px":0,overflow:"hidden"})},l=0;l<a.length;l+=1){var i=new Image;i.src=a[l].src,i.onload=i.onerror=r}}},{key:"getProps",value:function(){var e=this.props,t=e.className,a=e.disabled,n=e.disabledClassName,r=e.expanded,l=e.expandedClassName,i=e.style,s={className:(0,d.default)("react-sanfona-item",t,{"react-sanfona-item-expanded":r&&!a,"react-sanfona-item-disabled":a},l&&o({},l,r),n&&o({},n,a)),style:i};return s}},{key:"render",value:function(){var e=this.props,t=e.bodyClassName,a=e.bodyTag,n=e.children,o=e.disabled,r=e.duration,l=e.easing,i=e.onClick,u=e.rootTag,c=e.title,d=e.titleClassName,f=e.titleTag,m=this.state,h=m.maxHeight,y=m.overflow;return p.default.createElement(u,s({},this.getProps(),{ref:"item"}),p.default.createElement(k.default,{className:d,expanded:this.props.expanded,onClick:o?null:i,rootTag:f,title:c,uuid:this.uuid}),p.default.createElement(E.default,{className:t,duration:r,easing:l,expanded:this.props.expanded,maxHeight:h,overflow:y,ref:"body",rootTag:a,uuid:this.uuid},n))}}]),t}(f.Component);t.default=C,C.defaultProps={rootTag:"div",titleTag:"h3",bodyTag:"div"},C.propTypes={bodyClassName:h.default.string,bodyTag:h.default.string,children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node]),className:h.default.string,disabled:h.default.bool,disabledClassName:h.default.string,duration:h.default.number,easing:h.default.string,expanded:h.default.bool,expandedClassName:h.default.string,index:h.default.number,onClick:h.default.func,onClose:h.default.func,onExpand:h.default.func,rootTag:h.default.string,slug:h.default.string,style:h.default.object,title:h.default.oneOfType([h.default.string,h.default.node]),titleClassName:h.default.string,titleTag:h.default.string,uuid:h.default.string}},137:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(9),u=n(s),c=a(1),d=n(c),f=a(5),p=n(f),m=a(138),h=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={activeItems:(0,m.getActiveItems)(e.children,e.allowMultiple)},a}return l(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.children,a=e.allowMultiple;(0,m.isSame)((0,m.getChildrenActiveItems)(this.props.children),(0,m.getChildrenActiveItems)(t))||this.setState({activeItems:(0,m.getActiveItems)(t,a)})}},{key:"handleClick",value:function(e){var t=this.props,a=t.allowMultiple,n=t.children,o=t.onChange,r=t.openNextAccordionItem,l=this.state.activeItems.slice(0),i=l.indexOf(e);i!==-1?(l.splice(i,1),r&&e!==n.length-1&&l.push(e+1)):a?l.push(e):l=[e];var s={activeItems:l};this.setState(s),o&&o(s)}},{key:"renderItems",value:function(){var e=this,t=this.props,a=t.children,n=t.duration,o=t.easing;if(!a)return null;var r=this.state.activeItems;return(0,m.arrayify)(a).filter(function(e){return e}).map(function(t,a){var l=t.props,i=l.disabled,s=l.duration,u=l.easing,c=!i&&r.indexOf(a)!==-1;return d.default.cloneElement(t,{duration:s||n,easing:u||o,expanded:c,key:a,index:a,onClick:e.handleClick.bind(e,a),ref:"item-"+a})})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.rootTag;return d.default.createElement(n,{className:(0,u.default)("react-sanfona",t),style:a},this.renderItems())}}]),t}(c.Component);t.default=h,h.defaultProps={activeItems:[0],allowMultiple:!1,duration:300,easing:"ease",rootTag:"div"},h.propTypes={allowMultiple:p.default.bool,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),className:p.default.string,duration:p.default.number,easing:p.default.string,onChange:p.default.func,openNextAccordionItem:p.default.bool,style:p.default.object,rootTag:p.default.string}},138:function(e,t){"use strict";function a(e){var t=[];return r(e).filter(function(e){return e}).forEach(function(e,a){!e.props.disabled&&e.props.expanded&&t.push(a)}),t}function n(e,t){var n=a(e);return!t&&n.length>0&&(n=n.slice(0,1)),n}function o(e,t){return e.length===t.length&&e.every(function(e,a){return e===t[a]})}Object.defineProperty(t,"__esModule",{value:!0}),t.getChildrenActiveItems=a,t.getActiveItems=n,t.isSame=o;var r=t.arrayify=function(e){return[].concat(e)}},139:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AccordionItemBody=t.AccordionItemTitle=t.AccordionItem=t.Accordion=void 0;var o=a(137),r=n(o),l=a(136),i=n(l),s=a(59),u=n(s),c=a(58),d=n(c);t.Accordion=r.default,t.AccordionItem=i.default,t.AccordionItemTitle=u.default,t.AccordionItemBody=d.default},140:function(e,t,a){var n=a(141),o=a(142),r=o;r.v1=n,r.v4=o,e.exports=r},61:function(e,t){function a(e,t){var a=t||0,o=n;return o[e[a++]]+o[e[a++]]+o[e[a++]]+o[e[a++]]+"-"+o[e[a++]]+o[e[a++]]+"-"+o[e[a++]]+o[e[a++]]+"-"+o[e[a++]]+o[e[a++]]+"-"+o[e[a++]]+o[e[a++]]+o[e[a++]]+o[e[a++]]+o[e[a++]]+o[e[a++]]}for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=a},62:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},141:function(e,t,a){function n(e,t,a){var n=t&&a||0,c=t||[];e=e||{};var d=e.node||o,f=void 0!==e.clockseq?e.clockseq:r;if(null==d||null==f){var p=l();null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=r=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:u+1,y=m-s+(h-u)/1e4;if(y<0&&void 0===e.clockseq&&(f=f+1&16383),(y<0||m>s)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=m,u=h,r=f,m+=122192928e5;var v=(1e4*(268435455&m)+h)%4294967296;c[n++]=v>>>24&255,c[n++]=v>>>16&255,c[n++]=v>>>8&255,c[n++]=255&v;var g=m/4294967296*1e4&268435455;c[n++]=g>>>8&255,c[n++]=255&g,c[n++]=g>>>24&15|16,c[n++]=g>>>16&255,c[n++]=f>>>8|128,c[n++]=255&f;for(var b=0;b<6;++b)c[n+b]=d[b];return t?t:i(c)}var o,r,l=a(62),i=a(61),s=0,u=0;e.exports=n},142:function(e,t,a){function n(e,t,a){var n=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var l=e.random||(e.rng||o)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t)for(var i=0;i<16;++i)t[n+i]=l[i];return t||r(l)}var o=a(62),r=a(61);e.exports=n},225:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(1),r=n(o),l=a(26),i=n(l),s=a(17),u=n(s),c=a(47),d=n(c),f=a(15),p=n(f),m=a(139),h="/",y=function(){return r.default.createElement("div",null,r.default.createElement(u.default,{title:"FAQ - Fitato",meta:[{name:"description",content:"Frequently asked questions about Fitato."}]}),r.default.createElement("div",{className:"faq-page"},r.default.createElement("div",{className:"container"},r.default.createElement("h1",null,"Frequently Asked Questions"),r.default.createElement("p",null,"Let's help you step by step."),r.default.createElement(m.Accordion,null,r.default.createElement(m.AccordionItem,{title:"What is Fitato? What do I buy?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("img",{src:h+"static/fitato-one-pass-to-all.png",alt:"fitato one pass to all"}),r.default.createElement("p",null,"Fitato is a single fitness pass that gives you access to workout at over 250 gyms & fitness studios around Pune. We have partnered with studios providing activities like CrossFit, Zumba, Yoga, MMA, Swimming, and many more apart from your regular gym. Through the Fitato pass, you can go to the gym one day, yoga the other, swimming on the weekend or whichever way you like, without having to pay extra anywhere.")),r.default.createElement(m.AccordionItem,{title:"What are the benefits of Fitato over any other fitness membership?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Out of the people who buy yearly gym memberships, 90% of them drop out within a month, primarily because of boredom and lack of motivation. Fitato on the other hand believes in making fitness fun and achievable through short terms goals. For this purpose, we have partnered with a variety of fitness activities all around the city so that you never get bored while also making sure that our passes are more affordable."),r.default.createElement("p",null,"#MakeFitnessYourPlayground")),r.default.createElement(m.AccordionItem,{title:"Where do I buy the Fitato Membership from?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"You can activate your pass by ",r.default.createElement(i.default,{to:"/download"},"downloading the Fitato app")," from the Google Playstore or App Store."),r.default.createElement("ol",null,r.default.createElement("li",null,r.default.createElement(i.default,{to:"/download"},"Download the Fitato App")),r.default.createElement("li",null,"Signup / Login through Facebook"),r.default.createElement("li",null,"Browse partner facilites & timings"),r.default.createElement("li",null,'The "Home Screen " has a "Buy Passs" section, click on it'),r.default.createElement("li",null,"Select the memebership that suits you"),r.default.createElement("li",null,"Pay via Debit/Credit Card, Net Banking or Mobile Wallets"),r.default.createElement("li",null,'Your pass will be activated, just reserve an activity & give your "Check In Code" at the facility'),r.default.createElement("li",null,"Check In code is at the top right corner in the profile section of the app")),r.default.createElement("p",null,"You have revolutinized fitness now.")),r.default.createElement(m.AccordionItem,{title:"What kind of memberships does Fitato offer?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"We have 4 different types of passes:"),r.default.createElement("ol",null,r.default.createElement("li",null,"One Week All Access Pass – Gives you work out access at all our partner gyms and studios for 7 days"),r.default.createElement("li",null,"Flexi All Access Pass - Gives you work out access at all our partner gyms and studios for 10 sessions that are valid for a period of 30 days"),r.default.createElement("li",null,"Monthly All Access Pass - Gives you work out access at all our partner gyms and studios for 30 days"),r.default.createElement("li",null,"Quarterly All Access Pass - Gives you work out access at all our partner gyms and studios for 90 days"))),r.default.createElement(m.AccordionItem,{title:"How does the Fitato pass work? How do I reserve an activity?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Your Fitato pass is activated the moment you purchase it on the app. Follow these simple steps to successfully reserve your workout:"),r.default.createElement("ol",null,r.default.createElement("li",null,"Select the category of workout you want to do."),r.default.createElement("li",null,"You will see a list of Gyms/Studios offering that workout, click one the one you like."),r.default.createElement("li",null,'Click On "Reserve Workout" button and you are good to go.'),r.default.createElement("li",null,'Give your "Access Code" in the "Profile Section" of the app at the facility counter.'))),r.default.createElement(m.AccordionItem,{title:"Can I Cancel an activity after reserving it?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Yes, you can cancel an activity any time before the scheduled class ends. To cancel an activity - Click on the “Calendar Icon” on the app to see your upcoming reservations and press “Cancel Reservation” on the activity that you want to cancel.")),r.default.createElement(m.AccordionItem,{title:"Is it necessary to reserve an activity every time I go for a workout?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Reserving an activity helps Fitato and our partners keep a track of your workouts at different places and therefore it is compulsory to make a booking prior to each workout. We strongly recommend booking at least 4-6 hours prior to an activity so that we can update you in case of a class cancellation. However, the Fitato app lets you book a class as early as 7 days in advance and as late as 5 minutes before a class. It also gives you an option to book a class for each of the upcoming 7 days at once, just scroll on the dates on top of each activity.")),r.default.createElement(m.AccordionItem,{title:"Can I buy a pass now and activate it later?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"In case you want to buy your Fitato pass or have already bought it, but want to activate it on a later date, please get in touch with our Customer Relations Executive at ",r.default.createElement("a",{href:"tel:+919607800533"},"+91 9607800533")," or write to us at ",r.default.createElement("a",{href:"mailto:care@fitato.fit"},"care@fitato.fit"))),r.default.createElement(m.AccordionItem,{title:"Can I go to any class, any number of times?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Most of the classes and places on the app can be visited any number of times through the Fitato pass. Only a few of our partners have a limited monthly access, which has been mentioned in the description of these classes on the app. Note that you can only book up to 1 class in a day.")),r.default.createElement(m.AccordionItem,{title:"What is Fitato’s refund policy?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Fitato does not initate refunds under any circuamtances."),r.default.createElement("p",null,"A refund might be considered under an exceptional circumstance, where if a facility where a user was working out earlier, has been deactivated from the app.")),r.default.createElement(m.AccordionItem,{title:"Can the fitato membership be frozen or put on hold?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"No, you cannot put your fitato membership oh hold or pause it.")),r.default.createElement(m.AccordionItem,{title:"How does Fitato referral & wallet work? I want my friends to experience Fitato.",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Step 1"),r.default.createElement("p",null,"Head to the profile section of your app and share your referral code with friends via Whatsapp, SMS or Email. First step to building your clan."),r.default.createElement("p",null,"Step 2"),r.default.createElement("p",null,"When your buddy purchases using your code, the both of you get a 20% Fitato cashback. Your friend also gets a 20% off on their first pass. Your clan is now ready!"),r.default.createElement("p",null,"Step 3"),r.default.createElement("p",null,"You can use 50% of you Fitato wallet balance on subsequent purchases and turn fitness into the lifestyle that you have always wanted."),r.default.createElement("p",null,"*Valid only for new users.")),r.default.createElement(m.AccordionItem,{title:"Can my friends/relatives use my pass on my behalf?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Fitato passes are non-transferrable from one person to another and therefore can’t be used by your friends, relatives, etc.")),r.default.createElement(m.AccordionItem,{title:"I want a particular studio to be listed on Fitato. Is it possible?",titleTag:"h4",className:"accordion-item",expandedClassName:"accordion-item-active"},r.default.createElement("p",null,"Yes Absolutely, Just tell us the name and location of this facility by mailing us on ",r.default.createElement("a",{href:"mailto:partners@fitato.fit"},"partners@fitato.fit")," or contacting us on ",r.default.createElement("a",{href:"tel:+917875152685"},"+91 7875152685")," and we will try our best to make them part of the Fitato family."))))),r.default.createElement(d.default,null),r.default.createElement(p.default,null))};t.default=y,e.exports=t.default},47:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(1),r=n(o),l=a(26),i=n(l),s=function(){return r.default.createElement("div",{className:"partial-get-started"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"partial-get-started__text"},r.default.createElement("h2",null,r.default.createElement("span",{className:"red"},"Ready to get started?"),r.default.createElement("br",null),"Download the Fitato app or get in touch.")),r.default.createElement("div",{className:"partial-get-started__cta"},r.default.createElement("a",{href:"https://fitato.app.link/6CvYxe0W9L",className:"button"},"Download now"),r.default.createElement(i.default,{to:"/contact",className:"button-inverted"},"Contact us"))))};t.default=s,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-faq-js-100ae5db5469e624e47d.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(232),i=a.n(r),c=a(226),o=a(217),s=a(229),m=a(220),u=a(218),d=a(219);t.default=function(){return l.a.createElement(o.a,null,l.a.createElement(c.a,{title:"Contact Us | Fitato",description:"The Fitato Team is always here to help you out. Simply drop in your details and we'll get in touch ASAP."}),l.a.createElement(i.a,null,l.a.createElement("link",{rel:"canonical",href:"https://www.fitato.fit/contact-us/"})),l.a.createElement("div",{className:"contact-page align-center"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Get in Touch With Us - Available 24/7"),l.a.createElement("div",{className:"contact-page-form"},l.a.createElement("p",null,"We’re always here, burning the midnight oil. If you have any queries/questions or even need yourself a workout partner, talk to us. Just put in your details and we’ll get back to you. You can even call us on the numbers listed below!"),l.a.createElement(s.a,{formClass:"f-cf-contact"})),l.a.createElement(d.a,{cname:"footer-ul"}),l.a.createElement(u.a,{cname:"footer-social"}))),l.a.createElement(m.a,null))}},216:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(214),i=a(215),c=i.c.button.withConfig({displayName:"OfferPopupstyled__PopupOverlay",componentId:"nh4ddf-0"})(["position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,0.9);overflow:hidden;border:0;display:block;width:100%;height:100%;transition:",";"],function(e){return e.theme.transition}),o=i.c.div.withConfig({displayName:"OfferPopupstyled__PopupContainer",componentId:"nh4ddf-1"})(["text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding:15px;a{box-shadow:0px 6px 9px -5px rgba(2,2,2,0.3);border:0 !important;}img{margin:0;vertical-align:middle;max-width:920px;width:100%;}"]),s=i.c.button.withConfig({displayName:"OfferPopupstyled__PopupClose",componentId:"nh4ddf-2"})(["position:fixed;top:10px;right:10px;background:unset;background-color:#ffffff;border:0;cursor:pointer;line-height:1;img{margin:0;}"]);t.a=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];function i(){a(!t),"undefined"!=typeof sessionStorage&&sessionStorage.setItem("fitato_offer_img_popup","shown")}return Object(n.useEffect)(function(){setTimeout(function(){"undefined"!=typeof sessionStorage&&a(!("shown"===sessionStorage.getItem("fitato_offer_img_popup")))},15e3)},[]),Object(n.useEffect)(function(){"undefined"!=typeof document&&(document.querySelector("html").style.overflow=t?"hidden":"auto",window.onkeydown=function(e){!t||"Escape"!==e.key&&"Esc"!==e.key||i()})},[t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{onClick:i,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},l.a.createElement(o,null,l.a.createElement(r.a,{to:"/download/",className:"ga-click-offer-popup"},l.a.createElement("img",{src:Object(r.b)("/static/experience-fitness-freedom-offer.jpg"),alt:"fitato experience fitness freedom offer",className:"ga-click-offer-popup"})))),l.a.createElement(s,{onClick:i,style:t?{opacity:1,zIndex:900}:{opacity:0,zIndex:-2}},l.a.createElement("img",{src:Object(r.b)("/static/icons/close-dark.svg"),alt:"close"})))}},217:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(215),i=a(221),c=a(222),o=a(223),s=a(216),m=a(214),u=a(224);var d="undefined"==typeof window?800:window.innerWidth,f=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:d,showPartnersMenu:!1},t.handleMenuClick=function(){var e=t.state,a=e.toggleMenu,n=e.toggleMenuBg;t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!a,toggleMenuBg:!n})},t.handleBgClick=function(){t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateMenuToggle=function(){t.state.windowWidth>791?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateWindowDimensions=function(){t.setState({windowWidth:window.innerWidth}),t.updateMenuToggle()},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},r.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},r.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-header-placeholder",style:{height:77,backgroundColor:"#ffffff"}}),l.a.createElement(u.a,null,l.a.createElement("div",{className:"main-header-container"},l.a.createElement("img",{src:Object(m.b)("/static/icons/menu.svg"),onClick:this.handleMenuClick,className:"main-header-menu-icon",alt:"menu"}),l.a.createElement(m.a,{className:"menu-logo",to:"/"},l.a.createElement("img",{src:Object(m.b)("/static/fitato-logo-colored.svg"),title:"Fitato",alt:"fitato"})),l.a.createElement("ul",{className:"menu-links"+(this.state.toggleMenu?" active":"")+"\n              "},l.a.createElement("li",null,l.a.createElement(m.a,{to:"/how-it-works/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"How It Works")),l.a.createElement("li",{className:"menu-links__partners"},l.a.createElement(m.a,{to:"/partners/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),l.a.createElement("button",{type:"button",className:"button-unstyled",style:this.state.showPartnersMenu?{transform:"rotate(180deg)"}:{},onClick:function(){return e.setState(function(e){return{showPartnersMenu:!e.showPartnersMenu}})}},l.a.createElement("img",{src:Object(m.b)("/static/icons/arrow-down.svg"),alt:"arrow down"})),l.a.createElement("ul",{className:"menu-links__partners-items"+(this.state.showPartnersMenu?" active":"")},l.a.createElement("li",null,l.a.createElement(m.a,{to:"/pune/"},"Pune")),l.a.createElement("li",null,l.a.createElement(m.a,{to:"/hyderabad/"},"Hyderabad")))),l.a.createElement("li",null,l.a.createElement(m.a,{to:"/purchase-fitato/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer",className:"menu-link-item"},"Blog")),l.a.createElement("li",null,l.a.createElement(m.a,{to:"/contact-us/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact Us")),l.a.createElement("li",null,l.a.createElement(m.a,{to:"/faqs/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ")),l.a.createElement("li",null,l.a.createElement(m.a,{to:"/download/",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now"))),l.a.createElement("div",{className:"menu-close-x"+(this.state.toggleMenuBg?" active":""),onClick:this.handleMenuClick},l.a.createElement("img",{src:Object(m.b)("/static/icons/close-dark.svg"),alt:"close icon"}))),l.a.createElement("div",{className:"mobile-menu-bg"+(this.state.toggleMenuBg?" active":""),onClick:this.handleBgClick})))},n}(n.Component),p=a(225);t.a=function(e){var t=e.children,a=e.style,n=e.hideOfferPopup;return l.a.createElement(r.a,{theme:i.a},l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement(o.a,null),l.a.createElement(f,null),l.a.createElement("main",{style:a},t),l.a.createElement(p.a,null),!n&&l.a.createElement(s.a,null),l.a.createElement("script",{src:"https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"}),l.a.createElement("script",{dangerouslySetInnerHTML:{__html:"new SmoothScroll('a[href*=\"#\"]', {offset: 80, easing: 'easeInOutCubic', updateURL: false, speedAsDuration: true});"}}),l.a.createElement("script",{dangerouslySetInnerHTML:{__html:'var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();'}})))}},218:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(214);t.a=function(e){var t=e.cname;return l.a.createElement("ul",{className:t},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/Fitato.fit/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:Object(r.b)("/static/icons/facebook-circle-black.svg"),alt:"facebook",className:"partial-social-links__icon"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/FitatoFit",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:Object(r.b)("/static/icons/twitter-circle-black.svg"),alt:"twitter",className:"partial-social-links__icon"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com/channel/UCUAcO5m8nXxqXHs42kyfzmg?sub_confirmation=1",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:Object(r.b)("/static/icons/youtube-circle-black.svg"),alt:"youtube",className:"partial-social-links__icon"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/fitato_fit/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:Object(r.b)("/static/icons/instagram-circle-black.svg"),alt:"instagram",className:"partial-social-links__icon"}))))}},219:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.cname;return l.a.createElement("ul",{className:t},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:connect@fitato.fit"},"connect@fitato.fit")),l.a.createElement("li",null,l.a.createElement("a",{href:"tel:+918448448546"},"+91 8448448546")))}},220:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(214),i=a(218),c=a(219);t.a=function(){return l.a.createElement("footer",{className:"footer-info"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-info__col1"},l.a.createElement("h4",null,"Do You Own a Fitness Facility? Become a Partner"),l.a.createElement("p",null,"Own a gym? Or a Health and Fitness Studio? Partner up with us and watch as your business reaches unprecedented heights in revenue and brand visibility. Tap into our customer base and put your fitness studio on the map!"),l.a.createElement("a",{href:"https://partner.fitato.fit/",target:"_blank",rel:"noopener noreferrer"},"Become a Partner")),l.a.createElement("div",{className:"footer-info__col2"},l.a.createElement("h4",null,"Know More"),l.a.createElement("ul",{className:"footer-ul"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer"},"Blog")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/faqs/"},"FAQ")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/reviews/"},"Reviews")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/community/"},"Fitato Community")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/how-to-refer/"},"Refer Your Friends")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/corporate/"},"Fitato For The Workplace")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/privacy-policy/"},"Privacy Policy")))),l.a.createElement("div",{className:"footer-info__col3"},l.a.createElement("h4",null,"Join Us"),l.a.createElement(r.a,{to:"/careers/"},"Careers"),l.a.createElement("h4",{style:{marginTop:35}},"Contact Us"),l.a.createElement(c.a,{cname:"footer-ul"}),l.a.createElement(i.a,{cname:"footer-social"}))))}},229:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.formClass;return l.a.createElement("div",{id:"mc_embed_signup",className:"partial-mc-form"},l.a.createElement("form",{action:"https://fit.us18.list-manage.com/subscribe/post?u=c70dd7220cee163ff5b3fa95d&id=537f4ff9ae",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:t?"validate "+t:"validate",target:"_blank",noValidate:!0},l.a.createElement("div",{id:"mc_embed_signup_scroll",className:"partial-mc-form__main"},l.a.createElement("div",{className:"mc-field-group"},l.a.createElement("label",{htmlFor:"mce-FULLNAME"},"Name"),l.a.createElement("input",{type:"text",name:"FULLNAME",className:"required",id:"mce-FULLNAME",placeholder:"Ashok Kumar"})),l.a.createElement("div",{className:"mc-field-group size1of2"},l.a.createElement("label",{htmlFor:"mce-PHONE"},"Phone"),l.a.createElement("input",{type:"text",name:"PHONE",className:"required",id:"mce-PHONE",placeholder:"9876543210"})),l.a.createElement("div",{className:"mc-field-group"},l.a.createElement("label",{htmlFor:"mce-EMAIL"},"Email"),l.a.createElement("input",{type:"email",name:"EMAIL",className:"required email",placeholder:"name@company.com",id:"mce-EMAIL"})),l.a.createElement("div",{className:"mc-field-group input-group"},l.a.createElement("label",null,"City"),l.a.createElement("ul",{className:"partial-mc-form__main--radio"},l.a.createElement("li",null,l.a.createElement("input",{type:"radio",value:"Pune",name:"CITY",id:"mce-CITY-0"}),l.a.createElement("label",{htmlFor:"mce-CITY-0"},"Pune")),l.a.createElement("li",null,l.a.createElement("input",{type:"radio",value:"Hyderabad",name:"CITY",id:"mce-CITY-1"}),l.a.createElement("label",{htmlFor:"mce-CITY-1"},"Hyderabad")))),l.a.createElement("div",{className:"clear mc-form-submit-btn"},l.a.createElement("div",{id:"mce-responses",className:"clear",style:{margin:"0"}},l.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),l.a.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})),l.a.createElement("div",{style:{position:"absolute",left:"-5000px",margin:"0"},"aria-hidden":"true"},l.a.createElement("input",{type:"text",name:"b_c70dd7220cee163ff5b3fa95d_537f4ff9ae",tabIndex:"-1"})),l.a.createElement("input",{type:"submit",value:"Submit",name:"subscribe",id:"mc-embedded-subscribe",className:"button",style:{marginLeft:"0px"}})))))}}}]);
//# sourceMappingURL=component---src-pages-contact-us-jsx-a1f1f10d6e525afc8f3a.js.map
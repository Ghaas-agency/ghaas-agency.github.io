(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(160),l=a.n(o),s=a(179),r=a(162);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"pricing-page"},i.a.createElement(l.a,{title:"Fitato Pass Pricing | Choose Your Pass Plan"},i.a.createElement("meta",{name:"description",content:"A Fitato Pass gives you access to multiple fitness facilities and activities. Choose Your preferred Pass. Choice, control & convenience for your health goals."}),i.a.createElement("meta",{itemprop:"name",content:"Fitato Pass Pricing | Choose Your Pass Plan"}),i.a.createElement("meta",{itemprop:"description",content:"A Fitato Pass gives you access to multiple fitness facilities and activities. Choose Your preferred Pass. Choice, control & convenience for your health goals."}),i.a.createElement("meta",{name:"twitter:title",content:"Fitato Pass Pricing | Choose Your Pass Plan"}),i.a.createElement("meta",{name:"twitter:description",content:"A Fitato Pass gives you access to multiple fitness facilities and activities. Choose Your preferred Pass. Choice, control & convenience for your health goals."}),i.a.createElement("meta",{property:"og:title",content:"Fitato Pass Pricing | Choose Your Pass Plan"}),i.a.createElement("meta",{property:"og:description",content:"A Fitato Pass gives you access to multiple fitness facilities and activities. Choose Your preferred Pass. Choice, control & convenience for your health goals."})),i.a.createElement(s.a,{tag:"h1"})))}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Fitato&reg;: Fitness for the Intelligent Indian"}}}}},162:function(e,t,a){"use strict";var n=a(161),i=a(0),o=a.n(i),l=a(160),s=a.n(l),r=a(159),c=a(7),m=a.n(c),p={display:"block"},u={display:"none"},h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={showTopbar:!1},t.handleClose=function(){t.setState({showTopbar:!1}),"undefined"!=typeof sessionStorage&&(sessionStorage.setItem("topbarToggle",!1),document.getElementsByClassName("main-header-placeholder")[0].style.height="77px")},t}m()(t,e);var a=t.prototype;return a.topbarLocalStorageCheck=function(){if("undefined"!=typeof sessionStorage)return"false"!==sessionStorage.getItem("topbarToggle")&&!1!==sessionStorage.getItem("topbarToggle")},a.componentDidMount=function(){this.topbarLocalStorageCheck()?(this.setState({showTopbar:!0}),"undefined"!=typeof document&&(document.getElementsByClassName("main-header-placeholder")[0].style.height="133px")):(this.setState({showTopbar:!1}),"undefined"!=typeof document&&(document.getElementsByClassName("main-header-placeholder")[0].style.height="77px"))},a.render=function(){return o.a.createElement("div",{className:"partial-topbar",style:this.state.showTopbar?p:u},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"partial-topbar-close",onClick:this.handleClose},o.a.createElement("img",{src:Object(r.withPrefix)("/static/icons/close.svg"),alt:"close"})),o.a.createElement("p",null,o.a.createElement("img",{src:Object(r.withPrefix)("/static/icons/commitment.svg"),alt:"fitato in hyderabad"}),o.a.createElement("a",{href:"https://offer.fitato.fit/commitment",target:"_blank",rel:"noreferrer noopener",onClick:this.handleClose},"Commit to a new you, this new year ",o.a.createElement("img",{src:Object(r.withPrefix)("/static/icons/arrow-forward-white.svg"),alt:"arrow forward white",className:"partial-topbar--arrow"})))))},t}(o.a.Component),d=(a(165),{display:"block"}),g={display:"none"},f="undefined"==typeof window?800:window.innerWidth,E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={toggleMenu:!1,toggleMenuBg:!1,windowWidth:f},t.handleMenuClick=function(){t.state.windowWidth>767?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!t.state.toggleMenu,toggleMenuBg:!t.state.toggleMenuBg})},t.handleBgClick=function(){t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateMenuToggle=function(){t.state.windowWidth>791?t.setState({toggleMenu:!0,toggleMenuBg:!1}):t.setState({toggleMenu:!1,toggleMenuBg:!1})},t.updateWindowDimensions=function(){t.setState({windowWidth:window.innerWidth}),t.updateMenuToggle()},t}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-header-placeholder"}),o.a.createElement("nav",{className:"main-header"},o.a.createElement(h,null),o.a.createElement("div",{className:"main-header-container"},o.a.createElement("img",{src:Object(r.withPrefix)("/static/icons/menu.svg"),onClick:this.handleMenuClick,className:"main-header-menu-icon",alt:"menu"}),o.a.createElement(r.Link,{className:"menu-logo",to:"/"},o.a.createElement("img",{src:Object(r.withPrefix)("/static/fitato-logo-colored.svg"),title:"Fitato",alt:"fitato"})),o.a.createElement("div",{className:"menu-links",style:this.state.toggleMenu?d:g},o.a.createElement(r.Link,{to:"/how-it-works/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"How It Works"),o.a.createElement(r.Link,{to:"/partners/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Facilities"),o.a.createElement(r.Link,{to:"/purchase-fitato/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Pricing"),o.a.createElement("a",{href:"https://blog.fitato.fit",target:"_blank",rel:"noopener noreferrer",className:"menu-link-item"},"Blog"),o.a.createElement(r.Link,{to:"/contact-us/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"Contact Us"),o.a.createElement(r.Link,{to:"/faqs/",className:"menu-link-item",activeClassName:"menu-link-item-active",onClick:this.handleMenuClick},"FAQ"),o.a.createElement(r.Link,{to:"/download/",className:"button",onClick:this.handleMenuClick,style:{marginRight:"0",marginTop:"0",marginBottom:"0",marginLeft:"10px"}},"Download now")),o.a.createElement("div",{className:"menu-close-x",onClick:this.handleMenuClick,style:this.state.toggleMenuBg?d:g},"x")),o.a.createElement("div",{className:"mobile-menu-bg",style:this.state.toggleMenuBg?d:g,onClick:this.handleBgClick})))},t}(i.Component),w=a(166);a(167),t.a=function(e){var t=e.children;return o.a.createElement(r.StaticQuery,{query:"3470870683",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{defaultTitle:e.site.siteMetadata.title},o.a.createElement("meta",{charset:"utf-8"}),o.a.createElement("meta",{name:"description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{itemprop:"name",content:"Fitato®: Fitness for the Intelligent Indian"}),o.a.createElement("meta",{itemprop:"description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{itemprop:"image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"apple-itunes-app",content:"app-id=1300323768"}),o.a.createElement("meta",{name:"google-play-app",content:"app-id=fit.fitato.health"}),o.a.createElement("meta",{name:"twitter:card",content:"app"}),o.a.createElement("meta",{name:"twitter:title",content:"Fitato®: Fitness for the Intelligent Indian"}),o.a.createElement("meta",{name:"twitter:description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{name:"twitter:site",content:"@FitatoFit"}),o.a.createElement("meta",{name:"twitter:creator",content:"@FitatoFit"}),o.a.createElement("meta",{name:"twitter:image:src",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{name:"twitter:app:id:iphone",content:"1300323768"}),o.a.createElement("meta",{name:"twitter:app:name:iphone",content:"Fitato"}),o.a.createElement("meta",{name:"twitter:app:id:googleplay",content:"fit.fitato.health"}),o.a.createElement("meta",{name:"twitter:app:name:googleplay",content:"Fitato: One Pass to Fitness"}),o.a.createElement("meta",{property:"og:title",content:"Fitato®: Fitness for the Intelligent Indian"}),o.a.createElement("meta",{property:"og:description",content:"A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"}),o.a.createElement("meta",{property:"og:image",content:"https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"}),o.a.createElement("meta",{property:"og:url",content:"https://www.fitato.fit"}),o.a.createElement("meta",{property:"og:site_name",content:"Fitato"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"al:ios:app_store_id",content:"1300323768"}),o.a.createElement("meta",{property:"al:ios:app_name",content:"Fitato"}),o.a.createElement("meta",{property:"al:android:package",content:"fit.fitato.health"}),o.a.createElement("meta",{property:"al:android:app_name",content:"Fitato: One Pass to Fitness"}),o.a.createElement("script",{type:"text/javascript"},'!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-M6HNZB",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");'),o.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:Object(r.withPrefix)("/static/fitato-icon-16.png")}),o.a.createElement("link",{rel:"apple-touch-icon",href:Object(r.withPrefix)("/static/fitato-icon-57.png")}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:Object(r.withPrefix)("/static/fitato-icon-72.png")}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:Object(r.withPrefix)("/static/fitato-icon-114.png")}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i,900,900i",rel:"stylesheet"})),o.a.createElement("noscript",null,'<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6HNZB" height="0" width="0" style="display:none;visibility:hidden"></iframe>'),o.a.createElement(E,null),o.a.createElement("main",null,t),o.a.createElement(w.a,null),o.a.createElement("script",{src:"https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"}),o.a.createElement("script",{dangerouslySetInnerHTML:{__html:"var scroll = new SmoothScroll('a[href*=\"#\"]', {offset: 150,easing: 'easeInOutCubic',updateURL: false});"}}),o.a.createElement("script",{dangerouslySetInnerHTML:{__html:'var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();'}}))},data:n})}},179:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(159);t.a=function(e){return i.a.createElement("div",{className:"partial-plans"},i.a.createElement("div",{className:"container"},"h1"===e.tag?i.a.createElement("h1",null,"Choose Your Membership Plan"):i.a.createElement("h2",null,"Choose Your Membership Plan"),i.a.createElement("div",{className:"partial-plans__items"},i.a.createElement("div",{className:"partial-plans__item"},i.a.createElement("div",{className:"partial-plans__item--title"},i.a.createElement("h3",null,"Quarterly Pass",i.a.createElement("br",null),i.a.createElement("small",null,"(3 months)"))),i.a.createElement("div",{className:"partial-plans__item--content"},i.a.createElement("p",null,"Purchase the Fitato Quarterly pass and get unlimited access to every Fitato partner facility for 3 months!"),i.a.createElement("p",{className:"partial-plans__item--price"},"₹5,499")),i.a.createElement("div",{className:"partial-plans__item--cta"},i.a.createElement("a",{href:"https://imjo.in/u76vFn",target:"_blank",rel:"noopener noreferrer",className:"button button-fluid"},"Buy Now"))),i.a.createElement("div",{className:"partial-plans__item"},i.a.createElement("div",{className:"partial-plans__item--title"},i.a.createElement("h3",null,"Bi-Monthly Pass",i.a.createElement("br",null),i.a.createElement("small",null,"(2 months)"))),i.a.createElement("div",{className:"partial-plans__item--content"},i.a.createElement("p",null,"Purchase the Fitato Bi-Monthly pass and get unlimited  access to every Fitato partner facility for 2 months!"),i.a.createElement("p",{className:"partial-plans__item--price"},"₹3,899")),i.a.createElement("div",{className:"partial-plans__item--cta"},i.a.createElement("a",{href:"https://imjo.in/TQqWQ9",target:"_blank",rel:"noopener noreferrer",className:"button button-fluid"},"Buy Now"))),i.a.createElement("div",{className:"partial-plans__item"},i.a.createElement("div",{className:"partial-plans__item--title"},i.a.createElement("h3",null,"Monthly Pass",i.a.createElement("br",null),i.a.createElement("small",null,"(1 month)"))),i.a.createElement("div",{className:"partial-plans__item--content"},i.a.createElement("p",null,"Purchase the Fitato Monthly pass and get unlimited access to every Fitato partner facility for  1 month!"),i.a.createElement("p",{className:"partial-plans__item--price"},"₹2,199")),i.a.createElement("div",{className:"partial-plans__item--cta"},i.a.createElement("a",{href:"https://imjo.in/wdS88s",target:"_blank",rel:"noopener noreferrer",className:"button button-fluid"},"Buy Now")))),i.a.createElement("div",{className:"partial-plans__speak"},i.a.createElement("p",{style:{marginBottom:"0"}},"You'll receive a confirmation call and email as soon as your payment is processed. Need recommendations or a crafted plan, please reach out to us at ",i.a.createElement("a",{href:"tel:+918200396237"},"+91 8200396237"),".")),i.a.createElement("div",{className:"partial-plans__fitquad"},"h1"===e.tag?i.a.createElement("h2",null,"Looking for more than one pass?"):i.a.createElement("h3",null,"Looking for more than one pass?"),i.a.createElement(o.Link,{to:"/fit-squad/",className:"button"},"View Fit Squad Plans"))))}}}]);
//# sourceMappingURL=component---src-pages-purchase-fitato-js-e89904ae6b108d790c8a.js.map
(this["webpackJsonpboiler-plate-app"]=this["webpackJsonpboiler-plate-app"]||[]).push([[0],{28:function(e,t,i){},29:function(e,t,i){},31:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),a=i(16),c=i.n(a),r=i(8),o=i(2),l=(i(28),i(9)),d=(i(29),i(17)),h=i(18),_=i(19),j=i(23),u=i(0);function m(e){return Object(u.jsx)("div",{style:b.card,id:e.id,children:e.image?Object(u.jsx)("img",{style:b.card_img,src:e.file_name,alt:"ok"}):Object(u.jsx)("video",{style:b.card_img,src:e.file_name,autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})}var b={card:{margin:0,padding:0,width:"inherit",height:"inherit",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},card_img:{maxWidth:"100%",minWidth:"100%",height:"auto",position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},p=n.a.memo(m),g=function(e){Object(_.a)(i,e);var t=Object(j.a)(i);function i(e){var s;return Object(d.a)(this,i),(s=t.call(this,e)).handle_gallery_resize=function(){s.new_width=s.props.gallery.current.getBoundingClientRect().width<1024?1024:s.props.gallery.current.getBoundingClientRect().width,s.view_port.style.width="".concat(s.new_width,"px"),s.selection_buttons_container.style.bottom="10px";for(var e=0;e<s.images.children.length;e++)s.selection_buttons_container.children[e].transitionDuration="0.0s",s.selection_buttons_container.children[e].style.width="".concat(.02*s.new_width,"px"),s.selection_buttons_container.children[e].style.height="".concat(.02*s.new_width,"px");s.order_cards(),s.right_boundary=parseFloat(s.images.children[s.number_of_cards_by_index].style.left)+s.new_width,s.left_boundary=parseFloat(s.images.children[0].style.left)-s.new_width;for(var t=0;t<s.images.children.length;t++)s.last_positions[t]=parseFloat(s.images.children[t].style.left)},s.update_selection=function(){for(var e=0;e<s.images.children.length;e++)e===s.current_card?(s.selection_buttons_container.children[e].style.backgroundColor="white",s.selection_buttons_container.children[e].style.boxShadow="0 0 10px 5px white"):(s.selection_buttons_container.children[e].style.backgroundColor="#ff4655",s.selection_buttons_container.children[e].style.boxShadow="0 0 10px 5px black")},s.order_cards=function(){for(var e=1,t=s.middle_card_by_index,i=0;i<s.images.children.length;i++)s.images.children[i].style.transitionDuration="0.0s",i<s.middle_card_by_index?(s.images.children[i].style.left="-".concat(t*s.new_width-s.new_width/2,"px"),t--):i>s.middle_card_by_index?(s.images.children[i].style.left="".concat(e*s.new_width+s.new_width/2,"px"),e++):s.images.children[i].style.left="".concat(s.new_width/2,"px")},s.handle_boundaries=function(){if(Math.round(s.last_positions[0])<=Math.round(s.left_boundary)){var e=s.last_positions[s.number_of_cards_by_index]+s.new_width;s.images.children[0].style.left="".concat(e,"px"),s.last_positions[0]=e,s.images.appendChild(s.images.children[0],s.images.children[s.number_of_cards_by_index]),s.last_positions.splice(s.number_of_cards_by_index,0,s.last_positions.shift())}if(Math.round(s.last_positions[s.number_of_cards_by_index])>=Math.round(s.right_boundary)){var t=s.last_positions[0]-s.new_width;s.images.children[s.number_of_cards_by_index].style.left="".concat(t,"px"),s.last_positions[s.number_of_cards_by_index]=t,s.images.insertBefore(s.images.children[s.number_of_cards_by_index],s.images.children[0]),s.last_positions.splice(0,0,s.last_positions.pop())}},s.handle_selection=function(e){if(e.target!==s.selection_buttons_container){clearTimeout(s.autoplay_timeout_id),clearInterval(s.autoplay_interval_id);for(var t=null,i=0;i<s.images.children.length;i++)e.target===s.selection_buttons_container.children[i]&&(t=i);var n=s.current_card;s.current_card=t,s.update_selection(),s.view_port.style.transitionDuration="0.5s",s.view_port.style.opacity=0,s.fade_out_timer=setTimeout((function(){for(var e=0;e<s.images.children.length;e++){var i=s.last_positions[e]+(n-t)*s.new_width;s.images.children[e].style.transitionDuration="0.0s",s.images.children[e].style.left="".concat(i,"px"),s.last_positions[e]=i}s.view_port.style.opacity=1;for(var a=0;a<Math.abs(n-t);a++)s.handle_boundaries();s.start_autoplay(),s.fade_in_timer=setTimeout((function(){s.view_port.style.transitionDuration="0.0s"}),500)}),500)}},s.start_autoplay=function(){clearTimeout(s.autoplay_timeout_id),clearInterval(s.autoplay_interval_id),s.autoplay_timeout_id=setTimeout((function(){s.autoplay_interval_id=setInterval((function(){s.view_port.style.transitionDuration="0.5s",s.view_port.style.opacity=0,s.fade_out_timer=setTimeout((function(){for(var e=0;e<s.images.children.length;e++){s.images.children[e].style.transitionDuration="0.0s";var t=s.last_positions[e]-s.new_width;s.images.children[e].style.left="".concat(t,"px"),s.last_positions[e]=t}s.view_port.style.opacity=1,s.current_card=s.current_card===s.number_of_cards_by_index?0:++s.current_card,s.handle_boundaries(),s.update_selection(),s.fade_in_timer=setTimeout((function(){s.view_port.style.transitionDuration="0.0s"}),500)}),500)}),2e3)}),1200)},s.state={cards:[Object(u.jsx)(p,{video:!0,file_name:"./images/gallery/val-video.mp4",id:"one"},"one"),Object(u.jsx)(p,{image:!0,file_name:"./images/gallery/val-main-splash.jpg",id:"two"},"two"),Object(u.jsx)(p,{image:!0,file_name:"./images/gallery/val-screen-1.jpg",id:"three"},"three"),Object(u.jsx)(p,{image:!0,file_name:"./images/gallery/val-screen-0.jpg",id:"four"},"four")]},s}return Object(h.a)(i,[{key:"componentDidMount",value:function(){this.number_of_cards_by_index=this.images.children.length-1,this.middle_card_by_index=Math.floor(this.number_of_cards_by_index/2),this.current_card=this.middle_card_by_index,this.new_width=this.props.gallery.current.getBoundingClientRect().width<1024?1024:this.props.gallery.current.getBoundingClientRect().width,this.view_port.style.width="".concat(this.new_width,"px"),this.selection_buttons_container.style.bottom="10px";for(var e=0;e<this.images.children.length;e++)this.selection_buttons_container.children[e].transitionDuration="0.0s",this.selection_buttons_container.children[e].style.width="".concat(.02*this.new_width,"px"),this.selection_buttons_container.children[e].style.height="".concat(.02*this.new_width,"px");this.order_cards(),this.update_selection(),window.addEventListener("resize",this.handle_gallery_resize),this.last_positions=[],this.right_boundary=parseFloat(this.images.children[this.number_of_cards_by_index].style.left)+this.new_width,this.left_boundary=parseFloat(this.images.children[0].style.left)-this.new_width;for(var t=0;t<this.images.children.length;t++)this.last_positions.push(parseFloat(this.images.children[t].style.left));this.scroll_in_progress=!1,this.autoplay_timeout_id=null,this.autoplay_interval_id=null}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handle_gallery_resize),clearTimeout(this.autoplay_timeout_id),clearTimeout(this.fade_out_timer),clearTimeout(this.fade_in_timer),clearInterval(this.autoplay_interval_id)}},{key:"render",value:function(){var e=this;return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{ref:function(t){return e.view_port=t},style:f.view_port,children:Object(u.jsx)("div",{ref:function(t){return e.images=t},style:f.images_container,children:this.state.cards})}),Object(u.jsx)("div",{onClick:this.handle_selection,ref:function(t){return e.selection_buttons_container=t},style:f.selection_buttons_container,children:this.state.cards.map((function(e,t){return Object(u.jsx)("div",{style:f.selection_button},t)}))})]})}}]),i}(s.Component),f={view_port:{margin:0,padding:0,width:"500px",height:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",overflow:"hidden"},images_container:{margin:0,padding:0,width:"inherit",height:"inherit",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},selection_buttons_container:{margin:0,padding:0,width:"fit-content",height:"fit-content",position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",pointerEvents:"none",zIndex:99999},selection_button:{marginRight:"15px",padding:0,width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"grey",pointerEvents:"all",cursor:"pointer"}},x=g;function O(e){return Object(u.jsxs)("div",{className:"point",children:[Object(u.jsx)("div",{className:"point_head",children:Object(u.jsx)("img",{src:e.icon,alt:""})}),Object(u.jsxs)("div",{className:"point_body",children:[Object(u.jsx)("div",{className:"point_name",children:e.name}),Object(u.jsx)("div",{className:"point_description",children:e.description})]})]})}function v(e){return Object(u.jsxs)("div",{className:"package",style:{backgroundColor:e.color},children:[Object(u.jsx)("img",{src:e.image,alt:"",className:"package_image"}),Object(u.jsxs)("div",{className:"package_information",children:[Object(u.jsxs)("div",{className:"package_head",children:[Object(u.jsx)("div",{className:"package_name",children:e.name}),Object(u.jsx)("div",{className:"package_description",children:e.description})]}),Object(u.jsxs)("div",{className:"package_body",children:[Object(u.jsx)("div",{className:"package_price",children:"$".concat(e.price)}),Object(u.jsx)("div",{className:"package_purchase",children:Object(u.jsx)("a",{href:"https://localhost",target:"_blank",rel:"noreferrer",children:"Purchase"})})]}),Object(u.jsxs)("div",{className:"package_foot",children:["Includes all base features:",Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Feature 1"}),Object(u.jsx)("li",{children:"Feature 2"}),Object(u.jsx)("li",{children:"Feature 3"}),Object(u.jsx)("li",{children:"Feature 4"})]})]})]})]})}var y=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(0),c=Object(l.a)(a,2),r=c[0],o=c[1],d=Object(s.useRef)(null);return Object(s.useEffect)((function(){o(d),n(!0)}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"section1",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{src:"./images/reyna.png",alt:"",className:"splash_image"}),Object(u.jsx)("img",{src:"./images/val-logo.png",alt:"",className:"splash_logo"}),Object(u.jsx)("div",{className:"sign_up",children:Object(u.jsx)("a",{href:"https://localhost",target:"_blank",rel:"noreferrer",children:"Sign Up"})})]}),Object(u.jsx)("div",{ref:d,className:"gallery",children:i?Object(u.jsx)(x,{gallery:r}):null})]}),Object(u.jsx)("div",{className:"section2",children:Object(u.jsxs)("div",{className:"marketing_points_container",children:[Object(u.jsx)(O,{icon:"./images/icons/val-symbol.png",name:"In the Crosses",description:"Rewards accuracy and skill"}),Object(u.jsx)(O,{icon:"./images/icons/bladestorm.png",name:"In the Crosses",description:"Rewards accuracy and skill"}),Object(u.jsx)(O,{icon:"./images/icons/dimensional-drift.png",name:"In the Crosses",description:"Rewards accuracy and skill"}),Object(u.jsx)(O,{icon:"./images/icons/empress.png",name:"In the Crosses",description:"Rewards accuracy and skill"}),Object(u.jsx)(O,{icon:"./images/icons/shock-bolt.png",name:"In the Crosses",description:"Rewards accuracy and skill"}),Object(u.jsx)(O,{icon:"./images/icons/turret.png",name:"In the Crosses",description:"Rewards accuracy and skill"})]})}),Object(u.jsx)("div",{className:"section3",children:Object(u.jsxs)("div",{className:"accolades_container",children:[Object(u.jsx)("div",{className:"accolade",children:Object(u.jsx)("i",{className:"fas fa-award"})}),Object(u.jsx)("div",{className:"accolade",children:Object(u.jsx)("i",{className:"fas fa-flag"})}),Object(u.jsx)("div",{className:"accolade",children:Object(u.jsx)("i",{className:"fas fa-award"})})]})}),Object(u.jsx)("div",{className:"section4",children:Object(u.jsxs)("div",{className:"packages_container",children:[Object(u.jsx)(v,{color:"#2BAD31",image:"./images/viper.png",name:"Package 1",description:"Just get the job done.",price:"29"}),Object(u.jsx)(v,{color:"#F56340",image:"./images/phoenix.png",name:"Package 2",description:"Just get the job done.",price:"29"}),Object(u.jsx)(v,{color:"#3694F4",image:"./images/jett.png",name:"Package 3",description:"Just get the job done.",price:"29"})]})}),Object(u.jsx)("div",{className:"section5",children:Object(u.jsxs)("div",{className:"contacts_container",children:[Object(u.jsx)("div",{className:"contact_section",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Affiliates"}),Object(u.jsx)("li",{children:"Careers"}),Object(u.jsx)("li",{children:"Privacy"})]})}),Object(u.jsx)("div",{className:"contact_section",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Telephone ",Object(u.jsx)("i",{className:"fas fa-phone-square-alt"})]}),Object(u.jsxs)("li",{children:["Email ",Object(u.jsx)("i",{className:"fas fa-envelope-open"})]})]})}),Object(u.jsx)("div",{className:"contact_section",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Instagram ",Object(u.jsx)("i",{className:"fab fa-instagram-square"})]}),Object(u.jsxs)("li",{children:["Twitter ",Object(u.jsx)("i",{className:"fab fa-twitter-square"})]}),Object(u.jsxs)("li",{children:["Facebook ",Object(u.jsx)("i",{className:"fab fa-facebook-square"})]})]})})]})})]})};var w={page:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#111111",fontSize:"4em"}},N=function(){return Object(u.jsx)("div",{style:w.page,children:"Products"})};var k={page:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#111111",fontSize:"4em"}},C=function(){return Object(u.jsx)("div",{style:k.page,children:"About"})};i(31);var I=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(),c=Object(l.a)(a,2),o=c[0],d=c[1];function h(){n(!i)}return Object(s.useEffect)((function(){window.innerWidth>600?d(!0):d(!1)}),[]),window.addEventListener("resize",(function(){window.innerWidth>600?d(!0):d(!1)})),Object(u.jsxs)("div",{className:"nav_bar",children:[Object(u.jsx)("div",{className:"icon_container menu_switch",children:Object(u.jsx)("div",{className:"back_contrast",children:o?Object(u.jsx)("i",{onClick:h,className:"".concat(i?"fas fa-times":"far fa-circle")}):Object(u.jsx)("i",{onClick:h,className:"".concat(i?"fas fa-times":"fas fa-bars")})})}),Object(u.jsxs)("div",{className:"nav_container ".concat(i?"menu_active":null),children:[Object(u.jsx)("div",{className:"icon_container logo",children:Object(u.jsx)("img",{src:"./images/icons/val-symbol.png",alt:""})}),Object(u.jsxs)("ul",{className:"menu_items",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/",onClick:h,children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/products",onClick:h,children:"Products"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/about",onClick:h,children:"About"})})]})]})]})};var F=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(I,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(u.jsx)(o.a,{exact:!0,path:"/products",component:N}),Object(u.jsx)(o.a,{exact:!0,path:"/about",component:C})]})]})};c.a.render(Object(u.jsx)(F,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ba99ae6c.chunk.js.map
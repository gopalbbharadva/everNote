(this.webpackJsonpevernote=this.webpackJsonpevernote||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},215:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),i=n(20),r=n.n(i),s=(n(98),n(17)),c=n.n(s),l=n(90),d=n(31),u=n(22),p=n(23),h=n(25),x=n(24),b=n(32);b.a.initializeApp({apiKey:"AIzaSyCZwcl3QrDlZIAeyJDzxEH1gKHikKIIwWE",authDomain:"evernote-8c2a5.firebaseapp.com",projectId:"evernote-8c2a5",storageBucket:"evernote-8c2a5.appspot.com",messagingSenderId:"931004243755",appId:"1:931004243755:web:655eeebf6677f999f56f6e"});var f=b.a.firestore(),N=(n(103),function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},titleInput:{minWidth:"20%",maxWidth:"100%",height:"50px",boxSizing:"border-box",border:"none",padding:"5px",fontSize:"24px",backgroundColor:"#10B981",color:"white",paddingLeft:"50px"},editIcon:{marginLeft:"1rem",position:"absolute",top:"16px",color:"white",width:"10",height:"10"},editorContainer:{display:"flex",alignItems:"flex-start",flexDirection:"column",minWidth:"80%",maxWidth:"100%",height:"100%",boxSizing:"border-box"}}}),j=(n(104),n(234)),m=n(12),g=n(82),v=n.n(g),O=n(238),w=n(7),k=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.setState({text:e.props.selectedNote.body,title:e.props.selectedNote.title,id:e.props.selectedNote.id})},e.componentDidUpdate=function(){e.props.selectedNote.id!==e.state.id&&e.setState({text:e.props.selectedNote.body,title:e.props.selectedNote.title,id:e.props.selectedNote.id})},e.updateText=function(){var t=Object(d.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({text:n});case 2:e.update();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateTitle=function(){var t=Object(d.a)(c.a.mark((function t(n){var o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.target.value,t.next=3,e.setState({title:o});case 3:e.update();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.update=Object(j.a)((function(){e.props.noteUpdate(e.state.id,{title:e.state.title,body:e.state.text})}),1500),e.state={text:"",title:"",id:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(w.jsxs)("div",{className:"editorContainer",children:[Object(w.jsx)(O.a,{className:t.editIcon}),Object(w.jsx)("input",{className:"titleInput",type:"text",placeholder:"Enter title...",value:this.state.title,onChange:function(t){return e.updateTitle(t)}}),Object(w.jsx)(v.a,{value:this.state.text,onChange:this.updateText})]})}}]),n}(a.a.Component),I=Object(m.a)(N)(k),C=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",minWidth:"300px",boxShadow:"0px 0px 2px black"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"},newNoteBtn:{minWidth:"100%",maxWidth:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#10B981",color:"black","&:hover":{backgroundColor:"#6EE7B7"}},newNoteBtnCancel:{minWidth:"100%",maxWidth:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#DC2626",color:"black","&:hover":{backgroundColor:"#FCA5A5"}},sidebarContainer:{width:"30%",maxWidth:"100%",height:"100%",boxSizing:"border-box",float:"left",overflowY:"scroll",overflowX:"hidden"},newNoteInput:{minWidth:"100%",maxWidth:"100%",margin:"0px",height:"35px",outline:"none",border:"none",paddingLeft:"5px","&:focus":{outline:"2px solid rgba(81, 203, 238, 1)"}},newNoteSubmitBtn:{minWidth:"100%",maxwidth:"100%",backgroundColor:"#2563EB",borderRadius:"0px",color:"white","&:disabled":{backgroundColor:"#9CA3AF",color:"black"},"&:hover":{backgroundColor:"#93C5FD"}}}},y=n(235),S=n(236),B=n(237),W=function(e){return{listItem:{cursor:"pointer"},textSection:{maxWidth:"85%"},deleteIcon:{position:"absolute",marginTop:"0.5rem",right:"5px",top:"calc(50% - 15px)","&:hover":{color:"red"}}}},A=n(240),D=n(239);var T=n(88),F=n(89),E=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).forSelectNote=function(t,n){e.props.selectNote(t,n)},e.forDeleteNote=function(t){if(!window.confirm("Are you sure you want to delet ".concat(t.title)))return null;e.props.deleteNote(t)},e}return Object(p.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.note,a=n.index,i=n.selectedNoteIndex,r=n.classes;return Object(w.jsx)("div",{id:a,children:Object(w.jsxs)(A.a,{className:r.listItem,selected:i===a,"align-items":"flex-start",children:[Object(w.jsx)("div",{className:r.textSection,onClick:function(){return t.forSelectNote(o,a)},children:Object(w.jsx)(D.a,{primary:o.title,secondary:(e=o.body.substring(0,40)+"...",e.replace(/<[^>]*>?/gm,""))})}),Object(w.jsx)("div",{style:{marginRight:"1rem"},className:r.deleteIcon,onClick:function(){return t.forDeleteNote(o)},children:Object(w.jsx)(T.a,{className:r.deleteIcon,icon:F.a})})]})})}}]),n}(a.a.Component),z=Object(m.a)(W)(E),U=(n(215),n(216),function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).addNewNote=function(){e.setState({addingNote:!e.state.addingNote,title:null,flag:!e.state.flag}),console.log(e.state.flag)},e.updateTitle=function(t){e.setState({title:t.target.value})},e.newNote=function(){e.props.makeNewNote(e.state.title),e.setState({title:null,addingNote:!1,flag:!1})},e.selectNote=function(t,n){return e.props.selectNote(t,n)},e.deleteNote=function(t){return e.props.deleteNote(t)},e.state={addingNote:!1,title:null,flag:!1},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.notes,o=t.classes,a=t.selectedNoteIndex;return n?Object(w.jsxs)("div",{className:"sidebarContainer",children:[Object(w.jsx)(y.a,{className:this.state.flag?o.newNoteBtnCancel:o.newNoteBtn,onClick:this.addNewNote,children:this.state.addingNote?"Cancel note":"Add New Note"}),this.state.addingNote?Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{type:"text",className:o.newNoteInput,onKeyUp:function(t){return e.updateTitle(t)},placeholder:"Enter note here.."}),Object(w.jsx)(y.a,{disabled:!this.state.title,className:o.newNoteSubmitBtn,onClick:this.newNote,children:"Submit Note"})]}):null,Object(w.jsx)(S.a,{children:n.map((function(t,n){return Object(w.jsxs)("div",{children:[Object(w.jsx)(z,{note:t,index:n,selectedNoteIndex:a,selectNote:e.selectNote,deleteNote:e.deleteNote}),Object(w.jsx)(B.a,{})]},n)}))})]}):Object(w.jsx)("div",{})}}]),n}(a.a.Component)),L=Object(m.a)(C)(U),R=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).componentDidMount=function(){f.collection("notes").orderBy("createdAt","desc").onSnapshot((function(t){var n=t.docs.map((function(e){var t=e.data();return t.id=e.id,t}));e.setState({note:n})}))},e.selectNote=function(t,n){e.setState({selectedNote:t,selectedNoteIndex:n})},e.noteUpdate=function(e,t){f.collection("notes").doc(e).update({title:t.title,body:t.body,createdAt:b.a.firestore.FieldValue.serverTimestamp()})},e.makeNewNote=function(){var t=Object(d.a)(c.a.mark((function t(n){var o,a,i,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={title:n,body:""},t.next=3,f.collection("notes").add({title:o.title,body:o.body,createdAt:b.a.firestore.FieldValue.serverTimestamp()});case 3:a=t.sent,i=a.id,e.setState({note:[].concat(Object(l.a)(e.state.note),[o])}),r=e.state.note.indexOf(e.state.note.filter((function(e){return e.id===i}))[0]),e.setState({selectedNote:e.state.note[r],selectedNoteIndex:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteNote=function(){var t=Object(d.a)(c.a.mark((function t(n){var o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.state.note.indexOf(n),t.next=3,e.setState({note:e.state.note.filter((function(e){return e!==n}))});case 3:e.state.selectedNoteIndex===o?e.setState({selectedNoteIndex:0,selectedNote:0}):e.state.selectedNoteIndex>o?(e.selectNote(e.state.note[e.state.selectedNoteIndex-1],e.state.selectedNoteIndex-1),console.log("skdk",e.state.note.length)):e.state.selectedNoteIndex<o?e.selectNote(e.state.note[e.state.selectedNoteIndex],e.state.selectedNoteIndex):(e.setState({selectedNoteIndex:null,selectedNote:null}),console.log(e.state.note.length)),f.collection("notes").doc(n.id).delete();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={selectedNoteIndex:null,selectedNote:null,note:[]},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"app-container",children:[Object(w.jsx)(L,{selectNote:this.selectNote,deleteNote:this.deleteNote,makeNewNote:this.makeNewNote,notes:this.state.note,selectedNoteIndex:this.state.selectedNoteIndex}),this.state.selectedNote?Object(w.jsx)(I,{selectedNote:this.state.selectedNote,selectedNoteIndex:this.state.selectedNoteIndex,note:this.state.note,noteUpdate:this.noteUpdate}):null]})}}]),n}(a.a.Component),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,241)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))};r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(R,{})}),document.getElementById("evernote-container")),K()},98:function(e,t,n){}},[[217,1,2]]]);
//# sourceMappingURL=main.7de4465c.chunk.js.map
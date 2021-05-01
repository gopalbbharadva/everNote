
const style = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      minWidth: '300px',
      boxShadow: '0px 0px 2px black'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    newNoteBtn: {
      minWidth:"100%",
      maxWidth:"100%",
      height: '35px',
      borderBottom: '1px solid black',
      borderRadius: '0px',
      backgroundColor: '#10B981',
      color: 'black',
      '&:hover': {
        backgroundColor: '#6EE7B7'
      }
    },
    newNoteBtnCancel: {
      minWidth: '100%',
      maxWidth:"100%",
      height: '35px',
      borderBottom: '1px solid black',
      borderRadius: '0px',
      backgroundColor: '#DC2626',
      color: 'black',
      '&:hover': {
        backgroundColor: '#FCA5A5'
      }
    },
    sidebarContainer: {
      width:"30%",
      maxWidth:'100%',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
    newNoteInput: {
      minWidth: '100%',
      maxWidth:"100%",
      margin: '0px',
      height: '35px',
      outline: 'none',
      border: 'none',
      paddingLeft: '5px',
      '&:focus': {
        outline: '2px solid rgba(81, 203, 238, 1)'
      }
    },
    newNoteSubmitBtn: {
      minWidth:"100%",
      maxwidth: '100%',
      backgroundColor: '#2563EB',
      borderRadius: '0px',
      color: 'white',
      '&:disabled':{
        backgroundColor:"#9CA3AF",
        color:"black"
      },
      '&:hover':{
        backgroundColor:"#93C5FD",
      }
    }
  });
  
  export default style;
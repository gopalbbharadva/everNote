const style = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    titleInput: {
      minWidth: "20%",
      maxWidth: "100%",
      height: '50px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '5px',
      fontSize: '24px',
      backgroundColor: '#10B981',
      color: 'white',
      paddingLeft: '50px'
    },
    editIcon: {
      marginLeft:"1rem",
      position: 'absolute',
      top: '15px',
      color: 'white',
      width: '10',
      height: '10'
    },
    editorContainer: {
      display:"flex",
      alignItems:"flex-start",
      flexDirection:"column",
      minWidth: "80%",
      maxWidth: "100%",
      height: '100%',
      boxSizing: 'border-box'
    },
  });
  
  export default style;
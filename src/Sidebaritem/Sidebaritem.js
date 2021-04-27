import React from 'react'
import style from '../Sidebaritem/style';
import { withStyles } from '@material-ui/core';


class Sidebaritem extends React.Component{
    render()
    {
        return <div>{this.props.note.title}</div>
    }
}

export default withStyles(style)(Sidebaritem);
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './portal-contain.css'
export default class PortalsContainer extends Component {
    constructor(props) {
        super(props)
        // const containers = document.getElementById(props.containerId);
        // debugger
        // console.log(props,containers)
        // console.log(containers)
        // this.el = document.createElement('div')
        // containers.appendChild(this.el)
        this.el = document.createElement('div');
        document.body.appendChild(this.el);
    }
    componentWillUnmount() {
        // document.getElementById(this.props.containerId).removeChild(this.el)
        document.body.removeChild(this.el);
        // console.log("unmount")
    }
    render() {
        return ReactDom.createPortal(<div className="portals-container">{this.props.children}</div>, this.el)
    }
    
}

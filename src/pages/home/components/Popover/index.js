import React, { Component } from 'react'
import { PopoverWrapper, Dialog } from './style'
import PortalsContainer from '../../../../common/PortalsContainer'
export default class Popover extends Component {
    constructor(props) {
        super(props);
        this.refsArray = [];
        this.state = {
            left: 0,
            top: 0,
            visible: false,
            opacity: 0
        }
    }
    componentDidMount() {
        this.refsArray.forEach(ref => {
            // console.log(ref.current.offsetTop);
            // console.log(ref.current)
            ref.current.onmouseover = () => {
                this.setState({visible: true,opacity:1})
            }
            ref.current.onmouseleave = () => {
                this.setState({visible: false,opacity:0})
            }
          })
        this.setState({
            left: this.refsArray[0].current.offsetLeft,
            top: this.refsArray[0].current.offsetTop,
        })
          
    }
    render() {
        return (
            <>
            {
                // render the chilrden wrap by PopOver
                React.Children.map(this.props.children, (child, index) => {
                    const ref = React.createRef();
                    this.refsArray.push(ref); 

                    return React.cloneElement(child, {ref, key: index});
                    })
            }
                {/* render the PopOver view, the component will be mounted at the same level as div#root */}
                <PortalsContainer>
                    <PopoverWrapper 
                        left={this.state.left}
                        top={this.state.top}
                        opacity = {this.state.opacity}
                    >
                        <Dialog>
                            <span className="org_bot_cor"></span>
                            {/* 作为组件时可以通过props传入内容，不过这里做成了展示一个QRBOX */}
                        </Dialog>
                        
                    </PopoverWrapper>
                </PortalsContainer>
            </>   
        )
    }
}

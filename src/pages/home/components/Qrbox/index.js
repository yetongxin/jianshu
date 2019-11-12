import React, { Component } from 'react'
import { QrBoxWrapper, QrInfo , QrInfoTitle , QrInfoDescription } from './style'
import Popover from '../Popover'
export default class QrBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        
    }
    render() {
        
        return (
            <>
            <Popover>
                <QrBoxWrapper id="mount-node" 
                    onMouseEnter = {()=>{this.setState({visible: true})}}
                    onMouseLeave = {()=>{this.setState({visible:false})}}
                >
                    <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"></img>
                    
                        <QrInfo>
                            <QrInfoTitle> 下载简书手机App</QrInfoTitle>
                            <QrInfoDescription>随时随地发现和创作内容</QrInfoDescription>
                        </QrInfo>
                
                    
                    {/* <Popover></Popover> */}
                </QrBoxWrapper>
            </Popover>
            {/* {this.state.visible && <Popover><p style={{fontSize:14}}>hello<p>world</p></p></Popover>} */}
            </>
        )
    }
}

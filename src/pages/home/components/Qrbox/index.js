import React, { Component } from 'react'
import { QrBoxWrapper, QrInfo , QrInfoTitle , QrInfoDescription } from './style'
export default class QrBox extends Component {
    render() {
        return (
            <QrBoxWrapper>
                <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"></img>
                <QrInfo>
                    <QrInfoTitle> 下载简书手机App</QrInfoTitle>
                    <QrInfoDescription>随时随地发现和创作内容</QrInfoDescription>
                </QrInfo>
            </QrBoxWrapper>
            
        )
    }
}

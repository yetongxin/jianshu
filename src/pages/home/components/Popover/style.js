import styled from 'styled-components'

export const PopoverWrapper = styled.div`
    position: absolute;
    top: ${props => props.top ? props.top-220+"px" : "0px"};
    left: ${props => props.left ? props.left+"px" : "0px"};
    // width: 200px;
    // height: 200px;
    // background: blue;
    background-color: #fcfcfc;
    z-index: 99;
    opacity: ${props => props.opacity}
    transition: opacity .51s;
`
export const Dialog = styled.div`
    width: 200px;
    height:200px;
    line-height:200px; 
    border: solid 1px #4e4d4d;
    // margin-bottom:30px; 
    padding: 1em;
    background-color: #fcfcfc;
    background: url('//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'); 
    background-size: contain;
    background-repeat: no-repeat;
    background-origin: content-box;
    position:relative; 
    & span {
        width:0; 
        height:0; 
        font-size:0; 
        border-width:13px; 
        border-style:solid; 
        border-color:#f7f7f7 transparent transparent; 
        _border-color:#f7f7f7 white white; 
        overflow:hidden; 
        position:absolute; 
        left:60px; 
        bottom:-26px;
    }
`
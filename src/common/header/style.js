import styled from 'styled-components';
import logoPic from '../../static/logo.png';
import betaPic from '../../static/beta.png';
export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    
`

export const Link = styled.a`
    width: 100px;
    height: 56px;
    display: inline-block;
    background: blue;
    margin-right: 80px;
    position: absolute;
    left: 10%;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    display: block;
    width : 1200px;
    height: 56px;
    margin: 0 auto;
`

export const NavItem = styled.a`
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    text-align: center;
    float: left;
    font-size: 18px;
    text-decoration: none;
    &.first-page {
        font-size: 18px;
        color: #ea6f5a;
        // margin-left:70px;
    }
    &.download {
        color: #333;
        &:hover{
            color: #2f2f2f;
            background: #eee;
        }
    }
    &.right {
        float: right
    }
    &.login {
        color: #969696
    }
    &.beta-icon {
        position: relative;
        box-sizing: border-box;
        width: 56px;
        padding: 0;
        margin: 0 12px; 
        & img {
            position: absolute;
            top: 0; bottom: 0; left:0;right:0;
            margin:auto;
            width: 56px;
            height: 28px;
            
        }
    }
`

export const ButtonWrapper = styled.div`
    float: right;
    height: 56px;
    line-height: 56px;
`
export const Button = styled.div`
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 28px;
    border: 1px solid #ec6149;
    margin: 0 10px;
    cursor: pointer;
    &.register{
        border-color:#ec6149;
        color:#ec6149;
        &:hover{
            background-color:rgba(236,97,73,.05);
        }
    }
    &.write{
        background-color:#ea6f5a;
        color: #fff;
        border: 1px solid transparent;
    }

`
export const SearchWrapper = styled.div`
    float:left;
    position: relative;

    // width:  240px;不要设置宽度，让wrapper宽度随着里面元素变化
    height: 56px;
    line-height: 56px;
    & a{
        position: absolute;
        right: 0;

        margin: 0 12px 0 0;

        color: #999;

        text-decoration: none;
        // height: 16px;
        &.focused i{
            padding: 6px;
            // border: 1px blue solid;
            background: #999;
            color: #fff;
            border-radius: 20px;
        }
    }

`
export const Search = styled.input.attrs({
	placeholder: '搜索'
})`
    box-sizing: border-box;
    
    width: 240px;
    height: 38px;
    padding: 0 40px 0 20px;
    border: 1px solid #eee;
    border-radius: 40px;
    
    background: #eee;
    outline:none

    // transition: width .5s;

    &::placeholder{
        color: #999;
    }
    &.focused{
        // color: red;
        width: 320px;
    }
    &.slide-enter {
		transition: all .4s ease-out;
	}
	&.slide-enter-active {
		width: 320px;
	}
	&.slide-exit {
		transition: all .4s ease-out;
	}
	&.slide-exit-active {
		width: 240px;
	}
`
export const SearchInfoWrapper = styled.div`
    position: absolute;
    top: 56px; left: 0px;
    width: 320px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
    z-index: 99;
`
export const SearchInfoTitle = styled.div`
    height: 40px;
    line-height: 40px;
    overflow: hidden;

    font-size: 14px;
	color: #969696;
    // background: red;
`
export const SearchInfoSwitch = styled.div`

    float: right;

    font-size: 14px;
	color: #969696;
    cursor: pointer;
    overflow: hidden;

    user-select: none;
    i {
        float: left;
        display: block;
        width: 16px;
        margin-right: 2px;
        transition: all .3s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoContent = styled.div`
    padding-bottom: 10px;
    // overflow: hidden;清除浮动两种方法
    &:after{
        content:'';
        display: block;
        clear: both;
    }
    // width: 320px;
    // height: 80px;

    // background: blue;
`
export const SearchInfoItem = styled.div`
    float: left;
    // display: inline-block;
    // width: 40px;
    height:20px;
    line-height: 20px;
    padding: 0 5px;
    border: 1px solid #ddd;
	border-radius: 3px;
    margin-left: 8px;
    margin-bottom: 8px;

    font-size: 12px;
    color: #787878;
    cursor: pointer;

`
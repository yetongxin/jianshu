import React, { Component } from 'react'
import { HeaderWrapper, Link, Logo, Nav, NavItem, ButtonWrapper, Button, SearchWrapper, Search,SearchInfoWrapper,SearchInfoTitle,SearchInfoContent, SearchInfoSwitch, SearchInfoItem,FixWrapper } from './style.js'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import betaImgSrc from '../../static/beta.png'
import { ActionCreator } from './store/index.js';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedSearch : false
        }
    }
    getSearchInfoList = () => {
        const {curSearchPage, totalSearchPage, searchInfoList} = this.props;
        if(!searchInfoList) {
            return null
        }
        const searchItemPerPage = 10;
        let start = (curSearchPage - 1) * searchItemPerPage;
        let end = curSearchPage * searchItemPerPage;

        let renderElems = []
        for(let i = start; i < end; i++){
            renderElems.push(
                (<SearchInfoItem key={i}>
                    {searchInfoList.get(i)}
                </SearchInfoItem>)
            )
        }
        return renderElems;
    }
    render() {
        const { 
            // variables:
            focusedSearch,searchInfoList, isMouseEnter, curSearchPage, totalSearchPage
            // events:
            , handleInputFocus, handleInputBlur
            , onMouseEnter, onMouseLeave,switchSeachInfo} = this.props;
        // let { focusedSearch } = this.state;
        
        return(
            <FixWrapper>

                <HeaderWrapper>

                    
                    <Nav>
                        <Link className="link" href="#">
                        </Link>
                        <NavItem className="first-page" href="#"><i className="iconfont">&#xe604;</i>首页</NavItem>
                        <NavItem className="download" href="#"><i className="iconfont">&#xe666;</i>下载App</NavItem>
                        
                        <SearchWrapper className="left">
                            <CSSTransition
                                    in={focusedSearch}
                                    timeout={400}
                                    classNames="slide"
                                >
                                <Search className={focusedSearch ? 'focused': ''}
                                    onFocus={() => handleInputFocus(curSearchPage, searchInfoList)}
                                    onBlur={handleInputBlur} />
                            </CSSTransition>
                            <a href="#" className={focusedSearch ? "zoom focused":"zoom" }>
                                <i className="iconfont">&#xe600;</i>
                            </a>
                            {focusedSearch || isMouseEnter ?
                            <SearchInfoWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <SearchInfoTitle>
                                    热门搜索
                                    <SearchInfoSwitch onClick={() => switchSeachInfo(this.spinIcon)}>
                                        <i ref={(icon) => this.spinIcon = icon} className="iconfont">&#xe851;</i>
                                        换一批
                                    </SearchInfoSwitch>
                                </SearchInfoTitle>
                                <SearchInfoContent>
                                    {this.getSearchInfoList()}
                                </SearchInfoContent>
                            </SearchInfoWrapper> : null
                            }

                        </SearchWrapper>
                        <ButtonWrapper className="right">
                            <Button className="register">
                                注册
                            </Button>

                            <Button className="write">
                                <i className="iconfont">&#xe602;</i>
                                写文章
                            </Button>
                        </ButtonWrapper>
                        <NavItem className="right login" href="#">登录</NavItem>
                        <NavItem className="right beta-icon" href="#"><img src={betaImgSrc}/></NavItem>
                        <NavItem className="right" href="#"><i className="iconfont Aa">&#xe601;</i></NavItem>

                    </Nav>
                    
                </HeaderWrapper>
                            
            </FixWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        //注意这里是header的reducer,因此是state.header,header这个属性在全局的reducer中配置
        focusedSearch: state.header.get('focusedSearch'),
        searchInfoList: state.header.get('searchInfoList'),
        mouseOnSearchInfo: state.header.get('mouseOnSearchInfo'),
        isMouseEnter: state.header.get('isMouseEnter'),
        curSearchPage: state.header.get('curSearchPage'),
        totalSearchPage: state.header.get('totalSearchPage')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: (curPage, list) => {
            dispatch(ActionCreator.SearchFocus());
            !list && dispatch(ActionCreator.GetSearchInfoAsync(curPage));
        },
        handleInputBlur: () => {
            dispatch(ActionCreator.SearchBlur());
        },
        onMouseEnter: () => {
            dispatch(ActionCreator.MouseEnter())
        },
        onMouseLeave: () => {
            dispatch(ActionCreator.MouseLeave())
        },
        switchSeachInfo: (spinIcon) => {
            let originAngle = spinIcon.style.transform? parseInt(spinIcon.style.transform.replace(/[^0-9]/ig, '')):0;
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            dispatch(ActionCreator.SwitchSeachInfo())
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Header);
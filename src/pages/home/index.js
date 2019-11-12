import React, { Component } from 'react'
import { HomeWrapper, Main, Aside, LoadMore, BackToTop } from './style'
import  ArticleList from './components/ArticleList'
import Board from './components/Board'
import QrBox from './components/Qrbox'
import RecommendAuthList from './components/RecommendAuthList'
import { connect } from 'react-redux'
import { ActionCreator } from './store'
class Home extends Component {
    constructor(props) {
        super(props);
        this.bindEvents = this.bindEvents.bind(this);
    }
    componentDidMount() {
        this.props.getArticleList();
        this.bindEvents();
    }
    componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
    render() {
        const { articleList,writerList,curPage, loadMore, backTopShow } = this.props;
        return (
            <HomeWrapper>
                <Main>
                    <ArticleList articleList={articleList} history={this.props.history}/>
                    <LoadMore onClick={() => { loadMore(curPage+1)}}>加载更多</LoadMore>
                </Main>
                <Aside>
                    <Board />
                    <QrBox />
                    <RecommendAuthList writerList={writerList}/>
                </Aside>
                {backTopShow&&<BackToTop onClick={() => {document.documentElement.scrollTop = 0;}}>^</BackToTop>}
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.home.get('articleList'),
        writerList: state.home.get('writerList'),
        curPage: state.home.get('curPage'),
        backTopShow: state.home.get('backTopShow')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getArticleList: () => {
            dispatch(ActionCreator.getArticleListAsync())
        },
        loadMore: (curPage)=>{
            dispatch(ActionCreator.loadMoreArticle(curPage));
        },
        changeScrollTopShow: () => {
            if (document.documentElement.scrollTop > 100) {
                dispatch(ActionCreator.toggleTopShow(true))
            }else {
                dispatch(ActionCreator.toggleTopShow(false))
            }
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

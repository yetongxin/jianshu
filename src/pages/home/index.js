import React, { Component } from 'react'
import { HomeWrapper, Main, Aside } from './style'
import  ArticleList from './components/ArticleList'
import Board from './components/Board'
import QrBox from './components/Qrbox'
import RecommendAuthList from './components/RecommendAuthList'
class Home extends Component {
    

    render() {
        return (
            <HomeWrapper>
                <Main>
                    <ArticleList />
                </Main>
                <Aside>
                    <Board />
                    <QrBox />
                    <RecommendAuthList />
                </Aside>
            </HomeWrapper>
        )
    }
}

export default Home;

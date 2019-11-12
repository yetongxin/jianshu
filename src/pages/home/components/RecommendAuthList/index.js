import React, { Component } from 'react'
import {RecommendAuthListWrapper, RecommendTitle, WriterSwitch, RecommendContentUl, WriterLi, FindMoreButton} from './style'
export default class RecommendAuthList extends Component {
    render() {
        const { writerList } = this.props;
        return (
            <RecommendAuthListWrapper>
                <RecommendTitle>
                    推荐作者
                    <WriterSwitch>
                        <i ref={(icon) => this.spinIcon = icon} className="iconfont">&#xe851;</i>
                        换一批
                    </WriterSwitch>
                </RecommendTitle>
                <RecommendContentUl>
                    {
                        writerList.map((item,index) => (
                        <WriterLi key={index}>
                            <a className="avatar">
                                <img src={item.get('avatar')} />
                            </a>
                            <a href="#" className="follow">
                                {/* <i></i> */}
                                关注
                            </a>
                            <a className="name" href="#">{item.get('name')}</a>
                            <p>{item.get('desc')}</p>
                        </WriterLi>
                            ) 
                        )
                    }
                    <FindMoreButton>
                        查看全部 >
                    </FindMoreButton>
                </RecommendContentUl>
            </RecommendAuthListWrapper>
        )
    }
}

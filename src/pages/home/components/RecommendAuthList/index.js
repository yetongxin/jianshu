import React, { Component } from 'react'
import {RecommendAuthListWrapper, RecommendTitle, WriterSwitch, RecommendContentUl, WriterLi, FindMoreButton} from './style'
export default class RecommendAuthList extends Component {
    render() {
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
                    <WriterLi>
                        <a className="avatar">
                            <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" />
                        </a>
                        <a href="#" className="follow">
                            {/* <i></i> */}
                            关注
                        </a>
                        <a className="name" href="#">董克平日记</a>
                        <p>写了746k字 · 2.2k喜欢</p>
                    </WriterLi>

                    <WriterLi>
                        <a className="avatar">
                            <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" />
                        </a>
                        <a href="#" className="follow">
                            {/* <i></i> */}
                            关注
                        </a>
                        <a className="name" href="#">董克平日记</a>
                        <p>写了746k字 · 2.2k喜欢</p>
                    </WriterLi>

                    <WriterLi>
                        <a className="avatar">
                            <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" />
                        </a>
                        <a href="#" className="follow">
                            {/* <i></i> */}
                            关注
                        </a>
                        <a className="name" href="#">董克平日记</a>
                        <p>写了746k字 · 2.2k喜欢</p>
                    </WriterLi>

                    <WriterLi>
                        <a className="avatar">
                            <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" />
                        </a>
                        <a href="#" className="follow">
                            {/* <i></i> */}
                            关注
                        </a>
                        <a className="name" href="#">董克平日记</a>
                        <p>写了746k字 · 2.2k喜欢</p>
                    </WriterLi>

                    <WriterLi>
                        <a className="avatar">
                            <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" />
                        </a>
                        <a href="#" className="follow">
                            {/* <i></i> */}
                            关注
                        </a>
                        <a className="name" href="#">董克平日记</a>
                        <p>写了746k字 · 2.2k喜欢</p>
                    </WriterLi>

                    <FindMoreButton>
                        查看全部 >
                    </FindMoreButton>
                </RecommendContentUl>
            </RecommendAuthListWrapper>
        )
    }
}

import React, { Component } from 'react'
import { ArticleListWrapper,Item, ItemContent, ItemTitle, ItemMeta, ItemAbstract, ItemImg } from './style'
import { Link } from 'react-router-dom';
export default class AticleList extends Component {
    render() {
        const { articleList } = this.props;
        return (
            <ArticleListWrapper>
            {articleList.map( (item,index) => (
                <Item key={index}>
                    {/* <Link to={'/detail/' + item.get('id')} className="router-link"> */}
                        <ItemContent>
                            <ItemTitle onClick={()=>{this.props.history.push("/detail/"+item.get('id'))}}>{item.get('title')}</ItemTitle>
                            <ItemAbstract>{item.get('abstract')}</ItemAbstract>
                            <ItemMeta></ItemMeta>
                        </ItemContent>
                        <ItemImg src={item.get('imgUrl')}/>
                    {/* </Link> */}
                </Item>
            ))
            }
           </ArticleListWrapper>
        )
    }
}

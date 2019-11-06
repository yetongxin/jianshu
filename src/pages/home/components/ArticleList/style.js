import styled from 'styled-components'

export const ArticleListWrapper = styled.ul`
    box-sizing: border-box;

    display: block;
    width: 100%
`


export const Item = styled.li`
    position: relative;

    margin-bottom: 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0
`
export const ItemContent = styled.div`
    padding-right: 165px;

`
export const ItemTitle = styled.a.attrs({'href':'#'})`
    display:block;
    margin: 4px 0px 4px 0px;

    font-weight: 700;
    font-size: 18px;
    color: black;
    text-decoration: none;
    // &:visited {
    //     color: #969696;
    // }
    &:hover {
        text-decoration: underline;
    }
`

export const ItemAbstract = styled.p`
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
`
export const ItemMeta = styled.div`
    height: 20px;
`
export const ItemImg = styled.img.attrs({'src':'https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'})`
    position: absolute;
    top: 50%;
    right: 0;

    width: 150px;
    height: 100px;
    margin-top: -60px;
`

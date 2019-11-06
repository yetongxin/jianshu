import styled from 'styled-components'

export const RecommendAuthListWrapper = styled.div`
    width: 280px;
    margin-top: 10px;
`

export const RecommendTitle = styled.div`
    margin: 14px 0 18px;
    font-size: 14px;
    color: #969696;
`
export const WriterSwitch = styled.div`

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
export const RecommendContentUl = styled.ul`

`
export const WriterLi = styled.li`
    overflow: hidden;
    margin-top: 10px;

    & a{
        text-decoration: none;
    }
    & a.avatar{
        float: left;
        
        width: 48px;
        height: 48px;
        margin-right: 10px;
        & img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1px solid #ddd;
        }
    }
    & a.follow{
        float: right;
        margin-top: 5px;
        color: #42c02e;
        font-size: 13px;
    }
    & a.name{
        display: block;
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        color: black;
    }
    & p {
        margin-top: 8px;
        font-size: 12px;
        color: #969696;
    }
    
`
export const FindMoreButton = styled.button`
    width: 100%;
    padding: 7px;
    margin-top: 10px;
    border: solid 1px #dcdcdc;
    border-radius: 4px;
    color: #787878;
    background-color: #f7f7f7;
    font-size: 13px;
    outline: none;
    cursor: pointer;

`
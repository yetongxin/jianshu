import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    width: 960px;
    margin: 100px auto;
`
export const LoadMore = styled.div`
    width:100%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;

    background-color: #a4a2a2;
    color: #ffffff;
    cursor:pointer;
`
export const Main = styled.main`
    flex: 2
`  
export const Aside = styled.aside`
    flex: 1;

    margin-left: 40px;
`
export const BackToTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #dcdcdc;
    text-align: center;
    font-size: 20px;
    display: block;
    &:hover {
        background-color: hsla(0,0%,71%,.1);
    }
` 
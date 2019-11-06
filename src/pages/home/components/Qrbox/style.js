import styled from 'styled-components'
//这里试试flex布局
export const QrBoxWrapper = styled.a.attrs({href:"#"})`
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 280px;
    height: 80px;
    border:1px solid #f0f0f0;
    margin-top: 5px;
    text-decoration: none;

    & img {
        display: inline-block;
        width: 60px;
        height: 60px;
    }
`
// export const QrBoxWrapper = styled.
export const QrInfo = styled.div`
    display: inline-block;
    margin-left: 7px;

`
export const QrInfoTitle = styled.div`
    font-size: 15px;
    color: #333
`
export const QrInfoDescription = styled.div`
    font-size: 13px;
    line-height: 24px;
    color: #999
`


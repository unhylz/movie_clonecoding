import styled from 'styled-components';

const StyledAppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledMovieContainer = styled.div`
    position: relative;
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    
    img {
        max-width: 100%;
    }
    
    &:hover {
        filter: brightness(0.6);
    }
    
    &:hover .movie-detail {
        opacity: 1;
    }
`;

const StyledMovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    color: white;
    
    h4 {
        margin: 0;
    }
    
    span {
        margin-left: 7px;
    }
`;

const StyledMovieDetail = styled.div`
    max-width: 100%;
    position: absolute;
    top: 10%; 
    overflow: hidden;
    color: white;
    opacity: 0;
    padding-left: 15px;
    padding-right: 15px;

    div {
        font-size: 12px;
    }
`;

export { StyledAppContainer, StyledMovieContainer, StyledMovieInfo, StyledMovieDetail };
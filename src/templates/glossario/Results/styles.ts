import styled from 'styled-components'

export const ResultsWrapper = styled.div`
  padding: 50px 0;
  background-color: #e6e6e6;
`

export const ResultsList = styled.ul`
  list-style: none;
  @media screen and (min-width: 1200px) {
    padding-right: 200px;
  }
`

export const ResultItem = styled.li`
  margin-bottom: 30px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);

    h3 {
      color: var(--light);
    }
  }
`

export const ResultItemTitle = styled.h3`
  font-size: 40px;
  color: #006686;
  font-weight: 500;
  margin-bottom: 4px;
  transition: all 0.2s;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`

export const ResultItemDesc = styled.p`
  font-size: 15px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

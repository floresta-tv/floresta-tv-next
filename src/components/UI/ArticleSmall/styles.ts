import styled from 'styled-components'

export const ArticleSmall = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  margin-bottom: 22px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);

  .img {
    position: relative;
    width: 40%;

    img,
    div {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .caption {
    width: 60%;
    background-color: #fff;
    padding: 10px 15px;

    .date {
      display: block;
      font-size: 14px;
      color: #b3aeae;
      font-weight: 500;
      margin: 0px 0 4px 0;
    }

    .desc {
      font-size: 14px;
      color: #202833;
      font-weight: 500;
      margin-bottom: 5px;
    }

    .link {
      font-size: 16.4px;
      color: var(--primary);
      font-weight: 500;
      text-decoration: none;
      transition: all 0.2s;

      svg {
        fill: var(--primary);
        transition: fill 0.2s;
      }

      &:hover {
        color: var(--light);
        margin-left: 2px;

        svg {
          fill: var(--light);
        }
      }
    }
  }
`

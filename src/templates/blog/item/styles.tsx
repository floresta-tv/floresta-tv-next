import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  background-color: #023104;
  min-height: 100vh;
  overflow: hidden;

  .react-reveal {
    z-index: 100;
  }
`

export const Header = styled.div`
  position: relative;
  padding-top: 180px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding-top: 150px;
  }

  .back {
    font-size: 1.5rem;
    display: block;
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .title {
    font-family: 'Anguita Sans', sans-serif;
    font-weight: 700;
    position: relative;
    font-size: 60px;
    letter-spacing: 2px;
    color: #fff;
    max-width: 750px;
    margin-bottom: 15px;
    z-index: 3;

    @media screen and (max-width: 768px) {
      font-size: 35px;
    }
  }

  .image {
    div,
    img {
      object-fit: cover;
      object-position: center center;
    }
  }

  .desc {
    letter-spacing: 1px;
    font-size: 18px;
    color: #fff;
    max-width: 600px;
    z-index: 3;
    margin-bottom: 30px;
    margin-top: 20px;

    .more {
      display: inline;
      margin-left: 15px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .date {
    letter-spacing: 1px;
    font-size: 16px;
    color: #ffffffd1;
    max-width: 600px;
    z-index: 3;
    margin-bottom: 5px;
  }
`

export const ContentWrapper = styled.section`
  padding: 50px 0;
  max-width: 1000px;
  margin: 0 auto;
`

export const Body = styled.div`
  font-family: 'Segoe UI', sans-serif;
  padding: 50px 0;
  max-width: 950px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 1.3rem 0;
    max-width: 100%;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2;
    letter-spacing: 0.1rem;
    padding: 0 1.4rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.6;
    }
  }
  p {
    margin: 0 auto 0.9rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
    max-height: 70vh;
    object-fit: cover;
    object-position: center center;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: #fff;
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
  }
  h2 {
    font-size: 2.1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.375rem;
    }
  }
  h3 {
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`

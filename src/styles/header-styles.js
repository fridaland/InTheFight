// For styled components in the HEADER
import styled, { css } from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  background: #faf5eb;
  padding: 0 3rem;
  margin-bottom: 4rem;

  a.site-identity {
    flex: 0 0 260px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 1rem;
    z-index: 1;

    h1 {
      font-family: DIN Condensed;
      font-weight: bold;
      font-size: 48px;
      text-transform: uppercase;
      color: #2c358f;
      margin: 0 1.5rem 0 0;
      height: 42px;
    }
    img {
      height: 100%;
    }
  }

  ${(props) => props.isSubpage
    && css`
      .nav-wrapper {
        display: flex;
        justify-content: flex-end;
        flex: 1 auto;

        nav {
          ul {
            display: flex;
            align-items: center;
            list-style-type: none;
            padding: 0;

            li {
              margin: 0 0.5rem;

              a {
                font-family: URW DIN;
                font-weight: bold;
                font-size: 16px;
                text-transform: uppercase;
                color: #2c358f;
                text-decoration: none;
                border-radius: 7px;
                padding: 0.5rem 1rem;
                transition: all 0.2s ease-in-out;

                &:hover,
                &:focus {
                  color: white;
                  background-color: #2c358f;
                }
              }
            }
          }
        }
      }
    `};

  #hamburger-menu {
    display: none;
    width: 50px;
    height: 35px;
    border: none;
    border-radius: 4px;
    background-color: #2c358f;
    cursor: pointer;
    z-index: 1;

    > div {
      width: 100%;
      height: 3px;
      background-color: #faf5eb;
      transition: all 0.2s ease-in-out;

      &:first-child {
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (max-width: 860px) {
    .nav-wrapper {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255);
      padding-top: 4rem;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease-in-out;

      nav {
        padding: 3rem;

        ul {
          flex-direction: column;

          li {
            text-align: center;
            border-bottom: 1px solid #ddd;
            padding-bottom: 0.7rem;
            margin-bottom: 1rem;
            width: 100%;
          }
        }
      }
    }

    #hamburger-menu {
      display: block;
    }

    ${(props) => props.mobileMenu
      && css`
        .nav-wrapper {
          opacity: 1;
          visibility: visible;
        }

        #hamburger-menu {
          > div {
            &:first-child {
              width: 80%;
              transform: rotate(30deg) translate(7px, 3px);
            }
            &:last-child {
              width: 80%;
              transform: rotate(-30deg) translate(6px, -3px);
            }
          }
        }
      `};
  }

  @media (max-width: 470px) {
    padding: 0 1rem;

    a.site-identity {
      flex: 0 0 190px;
      margin-right: 0.5rem;

      h1 {
        font-size: 30px;
        height: 29px;
      }
    }

    .nav-wrapper nav {
      padding: 3rem 1rem;
    }
  }
`;

export default Header;

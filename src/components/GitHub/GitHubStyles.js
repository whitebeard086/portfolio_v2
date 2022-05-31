import styled from "styled-components";

export const UserContainer = styled.div`
  max-width: 1250px;
  padding: 1rem;
  margin: 3rem 0 0 0;

  @media ${props => props.theme.breakpoints.xxl} {
    width: 80%;
  }

  @media ${props => props.theme.breakpoints.xl} {
    width: 75%;
    padding: 2rem;
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: 80%;
  }

  @media ${props => props.theme.breakpoints.xmd} {
    width: 95%;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    padding: 1rem;
  }

  .github-profile {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media ${props => props.theme.breakpoints.md} {
      flex-direction: column;
    }

    .image-container {
      position: relative;
      color: #fff;
      transition: 0.5s ease;
      height: 100%;

      &:hover {
        color: rgba(45, 46, 73);
      }

      @media ${props => props.theme.breakpoints.md} {
        width: 60%;
        height: 60%;
      }

      .image {
        &::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background: var(--primary-bg-img);
          border-radius: 15px;
          transition: 0.5s ease;

          @media ${props => props.theme.breakpoints.md} {
            border-radius: 50%;
          }
        }

        &:hover::after {
          background: rgba(0, 0, 0, 0);
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 15px;
          -webkit-box-shadow: var(--primary-shadow);
          box-shadow: var(--primary-shadow);

          @media ${props => props.theme.breakpoints.md} {
            border-radius: 50%;
          }
        }
      }
    }

    .info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 15px;
      background: var(--primary-bg);
      -webkit-box-shadow: var(--primary-shadow);
      box-shadow: var(--primary-shadow);
      padding: 3rem;

      @media ${props => props.theme.breakpoints.xl} {
        padding: 1rem;
      }

      @media ${props => props.theme.breakpoints.lg} {
        width: 60%;
      }

      @media ${props => props.theme.breakpoints.md} {
        width: 100%;
      }

      .top-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .name {
          display: flex;
          gap: 2rem;
          color: var(--text-color-special);

          @media ${props => props.theme.breakpoints.lg} {
            flex-direction: column;
            gap: 0.5rem;
          }

          .hireable {
            background: var(--secondary-bg);
            -webkit-box-shadow: var(--secondary-shadow);
            box-shadow: var(--secondary-shadow);
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 10px;
            font-size: 0.8rem;
            font-weight: 300;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          h2 {
            font-size: 2rem;

            @media ${props => props.theme.breakpoints.sm} {
              font-size: 1.5rem;
            }

            @media ${props => props.theme.breakpoints.xsm} {
              font-size: 1.2rem;
            }
          }
        }

        p {
          font-weight: 400;
          color: var(--text-color);
          font-size: 1.2rem;
          line-height: 1.3;

          @media ${props => props.theme.breakpoints.xsm} {
            font-size: 1rem;
          }
        }

        .profile-link {
          margin: 1rem 0;
          width: fit-content;
          text-transform: uppercase;
          padding: 0.8rem;
          font-weight: 500;
          background: linear-gradient(var(--primary-btn), var(--primary-btn)) padding-box,
            linear-gradient(45deg, #e1ad69 0%, #a0a1bf 100%) border-box;
          border: 1.6px solid transparent;
          border-radius: 6px;
          transition: all 0.5s ease;

          &:hover {
            background: linear-gradient(var(--primary-btn), var(--primary-btn)) padding-box,
              linear-gradient(225deg, #e1ad69 0%, #a0a1bf 100%) border-box;
          }

          a {
            background: linear-gradient(90deg, var(--text-color) 0%, var(--text-color-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            &:hover {
              background: linear-gradient(270deg, var(--text-color) 0%, var(--text-color-gold) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }

      .bottom-info {
        display: flex;
        gap: 7rem;
        margin-top: 1rem;

        @media ${props => props.theme.breakpoints.lg} {
          gap: 2rem;
        }

        @media ${props => props.theme.breakpoints.md} {
          flex-direction: column;
          gap: 1rem;
        }

        .github-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    background: var(--primary-bg);
    -webkit-box-shadow: var(--primary-shadow);
    box-shadow: var(--primary-shadow);
    padding: 2rem 3rem;
    margin: 2rem 0;

    @media ${props => props.theme.breakpoints.md} {
      padding: 1rem 1rem;
      margin: 2rem 0;
    }

    @media ${props => props.theme.breakpoints.sm} {
      flex-direction: column;
      gap: 1rem;
    }

    .github-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

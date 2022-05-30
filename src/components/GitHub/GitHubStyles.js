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
          background: rgba(45, 46, 73, 0.5);
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
          -webkit-box-shadow: 1px 1px 6px 1px #2a2a43;
          box-shadow: 1px 1px 6px 1px #2a2a43;

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
      background: rgba(45, 46, 73, 0.9);
      -webkit-box-shadow: 1px 1px 6px 1px #2a2a43;
      box-shadow: 1px 1px 6px 1px #2a2a43;
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
          color: rgb(241, 258, 238);

          @media ${props => props.theme.breakpoints.lg} {
            flex-direction: column;
            gap: 0.5rem;
          }

          .hireable {
            background: rgba(160, 161, 191, 0.3);
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
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.2rem;
          line-height: 1.3;

          @media ${props => props.theme.breakpoints.xsm} {
            font-size: 1rem;
          }
        }

        .profile-link {
          margin: 1rem 0;

          a {
            color: rgba(225, 173, 105);
            text-transform: uppercase;
            padding: 0.5rem;
            font-weight: 500;
            background: linear-gradient(rgba(45, 46, 73, 0.9), rgba(45, 46, 73, 0.9)) padding-box,
              linear-gradient(45deg, #e1ad69 0%, #a0a1bf 100%) border-box;
            border: 1.6px solid transparent;
            border-radius: 6px;
            transition: 0.5s ease;

            &:hover {
              background: linear-gradient(rgb(45, 46, 73), rgb(45, 46, 73)) padding-box,
                linear-gradient(225deg, #e1ad69 0%, #a0a1bf 100%) border-box;
              color: rgb(160, 161, 191);
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
    background: rgba(45, 46, 73);
    -webkit-box-shadow: 1px 1px 6px 1px #2a2a43;
    box-shadow: 1px 1px 6px 1px #2a2a43;
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

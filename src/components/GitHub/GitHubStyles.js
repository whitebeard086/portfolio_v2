import styled from "styled-components";

export const UserContainer = styled.div`
  .image-container {
    position: relative;

    .image {
      width: 30%;
      height: 30%;
      color: #fff;
      transition: 0.4s ease;

      &:hover {
        color: rgba(45, 46, 73);
      }

      &::after {
        content: "";
        position: absolute;
        width: 30%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(45, 46, 73, 0.5);
        border-radius: 15px;
        transition: 0.4s ease;
      }

      &:hover::after {
        background: rgba(0, 0, 0, 0);
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      .image-info {
        position: absolute;
        bottom: 0;
        padding: 1rem;
        z-index: 2;

        h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;

          @media ${props => props.theme.breakpoints.xmd} {
            font-size: 1rem;
          }
        }

        p {
          font-weight: 200;
        }
      }
    }
  }
`;

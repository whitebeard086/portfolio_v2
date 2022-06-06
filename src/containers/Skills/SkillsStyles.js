import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  background: var(--section-bg-darker);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

export const Contain = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;

  .title {
    margin: 2rem 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin: 2rem;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media ${props => props.theme.breakpoints.xmd} {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const SkillsList = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  flex: 1;
`;

export const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SkillImage = styled.div`
  background: var(--primary-bg-tag);
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease;

  &:hover {
    -webkit-box-shadow: 0px 0px 7px 0px #ada1bf;
    box-shadow: 0px 0px 7px 0px #ada1bf;
  }

  img {
    width: 50px;
    height: 50px;
  }

  @media ${props => props.theme.breakpoints.xmd} {
    width: 60px;
    height: 60px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 50px;
    height: 50px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Skill = styled.p`
  font-weight: 500;

  @media ${props => props.theme.breakpoints.xsm} {
    font-size: 0.8rem;
  }
`;

export const Experiences = styled(motion.div)`
  flex: 1;
`;

export const ExperienceItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ExperienceYear = styled.div``;

export const Year = styled.p`
  font-weight: 600;
  font-size: 1.2rem;

  @media ${props => props.theme.breakpoints.sm} {
    /* font-size: 1rem; */
  }
`;

export const Experience = styled(motion.div)``;

export const Works = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Work = styled.h4`
  font-size: 1.5rem;
  color: rgb(45, 46, 73);
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;

  @media ${props => props.theme.breakpoints.sm} {
    /* font-size: 1rem; */
  }
`;

import styled from "styled-components";

export const AboutUsStyle = styled.div`
  .team-h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 72px;
    /* identical to box height, or 180% */

    text-align: center;
    letter-spacing: -0.015em;
    margin-bottom: 52px;

    color: #000000;
  }

  .team-container {
  }

  .team-top {
    display: flex;
    justify-content: center;
  }

  .team-top-group {
    position: relative;
    text-align: center;
    cursor: pointer;
  }
  .team-top-group img {
    opacity: 1;
    transition: 0.5s ease;
  }
  .team-top-group .text {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease;
  }
  .team-top-group:hover img {
    opacity: 0.3;
  }

  .team-top-group:hover .text {
    opacity: 1;
  }

  .team-bottom {
    display: flex;
    justify-content: center;
    margin-top: -40px;
  }

  .empty {
    height: 292px;
    width: 147px;
  }
  .team-text {
    position: relative;
    height: 1px;
    background-color: #000000;
    width: 100%;
    margin: 50px 0;
  }
  .team-text span {
    position: absolute;

    padding: 0 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */

    background: #ffffff;
    top: -23px;
    left: 85px;
    color: #000000;
  }

  p.text {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    color: #000000;
  }

  @media only screen and (max-width: 1033px) {
    .empty {
      height: auto;
      width: auto;
    }
    .team-top,
    .team-bottom {
      flex-wrap: wrap;
      margin-top: 0;
    }
  }
`;

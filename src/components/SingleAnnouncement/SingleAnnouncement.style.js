import styled from "styled-components";

export const SingleAnnouncementStyle = styled.div`
  header {
    text-align: center;
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 72px;
    /* identical to box height, or 180% */

    text-align: center;
    letter-spacing: -0.015em;
    margin: 0;

    color: #000000;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;

    .tag {
      background: #d9d9d9;
      border-radius: 10px;
      padding: 3px 9px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;

      text-align: center;
      letter-spacing: -0.015em;

      color: #000000;
    }
  }

  .section-image {
    margin-top: 24px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .content {
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 40px;
      /* or 167% */

      text-align: justify;

      color: #000000;
    }
  }
`;

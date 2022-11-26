import styled from "styled-components";

export const AnnouncementsStyle = styled.div`
  .announcements-h2 {
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

  .announcements-container {
    display: flex;
    justify-content: center;
    gap: 80px;
    flex-wrap: wrap;
  }

  .announcements-card {
    background: #ffffff;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 52px;
    width: 350px;
  }

  .announcements-card-image {
  }
  .announcements-card-image img {
    border-radius: 9px 9px 0px 0px;
    width: 100%;
    object-fit: cover;
  }

  .announcements-card-tag {
    background: #ffffff;
    border: 1px solid #569cbe;
    border-radius: 10px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    display: inline-block;
    font-size: 12px;
    text-align: center;

    color: #569cbe;
    padding: 4px 7px;
  }

  .announcements-card-title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    letter-spacing: -0.015em;

    color: #000000;
  }

  .announcements-card-author {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    /* identical to box height, or 214% */

    letter-spacing: -0.015em;

    color: #000000;
  }

  .pagination {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .prev {
    padding: 9px 38px;
    border-radius: 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.015em;
    color: #ffffff;
    border: none;

    background: #0a4e75;
    cursor: pointer;
  }
  .prev-disabled {
    padding: 9px 38px;
    border-radius: 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.015em;
    color: #ffffff;
    border: none;

    background: #89bad1;
  }
  .next {
    padding: 9px 38px;
    border-radius: 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.015em;
    color: #ffffff;
    border: none;

    background: #0a4e75;
    cursor: pointer;
  }

  .next-disabled {
    padding: 9px 38px;
    border-radius: 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.015em;
    color: #ffffff;
    border: none;

    background: #89bad1;
  }
`;

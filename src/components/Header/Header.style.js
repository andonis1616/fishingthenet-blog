import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: auto;
    margin-bottom: 30px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    line-height: 72px;
    /* identical to box height, or 131% */

    text-align: center;
    letter-spacing: -0.015em;

    color: #000000;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid #000000;
    border-bottom: 0.5px solid #000000;
  }

  .navigation-menu {
    display: flex;
  }

  .navigation-menu-item {
    padding: 25px;
    border-bottom: 2px solid white;
    text-decoration: none;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 20px;
    color: #000000;
  }
  .navigation-menu-item:hover {
    border-bottom: 2px solid #000000;
    cursor: pointer;
  }

  .navigation-serch {
    margin: auto 0;
    display: flex;
  }

  .navigation-serch input {
    margin-right: 10px;
  }

  .navigation-serch input,
  .navigation-serch input:focus-visible {
    border: none;
    outline: none;
    border-bottom: 0.5px solid #000000;
    opacity: 0.6;
  }
`;

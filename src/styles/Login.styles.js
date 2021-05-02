import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: var(--bg-color-primary);
  min-height: 754px;
  height: 100vh;

  .container {
    height: 89%;
  }
  .content-box {
    background-color: var(--bg-color-secondary);
    border-radius: 6px;
    box-shadow: 0 0 3px gray;
    overflow: hidden;
    padding: 30px 45px 0;
    width: 100%;
  }

  .content-box > h2 {
    color: var(--font-color);
    font-size: 2rem;
    font-weight: 700;
    line-height: 28px;
    margin: 25px 0;
    padding-bottom: 22px;
    text-align: center;
  }
  .row {
    height: 100%;
  }

  .row .col-sm-8 {
    display: flex;
    height: inherit;
    align-items: center;
  }

  .first-row {
    margin-bottom: 40px;
  }

  .second-row {
    cursor: pointer;
    margin: -2px -46px;
  }
  .second-row .col-sm-12 {
    border-right: 0;
    border: 1px solid rgb(239, 239, 245);
    color: var(--font-color);
    font-size: 1.2rem;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }

  .second-row .col-sm-12:hover {
    background-color: rgb(32, 189, 175);
    color: var(--bg-color-secondary);
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .col-sm-10 a {
    color: var(--font-color);
    display: block;
    margin-top: 20px;
    text-align: center;
    text-decoration: underline;
  }

  .col-sm-10 .btn {
    margin: 20px 0;
  }

  .col-sm-12 svg {
    margin-right: 10px;
  }
`;

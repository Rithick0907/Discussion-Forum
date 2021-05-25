import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: var(--bg-color-primary);
  height: 100vh;

  .container {
    height: 89%;
  }
  .row {
    align-items: center;
    height: 100%;
  }
  .col-sm-8 {
    background-color: var(--bg-color-secondary);
    padding: 0 40px;
  }

  .col-sm-8 > .row.p-5 {
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--font-color);
  }

  .col-sm-8 > label {
    font-size: 1.4rem;
    margin: 10px 0;
  }

  .col-sm-8 > input {
    font-size: 1.4rem;
    padding: 20px 15px;
  }

  .col-sm-8 > a:nth-of-type(1) {
    color: var(--font-color);
    display: inline-block;
    font-size: 1.1rem;
    margin-top: 15px;
    text-decoration: underline;
    width: 100%;
  }

  .row.no-gutters {
    margin: 0 -40px;
  }

  .row.no-gutters > .col-md-6 {
    border-collapse: collapse;
    border: 1px solid var(--font-color);
    color: var(--font-color);
    display: table-cell;
    font-size: 1.3rem;
  }

  .row.no-gutters > .col-md-6:hover {
    background-color: var(--btn-color-secondary-hover);
    color: var(--bg-color-secondary);
  }

  a {
    text-align: center;
    text-decoration: none;
  }

  .col-md-6 > a {
    color: inherit;
    display: inline-block;
    font-weight: bold;
    height: 100%;
    padding: 15px 0;
    width: 100%;
  }
`;

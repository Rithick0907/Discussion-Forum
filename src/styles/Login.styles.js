import styled from "styled-components";

export const StyledDiv = styled.div`
  align-content: center;
  background-color: var(--bg-color-primary);
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2rem;
  justify-content: center;
  min-height: 89vh;

  & h1 {
    margin-top: 40px;
    text-align: center;
  }

  & .form-container {
    align-self: center;
    background-color: var(--bg-color-secondary);
    box-shadow: 0 2px 8px lightgray;
    flex-basis: 90%;
    margin: 40px;
  }

  & .form-group {
    margin: 20px 40px;
    font-size: 1.4rem;
  }

  & .form-control {
    font-size: 1.5rem;
  }

  & a {
    color: var(--font-color);
    text-align: center;
    text-decoration: underline;
  }

  .last-row a {
    display: inline-block;
    border: 1px solid lightgray;
    font-weight: bold;
    padding: 15px 0;
    text-decoration: none;
    width: 100%;
  }

  .last-row a:nth-child(1) {
    border-right: 1px solid lightgray;
  }

  .last-row a:hover {
    background-color: var(--btn-color-secondary-hover);
    color: var(--bg-color-primary);
  }

  @media (min-width: 500px) {
    .last-row a {
      width: 50%;
    }
  }

  @media (min-width: 900px) {
    & .form-container {
      flex-basis: 50%;
    }
  }
`;

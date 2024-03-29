import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  margin-top: 10px;
  font-size: 1.1em;
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  font-size: 0.9em;
  color: #9c9c9c;
`;

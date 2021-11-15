import styled from "styled-components";

export const Container = styled.header`
  background-color: #bb001b;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 500;
`;

export const Button = styled.button`
  position: relative;
  margin-right: 10px;
  color: #bb001b;
  border: none;
  border-radius: 5px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  outline: none;
`;

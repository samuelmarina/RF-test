import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-width: 0;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
  float: left;
`;

export const Title = styled.h1`
  font-size: 1.1em;
  margin-bottom: 6px;
`;

export const Content = styled.p`
  font-size: 1.1em;
  margin-bottom: 6px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const Footer = styled.p`
  font-size: 0.9em;
  margin-bottom: 10px;
  color: #9c9c9c;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: right;
  align-items: flex-end;
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
  background-color: transparent;
`;

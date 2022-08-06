import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.8px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;

export const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    cursor: pointer;
    line-height: 1.5;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid white;
  background-color: black;
  color: #d6d9db;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  padding: 12px;
  height: 44px;
  font-size: 18px;
`;

export const Button = styled.button`
  margin-top: 5px;
  width: 100%;
  max-width: 100%;
  color: black;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  padding: 0 16px;
  cursor: pointer;
  border-radius: 4px;

  &:active {
    transform: scale(0.99);
  }
`;

export const LinkContainer = styled.p`
  font-size: 14px;
  margin: 12px auto;
  width: 400px;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
  }
`;
export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 60px;
  line-height: 46px;
  letter-spacing: -0.8px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const MainButton = styled.button`
  height: 4vh;
  width: 7vw;
  margin-left: 50px;
`;
export const Title = styled.div`
  margin: 0 auto;
  width: 70vw;
  margin-top: 100px;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 20px;
  border-bottom: solid 5px gray;
`;

export const Author = styled.div`
  font-size: 15px;
  margin: 0 auto;
  width: 70vw;
  margin-bottom: 20px;
`;

export const Body read-only = styled.textarea`
  font-size: 25px;
  width: 65vw;
  height: 30vh;
  border: 1px solid gray;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 15px;
  resize: none;
  display: flex;
  
`;
export const CommentsBoxWrap = styled.div`
  border: 2px solid gray;
  width: 70vw;
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 55px;
  background-color: white;
  color: black;
`;

export const AuthorBox = styled.div`
  width: 70vw;
  margin: 0 auto;
  font-size: 15px;
  padding-top: 5px;
  padding: 15px;
`;
export const CommentsBox = styled.div`
  width: 70vw;

  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 30px;
  padding: 15px;
`;

export const Input = styled.textarea`
  margin: 0 auto;
  width: 60vw;
  height: 10vh;
  padding: 15px;
  resize: none;
  font-size: 25px;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 5vw;
  height: 13vh;
  padding: 15px;
  margin-right: 50px;
  font-weight: 700;
  /* margin-bottom: 15px; */
`;

export const Formwrap = styled.div`
  margin: 0 auto;
  width: 65vw;
  display: flex;
`;

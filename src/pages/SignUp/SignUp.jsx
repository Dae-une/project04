import React, { useCallback, useEffect, useState } from "react";
import {
  Success,
  Error,
  LinkContainer,
  Button,
  Header,
  Form,
  Label,
  Input,
} from "./styles";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [userId, onChangeUserId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [mismatchError, setMismatchError] = useState("");
  const [SignUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_USERS)
      .then((res) => setUserData(res.data));
  }, []);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setSignUpError("");
    setSignUpSuccess(false);
    if (!mismatchError) {
      if (
        userData.findIndex((user) => user.userId === userId) > -1 ||
        userId.trim() === ""
      ) {
        return setSignUpError("아이디가 중복됬어요 !");
      } else if (
        userData.findIndex(
          (user) => user.nickname === nickname || nickname.trim() === ""
        ) > -1
      ) {
        return setSignUpError("닉네임이 중복됬어요 !");
      } else {
        axios
          .post("http://localhost:3001/users", { userId, nickname, password })
          .then(() => {
            setSignUpSuccess(true);
          });
      }
    }
  };
  return (
    <div>
      <Header>회원가입</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>아이디</span>
          <div>
            <Input type="text" value={userId} onChange={onChangeUserId}></Input>
          </div>
        </Label>
        <Label>
          <span>닉네임</span>
          <div>
            <Input
              type="text"
              value={nickname}
              onChange={onChangeNickname}
            ></Input>
          </div>
        </Label>
        <Label>
          <span>비밀번호</span>
          <div>
            <Input
              type="password"
              value={password}
              onChange={onChangePassword}
            ></Input>
          </div>
        </Label>
        <Label>
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            ></Input>
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {SignUpError && <Error>{SignUpError}</Error>}
          {signUpSuccess && (
            <Success>회원가입이 완료 되었어요!! 로그인 해주세요</Success>
          )}
        </Label>
        <Button onClick={onSubmit} type="submit">
          회원가입
        </Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;

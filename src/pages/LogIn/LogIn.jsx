import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Error,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
} from "../SignUp/styles";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { useCookies } from "react-cookie";
import { getUsersAysnc } from "../../redux/modules/signupSlice";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
  const [userId, onChangeuUserId, setUserId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [logInError, setLogInError] = useState(false);
  const [cookies, setCookie] = useCookies(["garbageCookie"]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAysnc());
  }, []);

  const userData = useSelector((state) => state.data);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      if (
        userData.findIndex((user) => user.userId === userId) > -1 &&
        userData.findIndex((user) => user.password === password) > -1
      ) {
        setCookie("garbageCookie", userId, {
          path: "/",
          maxAge: 1000 * 60 * 60,
        });
        navigate("/");
      } else {
        setLogInError(true);
      }
    },
    [userId, password]
  );
  return (
    <div>
      <Header>♻️ 가비지</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>아이디</span>
          <div>
            <Input
              type="text"
              name="userId"
              value={userId}
              onChange={onChangeuUserId}
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
          {logInError && (
            <Error>아이디와 비밀번호의 조합이 일치하지 않아요</Error>
          )}
        </Label>
        <Button onSubmit={onSubmit}>로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;

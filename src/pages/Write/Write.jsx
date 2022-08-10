import React, { useState } from "react";
import { Title, Body, Btngroup, Btn1, Btn2, Header } from "./styles";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postWritesThunk } from "../../redux/modules/writeSlice";
import nextId from "react-id-generator";

const Write = () => {
  const htmlId = nextId();


  const navigate = useNavigate();

  const [cookies] = useCookies(["garbageCookie"]);

  const dispatch = useDispatch();

  const [write, setWrite] = useState({
    title: "",
    body: "",
    author: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setWrite({
      ...write,
      [name]: value, //변수를위해서
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postWritesThunk({
        title: write.title,
        body: write.body,
        author: cookies.garbageCookie,
        postId:htmlId
      })
    );
    alert("글 등록이 완료되었습니다.");
    // return navigate("/");
  };

  const onSubmit1 = (e) => {
    navigate("/");
  };
  return (
    <div>
      <Header>♻️ 가비지</Header>
      <Title
        value={write.title}
        name="title"
        onChange={onChangeHandler}
        placeholder="제목을 입력해주세요."
        maxLength={30}
      ></Title>
      <Body
        value={write.body}
        name="body"
        onChange={onChangeHandler}
        placeholder="내용을 입력해주세요."
        maxLength={500}
      ></Body>
      <Btngroup>
        <Btn1 type="button" onClick={onSubmit}>
          확인
        </Btn1>
        <Btn2 type="button" onClick={onSubmit1}>
          취소
        </Btn2>
      </Btngroup>
    </div>
  );
};

export default Write;

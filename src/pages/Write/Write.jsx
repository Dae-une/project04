import React, { useState } from "react";
// import useInput from "../../hooks/useInput.js";
import { Title, Body, Btngroup, Btn1, Btn2 } from "./styles";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  // const isSuccess = useSelector((state) => state.write.isSuccess);
  const [write, setWrite] = useState({
    title: "",
    body: "",
  });

  // useEffect(() => {
  //   if(!isSuccess) return;

  // });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setWrite({
      ...write,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log(1);
    axios.post("http://localhost:3001/board", {
      title: write.title,
      body: write.body,
    });
  };

  const onSubmit1 = (e) => {
    navigate("/");
  };

  return (
    <div>
      <Title
        value={write.title}
        name="title"
        onChange={onChangeHandler}
        placeholder="제목을 입력해주세요."
      ></Title>

      <Body
        value={write.body}
        name="body"
        onChange={onChangeHandler}
        placeholder="내용을 입력해주세요."
      ></Body>

      {/* <button type="button" onClick={null}>
        이미지 업로드
      </button> */}
      {/* <input className="upload" type = "file"id="image" accept="img/*" onChange={onLoadFile}/>
      <label htmlFor="image">파일 선택하기12131 </label> */}
      <div>
        <Btngroup>
          <Btn1 type="button" onClick={onSubmit}>
            확인
          </Btn1>

          <Btn2 type="button" onClick={onSubmit1}>
            취소
          </Btn2>
        </Btngroup>
      </div>
    </div>
  );
};

export default Write;

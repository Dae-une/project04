import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Reply from "./Reply";
import { PageBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { pickPostAysnc } from "../../redux/modules/postSlice";
import { useCookies } from "react-cookie";
const DetailPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["garbageCookie"]);
  useEffect(() => {
    if (!cookies.garbageCookie) {
      navigate("/");
    }
    dispatch(pickPostAysnc());
  }, []);

  const pages = useSelector((state) => state.Post.data);

  const array = pages.filter((v) => v.postId == id);

  const onSubmit1 = (e) => {
    navigate("/feed");
  };

  return (
    <>
      <PageBox>
        <header>♻️가비지</header>
        <button onClick={onSubmit1}>메인 화면으로</button>
        <article>
          <div>타이틀:{array[0].title}</div>
          <div>아이디:{array[0].id}</div>
          <div>작성자:{array[0].author}</div>
          <div>내용: {array[0].body}</div>
        </article>
        <Reply postId={id} userNickname={array[0].author} />
      </PageBox>
    </>
  );
};

export default DetailPages;

// 사용자 아이디랑 작성자 아이디랑 일치해야 글 수정, 삭제 할 수 있게 하기
// css 수정
// thunk 로 수정

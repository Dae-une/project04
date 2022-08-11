import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Reply from "./Reply";
import { Header, Title,MainButton,Author,Body} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { pickPostAysnc } from "../../redux/modules/postSlice";
const DetailPages = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pickPostAysnc());
    }, []);
    const pages = useSelector((state) => state.Post.data);

    const array = pages.filter((v) => v.postId == id);

    const onSubmit1 = (e) => {
        navigate("/feed");
    };

  return (
    <>

        <Header>♻️가비지</Header> 
        <MainButton onClick={onSubmit1}>메인 화면</MainButton>
        
          <Title>{array[0].title}</Title>
          {/* <Id>아이디:{array[0].id}</Id> */}
          <Author>{array[0].author}</Author>
          <Body>{array[0].body}</Body>
        
        <Reply postId={id} />

    </>
  );

};

export default DetailPages;

// 사용자 아이디랑 작성자 아이디랑 일치해야 글 수정, 삭제 할 수 있게 하기
// css 수정
// thunk 로 수정

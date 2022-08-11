import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { CommentsBox,Input,Button,CommentsBoxWrap,AuthorBox,Formwrap} from "./styles";
import {
  postCommentAysnc,
  getCommentAysnc,
} from "../../redux/modules/commentslice";
import { useDispatch, useSelector } from "react-redux";

const Reply = ({ postId, userNickname }) => {
  const [cookies] = useCookies(["garbageCookie"]);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  console.log(cookies.garbageCookie);
  // 댓글 Get
  useEffect(() => {
    dispatch(getCommentAysnc(postId));
  }, []);

  const commentList = useSelector((state) => state.Comment.data);
  console.log("nick :", userNickname);
  // // 댓글 Post
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postCommentAysnc({
        body: text,
        author: cookies.garbageCookie,
        postId: postId,
      })
    );
    setText("");
  };

  // 댓글 입력
  const onChangeHandler = (event) => {
    const { value } = event.target;
    setText(value);
  };

  // const commentlist = comments.filter(comment => comment.postId === id)
  return (
    <div>
      {/* <CommentsBoxWrap> */}
        {commentList
          ? commentList?.map((textList) => {
              return (
                <CommentsBoxWrap key={textList.id}>
                  <AuthorBox>{textList.author}</AuthorBox>
                  <CommentsBox>{textList.body}</CommentsBox>
                </CommentsBoxWrap>
              );
            })
          : null}
      {/* </CommentsBoxWrap> */}
      <Formwrap onSubmit={onSubmit}>
        <Input
          value={text}
          onChange={onChangeHandler}
          type="text"
          placeholder="댓글을 입력해주세요"
        ></Input>
        <Button onClick={onSubmit}>입력완료</Button>
        
      </Formwrap>
    </div>
  );
};
export default Reply;

// 왜 .. 댓글 아이디랑 포스트아이디랑 아이디는 다 잘 받아오는데 댓글 내용은 안 받아오는지 ?
// 일단 postId 기준으로 댓글 받아오면 됨 map, filter
// onChangeHandler 안에 내용 채우기
// 댓글 수정, 삭제 기능도 넣어야 함

// css 수정
// thunk 로 수정

// if (comments) {
//     setComment(comments.filter(comment => comment.id === parseInt(id)))
// } else {
//     return (<div>로딩중</div>)
// }
// console.log(comment)
// const a = comments.filter(comment => comment.id === id )

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { StyledComponent } from "styled-components";
import {
  Header,
  Author,
  Body,
  StyledLink,
  LinkBox,
  Post,
  Title
} from "./styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getPostAysnc } from "../../redux/modules/postSlice.js";


const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAysnc());
  }, []);

  const postData = useSelector((state) => state.Post.data);

  return (
    <div>
      <Header>♻️가비지
        <LinkBox>
          <StyledLink to="/write">작성하기</StyledLink>
        </LinkBox>
      </Header>
      {postData?.map((post) => {
        return (
          <Post key={post.id}>
            <StyledLink to={`/detailpages/${post.postId}`}>
              <Title>{post.title}</Title>
              <Author>작성자 : {post.author}</Author>
              <Body>{post.body}</Body>
            </StyledLink>
          </Post>

        );
      })}
    </div>
  );
};

export default Feed;


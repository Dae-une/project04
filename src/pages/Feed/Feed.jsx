import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Header,
  Button,
  PostBox,
  Author,
  Body,
  PostId,
  Post,
  Title,
} from "./styles.jsx";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getPostAysnc } from "../../redux/modules/postSlice.js";
const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = useCookies(["garbageCookie"]);

  useEffect(() => {
    if (!cookies[0].garbageCookie) {
      navigate("/");
    }
    dispatch(getPostAysnc());
  }, []);

  const postData = useSelector((state) => state.Post.data);

  return (
    <div>
      <Header>♻️가비지</Header>
      <Link to="/write">
        <Button>작성하기</Button>
      </Link>
      <PostBox>
        {postData?.map((post) => {
          return (
            <Post key={post.id}>
              <Link to={`/detailpages/${post.postId}`}>
                <PostId>{post.id}</PostId>
                <Title>{post.title}</Title>
                <Author>{post.author}</Author>
                <Body>{post.body}</Body>
              </Link>
            </Post>
          );
        })}
      </PostBox>
    </div>
  );
};

export default Feed;

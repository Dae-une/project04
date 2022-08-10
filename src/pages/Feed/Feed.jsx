import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Header,
    Button,
    PostBox,
    Author,
    Body,
    PostId,
    Title
} from "./styles.jsx"

const Feed = () => {
    const [postData, setPostData] = useState("")

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BOARD).then((res) => setPostData(res.data))
    }, [])
    console.log(postData)
    if (!postData) {
        return null
    }

    return (
        <div>
            <Header>♻️가비지</Header>
            <Link to="/write">
                <Button>작성하기</Button>
            </Link>
            <PostBox>
                {postData?.map((post) => {
                    return (
                        <Link to={`/detailpages/${post.postId}`} key={post.id}>
                            <PostId>{post.id}</PostId>
                            <Title>{post.title}</Title>
                            <Author>{post.author}</Author>
                            <Body>{post.body}</Body>
                        </Link>)
                })}
            </PostBox>
        </div>
    )
}


export default Feed;

// 한 박스 안에서 글이 전부 다 뜨고 있어서 한 박스당 글 하나씩 뜨게 만들어주기
// 글 내용 보이는 글자 수 제한
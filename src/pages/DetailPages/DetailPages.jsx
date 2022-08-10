import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Reply from "./Reply";
import axios from "axios";
import {
    PageBox,
} from "./styles"

const DetailPages = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pages, setPages] = useState("")

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BOARD, { params: { id } })
            .then((res) => setPages(res.data[0]));
    }, [id])
    console.log(pages)

    const onSubmit1 = (e) => {
        navigate("/feed")
    }

    return (
        <PageBox>
            <header>♻️가비지</header>
            <button onClick={onSubmit1}>메인 화면으로</button>
            <article>
                <div>{pages.title}</div>
                <span>{pages.id}</span>
                <span>{pages.author}</span>
                <div>{pages.body}</div>
            </article>
            <Reply />
        </PageBox>
    )
}

export default DetailPages;

// 사용자 아이디랑 작성자 아이디랑 일치해야 글 수정, 삭제 할 수 있게 하기 
// css 수정
// thunk 로 수정

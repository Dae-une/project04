import styled from "styled-components";

// 포스트 박스랑 최대넓이 맞추고 위치 고정
export const Header = styled.div`
  font-weight: 800;
  font-size: 30px;
  line-height: 46px;
  letter-spacing: -0.8px;
  margin: 20px auto 20px 460px;
  // max-width: 1000px
`;
// 페이지 줄이면 자꾸 포스트박스 안으로 들어오는데 못 들어오게 하기
export const Button = styled.div`
  width: 100px;
  max-width: 100%;
  color: white;
  font-weight: 900;
  height: 44px;
  cursor: pointer;
  border-radius: 4px;
  float: right;
  // display: flex;
  justify-content: flex-end;
`;
// 링크 걸려있는 파란 줄 안뜨게 하기
// 링크 거니까 속성 다 없어져버렸음 .. ^^ 어케 바꾸냐
export const PostBox = styled.div`
  border: 2px solid white;
  border-radius: 5px;
  margin: auto;
  width: 1000px;
  max-width: 1000px;
  height: 300px;
  padding: 20px;
  color: #1264a3;
  text-decoration: none;
  font-weight: 700;
`;

export const PostId = styled.span`
  padding: 10px;
`;

export const Title = styled.span`
  padding: 10px;
`;

export const Author = styled.span`
  padding: 10px;
`;

export const Body = styled.div`
  padding: 37px;
`;

export const Post = styled.div`
  border: 1px solid white;
`;

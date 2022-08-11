import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  font-weight: 800;
  font-size: 55px;
  line-height: 46px;
  letter-spacing: -0.8px;
  text-align: center;
  margin:0 auto;
  margin-top: 60px;
  width: 800px;
  padding: 10px;
`;

export const LinkBox = styled.div`
  text-decoration: none;
  width: 825px;
  margin: 0 auto;
  text-align: right;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 19px;
`;

export const Post = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  font-weight: 700px;
  padding: 30px;  
  margin: 20px auto;
  max-width: 800px;
  line-height: 1.5;
  height: 200px;
`;

export const Title = styled.span`
  padding: 10px;
  font-weight: 700;
  font-size: 25px;
  color: white;
`;

export const Author = styled.div`
  padding: 10px;
  font-size: 15px;
  color: white;
`;

export const Body = styled.div`
  padding: 10px;
  font-size: 15px;
  color: white;
`;



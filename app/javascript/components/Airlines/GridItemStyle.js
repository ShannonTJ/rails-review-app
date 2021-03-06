import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`;

export const Logo = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;

export const Name = styled.div`
  padding: 20px 0 10px 0;
`;

export const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  background: #000;
  border-radius: 4px;
  padding: 10px 50px;
  border: 1px solid #000;
  width: 100%;
  text-decoration: none;
`;

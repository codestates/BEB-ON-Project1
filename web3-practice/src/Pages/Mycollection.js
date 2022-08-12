import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingImg from "../images/Loading_icon.gif";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const NameLeft = styled.div`
  color: black;
  width: 70%;
  float: left;
  font-weight:bold;
`;

const LogoStyle = styled.img`
  height: 14px;
`;

const ItemList = styled.li`
  list-style: none;
`;

const Mycollection = ({tokenURL, tokenName, link, isLoading }) => {

  return (
    <ItemList>
      <Card sx={{ width: 322, margin: 3 }}>
        <StyledLink to={link}>
          {isLoading ? (
            <CardMedia component="img" height="322" image={LoadingImg} />
          ) : (
            <CardMedia component="img" height="322" image={tokenURL} />
          )}
          <CardContent height="200">
            {isLoading ? null : <NameLeft> {tokenName}</NameLeft>}
          </CardContent>
        </StyledLink>
      </Card>
    </ItemList>
  );
};

export default Mycollection;
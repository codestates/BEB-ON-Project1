import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingImg from "../../images/Loading_icon.gif";
import EtherLogo from "../../images/Ethereum_logo.png";

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
const PriceRight = styled.div`
  width: 30%;
  float: right;
  color: rgb(80, 80, 80);
  text-align: right;
`;
const PriceDiv = styled.div`
  color: black;
`;
const LogoStyle = styled.img`
  height: 14px;
`;

const ItemList = styled.li`
  list-style: none;
`;

const Erc721 = ({tokenURL, tokenName, price, link, isLoading }) => {

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
            <PriceRight>
              Price
              <PriceDiv>
                <LogoStyle src={EtherLogo} />
                {"    "}
                {isLoading ? null : price}
              </PriceDiv>
            </PriceRight>
          </CardContent>
        </StyledLink>
      </Card>
    </ItemList>
  );
};

export default Erc721;
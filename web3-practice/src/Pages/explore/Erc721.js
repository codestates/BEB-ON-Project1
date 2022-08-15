import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingImg from "../../images/Loading_icon.gif";
import EtherLogo from "../../images/Ethereum_logo.png";

import BuyNFT from "../../Components/BuyNFT";
/* import SellNFT from "../../Components/SellRegistration"; */

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
  width: 10%;
  float: left;
  font-weight:bold;
`;
const ButtonCenter = styled.div`
  width: 25%;
  float: left;
  color: rgb(80, 80, 80);
  font-size: 15px;
  margin-top:35px;
  position:relative;
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

const Erc721 = ({web3, account, tokenId, tokenUri, tokenName, tokenOwner, price, link, isLoading, key }) => {

  return (
    <ItemList>
      
      <Card sx={{ width: 322, margin: 3 }}>

        <StyledLink to={link}>
          {isLoading ? (
            <CardMedia component="img" height="322" image={LoadingImg} />
          ) : (
            <CardMedia component="img" height="322" image={tokenUri} />
          )}
        </StyledLink>

          <CardContent height="200">
            {isLoading ? null : <NameLeft> {tokenName}</NameLeft>}

            <ButtonCenter>
              <BuyNFT web3={web3}
                      account={account}
                      tokenId={tokenId} ></BuyNFT>

              {/* <SellNFT web3={web3}
                      account={account}
                      tokenId={tokenId} ></SellNFT> */}
             
            </ButtonCenter>

            <PriceRight>
              Price
              <PriceDiv>
                <LogoStyle src={EtherLogo} />
                {"    "}
                {isLoading ? null : price}
              </PriceDiv>
            </PriceRight>
           
          </CardContent>
        
      </Card>
    </ItemList>
  );
};

export default Erc721;
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BasicNft is ERC721, ERC721URIStorage {
    uint256 private s_tokenCounter;

    event NftMinted(uint256 indexed tokenId, string setURI);

    constructor() ERC721("SimpleToken", "ST") {
        s_tokenCounter = 0;
    }

    function mintNft(string memory setURI) public {
        _safeMint(msg.sender, s_tokenCounter);
        _setTokenURI(s_tokenCounter, setURI);
        emit NftMinted(s_tokenCounter, setURI);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}

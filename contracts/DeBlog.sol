//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

contract DeBlog {
    
    event BlogAdded(
        uint256 blogId,
        address owner,
        string metadata,
        uint256 timestamp
    );

    /**
     * Blog metadata will contain:
     * Title:
     * Subtitle:
     * Blog date:
     * Author Name:
     * Cover Image:
     * Original Blog Content:
     */

    struct Blog {
        uint256 blogId;
        address blogOwner;
        string metadata;
        uint256 timestamp;
    }

    Blog[] blogs;

    struct Likes {
        address[] likers;
    }

    mapping(uint256 => Likes) blogToLikes;

    function getLikes(uint256 blogId_) public view returns (Likes memory) {
        return blogToLikes[blogId_];
    }

    function addLike(uint256 blogId_) public {
        blogToLikes[blogId_].likers.push(msg.sender);
    }

    function getAllblogs() public view returns (Blog[] memory) {
        return blogs;
    }

    function newBlog(string memory metadata_) public payable {
        blogs.push(
            Blog(blogs.length, payable(msg.sender), metadata_, block.timestamp)
        );

        emit BlogAdded(blogs.length, msg.sender, metadata_, block.timestamp);
    }

    function tipToOwner(address payable blogOwner_) public payable {
        blogOwner_.transfer(msg.value);
    }
}

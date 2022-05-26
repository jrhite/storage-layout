//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract StorageLayoutExamples {
    // storage slot 0
    uint256 public a;

    // storage slot 1 
    uint256[] public arrayOfNums;

    // storage slot 2 -- marker slot
    mapping (uint256 => uint256) public mapOfNums;

    // storage slot 3
    uint256[4] public staticArrayOfNumbers = [101, 38, 60, 404];

    constructor() {
        a = 117;

        arrayOfNums.push(9);
        arrayOfNums.push(33);
        arrayOfNums.push(14);

        mapOfNums[44] = 200;
        mapOfNums[103] = 5;
        mapOfNums[21] = 118;
        mapOfNums[99] = 384;
    }
}

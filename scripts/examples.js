const hre = require("hardhat");
const solc = require("solc");

const provider = hre.waffle.provider;
const utils = hre.ethers.utils;
const BigNumber = hre.ethers.BigNumber;

/////////////////////////////////
//
// The exercises are marked with TODO comments and require you to
// to calculate the correct storage slots for the different variables
// in the contract ./contracts/StorageLayoutExamples.sol
//
// You'll want to have the Solidity storage layout docs handy as you
// work your way through the TODOs below:
// 
// https://docs.soliditylang.org/en/v0.8.14/internals/layout_in_storage.html
//
//
// To run this script, first make sure you are in the base directory of the
// and then install the project dependencies:
//
//    npm i
//
// Finally run the examples.js script and compare the console.log() output
// between what ethers.js returns and with what provider.getStorageAt() returns
// to see if you correctly calculated the different storage slots. Run the
// script from the base project directory with:
//
//    npx hardhat run scripts/examples.js
//
/////////////////////////////////

async function main() {
  const StorageLayoutExamples = await hre.ethers.getContractFactory(
    'StorageLayoutExamples'
  );
  const storageLayoutExamples = await StorageLayoutExamples.deploy();

  await storageLayoutExamples.deployed();

  console.log(
    'StorageLayoutExamples deployed to:',
    storageLayoutExamples.address
  );

  /////////////////////////////////////
  /////////////////////////////////////
  /////////////////////////////////////

  const a_viaEthersJs = await storageLayoutExamples.a();
  console.log(`a_viaEthersJs = ${a_viaEthersJs.toString()}`);

  // TODO: calculate storage slot of variable a
  // HINT: as a warmup a's storage slot is 0  :-)
  const storageSlot_A = 0;

  const a_viaGetStorageAt = await provider.getStorageAt(
    storageLayoutExamples.address,
    storageSlot_A
  );

  console.log(`a_viaGetStorageAt = ${BigNumber.from(a_viaGetStorageAt).toString()}`);

  const arrayOfNumsAtIndex1_viaEthersJs = await storageLayoutExamples.arrayOfNums(1);
  console.log(`arrayOfNumsAtIndex1_viaEthersJs = ${arrayOfNumsAtIndex1_viaEthersJs}`);

  // TODO: calculate storage slot of arrayOfNums[1] and change the value below from 0
  const storageSlot_arrayOfNumsAtIndex1 = 0;

  const arrayOfNumsAtIndex1_viaGetStorageAt = await provider.getStorageAt(
    storageLayoutExamples.address,
    storageSlot_arrayOfNumsAtIndex1
  );

  console.log(`arrayOfNumsAtIndex1_viaGetStorageAt = ${BigNumber.from(arrayOfNumsAtIndex1_viaGetStorageAt).toString()}`);

  const mapOfNumsAtKey103_viaEthersJs = await storageLayoutExamples.mapOfNums(103);
  console.log(`mapOfNumsAtKey103_viaEthersJs = ${mapOfNumsAtKey103_viaEthersJs}`);

  // TODO: calculate storage slot of mapOfNums[103] and change the value below from 0
  const storageSlot_mapOfNumsAtKey103 = 0;

  const mapOfNumsAtKey103_viaGetStorageAt = await provider.getStorageAt(
    storageLayoutExamples.address,
    storageSlot_mapOfNumsAtKey103
  );

  console.log(
    `mapOfNumsAtKey103_viaGetStorageAt =
    ${BigNumber.from(mapOfNumsAtKey103_viaGetStorageAt).toString()}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

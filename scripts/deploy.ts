import { ethers } from "hardhat";

async function main() {
  console.log(await ethers.provider);
  const NFTawait = await ethers.getContractFactory("NFT");
  const NFTToken = await NFTawait.deploy();

  await NFTToken.deployed();
  await NFTToken.createNFT(
    "ipfs://QmckfAdSxbhyvvH1ieN9BcraXP89yHnAoAcE7tN8YzF978"
  );
  // await NFTToken.tokenURI(1);
  console.log("NFT deployed to:", NFTToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

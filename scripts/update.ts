import { ethers } from "hardhat";

async function main() {
  console.log(await ethers.provider);
  const NFTToken = await ethers.getContractAt(
    "NFT",
    "0x008e8386B662b762D6476597d694bAD627a1504F"
  );

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

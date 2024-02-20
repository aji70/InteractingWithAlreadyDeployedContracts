import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const ajidokwu = await ethers.deployContract("Ajidokwu20", [owner]);

  await ajidokwu.waitForDeployment();

  const staking = await ethers.deployContract("Staking", [ajidokwu.target]);

  await staking.waitForDeployment();

  console.log(` Ajidokwu token is deployed to ${ajidokwu.target}`);

  console.log(` Staking token is deployed to ${staking.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

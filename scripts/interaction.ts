import { ethers } from "hardhat";

const main = async () => {
  //   const stakingJuliet = await ethers.getContractAt("IStaking", "0x5C8f5D80FD653a885832dF5c1f09978C81A8cDC4");

  ////// Alternative way of interactng with a deployed contract without using Contract Interface /////
  const Ajidokwu = await ethers.getContractFactory("Ajidokwu20");
  const ajidokwu = Ajidokwu.attach(
    "0xA32295838B453A85c4db15cc38c03648A8AB3E93"
  );
  const Staking = await ethers.getContractFactory("Staking");
  const staking = Staking.attach("0xC880814A4cfe3F3acC9FCCEa2344537901619D4F");

  const approve = await ajidokwu.approve(
    "0xC880814A4cfe3F3acC9FCCEa2344537901619D4F",
    100000
  );

  approve.wait();

  const stakeBalanceTxn = await staking.stake(2000, 10);
  const stakeWithdrawTxn = await staking.totalStakedBalance();

  console.log("Stake: ", stakeWithdrawTxn);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

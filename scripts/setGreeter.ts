// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { IGreeter } from "../typechain";

/*
typechain helps us to generate type for our contract  which is the  Greeter contract type at the same time it enable to generate 
abi to interact with our contract
*/

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  // await greeter.deployed();
  // console.log("Greeter deployed to:", greeter.address);

  const add: string = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const deployedGreeter = (await ethers.getContractAt(
    "IGreeter",
    add
  )) as IGreeter;
  deployedGreeter.setGreeting("HELLO WORLD");
  console.log(await deployedGreeter.greet());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

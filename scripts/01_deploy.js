async function main() {
  [signer1, signer2, signer3] = await ethers.getSigners();

  const Donation = await ethers.getContractFactory('Donation', signer1);
  const donation = await Donation.deploy();

  console.log("Donation contract deployed to:", donation.address, "by", signer1.address);		//print出地址,則可在前端引用此合約

  await signer1.sendTransaction({				//部屬合約後的動作(啟動前端時,預設起始畫面已經有人sent以太幣)
    to: donation.address,
    value: ethers.utils.parseUnits('0.1', 18)
  });
  await signer2.sendTransaction({
    to: donation.address,
    value: ethers.utils.parseUnits('0.1', 18)
  });
  await signer3.sendTransaction({
    to: donation.address,
    value: ethers.utils.parseUnits('2', 18)
  });
}

// npx hardhat run --network localhost scripts/01_deploy.js

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

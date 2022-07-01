const { expect } = require("chai");

describe('Donation', function () {
  beforeEach(async function() {
    [signer1, signer2, signer3] = await ethers.getSigners();		//獲得與合約交互的錢包地址(getSigner)

    Donation = await ethers.getContractFactory('Donation', signer1);	//signer部屬合約
    donation = await Donation.deploy()
  });

  describe('donateEther', function () {
    it('transfers ether to the contract', async function() {		//將以太幣轉入合約
      const provider = waffle.provider;						//使用waffle獲取provider

      await signer2.sendTransaction({						//signer對此合約捐贈(send)以太幣
        to: donation.address,								//獲取合約部屬地址
        value: '100'									//發送的以太幣數量
      });

      expect(
        await provider.getBalance(donation.address)				//provider獲取合約的餘額,傳遞合約地址
      ).to.equal('100');								//(getBalance不是此合約中的函式,但透過ethersjs可以獲取區塊鏈上任何地址的以太幣餘額)
    });
  })

  describe('getTotalDonations', function () {
    it('returns the sum of donations transferred to the contract', async function() {		//return轉入合約的捐款總額
      const provider = waffle.provider;

      await signer1.sendTransaction({
        to: donation.address,
        value: '1'
      });
      await signer2.sendTransaction({
        to: donation.address,
        value: '5'
      });
      await signer3.sendTransaction({
        to: donation.address,
        value: '50'
      });

      expect(
        await donation.connect(provider).getTotalDonations()
      ).to.equal('56')
    })
  })

  describe('getDonations', function () {
    it('returns an array of donations transferred to the contract', async function() {		//return轉入合約的金額(array)
      const provider = waffle.provider;

      await signer1.sendTransaction({
        to: donation.address,
        value: '10'
      });
      await signer2.sendTransaction({
        to: donation.address,
        value: '20'
      });

      const donations = await donation.connect(provider).getDonations()

      expect(donations[0].donor).to.equal(signer1.address);			//返回array中第一個元素,檢查其發送地址是否與signer1地址相同(signer1為第一位捐款者)
      expect(donations[0].amount).to.equal('10');
      expect(donations[1].donor).to.equal(signer2.address);
      expect(donations[1].amount).to.equal('20');
    })
  })
})
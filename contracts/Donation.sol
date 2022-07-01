pragma solidity ^0.8.0;		//使用Solidity版本0.8.0編寫

contract Donation {
  address owner;			//地址為owner(只儲存第一次部屬此合約的地址)
  uint256 totalDonations;	//儲存所有捐款的總和

  struct Donation {		//定義Donation結構(儲存每筆捐款的訊息)
    address donor;		//捐款者錢包地址
    uint256 amount;		//捐款金額
  }
  Donation donation;
  Donation[] donations;		//每筆單獨的捐款添加至array中

  constructor() {			//定義構造函數

    owner = msg.sender;		//獲取第一次部屬此合約的錢包地址並保存給owner(僅在部署合約時執行一次)
  }

  receive() external payable {	//定義receive(接收)函數,設定其為external(外部的),允許此合約可以接收以太幣
    donation  = Donation(		//創建結構實例
      msg.sender,				//sender(發送者)的錢包地址
      msg.value				//以太幣數量
    );

    donations.push(donation);		//將其結果送至array中
    totalDonations += msg.value;	//將捐款金額加入至總額(此合約中收到的所有捐款總額)
  }

  function getDonations() external view returns (Donation[] memory) {		//定義getDonations function(返回array),(external view:外部可視(訪客,使用者UI可見))
    return donations;										//返回已完成的捐款
  }

  function getTotalDonations() external view returns (uint256) {
    return totalDonations;									//return所有捐款總和
  }
}

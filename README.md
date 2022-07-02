# Donation-dapp  

11002-36366區塊鏈技術-期末專題  

說明:  
  啟動網頁伺服器需先遵循以下指令:  
  在cmd命令列,cd切換至專案資料夾,鍵入npx hardhat node,且須保持執行  
  開啟另一cmd視窗,一樣切至專案資料夾,鍵入npx hardhat run --network localhost scripts/01_deploy.js,一樣須保持執行  
  最後開啟一cmd視窗,cd至專案資料夾底下的client目錄,鍵入npm start即可啟動網頁伺服器  
      
其他注意事項:  
  若執行失敗或版本不符,嘗試刪除node_modules資料夾重新安裝環境及套件,以下為使用到的安裝指令  
  npm i --save-dev hardhat  
  npx create-react-app client  
  npm i --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle Ethereum-waffle chai  
  npm i bootstrap ethers react-bootstrap-icons  
     
  接著再重新編譯及測試:  
  npx hardhat compile  
  npx hardhat test  
  npx hardhat run  

  然後再重做"說明"的步驟即可   
  
     
*此專案目前上傳版本只允許在本地端操作,成功啟動網頁後需與Metamask建立連線  
  網路選擇Localhost8545,chainID設置為31337  
  
若執行至donate步驟,於Meatamask彈出視窗點選確認交易後彈出報錯訊息,或者沒有顯示交易資料,可能原因如下:  
  WARNING: Calling an account which is not a contract -> 未保持執行npx hardhat run --network localhost scripts/01_deploy.js,  
  解決辦法為執行後刷新頁面重新操作即可  
    
  Nonce too high. Expected nonce to be 0 but got 1. Note that transactions can't be queued when automining. -> Metamask nonce設置問題,  
  解決辦法為重置Metamask帳戶  





  

    

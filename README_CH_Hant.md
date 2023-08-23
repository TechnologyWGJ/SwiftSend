# SwiftSend

🔥 一個免費且開源的網頁傳輸工具。

繁体中文 | [简体中文](./README_CH.md) | [English](./README.md)

# 其他版本
- [SwiftSend for Ios](https://github.com/TechnologyWGJ/SwiftSend-for-ios)
- [SwiftSend for Server](https://github.com/TechnologyWGJ/SwiftSend-for-server)

# 簡介
## SwiftSend是基於Electron開發，支援Mac、Windows和Linux三個主要平台

| Mac | Windows | Linux |
| :---: | :-------: | :-----: |
| ☑️ | ☑️ | ☑️ |

## SwiftSend是一個高效的Web傳輸工具
- SwiftSend無需客戶端，無需帳號，即可快速傳輸文件
- SwiftSend可以配置文件超時後自動刪除，有效防止攻擊者惡意向伺服器傳輸大量大文件，將伺服器硬盤佔滿
- 管理員可以通過SwiftSend配置文件，高效管理服務
- SwiftSend支持對文件大小進行限制，防止硬盤空間不足

## 使用場景
### 你想給同事傳一份文件，又不想加對方QQ，則可以將文件上傳到SwiftSend，告訴對方驗證碼就可以實現傳輸文件

# 二次開發
- 安裝 `Node.js`
```shell
brew install node
```
- 建立一個資料夾，用來儲存程式碼
```shell
mkdir SwiftSend
```
- 進入該資料夾
```shell
cd SwiftSend
```
- 複製儲存庫
```shell
git clone https://github.com/TechnologyWGJ/SwiftSend.git
```
- 初始化 `Node.js`
```shell
npm init
```
- 安裝 `Electron`
```shell
npm install electron
```

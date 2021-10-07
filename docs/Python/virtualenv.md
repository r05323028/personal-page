---
id: virtualenv
title: 虛擬環境
sidebar_label: 虛擬環境
---

# 虛擬環境

虛擬環境能夠在不同的 project 中，分別管理自己安裝的套件，類似於 `node.js` 會在每個 project 中建立 `node_modules` 的效果

## 建立虛擬環境

官方提供了一個套件 `venv` 來幫我們建立虛擬環境，只需執行下面指令

```bash
python -m venv 虛擬環境路徑
```

就會建立一個虛擬環境了

## 進入虛擬環境

建立好虛擬環境以後，我們還需要切換到我們建好的虛擬環境中

```bash
source 虛擬環境路徑/bin/activate
```

執行以上指令以後，不管是執行 `.py` 檔或是安裝套件，都會在虛擬環境中執行，可以執行 `which python` 來做驗證。

## 離開虛擬環境

```bash
deactivate
```
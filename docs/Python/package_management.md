---
id: package_management
title: 套件管理
sidebar_label: 套件管理
---

# 套件管理

## Pip

官方提供的套件管理工具，但其不會幫使用者產生lock檔，也不會解決版本衝突，跟虛擬環境的整合也比較差。

:::caution
使用 `pip` 安裝套件時，須先確保進入**虛擬環境**中，否則套件會被安裝進系統的 Python
:::

### requirements.txt

`requirements.txt`是`pip`用來記錄安裝了哪些套件與對應版本的文件，可以透過以下指令產生

```bash
pip freeze > requirements.txt
```

### 安裝套件

```bash
# 在虛擬環境中執行
pip install 套件名稱
```

### 移除套件
```bash
# 在虛擬環境中執行
pip uninstall 套件名稱
```

## Poetry

`poetry` 是一個進階的套件管理工具，使用`pyproject.toml`來管理套件，並且會幫使用者產生`poetry.lock`來解決版本衝突問題，跟虛擬環境的整合度也很好。

:::info
使用前須先安裝`poetry`，由於它是一個通用的工具，可以直接裝進系統的 Python

```bash
pip install poetry
```

再來可以在 Terminal 打 `poetry --help` 測試有沒有出現幫助訊息。
:::

### 建立 Project

在 Terminal 中打

```bash
poetry new 名稱
```

便會開啟一個 prompt 詢問用戶一些問題，並創造一個資料夾，類似於 `node.js` 中的 `npm init`

### 建立虛擬環境

在 Terminal 中打

```bash
poetry env use python路徑

poetry env use python版本
```

### 安裝套件

在 Terminal 中打

```bash
poetry add 套件名稱
```

### 移除套件

在 Terminal 中打

```bash
poetry remove 套件名稱
```

### 進入虛擬環境

在 Terminal 中打

```bash
poetry shell
```

### 不進入虛擬環境直接以虛擬環境執行

在 Terminal 中打

```bash
poetry run 指令 [參數]
```

### `pyproject.toml`

`pyproject.toml` 是 `PEP 517` 、 `PEP 518` 中訂定用來規範 Python 專案的設定檔，裡面記載了套件的基本資料、套件相依、編譯環境及測試設定等。

範例

```conf
[tool.poetry]
name = "primer-on-statistics"
version = "0.1.0"
description = ""
authors = ["Sean Chang"]
license = "MIT"

[tool.poetry.dependencies]
python = "~3.8"
jupyter-book = "^0.11.1"
numpy = "^1.21.0"
matplotlib = "^3.4.2"
plotly = "^5.1.0"
ipywidgets = "^7.6.3"
more-itertools = "^8.8.0"
jupyter = "^1.0.0"
sphinx-sitemap = "^2.2.0"
scipy = "^1.7.0"
sphinx-inline-tabs = "^2021.4.11-beta.9"

[tool.poetry.dev-dependencies]
pylint = "^2.9.5"
yapf = "^0.31.0"

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"

```
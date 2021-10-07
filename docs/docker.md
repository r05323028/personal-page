---
id: docker
title: Docker
sidebar_label: Docker
---

# Docker

## 使用方法


### 以 Image 創造一個 Container

```bash
docker run [選項] Image名稱:版本 指令 [參數]
```

下面以創造一個 MySQL 5.7 的 Container 為例

```bash
docker run \
    --name mysql-container \
    -v ./mydata:/var/lib/mysql \
    -p 3306:3306 \
    --rm \
    -e MYSQL_ROOT_PASSWORD=example \
    mysql:5.7
```

其中

- `--name`: 是給 Container 命名，否則會被給予一個隨機的名稱
- `-v`: 是將本地端的路徑掛載進 Container 中的某個路徑
- `-p`: 是將 Container 內的某個 Port 做 Port Forwarding 到本地端的網路
- `-e`: 是指定環境變數
- `--rm`: 是當 Container 停止時，自動將其移除

更多的用法可以參照 `docker run --help`
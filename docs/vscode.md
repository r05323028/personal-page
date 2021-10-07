---
id: vscode
title: VS Code 設定
sidebar_label: VS Code 設定
---

## Python

在 `./.vscode/settings.json` 中

```json
{
    "python.pythonPath": "",
    "python.formatting.provider": "yapf",
    "python.linting.enabled": true

}
```

## Dev Container

在 `./.devcontainer/devcontainer.json` 中

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.187.0/containers/javascript-node
{
	"name": "Node.js",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version: 12, 14, 16
		"args": { "VARIANT": "16" }
	},

	// Set *default* container specific settings.json values on container create.
	"settings": {},

	// Add the IDs of extensions you want installed when the container is created.
	"extensions": [
		"dbaeumer.vscode-eslint"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "yarn install",

	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "node"
}

```
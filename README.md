# ignite-code-extension

This extension uses [React](https://reactjs.org/) + [Create React App](https://create-react-app.dev/) + [Webview UI Toolkit](https://github.com/microsoft/vscode-webview-ui-toolkit) in a VS Code webview.

## Prerequisites

Node.js is required and we recommend [nvm](https://github.com/nvm-sh/nvm) to use the Node version specified in the `.nvmrc` file.

```sh
# Install the Node version specified in the `.nvmrc` file
nvm install

# Switch to that Node version
nvm use

# Optionally persist that as the default Node version
nvm alias default
```

For deeper shell integration with nvm, you can follow [their docs](https://github.com/nvm-sh/nvm#deeper-shell-integration) to, for example, update your `~/.zshrc` to call `nvm use` automatically when entering a directory with a `.nvmrc` file.

### Install dependencies

Install dependencies for both the extension and webview UI source code

```sh
npm run install:all
```

## Build

Build React webview source code before compiling or running the extension.

```sh
npm run build:webview
```

Compile and package the extension as a VSIX file

```sh
npm run package
```

## Install the extension

Install the extension from the VSIX file into VS Code

```sh
npm run install:extension
```

Alternatively, you can install the extension it by running the command "Extensions: Install from VSIX..." and selecting the VSIX file.

## Development

### Browser development environment

Run the React webview source code in development mode. Open http://localhost:3000 to view it in the browser.

```sh
npm run start:webview
```

### Extension Host development environment

Build webview UI source code

```sh
npm run build:webview
```

Open this project in VS Code

```sh
code .
```

Once open in VS Code, you can run the extension:

1. Press `F5` to open a new Extension Development Host window
2. Inside the host window, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and type `Ignite GPT: Show`

## Usage

Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and type `Ignite GPT: Hello world` or `Ignite GPT: Show`.

## Documentation

For a deeper dive into how this works, read the guides below.

- [Extension structure](./docs/extension-structure.md)
- [Extension development cycle](./docs/extension-development-cycle.md)

# Contributing

## Prerequisites

```sh
cp .env.example .env
```

Then add your OpenAI API key to the .env file

### Recommended

Install the Node version specified in the `.nvmrc` file

```sh
nvm install
```

Switch to that Node version

```sh
nvm use
```

### Optional

Persist the default Node version

```sh
nvm alias default
```

## Install

Install global dependencies

```sh
npm install -g vsce
```

Install local dependencies

```sh
npm install
```

## Build

Build the extension as a VSIX file

```sh
npm run build
```

## Install

Install the extension from the VSIX file

```sh
npm run install:extension
```

Alternatively, you can install the extension it by running the command "Extensions: Install from VSIX..." and selecting the VSIX file.

## Usage

Open the command pallette with `Ctrl+Shift+P` and type `Ignite Hello World` to see the output.

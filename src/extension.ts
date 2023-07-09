// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const helloWorld = async () => {
  console.log('helloWorld');
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "ignite-code-extension" is now active!',
  );

  let subscriptions = [
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    vscode.commands.registerCommand(
      'ignite-code-extension.helloWorld',
      async () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage(
          'Hello World from ignite-code-extension!',
        );
        try {
          await helloWorld();
        } catch (e) {
          console.log(e);
        }
      },
    ),

    vscode.window.onDidChangeActiveTextEditor((e) => {
      console.log('onDidChangeActiveTextEditor', e);
    }),

    vscode.window.onDidChangeTextEditorSelection((e) => {
      console.log('onDidChangeTextEditorSelection', e);
    }),

    vscode.window.onDidChangeActiveNotebookEditor((e) => {
      console.log('onDidChangeActiveNotebookEditor', e);
    }),

    vscode.window.onDidChangeNotebookEditorSelection((e) => {
      console.log('onDidChangeNotebookEditorSelection', e);
    }),

    vscode.window.onDidChangeWindowState((e) => {
      console.log('onDidChangeWindowState', e);
    }),
  ];

  context.subscriptions.push(...subscriptions);
}

// This method is called when your extension is deactivated
export function deactivate() {}

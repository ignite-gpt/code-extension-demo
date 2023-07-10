import * as vscode from 'vscode'
import { Configuration, OpenAIApi } from 'openai'
import { HelloWorldPanel } from './panels/HelloWorldPanel'

const configuration = new Configuration({
  // TODO: Hardcode you OpenAI API key here
  apiKey: process.env.OPENAI_API_KEY,
})

const openaiAPI = new OpenAIApi(configuration)

async function askGpt(prompt: string) {
  const chatCompletion = await openaiAPI.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  })
  console.log(chatCompletion)

  return chatCompletion.data.choices[0].message?.content
}

const replaceTextAtCursor = async (text: string) => {
  const editor = vscode.window.activeTextEditor
  if (!editor) {
    return
  }

  const selection = editor.selection

  editor.edit((editBuilder) => {
    if (selection.isEmpty) {
      // if there's no selection, insert at cursor position
      editBuilder.insert(selection.start, text)
    } else {
      // if there's a selection, replace it
      editBuilder.replace(selection, text)
    }
  })
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('The extension "ignite-code-extension" has been activated.')

  const showHelloWorldCommand = vscode.commands.registerCommand(
    'hello-world.showHelloWorld',
    () => {
      HelloWorldPanel.render(context.extensionUri)
    }
  )
  context.subscriptions.push(showHelloWorldCommand)

  let subscriptions = [
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    vscode.commands.registerCommand(
      'ignite-code-extension.helloWorld',
      async () => {
        const userInput = await vscode.window.showInputBox({
          placeHolder: 'Enter your text here...',
        })
        if (!userInput) {
          return
        }
        let response
        try {
          response = await askGpt(userInput)
        } catch (e) {
          console.log(e)
        }
        try {
          await replaceTextAtCursor(response ?? '')
        } catch (e) {
          console.log(e)
        }
      }
    ),

    vscode.window.onDidChangeActiveTextEditor((e) => {
      console.log('onDidChangeActiveTextEditor', e)
    }),

    vscode.window.onDidChangeTextEditorSelection((e) => {
      console.log('onDidChangeTextEditorSelection', e)
    }),

    vscode.window.onDidChangeActiveNotebookEditor((e) => {
      console.log('onDidChangeActiveNotebookEditor', e)
    }),

    vscode.window.onDidChangeNotebookEditorSelection((e) => {
      console.log('onDidChangeNotebookEditorSelection', e)
    }),

    vscode.window.onDidChangeWindowState((e) => {
      console.log('onDidChangeWindowState', e)
    }),
  ]

  context.subscriptions.push(...subscriptions)
}

// This method is called when your extension is deactivated
export function deactivate() {}

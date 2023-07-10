import { useState } from 'react'
import { vscode } from './utilities/vscode'
import { VSCodeButton, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  function handleHowdyClick() {
    vscode.postMessage({
      command: 'hello',
      text: inputValue,
    })
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <VSCodeTextField
        placeholder="Type something here"
        value={inputValue}
        onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
        style={{ marginBottom: '8px' }}
      />
      <VSCodeButton onClick={handleHowdyClick}>Howdy!</VSCodeButton>
    </main>
  )
}

export default App

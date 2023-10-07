import { FC } from 'react'
import './App.css'

interface AppProps {
  value: string
}

const App: FC<AppProps> = ({ value }) => {
  return (
    <div className='App'>
      <h1>React ESLint and Prettier / Husky</h1>
      <p>{value}</p>
    </div>
  )
}

export default App

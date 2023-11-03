import { useEffect, useState } from 'react'
import { ThemeProvider, ThemeContext } from './contexts/theme'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }
  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);

  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

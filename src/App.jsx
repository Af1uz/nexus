import React, { useState } from 'react'
import Boss1 from './components/InfoPage'
import Boss2 from './components/IntroPage'
import Boss3 from './components/FouterPage'

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('uz');

  const toggleTheme = () => setIsDark(!isDark);
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Boss1
        isDark={isDark}
        language={language}
        toggleTheme={toggleTheme}
        changeLanguage={changeLanguage}
      />
      <Boss2
        isDark={isDark}
        language={language}
      />
      <Boss3
        isDark={isDark}
        language={language}
      />
    </div>
  )
}

export default App
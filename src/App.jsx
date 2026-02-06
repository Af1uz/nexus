import React, { useState } from 'react'
import Boss1 from './components/InfoPage'
import Boss2 from './components/IntroPage'
import Boss3 from './components/FouterPage'

const App = () => {
  // 1. Holatlarni (state) eng tepada e'lon qilamiz
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('uz');

  // 2. Rejimni o'zgartirish funksiyasi
  const toggleTheme = () => setIsDark(!isDark);

  // 3. Tilni o'zgartirish funksiyasi
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    // Umumiy wrapperga rejimni beramiz (agar CSS orqali fon o'zgarsa)
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      
      {/* Boss1 - InfoPage: Bunda tugmalar bor deb faraz qilamiz */}
      <Boss1 
        isDark={isDark} 
        language={language} 
        toggleTheme={toggleTheme} 
        changeLanguage={changeLanguage} 
      />

      {/* Boss2 - IntroPage: Bu ma'lumotlarni qabul qiladi */}
      <Boss2 
        isDark={isDark} 
        language={language} 
      />

      {/* Boss3 - FouterPage: Bu ham rejimga moslashadi */}
      <Boss3 
        isDark={isDark} 
        language={language} 
      />

    </div>
  )
}

export default App
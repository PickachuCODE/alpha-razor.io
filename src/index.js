import React from 'react';
import ReactDOM from 'react-dom';
import { LoadHub } from './App';
import { AuthContextProvider } from './Firebase/AuthContext';
import { RazorLocalStorage } from './RazorFunctions/LocalStorage';
import { WizardManger } from './RazorHub/HubManger/WizardManger';
import { ThemeContextProvider } from './ThemeManger/Themes';



ReactDOM.render(
  <React.StrictMode>
    <RazorLocalStorage>

    <WizardManger>
    <ThemeContextProvider >
      <AuthContextProvider>
        <LoadHub />
          </AuthContextProvider>
    </ThemeContextProvider>
    </WizardManger>
    </RazorLocalStorage>

  </React.StrictMode>,
  document.getElementById('root')
);
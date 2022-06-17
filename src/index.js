import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadHub } from './App';
import { AuthContextProvider } from './Firebase/AuthContext';
import { RazorLocalStorage } from './RazorFunctions/LocalStorage';
import { EditorContextProvider } from './RazorFunctions/RazorEdtorContext';
import { WizardManger } from './RazorHub/HubManger/WizardManger';
import { ThemeContextProvider } from './ThemeManger/Themes';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <RazorLocalStorage>
      <WizardManger>
        <ThemeContextProvider >
          <AuthContextProvider>
            <EditorContextProvider>
              <LoadHub />
            </EditorContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </WizardManger>
    </RazorLocalStorage>
  </React.StrictMode>);
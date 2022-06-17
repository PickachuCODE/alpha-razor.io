import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route, } from 'react-router-dom'
import { MyPlugins } from '../RazorHub/HubManger/MyPlugins'
import { MyProjects } from '../RazorHub/HubManger/MyProject'

export default function Pages() {
  return (
    <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MyProjects />} />
                  <Route path="MyPlugins" element={<MyPlugins />} />
              </Routes>
          </BrowserRouter>
    </div>
  )
}

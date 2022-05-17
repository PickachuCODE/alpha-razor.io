import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MyPlugins } from '../RazorHub/HubManger/MyPlugins'
import { MyProjects } from '../RazorHub/HubManger/MyProject'

export default function Pages() {
  return (
    <div>
          <BrowserRouter>
              <Switch>
                  <Route path="/" element={<MyProjects />} />
                  <Route path="MyPlugins" element={<MyPlugins />} />
              </Switch>
          </BrowserRouter>
    </div>
  )
}

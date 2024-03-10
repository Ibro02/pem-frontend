import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { createBrowserRouter } from 'react-router-dom'
import { Navigate, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.tsx'
import Subject from './pages/Subject/Subject.tsx'
import Settings from './pages/Settings/Settings.tsx'
import PersonalProgress from './pages/PersonalProgress/PersonalProgress.tsx'
import Lecture from './pages/Lecture/Lecture.tsx'
const queryClient = new QueryClient();

export const router = createBrowserRouter([
  { path: "home", element: <Home/>, errorElement: <h1>404</h1> },
  { path: "lectures", element: <Subject/>, errorElement: <h1>404</h1> },
  {path: "/lectures/:id", element: <Lecture/>,errorElement: <h1>404</h1>},
  { path: "exams", element: <Subject/>, errorElement: <h1>404</h1> },
  { path: "progress", element: <PersonalProgress/>, errorElement: <h1>404</h1> },
  { path: "settings", element: <Settings/>, errorElement: <h1>404</h1> },
  { path: "", element: <App /> },
  ]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<h1>Haha</h1>}>
    <App />
      </RouterProvider>
      </Provider>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)

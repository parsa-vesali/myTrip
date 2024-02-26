import React from 'react'
import routes from './Routes/Routes'
import { useRoutes } from "react-router-dom";
export default function App() {
  const route = useRoutes(routes)
  return (
    <div>
      {route}
    </div>
  )
}

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes/RoutePath"
import { Header } from "./components/Header"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={<r.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

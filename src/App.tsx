import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/RoutePath";
import { Header } from "./components/Header";
import { MapProvider } from "./pages/map/context/MapContext";

function App() {
    return (
        <MapProvider>
            <BrowserRouter>
                <Header />

                <Routes>
                    {routes.map((r) => (
                        <Route
                            key={r.path}
                            path={r.path}
                            element={<r.component />}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </MapProvider>
    );
}

export default App;

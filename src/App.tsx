import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/RoutePath";
import { Header } from "./components/Header";
import { MapProvider } from "./pages/map/context/MapContext";
import { GlobalProvider } from "./context/globalContext";

function App() {
    return (
        <GlobalProvider>
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
        </GlobalProvider>
    );
}

export default App;

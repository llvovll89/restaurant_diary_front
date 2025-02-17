import { createContext, useContext, useState } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

interface MapContextType {
    map: any;
    marker: any;
    setMap: (map: any) => void;
    setMarker: (marker: any) => void;
    isVisibleSidebar: boolean;
    toggleIsVisibleSidebar: () => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
    const [map, setMap] = useState<any>(null);
    const [marker, setMarker] = useState<any>(null);
    const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

    const toggleIsVisibleSidebar = () => {
        setIsVisibleSidebar(!isVisibleSidebar);
    }

    return (
        <MapContext.Provider value={{ map, marker, setMap, setMarker, toggleIsVisibleSidebar, isVisibleSidebar }}>
            {children}
        </MapContext.Provider>
    );
};

export const useMap = () => {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error("useMap must be used within a MapProvider");
    }
    return context;
};

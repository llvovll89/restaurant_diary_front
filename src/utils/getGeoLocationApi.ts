export const getGeoLocationApi = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
        const onSuccess = (location: {
            coords: { latitude: number; longitude: number };
        }) => {
            resolve({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });
        };

        const onError = (error: { code: number; message: string }) => {
            alert({
                title: "위치 정보를 가져오는데 실패하였습니다.",
                html: `${error.message}`,
                icon: "warning",
                isCancel: false,
            });

            reject(error);
        };

        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation API를 제공하지 않는 프로토콜 입니다.",
            });

            return;
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
};

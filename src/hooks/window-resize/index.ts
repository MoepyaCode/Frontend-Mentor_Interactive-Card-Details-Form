import { useEffect, useState } from "react";

export function useWindowResize()  {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [deviceType, setDeviceType] = useState<DeviceType>()

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [setInnerWidth])

    useEffect(() => {
        if(innerWidth < 768) {
            setDeviceType('mobile')
        } else if(innerWidth >= 768 && innerWidth < 1024) {
            setDeviceType('tablet')
        } else {
            setDeviceType('desktop')
        }
    }, [innerWidth, setDeviceType])

    return { deviceType }
}
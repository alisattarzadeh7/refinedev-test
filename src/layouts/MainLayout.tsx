import {PropsWithChildren, useEffect} from "react";
import {Header} from "../components";
import {ThemedLayoutV2, ThemedSiderV2} from "@refinedev/antd";
import useProfile from "../queries/user.query";


const MainLayout: React.FC<PropsWithChildren> = ({children}) => {


    const {data:profileData} = useProfile()



    useEffect(()=>{
        localStorage.setItem('profile',JSON.stringify(profileData))
    },[profileData])


    return (
        <ThemedLayoutV2
            Header={Header}
            Sider={(props) => <ThemedSiderV2 {...props} fixed/>}
        >
            {children}
        </ThemedLayoutV2>
    )
}


export default MainLayout
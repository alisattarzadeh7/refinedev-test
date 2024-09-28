import {
    Refine,
    GitHubBanner,
    WelcomePage,
    Authenticated,
} from "@refinedev/core";
import {DevtoolsPanel, DevtoolsProvider} from "@refinedev/devtools";
import {RefineKbar, RefineKbarProvider} from "@refinedev/kbar";

import {
    AuthPage,
    ErrorComponent,
    useNotificationProvider,
    ThemedLayoutV2,
    ThemedSiderV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import {App as AntdApp} from "antd";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import routerBindings, {
    NavigateToResource,
    CatchAllNavigate,
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";

import {ColorModeContextProvider} from "./contexts/color-mode";
import {Login} from "./pages/login";
import {Register} from "./pages/register";
import {ForgotPassword} from "./pages/forgotPassword";
import {authProvider} from "./authProvider";
import CustomerListPage from "./pages/customer/list";
import {dataProvider} from "./providers/dataProvider";
import {CustomerCreate} from "./pages/customer/create";
import {accessControlProvider} from "./providers/accessProvider";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner/>
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                accessControlProvider={accessControlProvider}
                                dataProvider={dataProvider}
                                notificationProvider={useNotificationProvider}
                                routerProvider={routerBindings}
                                authProvider={authProvider}
                                resources={[
                                    {
                                        name: "customer",
                                        list: "/customer",
                                        create: "/customers/create",
                                        meta: {
                                            canDelete: true,
                                        },
                                    }
                                ]}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "K5AqwX-7fZMfK-9w2TFl",
                                }}
                            >
                                <Routes>
                                    <Route
                                        element={
                                            <Authenticated
                                                key="authenticated-inner"
                                                fallback={<CatchAllNavigate to="/login"/>}
                                            >
                                                <MainLayout>
                                                    <Outlet/>
                                                </MainLayout>
                                            </Authenticated>
                                        }
                                    >
                                        <Route path="/customer">
                                            <Route index element={<CustomerListPage/>}/>
                                            <Route path="create" element={<CustomerCreate/>}/>
                                        </Route>
                                        <Route path="*" element={<ErrorComponent/>}/>
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated
                                                key="authenticated-outer"
                                                fallback={<Outlet/>}
                                            >
                                                <NavigateToResource/>
                                            </Authenticated>
                                        }
                                    >
                                        <Route path="/login" element={<Login/>}/>
                                        <Route path="/register" element={<Register/>}/>
                                        <Route
                                            path="/forgot-password"
                                            element={<ForgotPassword/>}
                                        />
                                    </Route>
                                </Routes>

                                <RefineKbar/>
                                <UnsavedChangesNotifier/>
                                <DocumentTitleHandler/>
                            </Refine>
                            <DevtoolsPanel/>
                        </DevtoolsProvider>
                    </AntdApp>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;

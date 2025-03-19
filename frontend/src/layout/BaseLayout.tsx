import { Layout } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PageRoutes }from '../data/routes';
import PageContent from "../components/PageContent";
import PageSlider from "../components/PageSlider";

const { Sider, Content } = Layout;

const BaseLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed(!collapsed);

    return (
        <Layout className="min-h-screen h-[1000px]">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <PageSlider toggleCollapsed={toggleCollapsed} />
            </Sider>
            <Content>
                <Routes>
                    {PageRoutes.map((route) => route.subMenuKey === '' ?
                    <Route key={route.id} path={route.path} element={(
                        <PageContent
                            subMenuIcon={<></>}
                            subMenuName=""
                            currentIcon={route.icon}
                            currentName={route.name}
                            element={route.element}
                            description={route.description}
                        />
                    )}></Route> :
                    route.childMenu.map((childRoute: any) => (
                        <Route path={childRoute.path} element={(
                            <PageContent
                                subMenuIcon={route.icon}
                                subMenuName={route.name}
                                currentIcon={<></>}
                                currentName={childRoute.name}
                                element={childRoute.element}
                                description={childRoute.description}
                            />
                        )}></Route>
                    ))
                )}
                </Routes>
            </Content>
        </Layout>
    )
}
export default BaseLayout;
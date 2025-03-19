import { useEffect, useState } from "react";
import { PageSidebarProps } from "../interfaces/PageSidebarProps"
import { Menu, MenuProps } from "antd";
import { PageRoutes } from '../data/routes';
import { NodeCollapseOutlined, } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [...PageRoutes.map((route: any) => {
    if( route.subMenuKey === '' ){
        return getItem(route.name, route.key, route.icon)
    } else {
        return getItem(route.name, route.subMenuKey, route.icon, route.childMenu.map((childRoute: any) => {
            return getItem(childRoute.name, childRoute.key)
        }))
    }
}), getItem('Collapse', 'collapse', <NodeCollapseOutlined />)]

const mapPath = PageRoutes.flatMap((route: any) => {
    if( route.subMenuKey === '' ){
        return { key: route.key, path: route.path }
    } else {
        return [...route.childMenu.map((childRoute: any) => { 
            return { key: childRoute.key, path: childRoute.path }
        })]
    }
})

const PageSlider = ({toggleCollapsed}: PageSidebarProps) => {
    const [currentPage, setCurrentPage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const toPath = mapPath.find((route: any) => route.path === location.pathname);
        if( toPath !== undefined ) setCurrentPage(toPath.key)
    }, [location.pathname])

    const onClickMenuOptions: MenuProps['onClick'] = (e) => {
        if(e.key === 'collapse'){
            toggleCollapsed();
        } else {
            setCurrentPage(e.key);
            const toPath = mapPath.find((route: any) => route.key === e.key)
            if( toPath !== undefined ) navigate(toPath.path)
        }
    }

    return (
        <>
            <Menu
                theme='dark'
                onClick={onClickMenuOptions}
                defaultOpenKeys={[]}
                selectedKeys={[currentPage]}
                mode="inline"
                items={items}
            />
        </>
    )
}

export default PageSlider;
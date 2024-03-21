import {Layout, Menu, type MenuProps} from "antd";
import RoutesCustom from "../routes/RoutsEnum.tsx";
import {useNavigate} from "react-router-dom";

const {Sider} = Layout

const items = RoutesCustom.map((route) => {
    return {
        key: route.id,
        icon: route.icon,
        title: route.title,
        label: route.title,
        route: route.path,
        disabled: route.hideLink
    }
});


const SidebarCustom = () => {

    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (e) => {
        const path = items.find((item) => item.key === e.key)?.route;
        if (path) {
            navigate(path);
        }
    };

    return (
        <Sider
            style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0}}
        >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={onClick} />
        </Sider>
    )
}

export default SidebarCustom
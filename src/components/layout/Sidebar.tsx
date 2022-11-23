import { Layout, Menu } from 'antd';
import { items } from './mock-data';

const { Sider } = Layout;

type ISidebar = {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
};

const Sidebar: React.FC<ISidebar> = ({ collapsed, setCollapsed }) => {
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    );
};

export default Sidebar;

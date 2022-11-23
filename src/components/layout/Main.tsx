import { Layout } from 'antd';
import { useState } from 'react';
import Sidebar from './Sidebar';

import { css } from '@emotion/react';

const { Content, Header, Footer } = Layout;

type IMainProps = {} & React.PropsWithChildren;

const Main: React.FC<IMainProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className="site-layout">
                <Header css={header}>Header</Header>

                <Content style={{ margin: '20px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Pet project using Vite, Ant design</Footer>
            </Layout>
        </Layout>
    );
};

export default Main;

const header = css({
    padding: 0,
    color: '#fff !important',
});

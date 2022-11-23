import { Layout } from 'antd';
import { useState } from 'react';
import Sidebar from './Sidebar';

import { css } from '@emotion/react';

const { Content, Header, Footer } = Layout;

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className="site-layout">
                <Header css={header}>Header</Header>

                <Content style={{ margin: '20px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
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


import { Layout, theme } from "antd"
import {Outlet} from "react-router-dom";

const {Content } = Layout

export interface IProduct{
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[] ;
}


const ContentCustom = () =>
{

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
                style={{
                    padding: 24,
                    textAlign: 'center',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet></Outlet>
            </div>
        </Content>
    )
}

export default ContentCustom

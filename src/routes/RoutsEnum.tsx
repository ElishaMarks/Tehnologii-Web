import {
    HomeOutlined, ProductOutlined,FormOutlined
} from "@ant-design/icons"
import MainPage from "../components/MainPage.tsx";
import Products from "../components/Products.tsx";


export enum PathEnum {
    Main = '/',
    Products = '/products',
    //Product = '/product:id',
    Form = '/form'
}


const RoutesCustom = [{
    id: '1',
    path: PathEnum.Main,
    title: 'Main',
    element: <MainPage />,
    icon: <HomeOutlined />,
    exact: true,
    hideLink: false
}, {
    id: '2',
    path: PathEnum.Products,
    element:  <Products  />,
    title: 'Products',
    icon: <ProductOutlined />,
    exact: true,
    hideLink: false

}]


export default RoutesCustom;
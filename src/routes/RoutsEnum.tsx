import {
    HomeOutlined, ProductOutlined,FormOutlined
} from "@ant-design/icons"
import MainPage from "../components/MainPage.tsx";
import Products from "../components/Products.tsx";
import Form from "../components/FormCustom.tsx";


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

}, {
    id: '3',
    path: PathEnum.Form,
    icon: <FormOutlined />,
    title: 'Form',
    element: <Form />,
    exact: true,
    hideLink: false
}]


export default RoutesCustom;
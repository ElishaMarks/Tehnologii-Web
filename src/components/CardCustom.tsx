import { Card } from 'antd';
import { IProduct } from '../layouts/ContentCustom';
const { Meta } = Card;

interface IProductProps{
    product:  IProduct
}

const CardCustom = (props: IProductProps) => {
    const {product}= props;
    return(
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={product.title} src={product.thumbnail} />}
        >
            <Meta title = {product.title} description={product.description} />
        </Card>
    );
}
export default CardCustom;
import { Card } from 'antd';
import { IProduct } from '../layouts/ContentCustom';
const { Meta } = Card;
import { StarFilled } from '@ant-design/icons';
interface IProductProps{
    product:  IProduct
}

const CardCustom = (props: IProductProps) => {
    const {product}= props;
    return(
        <Card
            hoverable
            style={{width: 240}}
            cover={<img alt={product.title} src={product.thumbnail}/>}
        >
            <Meta title={product.title} description={product.description}/>
            <h2>Price: {product.price} $</h2>
            <h2>Discount: {product.discountPercentage} %</h2>
            <h3>Rating: {product.rating}    <StarFilled /></h3>

        </Card>
    );
}
export default CardCustom;
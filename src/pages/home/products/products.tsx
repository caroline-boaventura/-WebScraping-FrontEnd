import MediaCard from "../../../components/card/card";
import Loading from "../../../components/loading/loading";
import Error from "../error/error";
import { EmptyContainer, ProductsContainer } from "./styles";

interface Products {
    photo: string;
    title: string;
    description: string;
    price: string;
    website: 'Mercado Livre' | 'Buscape';
    category: 'tv' | 'mobile' | 'refrigerator';
}

interface ProductsProps {
    products?: Products[],
    loading: boolean,
    error: boolean,
}

export default function ProductsList(props: ProductsProps) {
    const renderProducts = (
        props?.products?.map(product => (
            <MediaCard
                category={product.category}
                description={product.description}
                photo={product.photo}
                title={product.title}
                price={product.price}
                website={product.website}
            />
        ))
    )

    return (
        <ProductsContainer>
            {props.error && <Error />}
            {(!props.products && !props.loading && !props.error) && <EmptyContainer>Busque por produtos!</EmptyContainer>}
            {(!props.products && props.loading && !props.error) && <Loading />}
            {(props.products && !props.loading && !props.error) && renderProducts}
        </ProductsContainer>
        
    );
}
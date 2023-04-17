import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import Header from './header/header';
import ProductsList from './products/products';
import Search from './search/search';

export default function Home() {
  const [site, setSite] = useState("Mercado Livre");
  const [category, setCategory] = useState("TV");
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeSite = (event: SelectChangeEvent) => {
    setSite(event.target.value as string)
  }

  const handleChangeCategory = (event: SelectChangeEvent) => {
      setCategory(event.target.value as string);
  }

  const handleChangeProduct = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setProduct(event.target.value as string)
  }

  const getProducts = () => {
    try {
      fetch('https://webscraping-backend-production.up.railway.app/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: (category === 'Celular' ? 'mobile' : category.toLowerCase()),
          product: product,
          site: site.replace('é', 'e')
        })
      })
        .then(response => response.json())
        .then(products => {
          setProducts(products);
          setLoading(false)
        })
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  const onClick = () => {
    setProducts(undefined)
    setLoading(true);
    getProducts();
  }
  return (
    <>
      <Header />
      <Search
        handleChangeSite={handleChangeSite}
        handleChangeCategory={handleChangeCategory}
        handleChangeProduct={handleChangeProduct}
        onClick={onClick}
        site={site}
        category={category}
      />
      <ProductsList loading={loading} error={error} products={products} />
    </>
  );
}
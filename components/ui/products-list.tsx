import { Product } from '@/types';
import React from 'react';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';

interface ProductsListProps {
  title: string;
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ title, products }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

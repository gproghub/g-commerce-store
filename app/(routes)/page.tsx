import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/ui/products-list';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('1b50f0d7-8fa9-4e8a-8d03-ad1eaa0c50b1');
  console.log('billboard', billboard);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

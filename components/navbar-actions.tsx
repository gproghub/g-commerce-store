'use client';

import Button from '@/components/ui/button';
import useCart from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuShoppingBag } from 'react-icons/lu';

const NavbarActions = () => {
  const cart = useCart();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        <LuShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{cart.products.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;

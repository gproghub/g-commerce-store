import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types';
import { LuAlertTriangle } from 'react-icons/lu';

interface CartStore {
  products: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>( // With persist we can persiste the state in localStorage
    (set, get) => ({
      products: [],
      addItem: (data: Product) => {
        const currentProducts = get().products;
        const existingItem = currentProducts.find((item) => item.id === data.id);

        if (existingItem) {
          return toast('Item already in cart.');
        }

        set({ products: [...get().products, data] });
        toast.success('Item added to cart.');
      },
      removeItem: (id: string) => {
        set({ products: [...get().products.filter((item) => item.id !== id)] });
        toast.success('Item removed from cart.');
      },
      removeAll: () => set({ products: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

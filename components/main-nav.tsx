'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MainNavProps {
  categories: Category[]; // This will be an array with the routes
}

const MainNav: React.FC<MainNavProps> = ({ categories }) => {
  const pathname = usePathname();

  const routes = categories.map((category) => ({
    href: `/categories/${category.id}`,
    label: category.name,
    active: pathname === `/categories/${category.id}`,
  }));

  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn('text-sm font-medium transition-colors hover:text-black', route.active ? 'text-black' : 'text-neutral-500')}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;

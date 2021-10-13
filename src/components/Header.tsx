import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header: React.VFC = () => {
  return (
    <header>
      <div className="flex items-center p-8">
        <Link href="/">
          <a className="flex justify-between items-center gap-4">
            <Image src="/prisma.png" height={28} width={28} />
            <h2 className="text-3xl font-bold">Prisma Blog</h2>
          </a>
        </Link>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

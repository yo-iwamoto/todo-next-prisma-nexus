import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts = [
  { title: 'first post', body: 'this is my first post' },
  { title: 'second post', body: 'this is my second post' },
];

const tags = [
  { name: 'Next.js', color: 'black' },
  { name: 'PostgreSQL', color: 'blue' },
  { name: 'Prisma', color: 'white' },
  { name: 'GraphQL', color: 'pink' },
];

async function main() {
  posts.map(async (post) => {
    await prisma.post.create({ data: post });
  });

  tags.map(async (tag) => {
    await prisma.tag.create({ data: tag });
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => await prisma.$disconnect());

export const resolvers = {
  Query: {
    posts: (_parent, _args, ctx) => {
      return ctx.prisma.post.findMany();
    },
    tags: (_parent, _args, ctx) => {
      return ctx.prisma.tag.findMany();
    },
  },
};

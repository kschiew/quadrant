import { roles } from '~/server/db/schema'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import { z } from 'zod'
import { eq } from 'drizzle-orm'

export const roleRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().trim().min(1, 'Required') }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(roles).values({
        name: input.name,
        userId: ctx.session.user.id,
      })
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.delete(roles).where(eq(roles.id, input.id))
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db
      .select()
      .from(roles)
      .where(eq(roles.userId, ctx.session.user.id))
  }),
})

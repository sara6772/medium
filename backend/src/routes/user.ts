import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from "@ranasarthak/medium-common";
// import z from "zod";

// const signupInput = z.object({
//     username: z.string.emailI(),
//     password: z.string.min(6),
//     nname: z.string.optional()
// })

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if(!success) {
    c.status(411);
    return c.json({
      message: "Incorrect inputs"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

 try {
  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
      name: body.name
    },
  })
  const jwt = await sign({
    id: user.id
  }, c.env.JWT_SECRET);

  return c.json({
    jwt
  })
 }catch (e) {
  c.status(411);
  return c.text("invalid");
 }
})

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{
    const user = await prisma.user.findFirst({
      where:{
        username: body.username,
        password: body.password
      }
    })
    if(!user){
      c.status(403);
      return c.json({
        message: "Incorrect creds"
      })
    }
    const jwt = await sign({
      id:user.id
    }, c.env.JWT_SECRET);

    return c.json({
      jwt
    })
  }catch(e){
    c.status(411);
    return c.text("Invalid");
  }
})

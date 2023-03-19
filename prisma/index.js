const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
 
    // const user = await prisma.user.create({
    //     data: {
    //       email:"test@email.com",
    //       username: "test",
    //       password:"1234"
    //     }
    // })
    // console.log(user)

  // const users = await prisma.user.deleteMany()

  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
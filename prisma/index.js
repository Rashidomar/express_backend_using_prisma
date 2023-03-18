const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

const userData = [
    {
      name: 'Alice',
      email: 'alice@prisma.io',

    },
    {
      name: 'Nilu',
      email: 'nilu@prisma.io',

    },
    {
      name: 'Mahmoud',
      email: 'mahmoud@prisma.io',
    },
  ]
  

async function main() {
  // ... you will write your Prisma Client queries here
//   for(const u of  userData){
//     const user = await prisma.user.create({
//         data: u
//     })
//     console.log(user)
//   }
  // const allUsers = await prisma.user.findMany()
  // const users = await prisma.user.deleteMany()
  // console.log(users)


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
import { prisma } from './generated/prisma-client'

async function main() {
    const newUser = await prisma.createUser({name: 'Roger'})
    console.log('Created new user: ${newUser.name} (ID: ${newUser.id})')

    const allUsers = await prisma.users()
    console.log(allUsers)
}

main().catch(e => console.log(e))
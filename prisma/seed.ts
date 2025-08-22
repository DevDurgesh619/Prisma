import { PrismaClient} from "@prisma/client"
const client = new PrismaClient();
async function createDummyUsers(){
    let user = await client.user.create({
        data:{
            username:"puppy",
            password:"p121p",
            age:12,
            todos:{
                create:{
                    title:"pup the ball",
                    description:"pmp",
                    done:true
                }
            }
        }
    })
}
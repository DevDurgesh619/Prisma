import { PrismaClient} from "@prisma/client"
import express from "express"
const app = express()

const client = new PrismaClient();
app.get("/todo/:id",async (req,res)=>{
    const id = req.params.id;
    const user = await client.user.findFirst({
    where:{
        id:parseInt(id)
    },
    select:{
        todos:true,
        username:true,
        password:true
    }
   })
   res.json({
    user
   })
})
app.listen(3000)
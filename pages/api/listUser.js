import prisma from '../../lib/prisma'

export default async function handler(req,res){
    try{
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    }
    catch(err){
        res.status(400).json({message: 'error'})
    }   
}
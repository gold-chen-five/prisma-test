import prisma from '../../lib/prisma'

export default async function handler(req,res){
    try{
        const users = await prisma.user.create({
            data:{
                email: 'jonas3',
                password: '789456787'
            }
        })
        res.status(200).json(users)
    }
    catch(err){
        res.status(400).json({message: 'error'})
    }   
}
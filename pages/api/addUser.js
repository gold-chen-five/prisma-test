import prisma from '../../lib/prisma'

export default async function handler(req,res){
    const {query} = req
    const {email} = query
    try{
        
        const users = await prisma.user.create({
            data:{
                email: email,
                password: '789456787'
            }
        })
        res.status(200).json(users)
        res.status(200).json({message: 'success'})
    }
    catch(err){
        res.status(400).json({message: 'error'})
    }   
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
type Data = {
  name: string
}
const KEY = 'djkas90-23jadslsjflasdfljdfklsanmf'
export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
 
  if(!req.body){
    res.statusCode = 404
    res.end('Error')
    return
  }

  const { username, password} = req.body
  // res.status(200).json({ name: 'John Doe' })
  console.log(username, password)
  res.json({
    token: jwt.sign({
      username,
      admin: (username==='admin' && password === 'admin')
    },KEY)
  })
}

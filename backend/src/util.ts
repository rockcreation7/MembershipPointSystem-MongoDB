import jwt from "jsonwebtoken"
import config from "./config"
import { Request, Response, NextFunction} from "express"

interface admin {
  _id: string,
  name: string,
  isAdmin: boolean,
  email: string
}

const getToken = (admin:admin) => { 
  return jwt.sign(
    {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  )
}

const isAuth = (req:Request, res:Response, next:NextFunction) => {
  const token = req.headers.authorization

  if (token) {
    const onlyToken = token && token.split(' ')[0]
    jwt.verify(onlyToken, config.JWT_SECRET, (err: any, admin: any) => {
      if (err) {
        return res.status(401).send({ message: "Invalid Token" })
      } 
      req.body.admin = admin
      next() 
    })
  } else {
    return res.status(401).send({ message: "Token is not supplied." })
  }
}

export { getToken, isAuth }

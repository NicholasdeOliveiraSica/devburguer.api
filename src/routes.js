import { Router } from 'express'
import User from './app/models/user.js'
import { v4 } from 'uuid'

const routes = new Router()

routes.get('/create', async (req, res) => {

    const user = await User.create({
        id: v4(),
        name: 'Nicholas',
        email: 'nick@email.com',
        password_hash: 'h89273hfb892g',
    })

    return res.status(201).json(user)
})

export default routes
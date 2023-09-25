import 'dotenv/config'
import mongoose from 'mongoose'
import './connection.js'

import User from '../models/users.js'

await User.deleteMany()

const user = await User.create({
    username: 'test',
    handle: 'test'
})

await mongoose.disconnect()
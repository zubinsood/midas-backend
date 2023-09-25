import User from '../models/users.js';

export async function getProfile(req, res) {
    const handle = req.params.handle;
    const user = await User.findOne({ handle });
    return res.json({
       ...user.toJSON()
    });
    }

const router = require('express').Router();
const pool = require('../db');
const authorization =  require('../middleware/authorization');

router.get('/',authorization, async(req,res)=>{
    try {
        //req.user has payload due to middleware authorization
        const users = await pool.query('SELECT * FROM users where user_id = $1',[req.user])
        res.json(users.row[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Server Error')
    }
    
})


module.exports = router;
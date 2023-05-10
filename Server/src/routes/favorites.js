const express = require('express');
const router = express.Router();//es para las rutas 

const {postFav, deleteFav} = require("../controllers/favorites")

router.post("/:id",postFav)
router.delete("/:id",deleteFav)


module.exports ={
    router
}
// /https://www.students.soyhenry.com/classes/26?cohortId=102&videoOrdinal=2 min 1 16 08


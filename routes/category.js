const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { 
    create,
    read,
    categoryById,
    update,
    remove,
    list
} = require("../controllers/category");



router.post("/category/create/:userId", 
            requireSignin, 
            isAuth, 
            isAdmin,
            create
);


router.put("/category/:categoryId/:userId", 
            requireSignin, 
            isAuth, 
            isAdmin,
            update
);

router.delete("/category/:categoryId/:userId", 
            requireSignin, 
            isAuth, 
            isAdmin,
            remove
);
router.get("/category/:categoryId", read)
router.get("/categories", list)


router.param('userId', userById)
router.param('categoryId', categoryById)


module.exports = router;

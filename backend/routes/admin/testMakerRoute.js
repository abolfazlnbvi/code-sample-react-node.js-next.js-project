const { Router } = require("express");



const {
    AddTest,
    DeleteTest,
    EditTest,
    GetAllTest,
    GetOneTest,
    AddTests,
    EditTests,
    setIsActiveTests,
    GetAllTests,
    GetOneTests,
    DeleteTests,
    setIsActiveTest,

} = require("../../controllers/admin/testControllers")
const { verifyToken } = require("../../middlewares/VerifyTokne");
const { isAdmin } = require("../../middlewares/isAdmin");

const router = new Router();
//..............................................................
// testsRoutes


//  @desc   
//  @route  
router.post("/", verifyToken, isAdmin, AddTests);

//  @desc   
//  @route  
router.put(
    "/:id",
    verifyToken,
    isAdmin,
    EditTests
);
router.put(
    "/isactive/:id",
    verifyToken,
    isAdmin,
    setIsActiveTests
);

//  @desc   
//  @route  
router.get(
    "/",
    verifyToken,
    isAdmin,
    GetAllTests);
//  @desc   
//  @route 

//  @desc   
//  @route  
router.get(
    "/:id",
    GetOneTests
);

//  @desc   
//  @route  
router.delete(
    "/:id",
    verifyToken,
    isAdmin,
    DeleteTests
);
//......................................................
//testRoutes
router.post("/exam/:id", verifyToken, isAdmin, AddTest);

//  @desc   
//  @route  
router.put(
    "/exam/:id",
    verifyToken,
    isAdmin,
    EditTest
);
router.put(
    "/exam/isactive/:id",
    verifyToken,
    isAdmin,
    setIsActiveTest
);

//  @desc   
//  @route  
router.get(
    "/exam/all/:id",
    verifyToken,
    isAdmin,
    GetAllTest);
//  @desc   
//  @route 

//  @desc   
//  @route  
router.get(
    "/exam/:id",
    GetOneTest
);

//  @desc   
//  @route  
router.delete(
    "/exam/:id",
    verifyToken,
    isAdmin,
    DeleteTest
);
//.......................................................
// questionRoutes

//  @desc   
//  @route  





module.exports = router;

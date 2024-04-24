const express=require("express")
const userController=require("../controllers/userController")
const projectController=require('../controllers/projectController')
const jwtMiddleware = require("../Middlewares/jwtMiddileware")
const multerConfig = require("../Middlewares/multerMiddleware")

const router=new express.Router()

//register route
router.post('/register',userController.register)

//login route
router.post('/login',userController.login)

//addproject route
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//get all projects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

//get user project
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

//get home project
router.get('/home-projects',projectController.getHomeProjects)

//edit
router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProjects)

//remove
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProjects)

//edituser
router.put('/edit-user',jwtMiddleware,multerConfig.single('profileImage'),userController.editUser)



//export router
module.exports=router

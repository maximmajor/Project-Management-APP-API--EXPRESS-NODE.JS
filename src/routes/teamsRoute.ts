/* eslint-disable @typescript-eslint/no-unused-vars */
import {Router} from 'express'
import {createTeam, addMemberToTeam, getAllTeamMembers, leaveTeam, getUserDetails, getFileUploads, getTeams} from '../controller/teams_controller'
import {isLoggedIn} from "../middleware/auth-check"
import { updateMembers } from '../controller/teams_controller';
import {projectAuth} from '../middleware/projectAuth'


const router = Router()

router.post('/:projectID/createteam', isLoggedIn, projectAuth, createTeam)
router.post('/:teamID/addmembertoteam', isLoggedIn, projectAuth, addMemberToTeam)
router.put('/:teamID/updateTeam', isLoggedIn, projectAuth, updateMembers);
router.get('/:teamID/getallteammembers', isLoggedIn, getAllTeamMembers)
router.delete('/:teamID/leaveteam', isLoggedIn, leaveTeam)
router.get('/:teamID/getuserdetails', isLoggedIn, getUserDetails)

router.get('/:projectID/get-teams', isLoggedIn, getTeams)

//get file uploads
router.get('/:projectID/getfileuploads', isLoggedIn, getFileUploads)

export default router

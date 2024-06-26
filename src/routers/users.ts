import { Router } from "express";
import UserController from "../controllers/UserController";
import PokemonController from "../controllers/PokemonController";
import upload from "../helpers/fileUpload";
import Auth from '../middleware/auth';

const router = Router();

// GET /api/users
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/file-upload', upload.single('file'), UserController.uploadFile);
router.get('/pokemons', Auth, PokemonController.getMyPokemonList);
router.get('/detail', Auth, UserController.getDataUser);
router.put('/detail', Auth, UserController.updateDetailUser);
router.get('/all', Auth, UserController.getAllUser);
router.put('/', Auth, UserController.updatePassword);
router.delete('/', Auth, UserController.deleteUser);
router.get('/refresh-token', UserController.RefreshToken);

export default router;
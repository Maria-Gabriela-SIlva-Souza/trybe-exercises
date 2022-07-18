import { Router } from 'express';

import TournamentController from './controllers/TournamentController';

const tournamentController = new TournamentController();

const router = Router();

router.get('/tournaments', tournamentController.getTournaments);
router.get('/tournaments/:year', tournamentController.getTournamentByYear);
router.post('/tournaments', tournamentController.insertTournament);
router.put('/:year', tournamentController.updateTournament);



export default router;
// src/controllers/worldCupController.ts
import { Request, Response } from 'express';
import TournamentService from '../services/TournamentService';

class TournamentController {
  constructor(private tournamentService = new TournamentService()) {}

  serverError = 'Internal Server Error';

  notFoundError = 'Not found any world cup with this field';

  public getTournaments = async (
    _req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const tournaments = await this.tournamentService.getTournaments();
      return res.status(200).json(tournaments);
    } catch (error) {
      return res.status(500).json({ error: this.serverError });
    }
  };

  public getTournamentByYear = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { year } = req.params;
    try {
      const tournament = await this.tournamentService
        .getTournamentByYear(Number(year));

      if (tournament?.length === 0) {
        return res.status(404).json({ error: this.notFoundError });
      }
      return res.status(200).json(tournament);
    } catch (error) {
      return res.status(500).json({ error: this.serverError });
    }
  };

  public insertTournament = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { body: tournamentData } = req;
    try {
      const worldCup = await this.tournamentService.insertTournament(tournamentData);
      return res.status(201).json(worldCup);
    } catch ({ _message }) {
      if (_message === 'tournaments validation failed') {
        return res.status(400).json({ error: _message });
      }
      return res.status(500).json({ error: this.serverError });
    }
  };

  public updateTournament = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { body: updateData, params: { year } } = req;
    try {
      const updateTournament = await this.tournamentService
        .updateTournament(updateData, Number(year));

      if (!updateTournament) {
        return res.status(404).json({ error: this.notFoundError });
      }

      return res.status(200).json(updateTournament);
    } catch (error) {
      return res.status(500).json({ error: this.serverError });
    }
  };
}

export default TournamentController;
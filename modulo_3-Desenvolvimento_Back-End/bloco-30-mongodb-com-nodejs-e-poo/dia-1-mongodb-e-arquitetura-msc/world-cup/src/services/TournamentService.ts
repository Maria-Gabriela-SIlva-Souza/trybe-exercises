import { ITournament } from '../Schemas/tournamentsSchema';
import TournamentModel from '../models/TournamentModel';

class TournamentService {
  constructor(private tournamentModel= new TournamentModel()) {}

  public async getTournaments(): Promise<ITournament[] | undefined> {
    const tournaments = await this.tournamentModel.getTournaments();
    return tournaments;
  }

  public async getTournamentByYear(
    year: number,
  ): Promise<ITournament[] | undefined> {
    const tournament = await this.tournamentModel.getTournamentByYear(year);
    return tournament;
  }

  public async insertTournament(
    tournamentData: ITournament,
  ): Promise<ITournament | unknown> {
    const worldCup = await this.tournamentModel.insertTournament(tournamentData);
    return worldCup;
  }

  public async updateTournament(
    updateData: object,
    tournamentYear: number,
  ): Promise<ITournament | null> {
    const updatedWorldCup = await this
      .tournamentModel.updateTournament(updateData, tournamentYear);
    return updatedWorldCup;
  }
}

export default TournamentService;
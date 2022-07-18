import { model as createModel } from 'mongoose';
import { TournamentSchema, ITournament } from '../Schemas/tournamentsSchema';

class TournamentModel {
  constructor(private tournamentModel = createModel<ITournament>(
    'tournaments',
    TournamentSchema,
  )) {}

  public async getTournaments(): Promise<ITournament[] | undefined> {
    const tournament = await this.tournamentModel.find();
    return tournament;
  }

  public async getTournamentByYear(
    year: number,
  ): Promise<ITournament[] | undefined> {
    const tournament = await this.tournamentModel.find({ year });
    return tournament;
  }

  public async insertTournament(
    tournamentData: ITournament,
  ): Promise<ITournament | unknown> {
    const tournament = await this.tournamentModel.create(tournamentData);
    return tournament;
  }

  public async updateTournament(
    updateData: object,
    tournamentYear: number,
  ): Promise<ITournament | null> {
    const updatedTournament = await this
      .tournamentModel.findOneAndUpdate({
        year: tournamentYear,
      }, {
        ...updateData,
      }, {
        new: true,
      });
    return updatedTournament;
  }
}

export default TournamentModel;
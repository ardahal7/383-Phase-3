export interface ISummoner {
  id: number;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  
}

export class Summoner {

  constructor(
    public name: string
  ) { }
}
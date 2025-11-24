abstract class VoteSystem {
  protected votos: Record<string, number> = {};

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  voteFor(candidate: string): void {
    this.votos[candidate] = (this.votos[candidate] || 0) + 1;
  }

  getResults(): object {
    return this.votos;
  }
}

class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    this.votos[candidate] = (this.votos[candidate] || 0) + 1;
  }

  getResults(): object {
    return Object.entries(this.votos)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ candidato: name, votos: count }));
  }
}

const poll = new Poll();
poll.voteFor("Ana");
poll.voteFor("Ana");
poll.voteFor("Carlos");

console.log(poll.getResults());

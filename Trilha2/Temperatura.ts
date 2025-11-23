class Temperatura {
  constructor(public valorCelsius: number) {}

  paraFahrenheit(): number {
    return (this.valorCelsius * 9) / 5 + 32;
  }

  paraKelvin(): number {
    return this.valorCelsius + 273.15;
  }
}

const dice = {
  sides: 6,
  roll() {
    return Math.floor(Math.random() * this.sides) + 1
  }
}

export default dice

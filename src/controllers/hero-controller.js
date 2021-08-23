const getHeroes = async (req, res) => {
  try {
    const heroes = [
      {
        name: 'Superman',
        identity: 'Clark',
        power: 100
      },
      {
        name: 'Superman',
        identity: 'Clark',
        power: 100
      }
    ]
    return res.json(heroes);
  } catch (err) {
    return res.sendStatus(end)
  }
}

export default {
  getHeroes
}
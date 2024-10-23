import Chance from "chance";

export default function handler(req, res) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    profession: chance.profession(),
    age: chance.age(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };
  res.status(200).json(character);
}

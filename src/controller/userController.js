import User from '../models/user.js';

export function create (req, res, next) {
  const username = req.body.username;
  const age = req.body.age;
  const city = req.body.city;

  User.create({ username, age, city }, (err, user) => {
    if (err) next(err);
    else res.status(201).send(user);
  });
}

export function findByUsername (req, res, next) {
  const username = req.params.username;

  User.findOne({ username }, (err, user) => {
    if (err) next(err);
    if (!user) res.status(404).send();
    else res.status(200).send(user);
  });
}

export function findByUsernameAndDelete (req, res, next) {
  const usernameParam = req.params.username;

  User.findOneAndDelete({ username: usernameParam }, (err, prev) => {
    if (err) next(err);
    else res.status(200).send(prev);
  });
}

export function findByUsernameAndUpdate (req, res, next) {
  const usernameParam = req.params.username;

  const username = req.body.username;
  const age = req.body.age;
  const city = req.body.city;

  User.findOneAndUpdate({ username: usernameParam },
    { username, age, city }, (err, prev) => {
      if (err) next(err);
      else {
        if (!prev) res.status(404).send('Don\'t exist');
        else res.status(200).send(prev);
      }
    });
}

export default {
  create,
  findByUsername,
  findByUsernameAndDelete,
  findByUsernameAndUpdate
};

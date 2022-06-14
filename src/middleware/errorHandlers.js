
export function errorHandler (err, req, res, next) {
  console.log({ err });
  res.status(500).send({ error: 'Internal server error', detail: { err } });
}

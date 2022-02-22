const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());
app.listen(PORT, () => console.log(`listening on ${PORT}`));

let tracklist = [
  {
    id: "0",
    name: "La Barbacoa",
    author: "George Dan",
  },
];

app.get("/tracks", (req, res) => {
  res.status(200).send(tracklist);
});

app.post("/track/:id", (req, res) => {
  const { id } = req.params;
  if (tracklist.find((el) => el.id === id)) {
    res
      .status(406)
      .send({ Message: "There is already a track with the same Id." });
    return;
  }
  const { name, author } = req.body;
  tracklist.push({ id: id, name: name, author: author });
  res.status(201).send(tracklist);
});

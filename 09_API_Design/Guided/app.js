import { specs, swaggerUi } from "./swagger.js";

const app = express();

app.use(express.json());

//middleware untuk swagger
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *  get:
 *   summary: Get a greeting message
 *   responses:
 *     200:
 *       description: Internetmu online
 */

const PORT = 8000;
const HOSTNAME = "localhost";

const DataMovie = [];

app.get("/movies", (req, res) => {
  return res.status(200).json({
    data: DataMovie,
  });
});

app.post("/movies", (req, res) => {
  const newMovie = {
    id: DataMovie.length + 1,
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year,
  };

  DataMovie.push(newMovie);

  return res.status(201).json({
    message: "Movie created successfully",
    data: newMovie,
  });
});

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

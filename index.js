const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(
    `This server is successfully running at http://localhost:${PORT}`
  );
});

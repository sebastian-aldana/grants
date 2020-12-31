const Http = require("http");
const Next = require("next");
const Express = require("express");

const { log } = console;
const dev = process.env.NODE_ENV !== "production";
const nextApp = Next({ dev });
const nextHandleRequest = nextApp.getRequestHandler();

function handleRequest(req, res) {
  return nextHandleRequest(req, res);
}

nextApp.prepare().then(() => {
  const port = process.env.PORT;
  const expressServever = Express();
  expressServever.get("*", handleRequest);
  expressServever.post("*", handleRequest);
  expressServever.put("*", handleRequest);
  expressServever.delete("*", handleRequest);
  Http.createServer(expressServever).listen(port, (error) => {
    if (error) throw error;
    log(`> Ready to go on port ${port}`);
  });
});

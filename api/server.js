import app from "./index.js";

const port = 9000;

export default app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})
import CalcController from "../controllers/calcController.js";

class CalcRoutes {

    callRoutes(app) {
        app.get("/calculadora/juros-simples",
        CalcController.calcularJurosSimples);
    }

}

export default CalcRoutes;
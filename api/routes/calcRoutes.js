import CalcController from "../controllers/calcController.js";

class CalcRoutes {

    callRoutes(app) {
        app.get("/calculadora/juros-simples",
        CalcController.validarEntrada(),
        CalcController.calcularJurosSimples);
    }

}

export default CalcRoutes;
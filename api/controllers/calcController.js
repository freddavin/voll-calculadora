import Calc from "../models/calc.js";
import CalcService from "../services/calcService.js";

class CalcController {

    static calcularJurosSimples = (req, res) => {
        try {
            const { capitalEmprestado, taxaJuros, periodo } = req.query;
            const calc = new Calc(capitalEmprestado, taxaJuros, periodo);

            if (!calc.isValid()) {
                return res.status(400).json({ mensagem: "Os parametros devem ser numeros positivos" });
            }

            const calcService = new CalcService();
            const jurosSimples = calcService.calcularJurosSimples(calc);
            return res.status(200).json({ "juros": jurosSimples });

        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }

}

export default CalcController;
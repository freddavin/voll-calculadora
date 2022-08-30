import Calc from "../models/calc.js";
import CalcService from "../services/calcService.js";
import { query, validationResult } from "express-validator";

class CalcController {

    static calcularJurosSimples = (req, res) => {
        try {
            const errosDeValidacao = validationResult(req);
            if (!errosDeValidacao.isEmpty()) {
                return res.status(400).json({ erros: errosDeValidacao.array() });
            }

            const { capitalEmprestado, taxaJuros, periodo } = req.query;
            const calc = new Calc(capitalEmprestado, taxaJuros, periodo);

            const calcService = new CalcService();
            const jurosSimples = calcService.calcularJurosSimples(calc);
            return res.status(200).json({ "juros": jurosSimples });

        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }

    static validarEntrada = () => {
        return [
            query("capitalEmprestado", "Deve ser um número positivo.").isFloat({ gt: 0 }),
            query("taxaJuros", "Deve ser um número positivo.").isFloat({ gt: 0 }),
            query("periodo", "Deve ser um número positivo.").isFloat({ gt: 0 }),
        ]
    }

}

export default CalcController;
class CalcService {

    calcularJurosSimples(calc) {
        return calc.capitalEmprestado * (calc.taxaJuros / 100) * calc.periodo;
    }

}

export default CalcService;
class Calc {

    constructor(capitalEmprestado, taxaJuros, periodo) {
        this.capitalEmprestado = capitalEmprestado;
        this.taxaJuros = taxaJuros;
        this.periodo = periodo;
    }

    isValid() {
        if (this.capitalEmprestado > 0 && !isNaN(this.capitalEmprestado)) {
            if (this.taxaJuros > 0 && !isNaN(this.taxaJuros)) {
                if (this.periodo > 0 && !isNaN(this.periodo)) {
                    return true;
                }
            }
        } 
        return false;
    }

}

export default Calc;
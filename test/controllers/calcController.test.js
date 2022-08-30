import CalcController from "../../api/controllers/calcController.js";
import jest from "jest-mock"
import request from "supertest";
import app from "../../api/index.js";

describe("CalcController tests", () => {
    it("retornar um status 200 se o calculo estiver ok", () => {
        const mReq = { query: { capitalEmprestado: 1000, taxaJuros: 5, periodo: 1 } };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const jurosSimples = 50;
        CalcController.calcularJurosSimples(mReq, mRes);
        expect(mRes.status).toBeCalledWith(200);
        expect(mRes.json).toBeCalledWith({ "juros": jurosSimples });
    })

    it("retornar um status 200 se estiver tudo ok", () => {
        return request(app)
		.get('/calculadora/juros-simples')
		.query({ capitalEmprestado: 1000, taxaJuros: 5, periodo: 1 })
		.expect(200);
    })

    it("retornar um status 400 se a query estiver incompleta", () => {
        return request(app)
		.get('/calculadora/juros-simples')
		.query({ capitalEmprestado: 1000, taxaJuros: 5 })
		.expect(400);
    })

    it("retornar um status 400 se a query tiver número menor e igual a 0", () => {
        return request(app)
		.get('/calculadora/juros-simples')
		.query({ capitalEmprestado: 1000, taxaJuros: -5, periodo: 1 })
		.expect(400);
    })

    it("retornar um status 400 se a query tiver um NaN", () => {
        return request(app)
		.get('/calculadora/juros-simples')
		.query({ capitalEmprestado: "oi", taxaJuros: -5, periodo: 1 })
		.expect(400);
    })

    it("retornar um status 500 se lançar alguma exceção", () => {
        const mReq = { "query.periodo": jest.fn().mockImplementation(() => {
            throw new Error("Erro fake");
        }) };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        CalcController.calcularJurosSimples(mReq, mRes);
        expect(mRes.status).toBeCalledWith(500);
    })
})
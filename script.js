/* ---------------------- MODEL ---------------------- */
// Estado da calculadora: um objeto comum, sem classe
const model = {
    visor: "0",
    valorAnterior: null,
    operador: null,
    aguardandoNovoNumero: false
};
function modelLimpar() {
    model.visor = "0";
    model.valorAnterior = null;
    model.operador = null;
    model.aguardandoNovoNumero = false;
    }
function modelDigitar(digito) {
    if (model.aguardandoNovoNumero) {
        model.visor = digito === "." ? "0." : digito;
        model.aguardandoNovoNumero = false;
        return;
    }
    if (digito === "." && model.visor.includes(".")) return;
    if (model.visor === "0" && digito !== ".") {
        model.visor = digito;
    } else {
        model.visor = model.visor + digito;
    }
}
function modelCalcular(a, b, operador) {
    switch (operador) {
        case "+": return a + b;case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? NaN : a / b;
        default: return b; 
    }
}
function modelEscolherOperador(novoOperador) {
    const valorAtual = parseFloat(model.visor);
    if (model.operador && !model.aguardandoNovoNumero) {
        const resultado = modelCalcular(model.valorAnterior, valorAtual, model.operador);
        model.visor = String(resultado);
        model.valorAnterior = resultado;
    } else {
        model.valorAnterior = valorAtual;
    }
    model.operador = novoOperador;
    model.aguardandoNovoNumero = true;
}

function modelIgual() {
    if (model.operador === null || model.valorAnterior === null) return;
        const valorAtual = parseFloat(model.visor);
        const resultado = modelCalcular(model.valorAnterior, valorAtual, model.operador);
        model.visor = Number.isNaN(resultado) ? "Erro" : String(resultado);
        model.valorAnterior = null;
        model.operador = null;
        model.aguardandoNovoNumero = true;
}
/* ---------------------- VIEW ---------------------- */
const elementoVisor = document.getElementById("visor");
function viewAtualizar() {
    elementoVisor.textContent = model.visor;
                }
                /* ---------------------- CONTROLLER ---------------------- */
                function controllerInicializar() {
            const botoesNumero = document.querySelectorAll("[data-numero]");
                const botoesOperador = document.querySelectorAll("[data-operador]");
                const botaoIgual = document.getElementById("btn-igual");
                const botaoLimpar = document.getElementById("btn-limpar");
 botoesNumero.forEach(function (botao) {
                botao.addEventListener("click", function () {
modelDigitar(botao.dataset.numero);
                viewAtualizar();
            });
});
 botoesOperador.forEach(function (botao) {
botao.addEventListener("click", function () {
modelEscolherOperador(botao.dataset.operador);
viewAtualizar();
                });
                });
 botaoIgual.addEventListener("click", function () {modelIgual();
                viewAtualizar();
});
                botaoLimpar.addEventListener("click", function () {
                    modelLimpar();
                        viewAtualizar();
                        });
                    }
controllerInicializar();

if("sericeworker" in navigator){
    window.addEventListener("load"),
        function (){
            navigator.sericeWorker.register("sw.js")
        }
}

//2. Simulador de Pedágio
//Crie um aplicativo onde o usuário informe:
//●       Tipo de veículo (Carro, Moto, Caminhão)
//●       Distância percorrida (em km)
//O pedágio é cobrado com base no tipo de veículo:
//       Carro: R$ 0,10 por km
//●       Moto: R$ 0,05 por km
//●       Caminhão: R$ 0,15 por km
//O app deve exibir o total a pagar.
//Exemplo:
//●       Tipo: Carro
//       Distância: 200 km
//●       Total: R$ 20,00

import { Text } from "react-native";

const Total = (parse) => {
    const Distância = parse.Distância
    const Veiculo = parse.Veiculo
    Total = Distância + Veiculo / 0.05;

    Veiculo = [Moto, Carro, Caminhão]
    Total = [0.5(Moto), 0.10(Carro), 0.15(Caminhão)]

    if (veiculo() === "carro") {
        Total = Veiculo * 0.10
        if (Veiculo() == "moto") {
            Total = Veiculo * 0.05
        } else
        {
            (Veiculo() === "caminhão")
            Total = Veiculo * 0.15
        }
    }

}

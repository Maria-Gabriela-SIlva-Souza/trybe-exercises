let valorCusto = 50;
let valorVenda = 100;

valorCustoTotal = valorCusto + (valorCusto*0,20);

lucro = valorVenda - valorCustoTotal;


if (valorCusto < 0 || valorVenda < 0){
    console.log("Erro");
}else{
    console.log (lucro);
}
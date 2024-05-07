const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  
  function buscaCortePorId(id) {
    for(let i = 0; i < barbearia.cortes.length;i++){
      if(id == barbearia.cortes[i].id){
        return barbearia.cortes[i]
      }
    }
    return "Corte não encontrado"
  }
  
  function buscaBarbaPorId(id) {
    for(let i = 0; i < barbearia.barbas.length;i++){
      if(id == barbearia.barbas[i].id){
        return barbearia.barbas[i]
      }
    }
    return "Barba não encontrada"
  }
  
  function verificaStatusBarbearia() {
    if(barbearia.estaAberto){
      return "Estamos abertos"
    }
    return  "Estamos fechados"
  }
  
  function retornaTodosCortes() {
    return barbearia.cortes
  }
  
  function retornaTodasBarbas() {
    return barbearia.barbas
    }
  
  
  function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId)
    let barba = buscaBarbaPorId(barbaId)
    let pedido = {
      nome: nomeCliente,
      pedidoCorte: corte.tipo,
      pedidoCortePreco: corte.valor,
      pedidoBarba: barba.tipo,
      pedidoBarbaPreco: barba.valor,
    }
    return pedido
  }
  
  function atualizaServico(lista, id, valor, tipo) {
    
    for(let i = 0; i < lista.length;i++){
      if(id == lista[i].id){
        lista[i].tipo = tipo
        lista[i].valor = valor
      }
    }
    return lista
    }
  
  
  let newPedido = criarPedido('Vinicius',1,2)

  function calculaTotal(pedido) {
    let valor = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
    return valor
  }
  console.log(atualizaServico(barbearia.cortes,1,12,'Tigela'))
  
  
  

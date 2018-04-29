	function mutacao(cromossomo){//função que irá causar mutação nos genes do cromossomo
		var fator_de_mutacao = 10;
		var mutante = cromossomo.slice();
		var mutante10 = [];
						
			for(var i = 0; i < 4; i++ ){
				var propabilidade = Math.round(Math.random() * 100);
					if(propabilidade <= fator_de_mutacao){
						if(mutante[i + 6] == 0){
					  		mutante[i + 6] = 1;
						}else {
							mutante[i + 6] = 0;
						}
					}
			}
			
			//copiando 10 bits dos fihos para poder substituir a cifra
			for(var i = 0; i < 10; i++){
				mutante10[i] = mutante[i];
			}
			
		//atribuindo corretamente a cifra
		mutante[10] = tradutor(mutante10, "nota");
						
		return mutante;
	} 
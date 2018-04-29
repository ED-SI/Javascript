	function criaMelodia(){//função que cria a melodia
		
		//cria	
		var populacaoInicial = criaPopulacao();
			
		var populacao = [];
		var numDeGeracoes = 0;
		
		populacao = copiaPopulacao(populacaoInicial);
		
			
			while(true && numDeGeracoes < 100000){				
								
			loop1://faz a seleção em todos os compassos
				for(var i = 0; i < 8; i++){
						
						//verifica se o compasso possui todas as notas dentro da escala
						for(var j = 0; j < 8; j++){						
							var teste = copiaCompasso(populacao[j]);
							if(teste == true){
								continue loop1;
							}
						}	
						
					//organiza
					var compassoOrdenado = copiaCompasso(populacao[i]);
					compassoOrdenado = fitness(compassoOrdenado);
					
					
					//crossover
					var crossOverCompasso = copiaCompasso(compassoOrdenado);
					crossOverCompasso = crossOver(compassoOrdenado);
					
					//mutação
					var compassoMutado = [];												
						for(var j = 0; j < 2; j++){
							compassoMutado[j] = crossOverCompasso[j].slice();
							var temp2 = crossOverCompasso[j + 2].slice();
							compassoMutado[j + 2] = mutacao(temp2).slice();
						}					
							
					//armazena o novo compasso
					populacao[i] = copiaCompasso(compassoMutado);
					
				}
				
				var compassosFora = 0;
					
					//verifica se todos os compassos estão aptos
					for(var i = 0; i < 8; i++){
						var temp = copiaCompasso(populacao[i]);
						var tempVerif = verificaCompasso(temp);
							if(tempVerif == false){
								compassosFora++;
							}
					}
				
				numDeGeracoes++;
				
					if(compassosFora == 0){
						break;
					}
			}	
			
		var info = [populacaoInicial, populacao, numDeGeracoes];
		
		return info;
	}
	
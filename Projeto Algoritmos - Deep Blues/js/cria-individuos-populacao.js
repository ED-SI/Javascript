	function criaIndividuos(){//cria um individuo
		var tempo = [];
		var oitava = [1];
		var nota = [];		
		
			for (i = 0; i < 2; i++) { //adicionando elementos ao vetor tempo
				var sort = Math.round(Math.random());
				tempo[i] = sort;
			}
		
		oitava[1] = Math.round(Math.random()); //sorteia 2º bit da oitava
		
			while (true) { //adicionando elementos ao vetor nota (com restrição < 1011)
				var verificaNota = [];
					for (i = 0; i < 4; i++) {
						var sort = Math.round(Math.random());
						verificaNota[i] = sort;
					}
				var binToDec = parseInt(verificaNota.join(""));
					if (binToDec < 1011) {
						nota = verificaNota.slice();
						break;
					}
			}
		var individuo = tempo.concat(oitava, nota);
		return individuo;
	}

	function criaPopulacao(){//cria uma população
		var populacao = [];
		
		for (var i = 0; i < 8; i++) {
			var compasso = [];
			compasso[0] = criaIndividuos();
			
				for (var j = 0; j < 3; j++) {
					var novaNota = criaIndividuos();
					//verifica se já tem um individuo com o mesmo ritmo no compasso
					var flag = true;
						
						while(flag){	
							flag = false;							
								for(var k = 0; k < compasso.length; k++){
									if(novaNota[0] == compasso[k][0] && novaNota[1] == compasso[k][1]){
										novaNota = criaIndividuos();
										flag = true;
										break;
									}
								}
													
						}
						
					compasso[j + 1] = novaNota;
					
				}
				
			populacao[i] = copiaCompasso(compasso);			
		}
		
		//passando individuos para 10 bits
		var novaPopulacao = [];
		for (var i = 0; i < 8; i++) {
			var arrTemp = [i];
			var compassoTemp = [];
			for (var j = 0; j < 4; j++){
				arrTemp[1] = j;
				var individuo10 = arrTemp.concat(populacao[i][j]);				
				compassoTemp[j]  = individuo10.slice();
				compassoTemp[j][10] = tradutor(individuo10, "nota");
			}
			novaPopulacao[i] = copiaCompasso(compassoTemp);
		}
		
		return novaPopulacao;
	}
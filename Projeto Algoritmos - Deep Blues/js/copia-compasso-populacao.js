	function copiaCompasso(compasso){//recebe um compasso e retorna sua cópia em valor
		var copia = [];
			for(var i = 0; i < 4; i++){
				copia[i] = compasso[i].slice();			
			}
		
		return copia;
	}
	
	function copiaPopulacao(populacao){//recebe uma população e retorna sua cópia
		var copia = [];
			for(var i = 0; i < 8; i++){
				copia[i] = copiaCompasso(populacao[i]);
			}
		return copia;
	}
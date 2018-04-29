	function mostraCompasso(compasso) {//recebe um compasso e retorna a cifra em string
		var exibeComp = [];
		for (var i = 0; i < 4; i++) {
			exibeComp[i] = tradutor(compasso[i], "tudo");
		}
		return exibeComp;
	}
	
	function mostraMelodia(melodia) {//recebe uma melodia e retorna a cifra em string
		var exibeMelo = [];
			for (var i = 0; i < 8; i++) {
				exibeMelo[i] = mostraCompasso(melodia[i]);			
			}
		return exibeMelo;
	}
	function fitness(compasso){//recebe um compasso e ordena as notas conforme uma escala pré-definida
		var escalaPentaBlues = ["c", "d", "dsus", "e", "g", "a"];//notas da escala pentablues
		var copia = copiaCompasso(compasso);
		var novoArray = [];	
		var notas = [];
		
			
			//preenche o vetor novoArray com notas da escala
			for(var i = 0; i < 4; i++){
				if(escalaPentaBlues.indexOf(copia[i][10]) != -1){
					novoArray.push(copia[i]);
				}
			}
			
			//preenche o vetor novoArray com notas fora da escala
			for(var i = 0; i < 4; i++){
				if(escalaPentaBlues.indexOf(copia[i][10]) == -1){
					novoArray.push(copia[i]);
					
				}
			}
		
		
		return novoArray;
	}
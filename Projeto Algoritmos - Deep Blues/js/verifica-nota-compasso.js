	function verificaNota(nota){//verifica se a nota faz parte da escala
		var copiaNota = nota.slice();
		var escalaPentaBlues = ["c", "d", "dsus", "e", "g", "a"];
				
			if(escalaPentaBlues.indexOf(copiaNota[10]) != -1){
				return true;
			}else{
				return false;
			}
					
	}

	function verificaCompasso(compasso){//verifica se no compasso tem alguma nota fora da escala
		var copia = copiaCompasso(compasso);
			for(var i = 0; i < 4; i++){
				if(verificaNota(copia[i]) == false){
					return false;
				}
			}
			
		return true;
	}
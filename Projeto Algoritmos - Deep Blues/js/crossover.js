	function crossOver(notas){//faz um crossover entre os dois melhores individuos
        var compasso = copiaCompasso(notas);
		var nota1 = [];
        var nota2 = [];
        var filho1 = [];
        var filho2 = [];
		var filho3 = [];
		var filho4 = [];
        var filho101 = [];
		var filho102 = [];

		
            for(var i = 0; i < 4; i++){
                nota1[i] = compasso[0][i + 6];
                nota2[i] = compasso[1][i + 6]; 
            }
            //Passa para o filho os dois primeiros genes de um pai e os dois últimos do outro
            for(var i = 0; i < 4; i++){
                if(i < 2){
                    filho1[i] = nota1[i];
                    filho2[i] = nota2[i];
                }
                else{
                    filho1[i] = nota2[i];
                    filho2[i] = nota1[i];
                }
            }
			
			//transmite as características pros próximos cromossomos
			for(var i = 0; i < 4; i++){
                compasso[2][i + 6] = filho1[i];
                compasso[3][i + 6] = filho2[i]; 
            }
			
			//copiando 10 bits dos fihos para poder substituir a cifra
			for(var i = 0; i < 10; i++){
				filho101[i] = compasso[2][i];
				filho102[i] = compasso[3][i];
			}
			
			//atribuindo corretamente as cifras
			compasso[2][10] = tradutor(filho101, "nota");
			compasso[3][10] = tradutor(filho102, "nota");
			
		return compasso;
    }
	
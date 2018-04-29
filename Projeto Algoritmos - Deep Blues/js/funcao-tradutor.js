function tradutor(nota, info){ //recebe um individuo e retorna o nº do compasso, posição da nota no compasso, duração da nota, oitava e a nota
		var individuo = nota.slice();
		var compasso = 0;
		var posicao_Nota = 0;
		var tempo_String = 0;
		var regiao_String = 0;
		var nota_String = 0;
		var tudo = [];
		var audio = [];
		//Pega o primeiro elemento do vetor Individuo pra saber o compasso
		
			compasso = individuo[0] + 1;
			tudo[0] = compasso;	
		
			posicao_Nota = individuo[1] + 1;
			tudo[1] = posicao_Nota;
		
			//Traduzir o 2º e 3 º elemento do Individuo(O tempo)
			var duracao = [];
				for (var i = 0; i < 2; i++){
					duracao.push(individuo[i + 2]);
				}
			//Converter os elementos em String
			var tempo = parseInt(duracao.join(""));
			
			
				if(tempo == 00){
					tempo_String = "colcheia";
					tudo[2] = tempo_String;
					audio[0] = tempo_String;
				}
			
				if(tempo == 01){
					tempo_String = "seminima";
					tudo[2] = tempo_String;
					audio[0] = tempo_String;
				}
			
				if(tempo == 10){
					tempo_String = "seminimap";
					tudo[2] = tempo_String;
					audio[0] = tempo_String;
				}
			
				if(tempo == 11){
					tempo_String = "minimap";
					tudo[2] = tempo_String;
					audio[0] = tempo_String;
				}	
		
		//Traduzir o 4º e 5º elemento do Individuo(A oitava)
		
			var posicao = [];
				for (var i = 0; i < 2; i++){
					posicao.push(individuo[i + 4]);
				}
		
			var regiao = posicao.join("");
			
			
	
				if(regiao == "00"){
					regiao_String = "1";
					tudo[3] = regiao_String;
					audio[1] = regiao_String;
				}
		
				if(regiao == "01"){
					regiao_String = "2";
					tudo[3] = regiao_String;
					audio[1] = regiao_String;
				}
		
				if(regiao == "10"){
					regiao_String = "3";
					tudo[3] = regiao_String;
					audio[1] = regiao_String;
				}
		
				if(regiao == "11"){
					regiao_String = "4";
					tudo[3] = regiao_String;
					audio[1] = regiao_String;
				}
								
		//Traduzir os Individuos do 4º até o 7º(A nota);
		
			var som = [];
			
				for (var i = 0; i < 4; i++){
					som.push(individuo[i + 6]);
				}
			
			var nota = som.join("");
					
				if(nota == "0000"){
					nota_String = "c";
				}
			
				else if(nota == "0001"){
					nota_String = "csus";
				}
			
				else if(nota == "0010"){
					nota_String = "d";
				}
			
				else if(nota == "0011"){
					nota_String = "dsus";
				}
				
				else if(nota == "0100"){
					nota_String = "e";
				}
			
				else if(nota == "0101"){
					nota_String = "f";
				}
			
				else if(nota == "0110"){
					nota_String = "fsus";
				}
			
				else if(nota == "0111"){
					nota_String = "g";
				}
				
				else if(nota == "1000"){
					nota_String = "gsus";
				}
			
				else if(nota == "1001"){
					nota_String = "a";
				}
			
				else if(nota == "1010"){
					nota_String = "asus";
				}
			
				else if(nota == "1011"){
					nota_String = "b";
				}
				
				else{
					nota_String = "x";
				}	

			tudo[4] = nota_String;
			audio[2] = nota_String;
			audio[3] = ".mp3";
			
			
		if (info == "compasso"){
			return compasso;
		}
		if (info == "posicao"){
			return posicao_Nota;
		}
		if (info == "figura"){
			return tempo_String;
		}
		if (info == "nota"){
			return nota_String;	
		}
		if (info == "oitava"){
			return regiao_String;
		}
		if (info == "tudo"){
			return tudo;
		}
		var arquivo = audio.join("");
			if	(info == "arquivo"){
				return arquivo;
			}	
	}
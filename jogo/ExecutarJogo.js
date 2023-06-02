function executarJogo(){

    background(imgFundo);
    jogador.mova();
  
      // Faz com que o item surja novamente;
    
   for(let i=0;i < itens.length;i++){
      itens[i].mova();
     
      if (itens[i].posY > 400 ){
        itens[i] = new Itens (itens[i].posX); }
        
     // Colisão (limite de toques;)
     
      if (
      jogador.xInicial<itens[i].xFinal &&
      jogador.xFinal>itens[i].xInicial &&
      jogador.yInicial<itens[i].yFinal &&
      jogador.yFinal>itens[i].yInicial)
     
       //Carregamento para os sons; 
        
   if(itens[i].imagem == imgItens[3]){
        pontuação = 0;
        itens[i] = new Itens();  
        vidas--;
     
        //som de explosão
        somBomb.play();
      }
      else{
        pontuação +=1
        itens[i] = new Itens();
        
        //som de moedinha
        
        somMario.play();
     
      }
    
     //Pontuação do jogo;
     
    textSize(14);
    text("PONTUAÇÃO TOTAL: " + pontuação, 230,20);

      

    }
}
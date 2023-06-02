
class Jogador{
    constructor(){
      this.imagem = loadImage("jogo/imgJogo/IMG - MARIO.png");
      this.posX = 240;
      this.posY = 230;
      this.velocidade = 5;
      this.largura = 150;
      this.altura = 150;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    
        //Código para o deslocamento do jogador (personagem);
    
     mova(){
      image(this.imagem,this.posX,this.posY,this.largura,this.altura);
      
      if ((keyIsDown(39)) && (this.xFinal<600)){
        this.posX += this.velocidade;
      }
      
       if ((keyIsDown(37)) && (this.xInicial>0)){
        this.posX -= this.velocidade;
       }
      
         //Impedir o jogador de sair para fora do campo;
       
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
   }
  }
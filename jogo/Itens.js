 //Classe dos itens (criação dos itens);

 class Itens{
    constructor(){
      this.imagem = imgItens[int(random(0,3.9))];
      this.posX= random(10,400);
      this.posY= 0;
      
        //Conforme mais pontos, ocorre o aumento da velocidade;
      
      this.velocidade = random(1+pontuação,5+pontuação);
      
      this.largura = 100;
      this.altura = 50;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    
        // Definição para imagem em movimento;
    
  mova(){
      this.posY += this.velocidade;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
      image(this.imagem,this.posX,this.posY,this.largura,this.altura);
      
      
    }
  }
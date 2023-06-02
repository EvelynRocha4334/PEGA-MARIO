      // variavéis, armazenamento de dados;

var imgFundo;
var jogador;
var bomb;
var somMario;
var somBomb;
var imgItens = [];
var itens = [];
var pontuação = 0;
var imgAbertura;
var controleTela = "INICIO ";
var imgGameOver;
var GameOver = "FINAL";
var vidas  = 3;

     

      //Inserir imagens e sons, contendo também variáveis com listas;

function preload(){
  imgFundo = loadImage ("jogo/imgJogo/IMG - FUNDO SUPER MARIO.jpg");
  imgItens [0] = loadImage ("jogo/imgJogo/IMG - COGUMELO MARIO.png");
  imgItens [1] = loadImage ("jogo/imgJogo/IMG - ESTRELA MARIO.png");
  imgItens [2] = loadImage ("jogo/imgJogo/IMG - MOEDA MARIO.png");
  imgItens [3] = loadImage ("jogo/imgJogo/IMG - BOMB.png");
    
  somMario = loadSound("jogo/SOM/som - mario.mp3");
  somBomb = loadSound("jogo/SOM/som - bomb.mp3");

  imgAbertura = loadImage ("jogo/imgJogo/PEGA MARIO.gif");
  imgGameOver = loadImage ("jogo/imgJogo/PEGA MARIO 01.png");

  itens[0] = new Itens(35);
  itens[1] = new Itens(90);
  itens[2] = new Itens(145);
  itens[3] = new Itens (205);
  jogador = new Jogador();

}

      //Tamanho do preview;

function setup() {
  createCanvas(600, 400).parent("jogo");
}

     //Carregamento do jogo;

function keyPressed(){
if (keyCode==32){
      controleTela = "JOGO"
 }
}


function draw() {
if (controleTela == "INICIO"){
      mostraAbertura();
}

if (controleTela == "FINAL"){
      executarJogo();
}
if (vidas == 0){
      mostrarGameOver();
}
}


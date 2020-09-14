## `Projeto para iniciar o #100DaysOfCode Challenge`

   Salve, neste repositório irei registar todo o histórico do desafio, depois de ficar hypado com muitas coisas decidi focar em algumas
   e umas delas é o javascript, então para manter meu hype em aprender dei start nese desafio e escrever um repositório contando toda a tragetória.
   
   O desafio será aprender JavaScript do zero, desde o que é até o nível avançado, não estou muito preocupado no fator tempo, o único objetivo
   será que no final eu tenha compreendido/apreendido o javascript.
   
   No README irei colocar um resumo do estudo dia, acho que isso será legal para fixar o que eu estudei e também será útil para eu revisar/estudar nos finais de semana
   o que eu vi durante a semana. 

## DIA X

- Arrays:
    -  Arrays são um tipo de váriavel especial, eles armezam uma lista de valores e não somente um unico valor. Os valores no array são
    atribuidos dentro de colchetes, separados por '' e vírgulas. 
    
    - Também pude perceber que os arrays podem ter técnicas diferentes de serem declaros, como por exemplo:
    
        - Notação literal de array: Criamos uma var com o nome e ja declaramos os valores do array:
            - `var colors = ['black','red','pink'];`   
              
        - Construtor de array: Criamos uma var com o nome e após isso declarmos um New Array(), diferente da técnica de notação literal
        aqui declarmos os valores dentro de () e não []:
           - `var colors = New Array('black','red','pink');` 
           
       Quando quisermos acessar um valor especifico em um array, utilizamos o determinado indice do item, o indice indica 
       determinada posição do elemento no array e também vale lembrar que os itens no Array começam em 0 e não em 1. Sendo assim,
       
        - black - 0
        - red - 1
        - pink - 2      
        
        Então quando quisermos acessar algum item especifico, podemos fazer: 
        
        `console.log(colors.item(1));`
        
        Assim estariamos dando um console no item na posição 1 do array.
        
        Caso queiramosa alterar um determinado valor no array, temos que passar o array, a posição desejada e o novo valor, sendo assim:
        
        `colors[2] = 'orange';`
        
        Assim estariamos alterando a cor rosa para a nova cor laranja. E caso queiramos adicionar um novo item no array, podemos 
        passar o array, a nova posição e o novo item:
        
        `colors[3] = 'green';` => `['black','red','orange','green'];`
     
## DIA X - Funções

- **Funções:**
   
   As funções em JavaScript consistem em ser uma série de instruções agrupadas que irá executar determinada tarefa. As funções podem ser comparadas
   com métodos, a única diferença é que os métodos são declarados dentro do objeto, ja as funções são declaradas fora.

    As funções podem e não podem serem executas assim que a página é carregada, como por exemplo, podemos ter uma função que o usuário ao clicar
    em determinado campo da página, apareça um alert dizendo 'Hello". Isso quer dizer que você está `chamando` a função.
    
    Algumas funções podem receber valores para alimentar a tarefa a ser executada, como por exemplo podemos ter uma função para calcular a
    soma de 2 números, essas informações que são passadas para a função são denominadas de `parâmetros` e o resultado final dessa função, terá um valor
    final, isso será a resposta da função que também é conhecida como `valor de retorno`. 
    
-   **Declarar uma função**

    Quando formos declarmos uma função, precisamos dar um nome que informa o que ela irá fazer, e escrevemos as instruções que sera necessário para realizar a tarefa, isso se chama
    `declaração de função`.
    
    Exemplos:
    - [Declarando funções e executando-as](https://github.com/ferrorenan/100DaysOfCode-JS/blob/master/resources/html/funcoes/index.html)
    
- **Parâmetros**
    -   As funções também podem precisar de informações, ou seja, podemos ter funções que executam pequenas tarefas, como a simples saída de um texto e também
podemos ter funções que calculam a área de um retângulo por exemplo. Essas funções, precisam de informações para realizarem sua tarefa.
Nestes casos, essas informações são conehcidas como `parâmetros`, esse `parâmetros` funcionam como váriaveis para a função, como por exemplo:

        function getArea(width, height){
            return width * area;
        }
        
Perceba que na função getArea() temos o `width e o height`, essas duas propriedades são o parâmetro da função, são como variáveis da função
que iram receber as informações necessárias para realizarmos a tarefa. 

- **Argumentos** 
    - Quando utilizamos funções com parâmetros, para realizarmos a chamada delas nós precisamos fornecer dados para alimentar a função, esses dados fornecidos 
    são conhecidos como `argumentos`, esses `argumentos` podem ser fornecidos de algumas formas:
    
        - **Argumentos como valores:**
        
             Chamamos a função e já passamos os valores reais para a função, como por exemplo:
             
             `getArea(3,5);`   
             
        - **Argumentos como váriaveis:**
             
             Invez de declararmos logo de cara os valores reais, podemos declarar váriaveis e passar-las para a função, como por exemplo:
                  
                  wallWidth: 3;
                  wallHeight: 5;
                  
                  getArea(wallWidth, wallHeight);   

        Você pode talvez notar que argumentos e parâmetros são bem parecidos, mas os parâmetros são as váriaveis na função que iram receber algum valor, quando chamamos essa função que precisa
        de dados para realizar sua tarefa, podemos pensar que estamos argumentando, dando informações necessárias para ela realizar seu objetivo.
    
         Exemplos:
            - [Declarando funções e executando-as](https://github.com/ferrorenan/100DaysOfCode-JS/blob/master/resources/html/funcoes/index.html)

        ![Logo](https://github.com/ferrorenan/100DaysOfCode-JS/blob/master/public/images/carbon.png "Logo")
        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

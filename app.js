function pesquisar() { //quando clicar no botão ira executar cod. abaixo
     // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    if (campoPesquisa == "") {                   //== para comparação
        section.innerHTML = "<p>Digite uma palavra chave para pesquisar.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

   console.log(campoPesquisa); // Loga a seção no console para verificar se foi encontrada    
    //Inicializa uma string vazia para armazenar os resultados
    let resultados = "";  
    let titulo = "";
    let sinopse = "";
    let tags = "";

    //para cada dado den tro da lista de filmesKubrick
    for (let filme of filmesKubrick) {
        titulo = filme.titulo.toLowerCase()
        sinopse = filme.sinopse.toLowerCase()
        tags = filme.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Cria um  novo elemento HTML cara cada resultado
            resultados += `          
            <div class="item-resultado">
                <h2>
                    <a href="${filme.wiki}" target="_blank"> [${filme.ano}] ${filme.titulo} (${filme.genero})</a>
                </h2>
                <p class="descricao-meta"> <b>Sinopse do Filme:</b> ${filme.sinopse} </p>
                <a href="${filme.imdb}" target="_blank"> Mais Informações </a> 
            </div>
        `;
        }   
        
    } //pega os resultados / Fim do loop
    
    if (!resultados ) {
        resultados = "<p>Nenhuma resultado foi encontrado</p>"
    }
    //Atribui a string com os resultados ao conteúdo HTML da seção / Exibe os resultados
    section.innerHTML = resultados; 
}




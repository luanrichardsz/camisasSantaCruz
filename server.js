let listaCamisas = [    
    {
        "nome": "Camisa de 2023",
        "img": "img/santacruz2023.jpeg",
        "descricao": "Camisa oficial do Santa Cruz Futebol Clube utilizada na temporada de 2023, com design clássico e listras tradicionais."
    },
    {
        "nome": "Segunda Camisa de 2024",
        "img": "img/santacruz2024.jpg",
        "descricao": "Uniforme alternativo do Santa Cruz para a temporada de 2024, com detalhes modernos e cores ousadas."
    },
    {
        "nome": "Camisa de 2024/25",
        "img": "img/santacruz2024-25.jpeg",
        "descricao": "Modelo exclusivo do Santa Cruz para a transição entre as temporadas 2024 e 2025, destacando inovação no tecido e no acabamento."
    },
    {
        "nome": "Camisa de 2023 Feminino",
        "img": "img/santacruzF.jpg",
        "descricao": "Versão feminina da camisa de 2023, projetada com foco em conforto e estilo para as torcedoras do Santa Cruz."
    },
    {
        "nome": "Camisa de Goleiro",
        "img": "img/santacruzG.jpeg",
        "descricao": "Camisa oficial dos goleiros do Santa Cruz em 2023, com cores vibrantes e tecnologia para alta performance."
    },
    {
        "nome": "Segunda Camisa de 2023",
        "img": "img/santacruz2.jpg",
        "descricao": "Camisa reserva do Santa Cruz na temporada de 2023, trazendo um design minimalista e elegante."
    }    
]

listaCamisas.map((camisa, posicao) => {
    let cardCamisa = document.getElementById("cards");

    cardCamisa.innerHTML += `
                <div class="col-md-4" style="width:380px">
                <div class="card m-3">
                    <img src="${camisa.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${camisa.nome}</h5>
                        <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in">  </i></a>
                    </div>
                </div>
            </div>
    `
});

function zoomImg(posicao) {
    let camisaSelecionada = listaCamisas[posicao];

    document.getElementById("nomeCamisa").innerHTML = camisaSelecionada.nome;
    document.getElementById("descricaoCamisa").innerHTML = camisaSelecionada.descricao;
    document.getElementById("imgModal").src = camisaSelecionada.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite() {
    let temaPrincipal = document.querySelector("html").getAttribute("data-bs-theme");

    if(temaPrincipal === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-moon-fill"> </i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-brightness-high-fill"> </i>`
    }
}

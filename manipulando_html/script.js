function tabelaA(){
    let oldLista = document.querySelector('#div-principal ol')
    let newlista = document.createElement('ol')
    

    for(x = 0; x < 20; x++){
        const arrayTeste = [
            'PALMEIRAS','FLUMINENSE','FLAMENGO','CORINTHIANS','INTERNACIONAL','ATHLETICO-PR','ATLÉTICO-MG',
            'SANTOS','AMÉRICA-MG','BRAGANTINO','GOIÁS','SÃO PAULO','FORTALEZA','BOTAFOGO','CREARÁ SC','CUIABÁ',
            'AVAÍ','CORITIBA','ATLÉTICO-GO','JUVENTUDE'
        ]
        let item = document.createElement('li')
        let textoItem = document.createTextNode(arrayTeste[x])

        item.appendChild(textoItem)
        
        newlista.appendChild(item)
    }
    let cont = document.querySelector('#div-principal')
    cont.replaceChild(newlista, oldLista)
}

function tabelaB(){
    let oldLista = document.querySelector('#div-principal ol')
    let newlista = document.createElement('ol')
    

    for(x = 0; x < 20; x++){
        const arrayTeste = ['CRUZEIRO','BAHIA','GRÊMIO','VASCO DA GAMA','TOMBENSE','LONDRINA','CRB','SPORT RECIFE',
        'SAMPAIO CORRÊA','ITUANO','CRICIÚMA','PONTE PRETA','NOVORIZONTINO','CHAPECOENSE','BRUSQUE','CSA','OPERÁRIO','VILA NOVA','GUARANI','NÁUTICO'
    ]
        let item = document.createElement('li')
        let textoItem = document.createTextNode(arrayTeste[x])

        item.appendChild(textoItem)
        
        newlista.appendChild(item)
    }
    let cont = document.querySelector('#div-principal')
    cont.replaceChild(newlista, oldLista)
}
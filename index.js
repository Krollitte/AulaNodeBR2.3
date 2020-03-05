const {obterPessoas} = require('./services');

Array.prototype.meuFilter = function(callback){
    const lista=[]
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}
async function main(){
    try{
        const {
            results
          }  = await obterPessoas('a')

        //  const familiaLars = results.filter(function(item){
        //       por padrão deve retornar um booleano
        //       para informar se deve manter ou remover da lista 
        //       false -> remove da lista
        //       true -> manter na lista 
        //     const result = item.name.toLowerCase().indexOf('lars') != -1
        //     return result
        // })

        // const names = familiaLars.map(pessoa=>pessoa.name)

        const familiaLars = results.meuFilter((item, index, lista)=>{
            console.log(`index:${index}`, lista.length)
           return item.name.toLowerCase().indexOf('lars') != -1
            
        })
        
        const names = familiaLars.map((pessoa)=>pessoa.name)
        console.log(names)
    }
    catch(error){
        console.error('Não vai dar não', error);
    }
}
main()
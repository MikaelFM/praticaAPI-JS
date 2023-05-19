const App = new Vue ({
    el: '#tudo',
    data: {
        tipo_veiculo: '',
        tipos: [
            {
                'codigo' : 'carros',
                'nome'   : 'Carro'
            },
            {
                'codigo' : 'motos',
                'nome'   : 'Moto'
            },
            {
                'codigo' : 'caminhoes',
                'nome'   : 'Caminhão'
            }
        ],
        marca_veiculo: '',
        marcas: [],
        modelo_veiculo: '',
        modelos: [],
        ano_veiculo: '',
        anos: [],
        dados: [],
    },
    methods: {
        pegaMarcas: function (){
            console.log((`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas`))
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas`)
            .done(function(response) {
                console.log(response)
                App.marcas = response
            });
        },
        pegaModelos: function (){
            console.log(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos`)
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos`)
            .done(function(response) {
                console.log(response)
                App.modelos = response['modelos']
            });
        },
        pegaAnos: function (){
            console.log(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos/${this.modelo_veiculo}/anos`)
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos/${this.modelo_veiculo}/anos`)
            .done(function(response) {
                console.log(response)
                App.anos = response
            });
        },
        pegaDados: function (){
            console.log(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos/${this.modelo_veiculo}/anos/${this.ano_veiculo}`)
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos/${this.modelo_veiculo}/anos/${this.ano_veiculo}`)
            .done(function(response) {
                console.log(response)
                App.dados = response
            });
        }
    }
})
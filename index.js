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
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas`)
            .done(function(response) {
                App.marcas = response
            });
        },
        pegaModelos: function (){
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos`)
            .done(function(response) {
                App.modelos = response['modelos']
            });
        },
        pegaAnos: function (){
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos/${this.modelo_veiculo}/anos`)
            .done(function(response) {
                App.anos = response
            });
        },
        pegaDados: function (){
            $.get(`https://parallelum.com.br/fipe/api/v1/${this.tipo_veiculo}/marcas/${this.marca_veiculo}/modelos/${this.modelo_veiculo}/anos/${this.ano_veiculo}`)
            .done(function(response) {
                App.dados = response
            });
        }
    }
})
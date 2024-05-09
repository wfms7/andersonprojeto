class chart {
    constructor(){
        this._chartpizza = document.getElementById('chartpizza');
        this._blue = "#4873b4";
        this._yellow="#e0b929";
        this._red="#be4625"
    }
main(){

    this.chartPizza();
}

chartPizza(){

    let valor =[10,3,5];

    const totalItems =valor.reduce((total,p)=>total +p,0)
    console.log(totalItems)
    new Chart(this._chartpizza, {
        type: 'pie',
        data:
         {
            labels: ["Azul","Amarelo","Vermelho"],
         
            datasets: [{
                            label: "",
                            data: [valor[0],valor[1],valor[2]],
                            backgroundColor: [this._blue,this._yellow,this._red],
                            hoverOffset: 4,
                            datalabels: {
                                            color: '#ffffff',
                                            formatter: function (context, valor) {


                                                return Math.round((context / totalItems) * 100) + "%"
                                            }
                                         }
                        }],
            
            
        }
            ,
        plugins: [ChartDataLabels],
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

}

const start = new chart();
start.main();
import config from './config';

const colors = config.chartColors;

const LINE_COLORS = [colors.red, colors.blue, colors.orange];

export const DATA = [
  {
    id: 'obra-33',
    label: 'Obra 33',
    data: {
      table: {
        direct_expenses: [
          {
            item_id: 1,
            description: 'PROJETOS',
            measured_percentage: 0.9955,
            budget_value: 292608.87,
            weight_percentage: 0.292,
            accumulated_values: {
              measured: 291302.89,
              payments: 310798.7,
              budget: -18189.83,
              projection: 309836.92,
            },
          },
        ],
        indirect_expenses: [
          {
            item_id: 1,
            description: 'LICENÇAS, TAXAS E EMOLUMENTOS',
            measured_percentage: 0.534,
            budget_value: 153772.67,
            weight_percentage: 0.153,
            accumulated_values: {
              measured: 82114.95,
              payments: 75697.53,
              budget: 78075.14,
              projection: 144555.16,
            },
          },
        ],
      },
      summary_projections: {
        table: {
          months_labels: ['Set-20', 'Ago-20'],
          data: [
            {
              description: '% Financeiro Acumulado Previsto',
              percentages: [0.5365, 0.4935],
            },
            {
              description: '% Financeiro Acumulado Executado',
              percentages: [0.6053, 0.5494],
            },
            {
              description: 'Custo previsto até a data',
              values: [5344100.04, 4917915.07],
            },
            {
              description: 'Custo medido até a data',
              values: [6072681.63, 5531257.85],
            },
            {
              description: 'Custo Real até a data',
              values: [5647485.02, 5122250.47],
            },
            {
              description: 'Valor orçado',
              values: [10031917.43, 10067530.38],
            },
            {
              description: 'Custo projetado',
              values: [9507678.13, 9493851.53],
            },
            {
              description: 'Tendência financeira',
              percentages: [-0.0523, -0.057],
            },
            {
              description: 'Custo projetado por m² de AEQ',
              values: [2924.39, 2920.14],
            },
            {
              description: 'Área Equivalente',
              values: [3251.16, 3251.16],
            },
          ],
        },
        chart: {
          series: [
            {
              name: 'Custo orçado',
              data: [24, 5, 8, 13, 55, 100, 21, 7, 40, 33, 77, 8],
            },
            {
              name: 'Custo projetado',
              data: [20, 6, 6, 10, 49, 97, 20, 8, 42, 30, 73, 6],
            },
          ],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              background: 'transparent',
              foreColor: '#999',
            },
            theme: {
              mode: 'dark',
              palette: 'palette4',
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent'],
            },
            xaxis: {
              categories: [
                'Projetos',
                'Serviços preliminares',
                'Fundação',
                'Alvenaria / Fechamento',
                'Revestimento de piso',
                'Revestimento de teto',
                'Esquadrias em madeira',
                'Bancadas',
                'Pintura',
                'Licenças, taxas e em olumentos',
                'Custos indiretos - Pessoal',
                'Custos indiretos - Outros',
              ],
            },
            fill: {
              opacity: 1,
            },
            tooltip: {
              y: {
                formatter(val) {
                  return `${val}%`;
                },
              },
            },
          },
        },
      },
      monthly_evolution: {
        series: [
          {
            name: 'Atrasadas',
            data: [
              26,
              65,
              44,
              55,
              57,
              56,
              51,
              48,
              30,
              21,
              0,
              56,
              49,
              56,
              49,
              78,
              56,
              0,
              0,
              0,
            ],
          },
          {
            name: 'Adiantadas',
            data: [
              23,
              35,
              76,
              85,
              101,
              98,
              87,
              105,
              91,
              114,
              94,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          },
        ],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            background: 'transparent',
            foreColor: '#999',
          },
          theme: {
            mode: 'dark',
            palette: 'palette7',
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
          },
          xaxis: {
            categories: [
              'Nov-19',
              'Dez-19',
              'Jan-20',
              'Fev-20',
              'Mar-20',
              'Abr-20',
              'Mai-20',
              'Jun-20',
              'Jul-20',
              'Ago-20',
              'Set-20',
              'Out-20',
              'Nov-20',
              'Dez-20',
              'Jan-21',
              'Fev-21',
              'Mar-21',
              'Abr-21',
              'Mai-21',
              'Jun-21',
              'Jul-21',
            ],
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter(val) {
                return `$ ${val} thousands`;
              },
            },
          },
        },
      },
      accumulated_evolution: {
        color: LINE_COLORS,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['2015 Precipitation', '2016 Precipitation'],
          textStyle: {
            color: colors.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#999',
              },
            },
            axisPointer: {
              label: {
                formatter(params) {
                  return `Adiantadas  ${params.value}${
                    params.seriesData.length
                      ? `：${params.seriesData[0].data}`
                      : ''
                  }`;
                },
              },
            },
            data: [
              'Nov-19',
              'Dez-19',
              'Jan-20',
              'Fev-20',
              'Mar-20',
              'Abr-20',
              'Mai-20',
              'Jun-20',
              'Jul-20',
              'Ago-20',
              'Set-20',
              'Out-20',
              'Nov-20',
              'Dez-20',
              'Jan-21',
              'Fev-21',
              'Mar-21',
              'Abr-21',
              'Mai-21',
              'Jun-21',
              'Jul-21',
            ],
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#999',
              },
            },
            axisPointer: {
              label: {
                formatter(params) {
                  return `Atrasadas  ${params.value}${
                    params.seriesData.length
                      ? `：${params.seriesData[0].data}`
                      : ''
                  }`;
                },
              },
            },
            data: [
              'Nov-19',
              'Dez-19',
              'Jan-20',
              'Fev-20',
              'Mar-20',
              'Abr-20',
              'Mai-20',
              'Jun-20',
              'Jul-20',
              'Ago-20',
              'Set-20',
              'Out-20',
              'Nov-20',
              'Dez-20',
              'Jan-21',
              'Fev-21',
              'Mar-21',
              'Abr-21',
              'Mai-21',
              'Jun-21',
              'Jul-21',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#999',
            },
            axisLine: {
              lineStyle: {
                color: colors.textColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: colors.gridLineColor,
              },
            },
            axisPointer: {
              label: {
                color: colors.dark,
              },
            },
          },
        ],
        series: [
          {
            name: 'Atrasadas',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [13, 21, 24, 28, 29, 36, 39, 44, 47, 53],
          },
          {
            name: 'Adiantadas',
            type: 'line',
            smooth: true,
            data: [
              15,
              20,
              23,
              27,
              31,
              35,
              39,
              44,
              49,
              52,
              59,
              68,
              75,
              81,
              94,
              100,
            ],
          },
        ],
      },
    },
  },
  {
    id: 'obra-34',
    label: 'Obra 34',
    data: {
      table: {
        direct_expenses: [
          {
            item_id: 1,
            description: 'PROJETOS',
            measured_percentage: 0.9955,
            budget_value: 292608.87,
            weight_percentage: 0.292,
            accumulated_values: {
              measured: 291302.89,
              payments: 310798.7,
              budget: -18189.83,
              projection: 309836.92,
            },
          },
        ],
        indirect_expenses: [
          {
            item_id: 1,
            description: 'LICENÇAS, TAXAS E EMOLUMENTOS',
            measured_percentage: 0.534,
            budget_value: 153772.67,
            weight_percentage: 0.153,
            accumulated_values: {
              measured: 82114.95,
              payments: 75697.53,
              budget: 78075.14,
              projection: 144555.16,
            },
          },
        ],
      },
      summary_projections: {
        table: {
          months_labels: ['Set-20', 'Ago-20'],
          data: [
            {
              description: '% Financeiro Acumulado Previsto',
              percentages: [0.5365, 0.4935],
            },
            {
              description: '% Financeiro Acumulado Executado',
              percentages: [0.6053, 0.5494],
            },
            {
              description: 'Custo previsto até a data',
              values: [5344100.04, 4917915.07],
            },
            {
              description: 'Custo medido até a data',
              values: [6072681.63, 5531257.85],
            },
            {
              description: 'Custo Real até a data',
              values: [5647485.02, 5122250.47],
            },
            {
              description: 'Valor orçado',
              values: [10031917.43, 10067530.38],
            },
            {
              description: 'Custo projetado',
              values: [9507678.13, 9493851.53],
            },
            {
              description: 'Tendência financeira',
              percentages: [-0.0523, -0.057],
            },
            {
              description: 'Custo projetado por m² de AEQ',
              values: [2924.39, 2920.14],
            },
            {
              description: 'Área Equivalente',
              values: [3251.16, 3251.16],
            },
          ],
        },
        chart: {
          series: [
            {
              name: 'Custo orçado',
              data: [24, 5, 8, 13, 55, 100, 21, 7, 40, 33, 77, 8],
            },
            {
              name: 'Custo projetado',
              data: [20, 6, 6, 10, 49, 97, 20, 8, 42, 30, 73, 6],
            },
          ],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              background: 'transparent',
              foreColor: '#999',
            },
            theme: {
              mode: 'dark',
              palette: 'palette4',
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent'],
            },
            xaxis: {
              categories: [
                'Projetos',
                'Serviços preliminares',
                'Fundação',
                'Alvenaria / Fechamento',
                'Revestimento de piso',
                'Revestimento de teto',
                'Esquadrias em madeira',
                'Bancadas',
                'Pintura',
                'Licenças, taxas e em olumentos',
                'Custos indiretos - Pessoal',
                'Custos indiretos - Outros',
              ],
            },
            fill: {
              opacity: 1,
            },
            tooltip: {
              y: {
                formatter(val) {
                  return `${val}%`;
                },
              },
            },
          },
        },
      },
      monthly_evolution: {
        series: [
          {
            name: 'Atrasadas',
            data: [
              26,
              65,
              44,
              55,
              57,
              56,
              51,
              48,
              30,
              21,
              0,
              56,
              49,
              56,
              49,
              78,
              56,
              0,
              0,
              0,
            ],
          },
          {
            name: 'Adiantadas',
            data: [
              23,
              35,
              76,
              85,
              101,
              98,
              87,
              105,
              91,
              114,
              94,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          },
        ],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            background: 'transparent',
            foreColor: '#999',
          },
          theme: {
            mode: 'dark',
            palette: 'palette1',
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
          },
          xaxis: {
            categories: [
              'Nov-19',
              'Dez-19',
              'Jan-20',
              'Fev-20',
              'Mar-20',
              'Abr-20',
              'Mai-20',
              'Jun-20',
              'Jul-20',
              'Ago-20',
              'Set-20',
              'Out-20',
              'Nov-20',
              'Dez-20',
              'Jan-21',
              'Fev-21',
              'Mar-21',
              'Abr-21',
              'Mai-21',
              'Jun-21',
              'Jul-21',
            ],
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter(val) {
                return `$ ${val} thousands`;
              },
            },
          },
        },
      },
      accumulated_evolution: {
        color: LINE_COLORS,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['2015 Precipitation', '2016 Precipitation'],
          textStyle: {
            color: colors.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#999',
              },
            },
            axisPointer: {
              label: {
                formatter(params) {
                  return `Adiantadas  ${params.value}${
                    params.seriesData.length
                      ? `：${params.seriesData[0].data}`
                      : ''
                  }`;
                },
              },
            },
            data: [
              'Nov-19',
              'Dez-19',
              'Jan-20',
              'Fev-20',
              'Mar-20',
              'Abr-20',
              'Mai-20',
              'Jun-20',
              'Jul-20',
              'Ago-20',
              'Set-20',
              'Out-20',
              'Nov-20',
              'Dez-20',
              'Jan-21',
              'Fev-21',
              'Mar-21',
              'Abr-21',
              'Mai-21',
              'Jun-21',
              'Jul-21',
            ],
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#999',
              },
            },
            axisPointer: {
              label: {
                formatter(params) {
                  return `Atrasadas  ${params.value}${
                    params.seriesData.length
                      ? `：${params.seriesData[0].data}`
                      : ''
                  }`;
                },
              },
            },
            data: [
              'Nov-19',
              'Dez-19',
              'Jan-20',
              'Fev-20',
              'Mar-20',
              'Abr-20',
              'Mai-20',
              'Jun-20',
              'Jul-20',
              'Ago-20',
              'Set-20',
              'Out-20',
              'Nov-20',
              'Dez-20',
              'Jan-21',
              'Fev-21',
              'Mar-21',
              'Abr-21',
              'Mai-21',
              'Jun-21',
              'Jul-21',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#999',
            },
            axisLine: {
              lineStyle: {
                color: colors.textColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: colors.gridLineColor,
              },
            },
            axisPointer: {
              label: {
                color: colors.dark,
              },
            },
          },
        ],
        series: [
          {
            name: 'Atrasadas',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [13, 21, 24, 28, 29, 36, 39, 44, 47, 53],
          },
          {
            name: 'Adiantadas',
            type: 'line',
            smooth: true,
            data: [
              15,
              20,
              23,
              27,
              31,
              35,
              39,
              44,
              49,
              52,
              59,
              68,
              75,
              81,
              94,
              100,
            ],
          },
        ],
      },
    },
  },
];

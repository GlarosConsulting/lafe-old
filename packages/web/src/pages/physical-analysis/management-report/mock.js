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
            measured_percentage: 0.9955367854765363,
            budget_value: 292608.86994262337,
            weight_percentage: 2.9167790879803235,
            accumulated_values: {
              measured: 291302.8937846012,
              payments: 310798.7,
              budget: -18189.830057376646,
              projection: 309836.91838482843,
            },
          },
          {
            item_id: 2,
            description: 'LAUDOS E ESTUDOS',
            measured_percentage: 1,
            budget_value: 55821.9801030016,
            weight_percentage: 0.5564437750845204,
            accumulated_values: {
              measured: 55821.9801030016,
              payments: 42044.18,
              budget: 13777.800103001602,
              projection: 42044.18,
            },
          },
          {
            item_id: 3,
            description: 'SERVIÇOS PRELIMINARES',
            measured_percentage: 0.9999999999999999,
            budget_value: 65086.79776301063,
            weight_percentage: 0.648797183270554,
            accumulated_values: {
              measured: 65086.797763010625,
              payments: 47246.99,
              budget: 17839.807763010635,
              projection: 45576.15,
            },
          },
          {
            item_id: 4,
            description: 'TERRAPLENAGEM',
            measured_percentage: 1,
            budget_value: 143143.6120829179,
            weight_percentage: 1.4268818794976796,
            accumulated_values: {
              measured: 143143.6120829179,
              payments: 131492.75,
              budget: 11650.862082917913,
              projection: 131492.75,
            },
          },
          {
            item_id: 5,
            description: 'FUNDAÇÃO',
            measured_percentage: 1,
            budget_value: 531854.8073806631,
            weight_percentage: 5.3016266400738665,
            accumulated_values: {
              measured: 531854.8073806631,
              payments: 517899.6000000001,
              budget: 13955.207380663021,
              projection: 514294.97000000003,
            },
          },
          {
            item_id: 6,
            description: 'SUPER-ESTRUTURA',
            measured_percentage: 1,
            budget_value: 1072268.5623638765,
            weight_percentage: 10.688570445642863,
            accumulated_values: {
              measured: 1072268.5623638765,
              payments: 1116165.97,
              budget: -43897.40763612348,
              projection: 1111773.31,
            },
          },
          {
            item_id: 7,
            description: 'ALVENARIA / FECHAMENTO',
            measured_percentage: 0.7943345886020291,
            budget_value: 257506.0779071779,
            weight_percentage: 2.5668679941751824,
            accumulated_values: {
              measured: 204545.9844569202,
              payments: 192384.598,
              budget: 65121.47990717791,
              projection: 233945.1431123843,
            },
          },
          {
            item_id: 8,
            description: 'IMPERMEABILIZAÇÃO / ISOLAMENTO',
            measured_percentage: 0.3147717407958634,
            budget_value: 86343.26754734549,
            weight_percentage: 0.8606855876220386,
            accumulated_values: {
              measured: 27178.42063188092,
              payments: 55634.31799999999,
              budget: 30708.949547345495,
              projection: 78120.23878224463,
            },
          },
          {
            item_id: 9,
            description: 'REVESTIMENTO DE PISO',
            measured_percentage: 0.17288905780647884,
            budget_value: 481167.6699878966,
            weight_percentage: 4.7963679225039,
            accumulated_values: {
              measured: 83188.62511114619,
              payments: 170616.03,
              budget: 310551.63998789655,
              projection: 481167.6699878966,
            },
          },
          {
            item_id: 10,
            description: 'REVESTIMENTO DE PAREDE',
            measured_percentage: 0.4050037376791716,
            budget_value: 383285.49366535165,
            weight_percentage: 3.8206603677753486,
            accumulated_values: {
              measured: 155232.05753267385,
              payments: 317145.846,
              budget: 66139.64766535163,
              projection: 539474.7938967397,
            },
          },
          {
            item_id: 11,
            description: 'REVESTIMENTO DE TETO',
            measured_percentage: 0.000378605648267191,
            budget_value: 116674.85327383559,
            weight_percentage: 1.1630364185098947,
            accumulated_values: {
              measured: 44.173758460219915,
              payments: 17203.7,
              budget: 99471.15327383559,
              projection: 116674.85327383559,
            },
          },
          {
            item_id: 12,
            description: 'REVESTIMENTO EXTERNO',
            measured_percentage: 0.8522810953202222,
            budget_value: 354221.42187646806,
            weight_percentage: 3.5309443491802956,
            accumulated_values: {
              measured: 301896.2214227627,
              payments: 320675.8495462489,
              budget: 33545.57233021915,
              projection: 294019.41675407824,
            },
          },
          {
            item_id: 13,
            description: 'ESQUADRIAS DE ALUMÍNIO',
            measured_percentage: 0.262700975998196,
            budget_value: 759260.1372367006,
            weight_percentage: 7.568444835808739,
            accumulated_values: {
              measured: 199458.37908860546,
              payments: 221243.28,
              budget: 538016.8572367006,
              projection: 753427.1507101903,
            },
          },
          {
            item_id: 14,
            description: 'ESQUADRIAS EM METALON',
            measured_percentage: 0.05151372635857786,
            budget_value: 67062.06147925614,
            weight_percentage: 0.6684869756610613,
            accumulated_values: {
              measured: 3454.616684084526,
              payments: null,
              budget: 67062.06147925614,
              projection: 67062.06147925614,
            },
          },
          {
            item_id: 15,
            description: 'ESQUADRIAS EM MADEIRA',
            measured_percentage: null,
            budget_value: 103816.23709922987,
            weight_percentage: 1.0348593650739895,
            accumulated_values: {
              measured: null,
              payments: 63294.7,
              budget: 40521.53709922987,
              projection: 103816.23709922987,
            },
          },
          {
            item_id: 16,
            description: 'INSTALAÇÕES',
            measured_percentage: 0.6272443071258098,
            budget_value: 1289294.9460309565,
            weight_percentage: 12.85192939489228,
            accumulated_values: {
              measured: 808702.9151039956,
              payments: 601042.4679999999,
              budget: 688252.4780309566,
              projection: 988542.9686819968,
            },
          },
          {
            item_id: 17,
            description: 'BANCADAS',
            measured_percentage: null,
            budget_value: 101697.49661469787,
            weight_percentage: 1.0137393698416095,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 101697.49661469787,
              projection: 101697.49661469787,
            },
          },
          {
            item_id: 18,
            description: 'LOUÇAS E METAIS',
            measured_percentage: null,
            budget_value: 99217.96814201065,
            weight_percentage: 0.9890229735184086,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 99217.96814201065,
              projection: 99217.96814201065,
            },
          },
          {
            item_id: 19,
            description: 'PINTURA',
            measured_percentage: 0.007758912475318634,
            budget_value: 222426.31961481075,
            weight_percentage: 2.2171865049618025,
            accumulated_values: {
              measured: 1725.786346098565,
              payments: 1777.99,
              budget: 220648.32961481076,
              projection: 222426.31961481075,
            },
          },
          {
            item_id: 20,
            description: 'DIVERSOS',
            measured_percentage: 0.026212993540981482,
            budget_value: 187354.28540745864,
            weight_percentage: 1.867582010849938,
            accumulated_values: {
              measured: 4911.1166732609145,
              payments: 26462.7,
              budget: 160891.58540745862,
              projection: 187354.28540745864,
            },
          },
        ],
        indirect_expenses: [
          {
            item_id: 1,
            description: 'LICENÇAS, TAXAS E EMOLUMENTOS',
            measured_percentage: 0.534002249998095,
            budget_value: 153772.67404914892,
            weight_percentage: 1.5328343260999608,
            accumulated_values: {
              measured: 82114.95393046919,
              payments: 75697.53,
              budget: 78075.14404914892,
              projection: 144555.16349693076,
            },
          },
          {
            item_id: 2,
            description: 'SEGURANÇA DO TRABALHO',
            measured_percentage: 0.9126449661537664,
            budget_value: 77424.66424960546,
            weight_percentage: 0.7717833079408334,
            accumulated_values: {
              measured: 70661.2300835479,
              payments: 61995.33000000001,
              budget: 15429.334249605447,
              projection: 68344.03005631019,
            },
          },
          {
            item_id: 3,
            description: 'CUSTOS INDIRETOS - PESSOAL',
            measured_percentage: 0.6621591524199869,
            budget_value: 1305389.3175404617,
            weight_percentage: 13.012361053243296,
            accumulated_values: {
              measured: 864375.4840806973,
              payments: 798037.1160000002,
              budget: 507352.2015404615,
              projection: 1222127.6686914254,
            },
          },
          {
            item_id: 4,
            description: 'CUSTOS INDIRETOS - EQUIPAMENTOS',
            measured_percentage: 0.7195830919285992,
            budget_value: 224148.78962368326,
            weight_percentage: 2.2343564031352163,
            accumulated_values: {
              measured: 161293.6790894631,
              payments: 88441.11,
              budget: 135707.67962368327,
              projection: 137101.13146231597,
            },
          },
          {
            item_id: 5,
            description: 'CUSTOS INDIRETOS - OUTROS',
            measured_percentage: 0.5907773364612293,
            budget_value: 292549.2795965435,
            weight_percentage: 2.916185080439386,
            accumulated_values: {
              measured: 172831.48418369744,
              payments: 131876.96999999997,
              budget: 160672.30959654355,
              projection: 237410.47435779395,
            },
          },
          {
            item_id: 6,
            description: 'ADMINISTRAÇÃO',
            measured_percentage: 0.5896646179992397,
            budget_value: 1308519.8469957265,
            weight_percentage: 13.043566747217007,
            accumulated_values: {
              measured: 771587.8557231587,
              payments: 747591.9299999999,
              budget: 560927.9169957265,
              projection: 1276174.787673978,
            },
          },
        ],
        total: {
          budget_value: 10031917.4375745,
          accumulated_values: {
            measured: 6072681.63737899,
            payments: 6056769.65554625,
            budget: 3975147.78202821,
            projection: 9507678.14,
          },
        },
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
            measured_percentage: 0.9266298970339261,
            budget_value: 393545.2486190614,
            weight_percentage: 2.583276194009904,
            accumulated_values: {
              measured: 364670.7932060717,
              payments: 368642.7194721289,
              budget: 24902.52914693253,
              projection: 397552.47735732386,
            },
          },
          {
            item_id: 2,
            description: 'LAUDOS E ESTUDOS',
            measured_percentage: 0.8519251323931136,
            budget_value: 71908.60637589663,
            weight_percentage: 0.4720163479221465,
            accumulated_values: {
              measured: 61260.74900699004,
              payments: 31185.879999999997,
              budget: 40722.72637589664,
              projection: 45218.963358312125,
            },
          },
          {
            item_id: 3,
            description: 'SERVIÇOS PRELIMINARES',
            measured_percentage: 0.33107735511406006,
            budget_value: 91213.5303445434,
            weight_percentage: 0.5987360852086937,
            accumulated_values: {
              measured: 30198.734377087487,
              payments: 36279.310000000005,
              budget: 54934.22034454339,
              projection: 88841.76596745591,
            },
          },
          {
            item_id: 4,
            description: 'TERRAPLENAGEM',
            measured_percentage: 0.8,
            budget_value: 164292.552304974,
            weight_percentage: 1.0784351754005899,
            accumulated_values: {
              measured: 131434.0418439792,
              payments: 163699.08000000002,
              budget: 593.4723049739841,
              projection: 200590.7202304974,
            },
          },
          {
            item_id: 5,
            description: 'FUNDAÇÃO',
            measured_percentage: 0.8586388977047646,
            budget_value: 462946.35689977056,
            weight_percentage: 3.0388330365548346,
            accumulated_values: {
              measured: 397503.74958485557,
              payments: 465205.14999999997,
              budget: -2258.7931002294063,
              projection: 515403.2560567883,
            },
          },
          {
            item_id: 6,
            description: 'SUPER-ESTRUTURA',
            measured_percentage: 0.1957572705525653,
            budget_value: 1450698.3951994341,
            weight_percentage: 9.522550817617866,
            accumulated_values: {
              measured: 283984.75823922793,
              payments: 414116.65800000005,
              budget: 1036581.7371994341,
              projection: 1422012.3262294324,
            },
          },
          {
            item_id: 7,
            description: 'ALVENARIA / FECHAMENTO',
            measured_percentage: null,
            budget_value: 295720.13770485925,
            weight_percentage: 1.9411409348807789,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 295720.13770485925,
              projection: 295720.13770485925,
            },
          },
          {
            item_id: 8,
            description: 'IMPERMEABILIZAÇÃO / ISOLAMENTO',
            measured_percentage: 0.08782972887834416,
            budget_value: 122394.20992574515,
            weight_percentage: 0.8034096457657347,
            accumulated_values: {
              measured: 10749.850274057335,
              payments: 5554.35,
              budget: 116839.85992574514,
              projection: 116027.46323807952,
            },
          },
          {
            item_id: 9,
            description: 'REVESTIMENTO DE PISO',
            measured_percentage: 0.004502826139937098,
            budget_value: 748430.5688325461,
            weight_percentage: 4.912784179503273,
            accumulated_values: {
              measured: 3370.0527292671804,
              payments: 5264.13,
              budget: 743166.4388325461,
              projection: 748430.5688325461,
            },
          },
          {
            item_id: 10,
            description: 'REVESTIMENTO DE PAREDE',
            measured_percentage: null,
            budget_value: 659946.5037445307,
            weight_percentage: 4.3319646176024005,
            accumulated_values: {
              measured: null,
              payments: 334.1,
              budget: 659612.4037445307,
              projection: 659946.5037445307,
            },
          },
          {
            item_id: 11,
            description: 'REVESTIMENTO DE TETO',
            measured_percentage: null,
            budget_value: 195915.0461504879,
            weight_percentage: 1.286008855512311,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 195915.0461504879,
              projection: 195915.0461504879,
            },
          },
          {
            item_id: 12,
            description: 'REVESTIMENTO EXTERNO',
            measured_percentage: null,
            budget_value: 543009.1890856603,
            weight_percentage: 3.564374658862713,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 543009.1890856603,
              projection: 543009.1890856603,
            },
          },
          {
            item_id: 13,
            description: 'ESQUADRIAS DE ALUMÍNIO',
            measured_percentage: null,
            budget_value: 964655.5733998069,
            weight_percentage: 6.332109933805449,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 964655.5733998069,
              projection: 964655.5733998069,
            },
          },
          {
            item_id: 14,
            description: 'ESQUADRIAS EM METALON',
            measured_percentage: null,
            budget_value: 173245.01005875174,
            weight_percentage: 1.1372001359085981,
            accumulated_values: {
              measured: null,
              payments: 540,
              budget: 172705.01005875174,
              projection: 173245.01005875174,
            },
          },
          {
            item_id: 15,
            description: 'ESQUADRIAS EM MADEIRA',
            measured_percentage: null,
            budget_value: 138847.4482219399,
            weight_percentage: 0.9114105909024747,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 138847.4482219399,
              projection: 138847.4482219399,
            },
          },
          {
            item_id: 16,
            description: 'INSTALAÇÕES',
            measured_percentage: 0.027796243059894518,
            budget_value: 1961228.3636328513,
            weight_percentage: 12.873728143250544,
            accumulated_values: {
              measured: 54514.780291497926,
              payments: 39896.72,
              budget: 1921331.6436328513,
              projection: 1941099.1572898857,
            },
          },
          {
            item_id: 17,
            description: 'BANCADAS',
            measured_percentage: null,
            budget_value: 198634.43899944748,
            weight_percentage: 1.3038592623804623,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 198634.43899944748,
              projection: 198634.43899944748,
            },
          },
          {
            item_id: 18,
            description: 'LOUÇAS E METAIS',
            measured_percentage: null,
            budget_value: 191195.3737790859,
            weight_percentage: 1.2550283842111043,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 191195.3737790859,
              projection: 191195.3737790859,
            },
          },
          {
            item_id: 19,
            description: 'PINTURA',
            measured_percentage: null,
            budget_value: 279380.6349673802,
            weight_percentage: 1.8338865630091807,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 279380.6349673802,
              projection: 279380.6349673802,
            },
          },
          {
            item_id: 20,
            description: 'DIVERSOS',
            measured_percentage: null,
            budget_value: 939454.2501736304,
            weight_percentage: 6.166685554839699,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 939454.2501736304,
              projection: 939454.2501736304,
            },
          },
        ],
        indirect_expenses: [
          {
            item_id: 1,
            description: 'LICENÇAS, TAXAS E EMOLUMENTOS',
            measured_percentage: 0.5639425581302638,
            budget_value: 136048.74156382825,
            weight_percentage: 0.8930395590852032,
            accumulated_values: {
              measured: 76723.67534790846,
              payments: 91943.15999999997,
              budget: 44105.58156382828,
              projection: 211804.4584932954,
            },
          },
          {
            item_id: 2,
            description: 'SEGURANÇA DO TRABALHO',
            measured_percentage: 0.11230052994666513,
            budget_value: 184083.63463811757,
            weight_percentage: 1.208346112006479,
            accumulated_values: {
              measured: 20672.689724368884,
              payments: 1838.9700000000003,
              budget: 182244.66463811757,
              projection: 184083.63463811757,
            },
          },
          {
            item_id: 3,
            description: 'CUSTOS INDIRETOS - PESSOAL',
            measured_percentage: 0.1952872049699047,
            budget_value: 2026184.4031044748,
            weight_percentage: 13.300107043803951,
            accumulated_values: {
              measured: 395687.8888358876,
              payments: 155800.17000000004,
              budget: 1870384.2331044748,
              projection: 1261449.8528678722,
            },
          },
          {
            item_id: 4,
            description: 'CUSTOS INDIRETOS - EQUIPAMENTOS',
            measured_percentage: 0.024034730076674494,
            budget_value: 267145.7410413807,
            weight_percentage: 1.7535753146173485,
            accumulated_values: {
              measured: 6420.775777062768,
              payments: 12453.949999999999,
              budget: 254691.79104138067,
              projection: 12453.949999999999,
            },
          },
          {
            item_id: 5,
            description: 'CUSTOS INDIRETOS - OUTROS',
            measured_percentage: 0.2019073497208153,
            budget_value: 393317.23770359956,
            weight_percentage: 2.5817795041833747,
            accumulated_values: {
              measured: 79413.64106424572,
              payments: 88737.73,
              budget: 304579.5077035996,
              projection: 406169.82365426107,
            },
          },
          {
            item_id: 6,
            description: 'ADMINISTRAÇÃO',
            measured_percentage: 0.1486393306107219,
            budget_value: 2180905.387591235,
            weight_percentage: 14.315713349154894,
            accumulated_values: {
              measured: 324168.31693687814,
              payments: 321544.68149999995,
              budget: 1859360.706091235,
              projection: 321544.68149999995,
            },
          },
        ],
        total: {
          budget_value: 15234346.584063,
          accumulated_values: {
            measured: 2240774.49723939,
            payments: 2203036.75897213,
            budget: 13031309.8250909,
            projection: 12452686.7059994,
          },
        },
      },
      summary_projections: {
        table: {
          months_labels: ['Set-20', 'Ago-20'],
          data: [
            {
              description: '% Financeiro Acumulado Previsto',
              percentages: [0.1372, 0.1135],
            },
            {
              description: '% Financeiro Acumulado Executado',
              percentages: [0.1471, 0.1089],
            },
            {
              description: 'Custo previsto até a data',
              values: [2022413.35, 1620551.46],
            },
            {
              description: 'Custo medido até a data',
              values: [2240774.5, 1642849.41],
            },
            {
              description: 'Custo Real até a data',
              values: [20433867.23, 1527516.06],
            },
            {
              description: 'Valor orçado',
              values: [15234346.58, 15092468.86],
            },
            {
              description: 'Custo projetado',
              values: [12452686.71, 12869344.11],
            },
            {
              description: 'Tendência financeira',
              percentages: [-0.1826, -0.1473],
            },
            {
              description: 'Custo projetado por m² de AEQ',
              values: [2716.54, 2807.43],
            },
            {
              description: 'Área Equivalente',
              values: [4584.03, 4584.03],
            },
          ],
        },
        chart: {
          series: [
            {
              name: 'Custo orçado',
              data: [39, 7, 8, 13, 55, 100, 21, 7, 100, 26, 39, 100],
            },
            {
              name: 'Custo projetado',
              data: [40, 4, 6, 10, 49, 97, 20, 8, 72, 12, 40, 32],
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
              0,
              15,
              14,
              14,
              38,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
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
          {
            name: 'Adiantadas',
            data: [
              13,
              26,
              18,
              14,
              23,
              27,
              28,
              27,
              27,
              31,
              32,
              29,
              22,
              27,
              30,
              39,
              40,
              41,
              33,
              31,
              37,
              47,
              71,
              88,
              84,
              63,
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
              'Ago-21',
              'Set-21',
              'Out-21',
              'Nov-21',
              'Dez-21',
              'Jan-22',
              'Fev-22',
              'Mar-22',
              'Abr-22',
              'Mai-22',
              'Jun-22',
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
              'Ago-21',
              'Set-21',
              'Out-21',
              'Nov-21',
              'Dez-21',
              'Jan-22',
              'Fev-22',
              'Mar-22',
              'Abr-22',
              'Mai-22',
              'Jun-22',
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
              'Ago-21',
              'Set-21',
              'Out-21',
              'Nov-21',
              'Dez-21',
              'Jan-22',
              'Fev-22',
              'Mar-22',
              'Abr-22',
              'Mai-22',
              'Jun-22',
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
            data: [6, 7, 8, 11, 13],
          },
          {
            name: 'Adiantadas',
            type: 'line',
            smooth: true,
            data: [
              5,
              8,
              9,
              10,
              13,
              16,
              19,
              22,
              24,
              28,
              31,
              34,
              36,
              39,
              42,
              46,
              50,
              54,
              57,
              60,
              64,
              69,
              76,
              85,
              93,
              100,
            ],
          },
        ],
      },
    },
  },
  {
    id: 'obra-35',
    label: 'Obra 35',
    data: {
      table: {
        direct_expenses: [
          {
            item_id: 1,
            description: 'PROJETOS',
            measured_percentage: 0.2202903580832729,
            budget_value: 172530.23217287386,
            weight_percentage: 1.9397490204311603,
            accumulated_values: {
              measured: 38006.746625552594,
              payments: 35184.4684359767,
              budget: 137345.76373689715,
              projection: 164713.27891959916,
            },
          },
          {
            item_id: 2,
            description: 'LAUDOS E ESTUDOS',
            measured_percentage: 0.5173945729074522,
            budget_value: 46424.9168,
            weight_percentage: 0.5219530846986056,
            accumulated_values: {
              measured: 24020,
              payments: 4942.79,
              budget: 41482.1268,
              projection: 18450.469022603495,
            },
          },
          {
            item_id: 3,
            description: 'SERVIÇOS PRELIMINARES',
            measured_percentage: 0.6540370586252225,
            budget_value: 42804.990376,
            weight_percentage: 0.481254427735395,
            accumulated_values: {
              measured: 27996.05,
              payments: 16913.559999999998,
              budget: 25891.430376000004,
              projection: 21661.61350505062,
            },
          },
          {
            item_id: 4,
            description: 'TERRAPLENAGEM',
            measured_percentage: 1,
            budget_value: 39800,
            weight_percentage: 0.4474694668920656,
            accumulated_values: {
              measured: 39800,
              payments: 25700,
              budget: 14100,
              projection: 25700,
            },
          },
          {
            item_id: 5,
            description: 'FUNDAÇÃO',
            measured_percentage: 0.1714988514062555,
            budget_value: 575969.4114269066,
            weight_percentage: 6.475596117520972,
            accumulated_values: {
              measured: 98778.09250485149,
              payments: 132275.03280038605,
              budget: 443694.3786265205,
              projection: 575969.4114269066,
            },
          },
          {
            item_id: 6,
            description: 'SUPER-ESTRUTURA',
            measured_percentage: null,
            budget_value: 1081787.2156079998,
            weight_percentage: 12.162481122079491,
            accumulated_values: {
              measured: null,
              payments: 524.37,
              budget: 1081262.8456079997,
              projection: 1081787.2156079998,
            },
          },
          {
            item_id: 7,
            description: 'ALVENARIA / FECHAMENTO',
            measured_percentage: null,
            budget_value: 219517.463016,
            weight_percentage: 2.46802417460473,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 219517.463016,
              projection: 219517.463016,
            },
          },
          {
            item_id: 8,
            description: 'IMPERMEABILIZAÇÃO / ISOLAMENTO',
            measured_percentage: null,
            budget_value: 83696.82001199998,
            weight_percentage: 0.9409992821942412,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 83696.82001199998,
              projection: 83696.82001199998,
            },
          },
          {
            item_id: 9,
            description: 'REVESTIMENTO DE PISO',
            measured_percentage: null,
            budget_value: 348751.5480720001,
            weight_percentage: 3.920996715918605,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 348751.5480720001,
              projection: 348751.5480720001,
            },
          },
          {
            item_id: 10,
            description: 'REVESTIMENTO DE PAREDE',
            measured_percentage: null,
            budget_value: 284406.68663999997,
            weight_percentage: 3.197570564104009,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 284406.68663999997,
              projection: 284406.68663999997,
            },
          },
          {
            item_id: 11,
            description: 'REVESTIMENTO DE TETO',
            measured_percentage: null,
            budget_value: 43778.790648,
            weight_percentage: 0.4922028168954751,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 43778.790648,
              projection: 43778.790648,
            },
          },
          {
            item_id: 12,
            description: 'REVESTIMENTO EXTERNO',
            measured_percentage: null,
            budget_value: 389543.19519600004,
            weight_percentage: 4.379615223260955,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 389543.19519600004,
              projection: 389543.19519600004,
            },
          },
          {
            item_id: 13,
            description: 'ESQUADRIAS DE ALUMÍNIO',
            measured_percentage: null,
            budget_value: 559791.438912,
            weight_percentage: 6.29370795830892,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 559791.438912,
              projection: 559791.438912,
            },
          },
          {
            item_id: 14,
            description: 'ESQUADRIAS EM METALON',
            measured_percentage: null,
            budget_value: 58260.55276800001,
            weight_percentage: 0.655020565023468,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 58260.55276800001,
              projection: 58260.55276800001,
            },
          },
          {
            item_id: 15,
            description: 'ESQUADRIAS EM MADEIRA',
            measured_percentage: null,
            budget_value: 71794.41534,
            weight_percentage: 0.8071811245732999,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 71794.41534,
              projection: 71794.41534,
            },
          },
          {
            item_id: 16,
            description: 'INSTALAÇÕES',
            measured_percentage: 0.017451534191295436,
            budget_value: 947106.1096560003,
            weight_percentage: 10.6482679893967,
            accumulated_values: {
              measured: 16528.454655446494,
              payments: 22609.130000000005,
              budget: 924496.9796560003,
              projection: 947106.1096560003,
            },
          },
          {
            item_id: 17,
            description: 'BANCADAS',
            measured_percentage: null,
            budget_value: 84135.085596,
            weight_percentage: 0.9459266808683525,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 84135.085596,
              projection: 84135.085596,
            },
          },
          {
            item_id: 18,
            description: 'LOUÇAS E METAIS',
            measured_percentage: null,
            budget_value: 112872.67909200002,
            weight_percentage: 1.269022048743127,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 112872.67909200002,
              projection: 112872.67909200002,
            },
          },
          {
            item_id: 19,
            description: 'PINTURA',
            measured_percentage: null,
            budget_value: 185118.21745200007,
            weight_percentage: 2.081275127518994,
            accumulated_values: {
              measured: null,
              payments: null,
              budget: 185118.21745200007,
              projection: 185118.21745200007,
            },
          },
          {
            item_id: 20,
            description: 'DIVERSOS',
            measured_percentage: null,
            budget_value: 170808.76116,
            weight_percentage: 1.9203946054462153,
            accumulated_values: {
              measured: null,
              payments: 140,
              budget: 170668.76116,
              projection: 170808.76116,
            },
          },
        ],
        indirect_expenses: [
          {
            item_id: 1,
            description: 'LICENÇAS, TAXAS E EMOLUMENTOS',
            measured_percentage: 0.11188099830755222,
            budget_value: 176266.98882533333,
            weight_percentage: 1.9817611939784323,
            accumulated_values: {
              measured: 19720.926678444444,
              payments: 10849.73,
              budget: 165417.25882533332,
              projection: 176266.98882533333,
            },
          },
          {
            item_id: 2,
            description: 'SEGURANÇA DO TRABALHO',
            measured_percentage: 0.031015375688258885,
            budget_value: 66453.88978266667,
            weight_percentage: 0.7471378551244708,
            accumulated_values: {
              measured: 2061.0923575555553,
              payments: 917.55,
              budget: 65536.33978266666,
              projection: 66453.88978266667,
            },
          },
          {
            item_id: 3,
            description: 'CUSTOS INDIRETOS - PESSOAL',
            measured_percentage: 0.08498438085758508,
            budget_value: 1491465.8194243333,
            weight_percentage: 16.76847776647096,
            accumulated_values: {
              measured: 126751.29923402777,
              payments: 66153.58,
              budget: 1425312.2394243332,
              projection: 1491465.8194243333,
            },
          },
          {
            item_id: 4,
            description: 'CUSTOS INDIRETOS - EQUIPAMENTOS',
            measured_percentage: 0.019164437908199394,
            budget_value: 166304.37722666666,
            weight_percentage: 1.8697520356641586,
            accumulated_values: {
              measured: 3187.1299112222223,
              payments: 4118.43,
              budget: 162185.94722666667,
              projection: 166304.37722666666,
            },
          },
          {
            item_id: 5,
            description: 'CUSTOS INDIRETOS - OUTROS',
            measured_percentage: 0.11579054589164747,
            budget_value: 314812.9527443334,
            weight_percentage: 3.539426737065928,
            accumulated_values: {
              measured: 36452.36365202779,
              payments: 33960.21,
              budget: 280852.7427443334,
              projection: 314812.9527443334,
            },
          },
          {
            item_id: 6,
            description: 'ADMINISTRAÇÃO',
            measured_percentage: 0.0445,
            budget_value: 1160259.0634086481,
            weight_percentage: 13.044736295481286,
            accumulated_values: {
              measured: 51631.52832168484,
              payments: 51571.755,
              budget: 1108687.3084086482,
              projection: 1160259.0634086481,
            },
          },
        ],
        total: {
          budget_value: 8894461.62135576,
          accumulated_values: {
            measured: 484933.683940813,
            payments: 405860.606236363,
            budget: 8488601.0151194,
            projection: 8823426.84345414,
          },
        },
      },
      summary_projections: {
        table: {
          months_labels: ['Set-20', 'Ago-20'],
          data: [
            {
              description: '% Financeiro Acumulado Previsto',
              percentages: [0.0881, null],
            },
            {
              description: '% Financeiro Acumulado Executado',
              percentages: [0.0545, null],
            },
            {
              description: 'Custo previsto até a data',
              values: [781840.74, null],
            },
            {
              description: 'Custo medido até a data',
              values: [484933.68, null],
            },
            {
              description: 'Custo Real até a data',
              values: [381849.05, null],
            },
            {
              description: 'Valor orçado',
              values: [8894461.62, null],
            },
            {
              description: 'Custo projetado',
              values: [8823426.84, null],
            },
            {
              description: 'Tendência financeira',
              percentages: [-0.008, -null],
            },
            {
              description: 'Custo projetado por m² de AEQ',
              values: [2865.21, null],
            },
            {
              description: 'Área Equivalente',
              values: [3079.5, null],
            },
          ],
        },
        chart: {
          series: [
            {
              name: 'Custo orçado',
              data: [17, 5, 8, 13, 55, 100, 21, 7, 100, 16, 32, 100],
            },
            {
              name: 'Custo projetado',
              data: [16, 6, 6, 10, 49, 97, 20, 8, 100, 16, 31, 99],
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
            data: [65],
          },
          {
            name: 'Adiantadas',
            data: [
              72,
              39,
              31,
              41,
              37,
              35,
              33,
              39,
              56,
              41,
              27,
              36,
              36,
              36,
              41,
              45,
              44,
              36,
              50,
              62,
              56,
              50,
              43,
              22,
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
              'Ago-21',
              'Set-21',
              'Out-21',
              'Nov-21',
              'Dez-21',
              'Jan-22',
              'Fev-22',
              'Mar-22',
              'Abr-22',
              'Mai-22',
              'Jun-22',
              'Jul-22',
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
              'Ago-21',
              'Set-21',
              'Out-21',
              'Nov-21',
              'Dez-21',
              'Jan-22',
              'Fev-22',
              'Mar-22',
              'Abr-22',
              'Mai-22',
              'Jun-22',
              'Jul-22',
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
              'Ago-21',
              'Set-21',
              'Out-21',
              'Nov-21',
              'Dez-21',
              'Jan-22',
              'Fev-22',
              'Mar-22',
              'Abr-22',
              'Mai-22',
              'Jun-22',
              'Jul-22',
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
            data: [5],
          },
          {
            name: 'Adiantadas',
            type: 'line',
            smooth: true,
            data: [
              5,
              12,
              15,
              20,
              23,
              27,
              30,
              34,
              40,
              44,
              47,
              50,
              54,
              58,
              63,
              67,
              71,
              76,
              82,
              88,
              93,
              97,
              100,
            ],
          },
        ],
      },
    },
  },
];

import config from './config';

const colors = config.chartColors;

const lineColors = [colors.blue, colors.green, colors.orange];

export const charts_data = [
  {
    id: 'obra-33',
    label: 'Obra 33',
    data: {
      direct_expenses: {
        columns: {
          series: [
            {
              name: 'Atrasadas',
              data: [44, 55, 57, 56, 51, 48, 30, 21, 0],
            },
            {
              name: 'Adiantadas',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
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
              categories: [],
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
        lines: {
          color: lineColors,
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
              data: [
                2.6,
                5.9,
                9.0,
                11.4,
                15.7,
                23.7,
                25.6,
                23.2,
                23.7,
                31.8,
                39.0,
                40.3,
              ],
            },
            {
              name: 'Adiantadas',
              type: 'line',
              smooth: true,
              data: [
                5.6,
                7.9,
                13,
                13.4,
                17.7,
                23.7,
                25.6,
                26.2,
                28.7,
                32.8,
                38,
                43.3,
              ],
            },
          ],
        },
      },
      total_expenses: {
        columns: {
          series: [
            {
              name: 'Atrasadas',
              data: [44, 55, 57, 56, 51, 48, 30, 21, 0],
            },
            {
              name: 'Adiantadas',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
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
              categories: [],
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
        lines: {
          color: lineColors,
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
              data: [
                2.6,
                5.9,
                9.0,
                11.4,
                15.7,
                23.7,
                25.6,
                23.2,
                23.7,
                31.8,
                39.0,
                40.3,
              ],
            },
            {
              name: 'Adiantadas',
              type: 'line',
              smooth: true,
              data: [
                5.6,
                7.9,
                13,
                13.4,
                17.7,
                23.7,
                25.6,
                26.2,
                28.7,
                32.8,
                38,
                43.3,
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: 'obra-34',
    label: 'Obra 34',
    data: {
      direct_expenses: {
        columns: {
          series: [
            {
              name: 'Atrasadas',
              data: [15, 52, 57, 56, 42, 48, 50, 19, 0],
            },
            {
              name: 'Adiantadas',
              data: [73, 80, 81, 98, 87, 92, 85, 81, 91],
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
              categories: [],
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
        lines: {
          color: lineColors,
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
              data: [
                2.6,
                5.9,
                9.0,
                9.4,
                12.7,
                19.7,
                20.6,
                22.2,
                23.7,
                25.8,
                36.0,
                40.3,
              ],
            },
            {
              name: 'Adiantadas',
              type: 'line',
              smooth: true,
              data: [
                5.6,
                7.9,
                8,
                12.4,
                17.7,
                18.7,
                18.6,
                23.2,
                27.7,
                30.8,
                33,
                38.3,
              ],
            },
          ],
        },
      },
      total_expenses: {
        columns: {
          series: [
            {
              name: 'Atrasadas',
              data: [50, 46, 55, 56, 44, 47, 33, 19, 0],
            },
            {
              name: 'Adiantadas',
              data: [66, 83, 85, 96, 87, 95, 99, 105, 90],
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
        lines: {
          color: lineColors,
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
              data: [
                2.6,
                5.9,
                9.0,
                9.4,
                11.7,
                18.7,
                19.6,
                22.2,
                23.7,
                23.8,
                29.0,
                36.3,
              ],
            },
            {
              name: 'Adiantadas',
              type: 'line',
              smooth: true,
              data: [
                5.6,
                7.9,
                13,
                13.4,
                15.7,
                16.7,
                24.6,
                26.2,
                28.7,
                38.8,
                40,
                43.3,
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: 'obra-35',
    label: 'Obra 35',
    data: {
      direct_expenses: {
        columns: {
          series: [
            {
              name: 'Atrasadas',
              data: [17, 24],
            },
            {
              name: 'Adiantadas',
              data: [
                17,
                33,
                41,
                29,
                42,
                34,
                34,
                24,
                40,
                54,
                37,
                21,
                31,
                35,
                44,
                50,
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
              categories: [],
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
        lines: {
          color: lineColors,
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
              data: [7, 5],
            },
            {
              name: 'Adiantadas',
              type: 'line',
              smooth: true,
              data: [
                7,
                8,
                9,
                12,
                16,
                19,
                23,
                25,
                29,
                35,
                39,
                41,
                44,
                47,
                52,
                57,
                62,
                65,
                71,
                78,
                85,
                91,
                96,
              ],
            },
          ],
        },
      },
      total_expenses: {
        columns: {
          series: [
            {
              name: 'Atrasadas',
              data: [50, 46, 55, 56, 44, 47, 33, 19, 0],
            },
            {
              name: 'Adiantadas',
              data: [66, 83, 85, 96, 87, 95, 99, 105, 90],
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
              categories: [],
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
        lines: {
          color: lineColors,
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
                '1',
                ' ',
                '3',
                ' ',
                '5',
                ' ',
                '7',
                ' ',
                '9',
                ' ',
                '11',
                ' ',
                '12',
                ' ',
                '14',
                ' ',
                '16',
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
              data: [
                2.6,
                5.9,
                9.0,
                9.4,
                11.7,
                18.7,
                19.6,
                22.2,
                23.7,
                23.8,
                29.0,
                36.3,
              ],
            },
            {
              name: 'Adiantadas',
              type: 'line',
              smooth: true,
              data: [
                5.6,
                7.9,
                13,
                13.4,
                15.7,
                16.7,
                24.6,
                26.2,
                28.7,
                38.8,
                40,
                43.3,
              ],
            },
          ],
        },
      },
    },
  },
];

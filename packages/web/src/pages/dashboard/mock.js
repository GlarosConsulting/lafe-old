import config from './config';

function getRevenueData() {
  const data = [];
  const seriesCount = 3;
  const accessories = ['SMX', 'Direct', 'Networks'];

  for (let i = 0; i < seriesCount; i += 1) {
    data.push({
      label: accessories[i],
      data: Math.floor(Math.random() * 100) + 1,
    });
  }

  return data;
}

function getMainChartData() {
  function generateRandomPicks(minPoint, maxPoint, picksAmount, xMax) {
    let x = 0;
    let y = 0;
    const result = [];
    const xStep = 1;
    const smoothness = 0.3;
    const pointsPerPick = Math.ceil(xMax / (picksAmount * 2 + 1) / 2);

    const maxValues = [];
    const minValues = [];

    for (let i = 0; i < picksAmount; i += 1) {
      const minResult = minPoint + Math.random();
      const maxResult = maxPoint - Math.random();

      minValues.push(minResult);
      maxValues.push(maxResult);
    }

    let localMax = maxValues.shift(0);
    let localMin = 0;
    let yStep = parseFloat(((localMax - localMin) / pointsPerPick).toFixed(2));

    for (let j = 0; j < Math.ceil(xMax); j += 1) {
      result.push([x, y]);

      if (y + yStep >= localMax || y + yStep <= localMin) {
        y += yStep * smoothness;
      } else if (
        result[result.length - 1][1] === localMax ||
        result[result.length - 1][1] === localMin
      ) {
        y += yStep * smoothness;
      } else {
        y += yStep;
      }

      if (y > localMax) {
        y = localMax;
      } else if (y < localMin) {
        y = localMin;
      }

      if (y === localMin) {
        localMax = maxValues.shift(0) || localMax;

        const share = (localMax - localMin) / localMax;
        const p =
          share > 0.5
            ? Math.round(pointsPerPick * 1.2)
            : Math.round(pointsPerPick * share);

        yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
        yStep *= Math.abs(yStep);
      }

      if (y === localMax) {
        localMin = minValues.shift(0) || localMin;

        const share = (localMax - localMin) / localMax;
        const p =
          share > 0.5
            ? Math.round(pointsPerPick * 1.5)
            : Math.round(pointsPerPick * 0.5);

        yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
        yStep *= -1;
      }

      x += xStep;
    }

    return result;
  }

  const d1 = generateRandomPicks(0.2, 3, 4, 90);
  const d2 = generateRandomPicks(0.4, 3.8, 4, 90);
  const d3 = generateRandomPicks(0.2, 4.2, 3, 90);

  return [d1, d2, d3];
}

const colors = config.chartColors;

const lineColors = [colors.blue, colors.green, colors.orange];

export const chartsData = {
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
};

export default {
  serverOverview: [
    {
      data: [
        {
          data: [4, 6, 5, 7, 5],
        },
      ],
      width: '100%',
      height: 30,
      options: {
        stroke: {
          width: 1,
        },
        markers: {
          size: 4,
          colors: '#57B955',
          shape: 'circle',
          strokeWidth: 0,
          hover: {
            size: 5,
            colors: '#fff',
          },
        },
        colors: ['#4E85BD'],
        grid: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
      },
    },
    {
      data: [
        {
          data: [2, 3, 1, 4, 4],
        },
      ],
      width: '100%',
      height: 30,
      options: {
        stroke: {
          width: 1,
        },
        markers: {
          size: 4,
          colors: '#57B955',
          shape: 'circle',
          strokeWidth: 0,
          hover: {
            size: 5,
            colors: '#fff',
          },
        },
        colors: ['#4E85BD'],
        grid: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
      },
    },
  ],
  tasks: [
    {
      id: 0,
      type: 'Meeting',
      title: 'Meeting with Andrew Piker',
      time: '9:00',
    },
    {
      id: 1,
      type: 'Call',
      title: 'Call with HT Company',
      time: '12:00',
    },
    {
      id: 2,
      type: 'Meeting',
      title: 'Meeting with Zoe Alison',
      time: '14:00',
    },
    {
      id: 3,
      type: 'Interview',
      title: 'Interview with HR',
      time: '15:00',
    },
  ],
  bigStat: [
    {
      product: 'Light Blue',
      total: '4,232',
      color: 'primary',
      registrations: {
        value: 830,
        profit: true,
      },
      bounce: {
        value: 4.5,
        profit: false,
      },
    },
    {
      product: 'Sing App',
      total: '754',
      color: 'success',
      registrations: {
        value: 30,
        profit: true,
      },
      bounce: {
        value: 2.5,
        profit: true,
      },
    },
    {
      product: 'RNS',
      total: '1,025',
      color: 'danger',
      registrations: {
        value: 230,
        profit: true,
      },
      bounce: {
        value: 21.5,
        profit: false,
      },
    },
  ],
  notifications: [
    {
      id: 0,
      icon: 'thumbs-up',
      color: 'primary',
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation',
    },
    {
      id: 1,
      icon: 'file',
      color: 'success',
      content: 'Report from LT Company',
    },
    {
      id: 2,
      icon: 'envelope',
      color: 'danger',
      content: '4 <span className="fw-semi-bold">Private</span> Mails',
    },
    {
      id: 3,
      icon: 'comment',
      color: 'success',
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post',
    },
    {
      id: 4,
      icon: 'cog',
      color: 'light',
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app',
    },
    {
      id: 5,
      icon: 'bell',
      color: 'info',
      content:
        '15 <span className="fw-semi-bold">Notifications</span> from Social Apps',
    },
  ],
  table: [
    {
      id: 0,
      name: 'Mark Otto',
      email: 'ottoto@wxample.com',
      product: 'ON the Road',
      price: '$25 224.2',
      date: '11 May 2017',
      city: 'Otsego',
      status: 'Sent',
    },
    {
      id: 1,
      name: 'Jacob Thornton',
      email: 'thornton@wxample.com',
      product: 'HP Core i7',
      price: '$1 254.2',
      date: '4 Jun 2017',
      city: 'Fivepointville',
      status: 'Sent',
    },
    {
      id: 2,
      name: 'Larry the Bird',
      email: 'bird@wxample.com',
      product: 'Air Pro',
      price: '$1 570.0',
      date: '27 Aug 2017',
      city: 'Leadville North',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Joseph May',
      email: 'josephmay@wxample.com',
      product: 'Version Control',
      price: '$5 224.5',
      date: '19 Feb 2018',
      city: 'Seaforth',
      status: 'Declined',
    },
    {
      id: 4,
      name: 'Peter Horadnia',
      email: 'horadnia@wxample.com',
      product: "Let's Dance",
      price: '$43 594.7',
      date: '1 Mar 2018',
      city: 'Hanoverton',
      status: 'Sent',
    },
  ],
  backendData: {
    visits: {
      count: 4.332,
      logins: 830,
      sign_out_pct: 0.5,
      rate_pct: 4.5,
    },
    performance: {
      sdk: {
        this_period_pct: 60,
        last_period_pct: 30,
      },
      integration: {
        this_period_pct: 40,
        last_period_pct: 55,
      },
    },
    server: {
      1: {
        pct: 60,
        temp: 37,
        frequency: 3.3,
      },
      2: {
        pct: 54,
        temp: 31,
        frequency: 3.3,
      },
    },
    revenue: getRevenueData(),
    mainChart: getMainChartData(),
  },
};

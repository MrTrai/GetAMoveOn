import {Injectable} from '@angular/core';

@Injectable()
export class HighChartUtilService {
  /**
   * newOption: buffer High Chart Option for Chart Operations
   */
  private newOption: any;

  constructor() {
  }

  getMaxThreshold(arr) {
    let threshold = 0;
    arr.forEach(function (value, index) {
      if (value > threshold) {
        threshold = value;
      }
    });

    return threshold;
  }

  chartDataFormat(xArr, yArr) {
    const data = [];
    xArr.forEach(function (x, index) {
      data.push({
        x: x,
        y: yArr[index] === '' ? null : yArr[index]
      });
    });

    return data;
  }

  limitLineChart(lineData, threshold) {
    const res = [];
    lineData.forEach(function (value, index) {
      if (value.x <= threshold) {
        res.push(value);
      }
    });

    return res;
  }


  /**
   * Synchronize zooming through the setExtremes event handler.
   */
  // syncExtremes(e) {
  //   const thisChart = this.chart;
  //
  //   if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
  //     Highcharts.each(Highcharts.charts, function (chart) {
  //       if (chart !== thisChart) {
  //         if (chart.xAxis[0].setExtremes) { // It is null while updating
  //           chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {trigger: 'syncExtremes'});
  //         }
  //       }
  //     });
  //   }
  // }

  getStackedAreaConfig() {
    this.newOption = {
      chart: {
        type: 'area',
        zoomType: 'x',
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickInterval: 5,
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      tooltip: {
        split: true,
        valueSuffix: ''
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
    };
    return this;
  }

  getStackedBarConfig() {
    this.newOption = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Stacked bar chart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
      }]
    };
    return this;
  }

  getPieChartConfig() {
    this.newOption = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent'
      },
      title: {
        text: 'Browser market shares at a specific website, 2014'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>',
        useHTML: true
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '14px'
            },
            format: '{point.name}: <br>' + '{point.y} %'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
          ['Firefox', 45.0],
          ['IE', 26.8],
          {
            name: 'Chrome',
            y: 12.8
          },
          ['Safari', 8.5],
          ['Opera', 6.2],
          ['Others', 0.7]
        ]
      }]
    };
    return this;
  }


  getBarChartConfig() {
    this.newOption = {
      colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
      chart: {
        type: 'column',
        borderWidth: 0,
        plotBackgroundColor: 0,
        borderColor: 'white',
        plotShadow: false,
        plotBorderColor: 'white',
        plotBorderWidth: 0,
        backgroundColor: 'white',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
        text: ''
      },
      xAxis: {
        labels: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      legend: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: []
    };
    return this;
  }


  getSolidGauge() {
    this.newOption = {
      chart: {
        type: 'solidgauge',
        // marginTop: -100,
        // marginBottom: 50,
        height: 250,
        // width: 230,
        backgroundColor: 'rgba(0,0,0,0)',
        // plotBackgroundImage: 'rgba(0,0,0,0)',
        plotBorderWidth: 0,
        plotShadow: false,
        // className: 'LifeCycleMasterChart',
        borderWidth: 0
        // borderColor: '#fff'
        // plotBorderWidth: 0,
        // reflow: true,
        // shadow: false
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Best Perform',
        style: {
          fontSize: '22px'
        }
      },

      tooltip: {
        enabled: false,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        shadow: false,
        style: {
          fontSize: '11px'
        },
        pointFormat: 'Number of {series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>'
        // positioner: function (labelWidth) {
        //   return {
        //     x: 110 - labelWidth / 2,
        //     y: 40
        //   };
        // }
      },

      legend: {
        enabled: false
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Stand
          outerRadius: '100%',
          innerRadius: '90%',
          // backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[4])
          //   .setOpacity(0.3)
          //   .get(),
          borderWidth: 0
        }]
      },

      yAxis: {
        min: 0,
        max: 19,
        lineWidth: 0,
        tickPositions: []
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: true,
            y: -40,
            borderWidth: 0,
            backgroundColor: 'none',
            useHTML: true,
            shadow: false,
            style: {
              fontSize: '10px'
            }
            // formatter: function () {
            //   return '<div style="width:100%;text-align:center;"><span style="font-size:3em;color:' +
            //     Highcharts.getOptions().colors[1] +
            //     ';font-weight:bold;">' +
            //     Highcharts.numberFormat(this.y, 0) +
            //     '</span></div>';
            // }
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true,
          showInLegend: true
        }
      },

      series: [{
        name: 'Applications',
        data: []
      }]
    };
    return this;
  }

  getSparkLineConfig() {
    this.newOption = {
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        type: 'bar',
        margin: [0, 0, 0, 0],
        width: 40,
        height: 80,
        style: {
          overflow: 'visible'
        },

        // small optimalization, saves 1-2 ms each sparkline
        skipClone: true
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
        categories: ['Apples']
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false
        },
        min: 0,
        title: {
          text: ''
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
          }
        },
        tickPositions: [0]
      },
      legend: {
        enabled: false
      },
      // tooltip: {
      //   backgroundColor: null,
      //   borderWidth: 0,
      //   shadow: false,
      //   useHTML: true,
      //   hideDelay: 0,
      //   shared: true,
      //   padding: 0,
      //   positioner: function (w, h, point) {
      //     return {x: point.plotX - w / 2, y: point.plotY - h};
      //   }
      // },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
          }
        },
        series: {
          stacking: 'normal',
          animation: false,
          lineWidth: 1,
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          marker: {
            radius: 1,
            states: {
              hover: {
                radius: 2
              }
            }
          },
          fillOpacity: 0.25
        },
        // column: {
        //   negativeColor: '#910000',
        //   borderColor: 'silver'
        // }
      },
      series: [
        {
          name: 'John',
          data: [5]
        }, {
          name: 'Jane',
          data: [2]
        }
      ]
    };
    return this;
  }

  getLineChartConfig() {
    this.newOption = {
      colors: ['#ff6384', '#00ADF9', '#803690', '#E64A19', '#46BFBD',
        '#FDB45C', '#949FB1', '#4D5360', '#004D40', '#EC407A',
        '#76FF03', '#546E7A', '#9C27B0', '#673AB7'],
      tooltip: {
        shadow: false,
        borderWidth: 0,
        backgroundColor: 'rgba(255,255,255, 1)',
        positioner: function (labelWidth, labelHeight, point) {
          return {x: 0, y: 0};
        }
      },
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
        className: 'LifeCycleMasterChart',
        zoomType: 'xy',
        borderWidth: 0,
        borderColor: '#fff',
        plotBorderWidth: 0,
        resetZoomButton: {
          position: {
            x: 0,
            y: 0
          },
          theme: {
            fill: 'white',
            stroke: 'silver',
            r: 0,
            states: {
              hover: {
                fill: '#41739D',
                style: {
                  color: 'white'
                }
              }
            }
          }
        },
        reflow: true,
        shadow: false
      },
      credits: false,
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      title: {
        text: '',
      },
      plotOptions: {
        area: {
          lineWidth: 1,
          marker: {
            enabled: false
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            shared: true,
            crosshairs: true,
            positioner: function (labelWidth, labelHeight, point) {
              return {x: 0, y: 0};
            }
          }
        },
        scatter: {
          marker: {
            enabled: true,
            radius: 1,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            },
            symbol: 'circle'
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            // formatter: function () {
            //   return '<b>' + this.series.name + '</b><br/>' +
            //     Highcharts.dateFormat('%e - %b - %Y', new Date(this.x)) +
            //     ' date, ' + this.y + ' Order';
            // },
            shared: true,
            crosshairs: true
          },
          series: {
            pointInterval: 5
          }
        },
        line: {
          lineWidth: 1,
          marker: {
            enabled: false
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            shared: true,
            crosshairs: true,
            positioner: function (labelWidth, labelHeight, point) {
              return {x: 0, y: 0};
            }
          }
        },
        bar: {
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} Orders, {point.y}%'
          }
        },
        series: {
          turboThreshold: 0,
          events: {}
        }
      },
      xAxis: {
        title: {
          text: ''
        },
        crosshair: {},
        labels: {
          step: 5,
          style: {}
        },
        events: {},
        tickPixelInterval: 100
      },
      yAxis: {
        title: {
          style: {
            fontSize: '15px'
          }
        },
        labels: {
          style: {}
        }
      },
      series: [{
        data: [
          {
            x: 5,
            y: 12
          },
          {
            x: 11,
            y: 10
          },
          {
            x: 20,
            y: 28
          },

          {
            x: 30,
            y: 13
          },
          {
            x: 32,
            y: 11
          },
          {
            x: 40,
            y: 40
          },
          {
            x: 43,
            y: 31
          },
          {
            x: 50,
            y: 11
          }
        ]
      }]
    };

    return this;
  }


  getHighStockChart() {
    this.newOption = {

      chart: {
        backgroundColor: 'transparent',
        zoomType: 'xy',
        borderWidth: 0,
        borderColor: '#fff',
        plotBorderWidth: 0,
        resetZoomButton: {
          position: {
            x: 0,
            y: 0
          },
          theme: {
            fill: 'white',
            stroke: 'silver',
            r: 0,
            states: {
              hover: {
                fill: '#41739D',
                style: {
                  color: 'white'
                }
              }
            }
          }
        },
        reflow: true,
        shadow: false
      },
      credits: {
        enabled: false
      },
      rangeSelector: {
        buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
        }, {
          type: 'day',
          count: 1,
          text: '1d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'year',
          count: 1,
          text: '1y'
        }, {
          type: 'all',
          text: 'All'
        }],
        inputEnabled: false, // it supports only days
        selected: 4 // all
      },
      title: {
        text: 'AAPL Stock Price'
      },

      // newOption.plotOptions.series.events.click = callback;
      plotOptions: {
        area: {},
        scatter: {
          marker: {
            radius: 3,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            },
            symbol: 'circle'
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<small>{point.key}</small><table>',
            pointFormat: '<br><tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            valueDecimals: 2
          },
          series: {
            pointInterval: 5
          }
        },
        line: {
          lineWidth: 1,
          marker: {
            enabled: false
          },
          tooltip: {
            shared: true,
            crosshairs: true
          }
        },
        bar: {
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} Orders, {point.y}%'
          }
        },
        column: {
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} Orders, {point.y}%'
          }
        },
        series: {
          turboThreshold: 0,
          events: {}
        }
      },
      xAxis: {
        plotBands: [],
        title: {
          text: ''
        },
        labels: {
          step: 5,
          style: {}
        },
        tickPixelInterval: 100
      },
      yAxis: {
        title: {
          style: {
            fontSize: '15px'
          }
        },
        labels: {
          style: {}
        }
      },
      series: [{}]
    };

    return this;
  }

  /**
   *
   * @param timeStamp
   * @param yArray
   * @returns {Array}
   */
  generateLineChartDataUntilEndToday(timeArray, dataArray) {
    let i;
    const result = [];
    for (i = 0; i < dataArray.length; i++) {
      result.push({
        x: moment(new Date(timeArray[i])).format('YYYY-MM-DD HH:mm:ss'),
        y: typeof dataArray[i] === 'number' ? Math.round(dataArray[i] * 100) / 100 : null
      });
    }
    return result;
  }

  /**
   *
   * @param timeStamp
   * @param yArray
   * @returns {Array}
   */
  generateLineChartDataWithDate(timeArray, dataArray) {
    let i;
    const result = [];
    for (i = 0; i < dataArray.length; i++) {
      result.push({
        x: new Date(timeArray[i]).getTime(),
        y: typeof dataArray[i] === 'number' ? Math.round(dataArray[i] * 100) / 100 : null
      });
    }
    return result;
  }

  /**
   *
   * @param timeArray
   * @param dataArray
   * @param offsetTime:
   * @param offSetTimeUnit;
   * @returns {Array}
   */
  generateDataWithTime(timeArray, dataArray, offsetTime, offSetTimeUnit) {
    let i;
    const result = [];
    for (i = 0; i < dataArray.length; i++) {
      result.push({
        x: moment(timeArray[i]).add(offsetTime, offSetTimeUnit).valueOf(),
        y: typeof dataArray[i] === 'number' ? dataArray[i] : null
      });
    }
    return result;
  }

  /**
   *
   * @param timeStamp
   * @param yArray
   * @returns {Array}
   */
  generateLineChartDataUntilNow(timeArray, dataArray, offsetTime, timeUnit) {
    let i;
    const result = [];
    const now = new Date().getTime();
    for (i = 0; i < dataArray.length; i++) {
      if (new Date(timeArray[i]).getTime() <= now) {
        // console.log(
        //   moment(timeArray[i]).format("YYYY-MM-DD HH:mm:00")
        // );
        result.push({
          // x: moment(timeArray[i]).format("YYYY-MM-DD HH:mm:00"),
          x: moment(timeArray[i]).add(offsetTime, timeUnit).valueOf(),
          y: typeof dataArray[i] === 'number' ? Math.round(dataArray[i] * 100) / 100 : null
        });
      }
    }
    return result;
  }

  /**
   * Note: must clone JSON or else all chart will share the same JSON option
   * Description: Clone JSON
   */
  getNewOption() {
    return JSON.parse(JSON.stringify(this.newOption));
  }

  setNewOption(option) {
    this.newOption = option;
    return this;
  }

  setNewSeries(series) {
    this.newOption.series = series;
    return this;
  }

  setChartOptionTitle(name) {
    this.newOption.title.text = name;
    return this;
  }

  addDataToSeries(data) {
    this.newOption.series.push(data);
    return this;
  }

  setXAxisDateTime() {
    this.newOption.xAxis.type = 'datetime';
    this.newOption.xAxis.labels = {
      // formatter: function () {
      //   return Highcharts.dateFormat('%a %d %b %H:%M:%S', this.value);
      // }
    };
    return this;
  }


  clearSeriesData() {
    this.newOption.series = [];
    return this;
  }


  setMaxXAxis(maxVal) {
    if (!this.newOption['xAxis']) {
      this.newOption['xAxis'] = {};
      this.newOption['xAxis']['max'] = 0;
    }
    this.newOption.xAxis.max = maxVal;
    return this;
  }

  setMinXAxis(minVal) {
    if (!this.newOption['xAxis']) {
      this.newOption['xAxis'] = {};
      this.newOption['xAxis']['min'] = 0;
    }
    this.newOption.xAxis.min = minVal;
    return this;
  }

  setMaxYAxis(maxVal) {
    if (!this.newOption['yAxis']) {
      this.newOption['yAxis'] = {};
      this.newOption['yAxis']['max'] = 0;
    }
    this.newOption.yAxis.max = maxVal;
    return this;
  }


  setMinYAxis(minVal) {
    if (!this.newOption['yAxis']) {
      this.newOption['yAxis'] = {};
      this.newOption['yAxis']['min'] = 0;
    }
    this.newOption.yAxis.min = minVal;
    return this;
  }

  setLegendLocation(location) {
    this.newOption.legend.align = location;
    return this;
  }


  setLegendOption(config) {
    this.newOption.legend = config;
    return this;
  }


  setChartHeight(height) {
    this.newOption.chart.height = height;
    return this;
  }


  setXAxisTitle(name) {
    if (!this.newOption['xAxis']) {
      this.newOption['xAxis'] = {};
    }

    if (!this.newOption['xAxis']['title']) {
      this.newOption['xAxis']['title'] = {};
    }

    if (!this.newOption['xAxis']['title']['text']) {
      this.newOption['xAxis']['title']['text'] = {};
    }

    this.newOption.xAxis.title.text = name;

    return this;
  }


  setXAXisFontSize(size) {
    this.newOption.xAxis.labels.style.fontSize = size;
    return this;
  }


  setYAxisTitle(name) {
    this.newOption.yAxis.title.text = name;
    return this;
  }


  setYAXisFontSize(size) {
    this.newOption.yAxis.title.style.fontSize = size;
    return this;
  }


  setEventClick(callback) {
    this.newOption.plotOptions.series.events.click = callback;
    return this;
  }


  setStackBar() {
    this.newOption.plotOptions.series.stacking = 'normal';
    return this;
  }


  addDataLabel(format) {
    this.newOption.plotOptions.series = {
      dataLabels: {
        enabled: true,
        color: '#000',
        style: {fontWeight: 'bolder'},
        formatter: format,
        inside: true
        // rotation: 270
      },
      pointPadding: 0.1,
      groupPadding: 0
    };

    return this;
  }


  drawHorizontalLine(yVal, label) {
    this.newOption.yAxis.plotLines = [{
      color: '#FF0000', // Red
      dashStyle: 'Dot',
      width: 2,
      value: yVal,
      label: {
        text: label, // Content of the label.
        align: 'left', // Positioning of the label.
        rotation: 360
      },
      zIndex: 999
    }];

    return this;
  }


  drawVerticalLine(xVal, label) {
    this.newOption.xAxis.plotLines = [{
      color: '#FF0000', // Red
      dashStyle: 'Dot',
      width: 2,
      value: xVal, // Position, you'll have to translate this to the values on your x axis
      label: {
        text: label, // Content of the label.
        align: 'left' // Positioning of the label.
      },
      zIndex: 999
    }];
    return this;
  }


  setScatterChartMarkerRadius(size) {
    this.newOption.plotOptions.scatter.marker.radius = size;
    return this;
  }


  setXAxisCategories(categories) {
    this.newOption.xAxis.categories = categories;
    return this;
  }


  setYAxisCategories(categories) {
    this.newOption.yAxis.categories = categories;
    return this;
  }


  setXAxisPixelInterval(interval) {
    this.newOption.xAxis.tickPixelInterval = interval;
    return this;
  }

  setXAxisTickInterval(interval) {
    this.newOption.xAxis.tickInterval = interval;
    return this;
  }


  setToolTipFormatter(formatter) {
    this.newOption.tooltip.formatter = formatter;
    return this;
  }


  hideLegendSymbol() {
    this.newOption.legend.symbolHeight = 0;
    this.newOption.legend.symbolWidth = 0;
    this.newOption.legend.symbolRadius = 0;
    return this;
  }


  setCrossHair(boolean) {
    this.newOption.tooltip.crosshairs = true;
    this.newOption.xAxis.crosshair.zIndex = 10;
    this.newOption.xAxis.crosshair.color = '#000000';
    return this;
  }


  setSharedToolTip() {
    this.newOption.tooltip.shared = true;
    this.newOption.tooltip.crosshairs = true;
    return this;
  }


  setChartWidth(width) {
    this.newOption.chart.width = width;
    return this;
  }


  setChartType(type) {
    this.newOption.chart.type = type;
    return this;
  }


  setAreaOpacity(value) {
    this.newOption.plotOptions.area.fillOpacity = value;
    return this;
  }


  disableAnimation() {
    if (!this.newOption['plotOptions']) {
      this.initFieldsEmpty(['plotOptions']);
    }
    if (!this.newOption['plotOptions']['series']) {
      this.initFieldsEmpty(['plotOptions', 'series']);
    }
    if (!this.newOption['plotOptions']['series']['animation']) {
      this.initFieldsEmpty(['plotOptions', 'series', 'animation']);
    }
    this.newOption.plotOptions.series.animation = false;
    return this;
  }


  setValueDecimal(num) {
    this.newOption.tooltip['valueDecimals'] = num;
    return this;
  }


  setEnableLineChartMarker(boolean) {
    this.newOption.plotOptions.line.marker.enabled = boolean;
    return this;
  }


  setSolidGaugeToolTipDefault() {
    this.newOption.plotOptions.solidgauge.dataLabels = {};
    this.newOption.tooltip = {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '16px'
      },
      pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
      positioner: function (labelWidth) {
        return {
          x: 200 - labelWidth / 2,
          y: 180
        };
      }
    };

    return this;
  }

  getSeries(option: {}): JSON[] {
    return option['series'];
  }

  initFieldsEmpty(fieldArr: any[]): void {
    let obj = this.newOption;
    fieldArr.forEach((val, index) => {
      if (!obj[val]) {
        obj[val] = {};
      }
      obj = obj[val];
    });
  }

  limitDataToNow(dataArr: { x: number, y: number }[]): { x: any, y: any }[] {
    dataArr.forEach((val, indx) => {
      if (val.x > moment().valueOf()) {
        val.y = null;
      }
    });

    return dataArr;
  }

  getMax(arr: number[]) {
    let result = arr[0];
    arr.forEach((val, indx) => {
      if (val > result) {
        result = val;
      }
    });
    return result;
  }

  formatData(timestamp: any[], data: any[], offset?: number, unit?: string): { x: any, y: any }[] {
    let i;
    const result = [];
    if (offset && unit) {
      for (i = 0; i < data.length; i++) {
        result.push({
          x: moment(timestamp[i]).valueOf(),
          y: typeof data[i] === 'number' ? data[i] : null
        });
      }
    } else {
      for (i = 0; i < data.length; i++) {
        result.push({
          x: moment(timestamp[i]).valueOf(),
          y: typeof data[i] === 'number' ? data[i] : null
        });
      }
    }
    return result;
  }
}

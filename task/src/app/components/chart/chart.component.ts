import { Component, ElementRef, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private chart: echarts.ECharts | undefined;

  title: string = "إحصائيات إستخدام القسيمة";

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.renderChart('monthly'); 
  }

  renderChart(view: 'monthly' | 'yearly'): void {
    const chartDom = this.el.nativeElement.querySelector('#chart-container');
    this.chart = echarts.init(chartDom);

    const options = this.getChartOptions(view);

    this.chart.setOption(options);
    window.addEventListener('resize', () => {
      this.chart?.resize();
    });
  }

  getChartOptions(view: 'monthly' | 'yearly') {
    const monthlyData = [120, 200, 150, 80, 70, 110, 130, 250, 180, 210, 160, 190];
    const yearlyData = [1500, 2000, 1700, 1800, 1900, 1600, 1400, 1300, 1200, 1100, 1500, 1600];

    return {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c} استخدام',
        backgroundColor: '#1D1D2A',
        borderColor: '#A58FFF',
        borderWidth: 1,
        textStyle: {
          color: '#FFF',
          fontFamily: 'Arial',
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: view === 'monthly'
          ? ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'أبريل', 'مارس', 'فبراير', 'يناير']
          : ['2020', '2021', '2022', '2023'],
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
          interval: 0,
        },
        axisLabel: {
          fontFamily: "'Neo Sans Arabic', 'sans-serif'",
          fontWeight: '500',
          fontSize: 12,
          color: '#9291A5',
        },
      },
      yAxis: {
        type: 'value',
        min: -30,
        axisLine: {
          lineStyle: {
            color: '#E0E0E0'
          }
        },
        axisLabel: {
          fontFamily: "'Neo Sans Arabic', 'sans-serif'",
          fontWeight: '500',
          fontSize: 12,
          color: '#9291A5',
          show: false
        },
      },
      series: [{
        data: view === 'monthly' ? monthlyData : yearlyData,
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#8A74F9'
        },
        areaStyle: {
          color: 'rgba(138, 116, 249, 0.3)',
        },
        lineStyle: {
          width: 3, 
        }
      }],
      grid: {
        right: "8px",
        left: "8px",
        bottom: "0px", 
        containLabel: true
      }
    };
  }

  handleViewChange(event: Event): void {
    const target = event.target as HTMLSelectElement; 
    const selectedValue = target.value;
  
    if (selectedValue === 'monthly') {
      this.renderChart('monthly');
    } else if (selectedValue === 'yearly') {
      this.renderChart('yearly');
    }
  }
  
}

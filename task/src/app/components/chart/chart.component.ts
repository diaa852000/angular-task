import { Component, ElementRef, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const chartDom = this.el.nativeElement.querySelector('#chart-container');
    const chart = echarts.init(chartDom);

    const options = {
      title: {
        text: 'إحصائيات استخدام القسيمة',
        left: 'right',
        textStyle: {
          fontSize: 14,
          fontWeight: '400',
          fontFamily: "'Neo Sans Arabic', 'sans-serif'",
          color: "#1C1C28"
        },
        // todo: make it as a component
        subtext: "05 يوليو , 2023 - 05 أغسطس , 2023",
        subtextStyle: {
          fontSize: 14,
          fontFamily: "'Neo Sans Arabic', 'sans-serif'",
          color: "#99A1B7",
          fontWeight: "400"
        }
      },
      // todo: change the style of it
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
        data: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'أبريل', 'مارس', 'فبراير', 'يناير'], 
        axisLine: {
          lineStyle: {
            color: '#9291A5',
          },
        },
        axisLabel: {
          fontFamily: "'Neo Sans Arabic', 'sans-serif'",
          fontWeight: '500',
          fontSize: 12,
          color: '#9291A5',
          interval: 0
        },
      },
      yAxis: {
        type: 'value',
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
        data: [120, 200, 150, 80, 70, 110, 130, 250, 180, 210, 160, 190],
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#8A74F9'
        },
        areaStyle: {
          color: 'rgba(138, 116, 249, 0.3)',
        },
        
      }],
      grid: {
        right: "8px",
        left: "8px",
        bottom: "8px",
        containLabel: true
      }
    };

    chart.setOption(options);
    window.addEventListener('resize', () => {
      chart.resize();
    });
  }
}

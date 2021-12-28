import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { Quote } from 'src/app/core/models/quote.model';
import { BookService } from 'src/app/core/services/book.service';
import { QuoteService } from 'src/app/core/services/quote.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  searchWord: string = '';
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  chosenQuote: Quote;

  constructor(
    private quoteService: QuoteService,
    private bookService: BookService
  ) {
    this.chartOptions = {
      series: [25, 15, 44],
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: ['Read', 'Unread', 'In progress'],
      theme: {
        monochrome: {
          enabled: true,
          color: '#56367f',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      title: {
        text: 'Reading statistic',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {
    this.chosenQuote = this.quoteService.getQuotes();
  }
  onEnter() {
    console.log('On enter mathod');
    this.bookService.booksFiltered.emit();
  }
  onChange(deviceValue) {}
}

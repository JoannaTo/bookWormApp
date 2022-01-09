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
  quotes: Quote[];
  chosenQuote: Quote;

  ngOnInit(): void {
    this.bookService.getBooksAsObservable().subscribe((books) => {
      if (books.length == 0) {
        return;
      }
      const readCount = books.filter(
        (book) => book.status.toLowerCase() == 'read'
      ).length;
      const unreadCount = books.filter(
        (book) => book.status.toLowerCase() == 'unread'
      ).length;
      const inProgressCount = books.filter(
        (book) => book.status.toLowerCase() == 'in progress'
      ).length;

      this.chartOptions.series = [readCount, unreadCount, inProgressCount];
    });
    this.quoteService.getAllQuotes().subscribe((res) => {
      this.quotes = res;

      this.pickAQuote();
    });
  }

  constructor(
    private bookService: BookService,
    private quoteService: QuoteService
  ) {
    this.chartOptions = {
      series: [0, 0, 0],
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

  pickAQuote() {
    let num = Math.floor(Math.random() * this.quotes.length);
    this.chosenQuote = this.quotes[num];
  }
}

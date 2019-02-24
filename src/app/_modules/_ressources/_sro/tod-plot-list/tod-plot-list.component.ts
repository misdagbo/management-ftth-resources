import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Response, Request, GlobalEnum } from 'helper';
import { TodPlot, TodPlotService } from 'web';
import { environment } from '../../../../../environments/environment';

declare var $: any;

@Component({
  selector: 'ressources-tod-plot-list',
  templateUrl: './tod-plot-list.component.html',
  styleUrls: ['./tod-plot-list.component.scss']
})
export class TodPlotListComponent implements OnInit {

  @Input() data;
  @Input() todPlotChecked = [];

  private _todPlotList: any;

  _screenHeight: number;
  _screenWidth: number;

  constructor(private _todPlotService: TodPlotService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this._screenHeight = window.innerHeight - 113;
    this._screenWidth = window.innerWidth;
  }

  ngOnInit() {

    this.onResize();

    $('.mCustomScrollbar').mCustomScrollbar({
      scrollButtons: { enable: true },
      theme: 'light-thick'
    });

    this._todPlotList = {
      isChecked: true,
      isTakeAll: false,
      maxSize: 1,
      szSearch: GlobalEnum._LG,
      szTable: GlobalEnum._SM,
      index: GlobalEnum._INDEX,
      size: 12,
      columns: [
        {
          name: 'numero',
          text: 'Fibre',
          type: 'text'
        },
        {
          name: 'plot',
          text: 'Plot',
          type: 'text'
        }
      ],
      doLoad: (searchParam?: any) => {
        const _request = new Request<TodPlot>();
        _request.data = new TodPlot();
        _request.data.status = 1;
        _request.data.tiroirDistribution = this.data.id;
        _request.searchParam = searchParam;
        _request.isAnd = true;
        _request.index = this._todPlotList.index;
        _request.size = this._todPlotList.size;
        _request.takeAll = this._todPlotList.isTakeAll;
        _request.orderBy = GlobalEnum._ORDER_BY_ASC;

        this._todPlotService.get(_request, environment.origin,
          (response: Response<TodPlot>) => {
            if (!response.hasError) {
              this._todPlotList.count = response.count;
              this._todPlotList.dataSource = response.items;
            } else {

            }
          });
      }
    };

    if (this.data && this.data.id) {
      this._todPlotList.doLoad();
    }

  }

}

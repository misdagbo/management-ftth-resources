import { Component, OnInit } from '@angular/core';
import { RessourcesModalService } from '../../ressources-modal.service';
import { UtilityService, GlobalEnum, SharedService } from 'helper';
import { environment } from '../../../../../environments/environment';

declare var $: any;

const REQUEST_MAPPING_NRO = 'paramNro';
const REQUEST_MAPPING_OLT = 'sro';

@Component({
  selector: 'ressources-sro-aside',
  templateUrl: './sro-aside.component.html',
  styleUrls: ['./sro-aside.component.scss']
})
export class SroAsideComponent implements OnInit {

  _node: string;
  _nro: any;

  constructor(private _ressourcesModalService: RessourcesModalService, private _utilityService: UtilityService,
    private _sharedService: SharedService) { }

  ngOnInitTree() {
    const _utilityService = this._utilityService;
    const _sharedService = this._sharedService;

    $('#tree-demo').jstree({
      'plugins': ['wholerow', 'sort', 'search'],
      'core': {
        'themes': {
          'responsive': true,
          'icons': true,
          'stripes': true
        },
        'data': {
          'url': function (node) {
            let n = (node.id && node.id === '#') ? 'nro' : node.data.__child;
            switch (n) {
              case 'nro': return _utilityService.getUrl(environment.origin, REQUEST_MAPPING_NRO, 'getByCriteria');
              case 'sro': return _utilityService.getUrl(environment.origin, REQUEST_MAPPING_OLT, 'getByCriteria');
            }
          },
          'type': 'POST',
          'dataType': 'json',
          'contentType': 'application/json',
          beforeSend: function (xhr, settings) {
            let s = _utilityService.getService(settings.url, environment.origin);
            switch (s) {
              case REQUEST_MAPPING_NRO: return this._node = 'nro';
              case REQUEST_MAPPING_OLT: return this._node = 'sro';
            }
          },
          'data': function (node) {
            let n = (node.id && node.id === '#') ? 'nro' : node.data.__child;
            switch (n) {
              case 'nro': return JSON.stringify({
                'takeAll': true,
                'orderBy': GlobalEnum._ORDER_BY_ASC,
                'data': {
                  'libelle': $('#nro').val()
                }
              });
              case 'sro': return JSON.stringify({
                'takeAll': true,
                'orderBy': GlobalEnum._ORDER_BY_ASC,
                'data': {
                  'nro': node.data.item.id
                }
              });
            }
          },
          'success': function (response) {
            return response;
          },
          'dataFilter': function (data, type) {
            if (type === 'json') {
              let nodes = [], response = JSON.parse(data);
              if (!response.hasError && response.count > 0) {
                for (let item of response.items) {
                  let node: any = {};
                  switch (this._node) {
                    case 'nro':
                      node['text'] = item['libelle'];
                      node['icon'] = false;
                      node['data'] = {
                        'item': item,
                        '__child': 'sro',
                        '__name': 'nro'
                      };
                      break;
                    case 'sro':
                      node['text'] = item['nom'];
                      node['icon'] = '../../../../../../assets/app/media/img/icons/iconfinder_sitemap_54462.png';
                      node['data'] = {
                        'item': item,
                        '__child': 'baie',
                        '__name': 'sro'
                      };
                      break;
                  }
                  node['children'] = (this._node === 'sro') ? false : true;
                  node['state'] = {
                    opened: false,
                    selected: false,
                    disabled: (this._node === 'sro') ? false : true
                  };
                  nodes.push(node);
                }
                data = JSON.stringify(nodes);
              }
            }
            return data;
          },
          'error': function (node, XMLHttpRequest, textStatus, errorThrown) {

          }
        }
      }
    });

    $('#tree-demo').on('select_node.jstree', function (e, data) {
      const __WHO = data.node.data.__name;
      if (__WHO) {
        switch (__WHO) {
          case 'sro':
            _sharedService.set({ __TAG: 'sro-chassis', __DATA: data.node.data.item });
            break;
        }
      }
    });

  }

  ngOnInit() {
    this.ngOnInitTree();
  }

  doCreate() {
    this._ressourcesModalService.nro().result.then(
      (result) => {
        this.doRefresh();
      },
      (reason) => {

      }
    );
  }

  doRefresh() {
    $('#tree-demo').jstree('refresh');
  }

}

import { Component, OnInit } from '@angular/core';
import { RessourcesModalService } from '../../ressources-modal.service';
import { UtilityService, GlobalEnum, SharedService } from 'helper';
import { environment } from '../../../../../environments/environment';

declare var $: any;

const REQUEST_MAPPING_NRO = 'paramNro';
const REQUEST_MAPPING_OLT = 'olt';
const REQUEST_MAPPING_BAIE = 'oltBaie';
const REQUEST_MAPPING_CHASSIS = 'oltChassis';

@Component({
  selector: 'ressources-olt-aside',
  templateUrl: './olt-aside.component.html',
  styleUrls: ['./olt-aside.component.scss']
})
export class OltAsideComponent implements OnInit {

  _node: string;
  _nro: any;

  constructor(private _ressourcesModalService: RessourcesModalService, private _utilityService: UtilityService,
    private _sharedService: SharedService) { }

  ngOnInit() {
    this.ngOnInitTree();
  }

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
              case 'olt': return _utilityService.getUrl(environment.origin, REQUEST_MAPPING_OLT, 'getByCriteria');
              case 'baie': return _utilityService.getUrl(environment.origin, REQUEST_MAPPING_BAIE, 'getByCriteria');
              case 'chassis': return _utilityService.getUrl(environment.origin, REQUEST_MAPPING_CHASSIS, 'getByCriteria');
            }
          },
          'type': 'POST',
          'dataType': 'json',
          'contentType': 'application/json',
          beforeSend: function (xhr, settings) {
            let s = _utilityService.getService(settings.url, environment.origin);
            switch (s) {
              case REQUEST_MAPPING_NRO: return this._node = 'nro';
              case REQUEST_MAPPING_OLT: return this._node = 'olt';
              case REQUEST_MAPPING_BAIE: return this._node = 'baie';
              case REQUEST_MAPPING_CHASSIS: return this._node = 'chassis';
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
              case 'olt': return JSON.stringify({
                'takeAll': true,
                'orderBy': GlobalEnum._ORDER_BY_ASC,
                'data': {
                  'nro': node.data.item.id
                }
              });
              case 'baie': return JSON.stringify({
                'takeAll': true,
                'orderBy': GlobalEnum._ORDER_BY_ASC,
                'data': {
                  'olt': node.data.item.id
                }
              });
              case 'chassis': return JSON.stringify({
                'takeAll': true,
                'orderBy': GlobalEnum._ORDER_BY_ASC,
                'data': {
                  'baie': node.data.item.id
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
                        '__child': 'olt',
                        '__name': 'nro'
                      };
                      break;
                    case 'olt':
                      node['text'] = item['nom'];
                      node['icon'] = false;
                      node['data'] = {
                        'item': item,
                        '__child': 'baie',
                        '__name': 'olt'
                      };
                      break;
                    case 'baie':
                      node['text'] = item['oltNom'] + ':' + item['numero'];
                      node['icon'] = false;
                      node['data'] = {
                        'item': item,
                        '__child': 'chassis',
                        '__name': 'baie'
                      };
                      break;
                    case 'chassis':
                      node['text'] = item['reference'];
                      node['icon'] = '../../../../../../assets/app/media/img/icons/icons8-nas-16.png';
                      node['data'] = {
                        'item': item,
                        '__name': 'chassis'
                      };
                      break;
                  }
                  node['children'] = (this._node === 'chassis') ? false : true;
                  node['state'] = {
                    opened: false,
                    selected: false,
                    disabled: (this._node === 'chassis') ? false : true
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
      const __node = data.node.data.__name;
      if (__node) {
        switch (__node) {
          case 'chassis':
            _sharedService.set({ __TAG: 'olt-chassis', __DATA: data.node.data.item });
            break;
        }
      }
    });
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

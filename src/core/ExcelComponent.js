import {DomListener} from '@core/DomListner';
// import {$} from '@core/dom';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // возвращает шаблон компонента
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}

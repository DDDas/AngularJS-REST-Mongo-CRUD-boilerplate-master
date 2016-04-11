import angular from 'angular';

import OrderService from './order.service';

angular.module('app.order', [])
  .service('orderService', OrderService);

export default 'app.order';
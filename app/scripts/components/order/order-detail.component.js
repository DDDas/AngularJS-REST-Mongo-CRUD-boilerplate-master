import angular from 'angular'

import Order from '../../services/order/order'
import OrderDetailDirective from './order-detail.directive'

angular.module('order-detail.component', [
  Order
])
  .directive('orderDetailDirective', OrderDetailDirective);

export default 'order-detail.component'
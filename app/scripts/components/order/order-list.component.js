import angular from 'angular'

import Order from '../../services/order/order'

import OrderListDirective from './order-list.directive'

angular.module('order-list.component',[
  Order
])
.directive('orderListDirective',OrderListDirective);

export default 'order-list.component'
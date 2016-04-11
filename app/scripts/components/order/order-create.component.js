import angular from 'angular';

import OrderFormComponent from './order-form.component';
import Order from '../../services/order/order';

import OrderCreateDirective from './order-create.directive';

angular.module('order-create.component',[
  OrderFormComponent,
  Order
])
.directive('orderCreateDirective', OrderCreateDirective);

export default 'order-create.component';
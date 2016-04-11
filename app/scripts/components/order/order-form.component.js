import angular from 'angular';

import OrderFormDirective from './order-form.directive';

angular.module('order-form.component', [])
  .directive('orderFormDirective', OrderFormDirective);


export default 'order-form.component';
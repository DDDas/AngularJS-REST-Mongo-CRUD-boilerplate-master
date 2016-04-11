import angular from 'angular';
import angularRoute from 'angular-route';

import Order from './services/order/order';

import OrderCreateComponent from './components/order/order-create.component';
import OrderListComponent from './components/order/order-list.component';
import OrderDetailComponent from './components/order/order-detail.component';

import RouteConfig from './configs/route.config';

angular.module('orderApp', [

  angularRoute,

  Order,
  OrderCreateComponent,
  OrderListComponent,
  OrderDetailComponent
])
.config(RouteConfig);

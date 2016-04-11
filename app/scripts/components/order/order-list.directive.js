export default function () {

  class OrderListController {
    constructor (orderService) {
      orderService.getOrders()
      .then(orders => this.orders = orders);
    }
  }
  return {
    restrict     : 'E',
    templateUrl  : 'order/order-list.directive.html',
    controller   : OrderListController,
    controllerAs : 'cntlr',
    scope        : {}
  }
}
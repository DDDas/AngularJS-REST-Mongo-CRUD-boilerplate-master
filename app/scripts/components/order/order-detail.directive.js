export default function () {

  class OrderDetailController {
    constructor ($routeParams, orderService) {
      orderService.getOrderById($routeParams.id)
        .then(order => this.order = order)
    }
  }

  return {
    restrict     : 'E',
    templateUrl  : 'order/order-detail.directive.html',
    controller   : OrderDetailController,
    controllerAs : 'cntlr',
    scope: {}
  }
}
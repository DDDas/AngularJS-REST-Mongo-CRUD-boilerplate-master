export default function(orderService, $location){

  class OrderCreateController{
    constructor(){
      this.isButtonDisabled = true;
      this.orderOnCreate = {}
    }
    createOrder(order){
      orderService.createOrder(order)
      .then(() => $location.path('#/orders'));
    }
    setButton(validState){
      this.isButtonEnabled = validState;
    }
  }

   return {
    restrict: 'E',
    templateUrl: 'order/order-create.directive.html',
    controller: OrderCreateController,
    controllerAs: 'cntlr',
    scope: {}
  }

}
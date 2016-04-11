export default function(){

  class OrderFormController{
    constructor($scope){
      $scope.$watch('OrderForm.$valid', (newValue, oldValue) => {
        this.onStateChange({
          validState: newValue
        })
      })
    }
  }

  return {
    restrict: 'E',
    templateUrl: 'order/order-form.directive.html',
    scope: {},
    controller: OrderFormController,
    controllerAs: 'cntlr',
    bindToController: {
      onStateChange: '&',
      order: '=orderAttr'
    }
  }

}
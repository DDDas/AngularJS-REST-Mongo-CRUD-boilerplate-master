export default function ($routeProvider) {
  $routeProvider
    .when('/orders', {
      template: '<order-list-directive></order-list-directive>'
    })
    .when('/orders/create',{
      template: '<order-create-directive></order-create-directive>'
    })
    .when('/orders/:id',{
      template: '<order-detail-directive></order-detail-directive>'
    })
    .otherwise({
      redirectTo: '/orders'
    })
}
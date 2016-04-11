export default function ($http) {

  const baseUrl = 'http://localhost:4730/orders';

  this.getOrders = function () {
    return $http.get(baseUrl)
      .then(response => response.data);
  };

  this.createOrder = function (order) {
    return $http.post(baseUrl, order)
      .then(response => response.data);
  };

  this.getOrderById = function (orderId) {
    return $http.get(baseUrl +'/'+ orderId)
      .then(response => response.data);
  };

}
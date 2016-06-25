angular.module('calculatorApp', ["firebase"]).controller(
  "calculator", ["$scope", "$firebase", function($scope, $firebase) {
      var ref = new Firebase('https://burning-heat-9934.firebaseio.com/');
      $scope.logs = $firebase(ref);

      $scope.doCalculation = function(e) {
        if (e.keyCode != 13) return;
        $scope.answer = eval($scope.newCalculation);
        var toPut = $scope.newCalculation + " =  " + $scope.answer;
        $scope.logs.$add({
          value: toPut
        });
        $scope.newCalculation = '';
      }

  }]
)
.filter("reverse", function() {
  return function(items){
    var arr=new Array();
    for( var i in items ) {
      if (items.hasOwnProperty(i)){
        arr.push(items[i]);
      }
    };
    var finalAnswer = [];
    arr.forEach(function(obj) {
         if(typeof(obj) == 'object'){
             finalAnswer.push(obj);
         }

    });
    return finalAnswer.reverse(); // Create a copy of the array and reverse the order of the items
    };
});

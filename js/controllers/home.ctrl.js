fpApp.controller("homeCtrl",["$scope","$window","$http","$firebaseArray",function($scope,$window,$http,$firebaseArray){
    $scope.i=0;
    $scope.testPara = "I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.";
    console.log("alsdkfjas'd");
    var ref = firebase.database().ref().child('products');
    // download the data into a local object
    $scope.newProd = {
        "category":"",
        "type":"",
        "subtype":""
    };
    $scope.currProduct = {
        "category":"",
        "type":"",
        "subtype":"",
        "id":""
    };
    $scope.editMode = false;
    
    $scope.products = $firebaseArray(ref);
    console.log($scope.products);
    
    $scope.addProducts = function() {
        console.log(" adding .. ");
        console.log($scope.newProd);
        $scope.products.$add($scope.newProd);
//        $scope.newProd.category="";
//        $scope.newProd.type="";
//        $scope.newProd.subtype="";
        $scope.newProd = {};
      };
    $scope.delProduct = function(product){
        $scope.products.$remove(product);
    };
    
    $scope.editProduct = function(product){

        var myEl = angular.element( document.querySelector( '#'+product.$id ) );
        myEl.addClass('z-depth-5');
        
        $scope.editMode = true;
        console.log(product);
        $scope.currProduct.category = product.category;  
        $scope.currProduct.type = product.type;  
        $scope.currProduct.subtype = product.subtype;  
        $scope.currProduct.id = product.$id;  
    };
    $scope.saveProduct = function(cproduct){
      $scope.editMode = false;  
      console.log("updating ...");
      
      var rec = $scope.products.$getRecord(cproduct.id);
      rec.category = cproduct.category;
      rec.type = cproduct.type;
      rec.subtype = cproduct.subtype;
      $scope.products.$save(rec)
          .then(function(ref) {
            $scope.editMode = false;
      });
        var myEl = angular.element( document.querySelector( '#'+cproduct.id ) );
        myEl.removeClass('z-depth-5');
        
    };
}]);


//       {
//          category: "Electronix",
//          type : "test type",
//          subtype : "test subtype"
//        }
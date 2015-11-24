app.controller("homeCtrl",["$scope", function($scope) {
    var choiseList = ["sten", "sax", "påse"]; 
    $scope.playerScore = 0;
    $scope.comScore = 0;
    $scope.title = "Cloud, Scissor, Folder"
    
     $scope.startGame = function(choise) {
         $scope.choise = choise;
         console.log(choise);
         $scope.comChoise = choiseList[Math.floor(Math.random() * 3)];
         console.log($scope.comChoise);
         $scope.info = "";
        
         
         
        switch ($scope.choise) {
            
            case "sten":
                switch($scope.comChoise) {
                    case "sten":
                        $scope.info = "oavgjort";
                    break;
                    
                    case "sax":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break;  
                        
                    case "påse":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                }
                
            break;
                
            case "sax":
                switch($scope.comChoise) {
                    case "sax":
                        $scope.info = "oavgjort";
                    break;
                    
                    case "påse":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break;  
                        
                    case "sten":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                }
               
            break;
                
            case "påse":
                switch($scope.comChoise) {
                    case "påse":
                        $scope.info = "oavgjort";
                    break;
                    
                    case "sten":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break;  
                        
                    case "sax":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                }
              
            break;
                
            
        }
     };
}]);
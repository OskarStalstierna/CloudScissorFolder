app.controller("homeCtrl",["$scope", function($scope) {
    var choiseList = ["sten", "sax", "påse", "ödla", "spock"]; 
    $scope.playerScore = 0;
    $scope.comScore = 0;
    $scope.title = "sten, sax, påse ,ödla ,spock";
    $scope.info = "Resultat";
    
     $scope.startGame = function(choise) {
         $scope.choise = choise;
         $scope.comChoise = choiseList[Math.floor(Math.random() * 5)];
         
        
         
         
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
                        
                    case "ödla":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break; 
                        
                    case "påse":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;
                    
                    case "spock":
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
                        
                    case "ödla":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break; 
                        
                    case "sten":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                        
                    case "spock":
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
                        
                    case "spock":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break; 
                        
                    case "sax":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                        
                    case "ödla":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                }
              
            break;
                
            case "ödla":
                switch($scope.comChoise) {
                    case "ödla":
                        $scope.info = "oavgjort";
                    break;
                    
                    case "spock":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break;  
                        
                    case "påse":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break; 
                        
                    case "sten":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break; 
                        
                    case "sax":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break; 
                }
              
            break;
                
            case "spock":
                switch($scope.comChoise) {
                    case "spock":
                        $scope.info = "oavgjort";
                    break;
                    
                    case "sten":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break;  
                        
                    case "sax":
                        $scope.info = "Du vann!";
                        $scope.playerScore++
                    break;  
                        
                    case "påse":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                        
                    case "ödla":
                        $scope.info = "Du Förlorade";
                        $scope.comScore++
                    break;  
                }
              
            break;
            
        };
         
        if ($scope.playerScore == 3) {
            $scope.message = "Du besegrade datorn!";
            $('#reset-modal').modal('show')
        } else if ($scope.comScore == 3) {
            $scope.message = "Du fick stryk av datorn!";
            $('#reset-modal').modal('show')
        } 
         
     };
    
    $scope.reset = function() {
            $scope.playerScore = 0;
            $scope.comScore = 0;
            $('#reset-modal').modal('hide')
            
        };
}]);
var bodyang = angular.module("profileApp",[]);
bodyang.controller("profileController",function($scope){
$scope.imagePath="images/spic.jpg";
$scope.name="STEPHEN PAUL ADITHELA";	
});


var navang = angular.module("app1",[]);
navang.controller("navbarcontroller",function($scope){
	$scope.name="STEPHEN PAUL ADITHELA";	

			$scope.changeColor2=function(bool){
				if(bool===true)
					{$scope.imagename="images/up.png";
					
					}
				else if(bool===false)
					{$scope.imagename = "images/down.png";
					}
				};

	
});


angular.bootstrap(document.getElementById("app2"),['profileApp']);

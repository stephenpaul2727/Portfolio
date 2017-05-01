var bodyang = angular.module("profileApp",[]);
bodyang.controller("profileController",function($scope){
$scope.imagePath="images/mypic.jpg";
$scope.name="STEPHEN PAUL ADITHELA";	
});


var navang = angular.module("app1",[]);
navang.controller("navbarcontroller",function($scope){
	$scope.name="STEPHEN PAUL ADITHELA";	

	
});
angular.bootstrap(document.getElementById("app2"),['profileApp']);










//Initializing semaphore
initialize()
{
    C->value = 1;
    return
}

A(Sem C)
{
    C->value--;
    if(C>value < 0)
	//block on semaphore
    return
}

B(C)
{
    C->value++;
    if(C->value <= 0)
	//unblock one process or thread that is blocked on semaphore
    return
}

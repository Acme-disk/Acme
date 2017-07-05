angular.module("myapp",[])
    .controller("todo",["$scope",function($scope){
    	$scope.num=function(){
    		return $scope.arr.length;
    	};
//  	定义数据  
    	$scope.arr=localStorage.message?JSON.parse(localStorage.message):[];
        console.log($scope.arr)
        /*添加列表*/
        $scope.add=function(){
//      	创建一个空对象
            var obj={};
//          给对象添加属性
            obj.id=maxid();
            obj.name="新建列表";
            obj.son=[];
            $scope.arr.push(obj);
//          把json对象转化为字符串	
            localStorage.message=JSON.stringify($scope.arr);
        }

        function maxid(){
            var id=0;
            var tempid=0;
//          如果这个数组没有内容的时候 它的ID是1
            if($scope.arr.length==0){
                    id=1;
            }else{
                for(var i=0;i<$scope.arr.length;i++){
                    if($scope.arr[i].id>tempid){
                        tempid=$scope.arr[i].id

                    }
                }

                id=tempid+1;
            }
            return id;
        }
//      删除
        $scope.del=function(id){
        	
        	for(var i=0;i<$scope.arr.length;i++){
                if(id==$scope.arr[i].id){
                	$scope.arr.splice(i,1);
                }
            }
        	console.log($scope.arr)
        	localStorage.message=JSON.stringify($scope.arr)
        }
//      修改
		$scope.edit=function(id){
			for(var i=0;i<$scope.arr.length;i++){
                if(id==$scope.arr[i].id){
                	$scope.arr[i].name
                }
            }
			localStorage.message=JSON.stringify($scope.arr)
		}
    }])
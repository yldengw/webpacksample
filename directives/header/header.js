module.exports =function(ngModule){
	ngModule.directive('layoutHeader',aFun);
	require('./header.css');
	function aFun(){
		return{
			restrict:'E',
			scope:{},
			template: require('./header.html'),
			controllerAs:'vm',
			controller:function(){
				var vm=this;
				vm.greeting='angularjssswebpack'
			}
		}
	}
}
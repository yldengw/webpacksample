module.exports =function(ngModule){
	ngModule.directive('layoutSidernav',aFun);
	require('./sidernav.css');
	function aFun(){
		return{
			restrict:'E',
			scope:{},
			template: require('./sidernav.html'),
			controllerAs:'vm',
			controller:function(){
				var vm=this;
				vm.greeting='angularjssswebpack'
			}
		}
	}
}
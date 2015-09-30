define([
	'hbs!templates/my-app/Page3'
],
function(template) {
	var Page3View = Backbone.View.extend({
		template: template,
		el: 'div',
		className: 'page3',
		navigatorBehaviors: ['IHasStateTransition'],
		transitionIn: function (cb){cb()},
		transitionOut: function(cb){cb()}
	});
	return Page3View;
});

define([
	'hbs!templates/my-app/Page2'
],
function(template) {
	var Page2View = Backbone.View.extend({
		template: template,
		el: 'div',
		className: 'page2',
		navigatorBehaviors: ['IHasStateTransition'],
		transitionIn: function (cb){cb()},
		transitionOut: function(cb){cb()}
	});
	return Page2View;
});

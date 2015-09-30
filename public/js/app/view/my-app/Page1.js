define([
	'hbs!templates/my-app/Page1'
],
function(template) {
	var Page1View = Backbone.View.extend({
		template: template,
		el: 'div',
		className: 'page1',
		navigatorBehaviors: ['IHasStateTransition'],
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(template());
		},
		transitionIn: function (cb){cb()},
		transitionOut: function(cb){cb()}
	});
	return Page1View;
});

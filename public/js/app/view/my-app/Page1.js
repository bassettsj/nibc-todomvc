define([
	'hbs!templates/my-app/Page1'
],
function(template) {
	var Page1View = Backbone.View.extend({
		template: template,
		className: 'page1',
		navigatorBehaviors: ['IHasStateTransition'],
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(template());
		},
		transitionIn: function(cb) {
			this.el.style.display = '';
			cb();
		},
		transitionOut: function(cb) {
			this.el.style.display = 'none';
			cb();
		}
	});
	return Page1View;
});

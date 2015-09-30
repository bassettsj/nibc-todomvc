define([
	'hbs!templates/my-app/Page2'
],
function(template) {
	var Page2View = Backbone.View.extend({
		template: template,
		className: 'page2',
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
	return Page2View;
});

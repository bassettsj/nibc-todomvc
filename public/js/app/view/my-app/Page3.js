define([
	'hbs!templates/my-app/Page3'
],
function(template) {
	var Page3View = Backbone.View.extend({
		template: template,
		className: 'page3',
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
	return Page3View;
});

define([
	'hbs!templates/my-app/Header'
], function(template) {
	var HeaderView = Backbone.View.extend({
		// naviagtorBehaviors: ["IHasStateTransition", "IHasStateUpdate"],
		navigatorBehaviors: ['IHasStateTransition', 'IHasStateUpdate'],
		tagName: 'header',
		className: 'header',
		localisationModel: 'inject',
		initialize: function() {
			this.render();
		},

		render: function() {
			var activePage = this.localisationModel.get('activePage');
			this.$el.html(template({activePage: activePage}));
			return this;
		},
		updateState: function() {

		},
		transitionIn: function(cb) {
			cb();
		},
		transitionOut: function(cb) {
			cb();
		}
	});
	return HeaderView;
});

define([
	'hbs!templates/my-app/Header'
], function(template) {
	var HeaderView = Backbone.View.extend({
		navigatorBehaviors: ['IHasStateTransition', 'IHasStateUpdate'],
		tagName: 'header',
		className: 'header',
		localisationModel: 'inject',
		njs: 'inject',
		initialize: function() {
			this.render();
		},
		getActivePage: function() {
			var path = this.njs.getCurrentState().getSegment(1);
			return this.localisationModel.get(path);
		},
		render: function() {
			this.$el.html(template({activePage: this.getActivePage()}));
			return this;
		},
		updateState: function() {
			this.render();
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

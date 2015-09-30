define([
	'hbs!templates/my-app/Tabs'
], function (
	template
) {
	var TabsView = Backbone.View.extend({

		navigatorBehaviors: ['IHasStateTransition'],
		template: template,
		className: 'tabs-view',

		localisationModel: 'inject',
		njs: 'inject',

		$myApp: null,
		events: {
			'click [data-­target]': 'changeTab'
		},
		initialize: function() {
			this.render();
			this.$tabs = this.$el.find('.js-tab');
		},
		setActive: function() {
			this.$tabs.removeClass('active');
			this.$el.find('a[data-tab="page' + 1 + '"]');
		},
		render: function() {
			this.$el.html(template({pages: this.localisationModel.values()}));
			return this;
		},
		changeTab: function(e) {
			e.preventDefault();
			var target = parseInt(e.target.dataset['­target']) + 1;
			this.njs.request('myapp/page' + target);
		},

		transitionIn: function (){},
		transitionOut: function(){}
	});
	return TabsView;
});

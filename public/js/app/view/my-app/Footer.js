define([
	'hbs!templates/my-app/Footer'
], function (template) {
	var FooterView = Backbone.View.extend({
		navigatorBehaviors: ['IHasStateTransition'],

		id: 'footer',
		tagName: 'footer',
		className: 'footer',

		localisationModel: 'inject',
		njs: 'inject',


		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			return this;
		},
		transitionIn: function (){},
		transitionOut: function(){}
	});

	return FooterView;
});

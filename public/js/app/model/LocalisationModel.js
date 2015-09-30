define([
], function () {
	var LocalisationModel = Backbone.Model.extend({
		defaults: {
			pages: [
				'Page 1',
				'Page 2',
				'Page 3'
			],
			active: 0
		}
	});

	return LocalisationModel;
});

define([
], function () {
	var LocalisationModel = Backbone.Model.extend({
		defaults: {
			page1: 'Page 1',
			page2: 'Page 2',
			page3: 'Page 3'
		}
	});

	return LocalisationModel;
});

define([
	//VIEWS
	'view/HomeView',
	'view/my-app/Tabs',
	'view/my-app/Header',
	'view/my-app/Footer',
	'view/my-app/Page1',
	'view/my-app/Page2',
	'view/my-app/Page3',

	//MODELS
	'model/LocalisationModel',

	'util/isDebug'
], function (
	//VIEWS
	HomeView,
	// My App views
	TabsView,
	HeaderView,
	FooterView,
	Page1View,
	Page2View,
	Page3View,

	//MODELS
	LocalisationModel,

	isDebug
) {

	var ApplicationRouter = Backbone.CommandRouter.extend({

		$el: null,

		njs: null, //navigatorjs.Navigator
		stateViewMap: null, //navigatorjs.integration.StateViewMap
		stateUrlSyncer: null, //new navigatorjs.integration.StateUrlSyncer

		routes: {
			"": ""
		},

		initialize: function(options) {
			this.$el = options.$el;

			this.initializeNavigator();
			this.mapModels();
			this.mapStates();

			if(isDebug) {
				this.addDebug();
			}

			var urlState = this.stateUrlSyncer.getUrlState();

			this.njs.start(urlState.equals('') ? 'myapp/page1' : urlState);
		},

		initializeNavigator: function() {
			this.njs = new navigatorjs.Navigator();
			this.stateViewMap = new navigatorjs.integration.StateViewMap(this.njs, this.$el);
			/** TMP, SHOULD MOVE INSIDE NAVIGATORJS */
			this.stateUrlSyncer = new navigatorjs.integration.StateUrlSyncer(this.njs);
			this.stateUrlSyncer.usePushState();
			this.stateUrlSyncer.start();
			/** END TMP */
			this.injector.map("njs").toValue(this.njs);
		},

		mapModels: function() {
			this.injector.map('localisationModel').toSingleton(LocalisationModel);
		},

		mapStates: function() {

			var myAppStates = [
				'myapp',
				'myapp/page1',
				'myapp/page2',
				'myapp/page3'
			];
			var myAppRecipe = this.stateViewMap
				.mapState(myAppStates)
				.toView(TabsView)
				.withArguments({
					injector: this.injector
				});
			this.stateViewMap
				.mapState(myAppStates)
				.toView(HeaderView)
				.withArguments({injector:this.injector})
				.withParent(myAppRecipe)
				.inside('[data-header]');
			this.stateViewMap
				.mapState(myAppStates)
				.toView(FooterView)
				.withArguments({injector:this.injector})
				.withParent(myAppRecipe)
				.inside('[data-footer]');

			this.stateViewMap
				.mapState('myapp/page1')
				.toView(Page1View)
				.withParent(myAppRecipe)
				.withArguments({injector: this.injector})
				.inside('[data-tab-container]');

			this.stateViewMap
				.mapState('myapp/page2')
				.toView(Page2View)
				.withParent(myAppRecipe)
				.withArguments({injector: this.injector})
				.inside('[data-tab-container]');

			this.stateViewMap
				.mapState('myapp/page3')
				.toView(Page3View)
				.withParent(myAppRecipe)
				.withArguments({injector: this.injector})
				.inside('[data-tab-container]');
		},

		addDebug: function() {
			var debugConsole = new navigatorjs.features.DebugConsole(this.njs),
				$debugConsole = debugConsole.get$El(),
				cssPosition = {position: 'fixed', left: 10, bottom: 10};

			$debugConsole.css(cssPosition).appendTo('body');

			var stats = new Stats();

			// Align top-left
			stats.domElement.style.position = 'absolute';
			stats.domElement.style.right = '10px';
			stats.domElement.style.top = '10px';

			document.body.appendChild( stats.domElement );

			setInterval( function () {
				stats.update();
			}, 1000 / 60 );
		}
	});

	return ApplicationRouter;
});

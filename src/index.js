Framer.Defaults.Animation = {
	curve: Spring({damping: 0.5}),
};

var layerA = new Layer({
	backgroundColor: '#0077FF',
	x: Align.center,
	y: Align.center,
	opacity: 1,
	scale: 1,
});

layerA.states = {
	hide: {
		opacity: 0,
		scale: 0.5,
	}
};

layerA.on(Events.Click, () => {
	layerA.animate('hide');
});

layerA.on(Events.AnimationEnd, () => {
	Utils.delay(0.2, () => {
		layerA.animate('default');
	});
});

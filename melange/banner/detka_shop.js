(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo1.png?1534788000149", id:"logo1"},
		{src:"images/detka_shop_atlas_NP_.jpg?1534788000147", id:"detka_shop_atlas_NP_"}
	]
};



lib.ssMetadata = [
		{name:"detka_shop_atlas_NP_", frames: [[941,156,64,37],[0,182,193,50],[383,182,184,23],[569,202,189,21],[195,182,186,27],[867,114,122,40],[867,156,72,40],[665,0,200,200],[0,0,663,180],[867,0,100,112]]}
];


// symbols:



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.buggy2 = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,87);


(lib.photo = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.soska = function() {
	this.spriteSheet = ss["detka_shop_atlas_NP_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo();
	this.instance.parent = this;
	this.instance.setTransform(-331.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.5,-90,663,180);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo();
	this.instance.parent = this;
	this.instance.setTransform(-331.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.5,-90,663,180);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaA3IAAhSIgyBSIgUAAIAAhtIATAAIAABSIAyhSIAUAAIAABtg");
	this.shape.setTransform(36.3,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIA3IAAhdIgkAAIAAgQIBYAAIAAAQIgjAAIAABdg");
	this.shape_1.setTransform(25.5,-8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaBMIAAhSIgyBSIgUAAIAAhtIATAAIAABSIAyhSIAUAAIAABtgAgSg3QgIgGgCgOIANAAQACAHAEAEQAEADAGAAQAIAAAEgDQAFgEABgHIANAAQgCANgIAHQgIAHgNAAQgLAAgIgHg");
	this.shape_2.setTransform(14.6,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkArQgOgPABgcQgBgaAOgPQAPgPAVAAQAXAAAOAOQAOAQgBAaIAAAFIhQAAQABARAJALQAJAJANAAQAJAAAIgGQAHgFAFgMIATACQgFASgMAJQgMAKgUgBQgWAAgPgOgAgUghQgJAKAAAOIA8AAQgBgOgHgHQgJgLgNAAQgLAAgKAIg");
	this.shape_3.setTransform(2.7,-8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBOIAAiYIARAAIAAAOQAHgIAHgEQAIgFAJABQAOgBALAIQALAHAFAOQAGANAAAQQAAAQgGAMQgHAOgLAIQgMAGgMAAQgIAAgIgEQgHgEgFgFIAAA2gAgUgzQgKAMAAAVQAAATAJALQAJAKAMAAQALAAAJgKQAIgLAAgUQAAgWgIgKQgJgLgLAAQgLABgJAKg");
	this.shape_4.setTransform(-8.9,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkArQgOgPABgcQgBgaAOgPQAPgPAVAAQAXAAAOAOQAOAQgBAaIAAAFIhQAAQABARAJALQAJAJANAAQAKAAAHgGQAHgFAEgMIAUACQgFASgMAJQgMAKgUgBQgWAAgPgOgAgUghQgIAKgBAOIA7AAQAAgOgHgHQgIgLgOAAQgLAAgKAIg");
	this.shape_5.setTransform(-21.1,-8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoBMIAAiFIhOAAIAACFIgVAAIAAiXIB3AAIAACXg");
	this.shape_6.setTransform(-34.7,-10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("As4DPQhjAAgBhkIAAjVQABhkBjAAIZxAAQBjAAABBkIAADVQgBBkhjAAg");
	this.shape_7.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-30.7,185,41.5);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaA3IAAhSIgyBSIgUAAIAAhtIATAAIAABSIAyhSIAUAAIAABtg");
	this.shape.setTransform(36.3,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIA3IAAhdIgkAAIAAgQIBYAAIAAAQIgjAAIAABdg");
	this.shape_1.setTransform(25.5,-8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaBMIAAhSIgyBSIgUAAIAAhtIATAAIAABSIAyhSIAUAAIAABtgAgSg3QgIgGgCgOIANAAQACAHAEAEQAEADAGAAQAIAAAEgDQAFgEABgHIANAAQgCANgIAHQgIAHgNAAQgLAAgIgHg");
	this.shape_2.setTransform(14.6,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkArQgOgPABgcQgBgaAOgPQAPgPAVAAQAXAAAOAOQAOAQgBAaIAAAFIhQAAQABARAJALQAJAJANAAQAJAAAIgGQAHgFAFgMIATACQgFASgMAJQgMAKgUgBQgWAAgPgOgAgUghQgJAKAAAOIA8AAQgBgOgHgHQgJgLgNAAQgLAAgKAIg");
	this.shape_3.setTransform(2.7,-8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBOIAAiYIARAAIAAAOQAHgIAHgEQAIgFAJABQAOgBALAIQALAHAFAOQAGANAAAQQAAAQgGAMQgHAOgLAIQgMAGgMAAQgIAAgIgEQgHgEgFgFIAAA2gAgUgzQgKAMAAAVQAAATAJALQAJAKAMAAQALAAAJgKQAIgLAAgUQAAgWgIgKQgJgLgLAAQgLABgJAKg");
	this.shape_4.setTransform(-8.9,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkArQgOgPABgcQgBgaAOgPQAPgPAVAAQAXAAAOAOQAOAQgBAaIAAAFIhQAAQABARAJALQAJAJANAAQAKAAAHgGQAHgFAEgMIAUACQgFASgMAJQgMAKgUgBQgWAAgPgOgAgUghQgIAKgBAOIA7AAQAAgOgHgHQgIgLgOAAQgLAAgKAIg");
	this.shape_5.setTransform(-21.1,-8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoBMIAAiFIhOAAIAACFIgVAAIAAiXIB3AAIAACXg");
	this.shape_6.setTransform(-34.7,-10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("As4DPQhjAAgBhkIAAjVQABhkBjAAIZxAAQBjAAABBkIAADVQgBBkhjAAg");
	this.shape_7.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-30.7,185,41.5);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-93,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-24,186,27);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-93,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-24,186,27);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-95,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-21,189,21);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-95,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-21,189,21);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap26();
	this.instance.parent = this;
	this.instance.setTransform(-92,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-22,184,23);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap26();
	this.instance.parent = this;
	this.instance.setTransform(-92,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-22,184,23);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;
	this.instance.setTransform(-96.7,-19);

	this.instance_1 = new lib.buggy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.8,-48,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-48,201.5,96);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(9,-20);

	this.instance_1 = new lib.soska();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-77.5,-36.9,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-36.9,158.5,73.9);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-32,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-18.5,64,37);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-32,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-18.5,64,37);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-96.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-25,193,50);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-96.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-25,193,50);


// stage content:
(lib.all_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3399").ss(1,1,1).p("AyvfUMAAAg+nIAKAAMAlKAAAASwfKIAAAKASwfKMglVAAAASw/TMAAAA+d");
	this.shape.setTransform(120,200.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AyqfUIAAgKMAlVAAAIAAAKgASrfKMglVAAAMAAAg+dMAlKAAAIALAAMAAAA+dgAyqfKg");
	this.shape_1.setTransform(120.5,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(206));

	// Layer 4
	this.instance = new lib.Tween23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(121.6,286.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.6,286.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},140).to({state:[{t:this.instance_1}]},10).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({_off:true,alpha:1},10).wait(56));

	// Layer 3
	this.instance_2 = new lib.Tween21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(111,223.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(121,223.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},135).to({state:[{t:this.instance_3}]},10).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).to({_off:true,x:121,alpha:1},10).wait(61));

	// Layer 2
	this.instance_4 = new lib.Tween19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(111.5,178.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(121.5,178.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},130).to({state:[{t:this.instance_5}]},10).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},0).to({_off:true,x:121.5,alpha:1},10).wait(66));

	// Layer 1
	this.instance_6 = new lib.Tween17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(111,148.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween18("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(121,148.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},125).to({state:[{t:this.instance_7}]},9).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(125).to({_off:false},0).to({_off:true,x:121,alpha:1},9).wait(72));

	// info
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAqIAAgUIgjAAIAAgJIAlg2IAJAAIAAA2IALAAIAAAJIgLAAIAAAUgAgSANIAZAAIAAglg");
	this.shape_2.setTransform(157.4,374.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFAqIAAhAQgEADgEAEIgLAFIAAgKQAJgFAFgFQAGgGADgFIAGAAIAABTg");
	this.shape_3.setTransform(150.5,374.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAiQgJgKAAgYQAAgOAEgJQADgJAGgFQAGgFAIAAQAGAAAGACQAFADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgJAAQgLAAgHgJgAgKgcQgGAIAAAUQABAVAEAHQAFAHAGAAQAHAAAFgHQAEgIAAgUQAAgUgEgHQgFgHgHAAQgGAAgEAGg");
	this.shape_4.setTransform(144.3,374.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAiQgJgKAAgYQAAgOAEgJQADgJAGgFQAGgFAIAAQAGAAAGACQAFADADAFQADAGACAHQACAIABALQgBAPgDAJQgDAJgGAFQgGAFgJAAQgLAAgHgJgAgKgcQgGAIABAUQAAAVAEAHQAFAHAGAAQAHAAAFgHQAEgIAAgUQAAgUgEgHQgFgHgHAAQgGAAgEAGg");
	this.shape_5.setTransform(137.7,374.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgKAAgYQABgOADgJQADgJAGgFQAGgFAIAAQAHAAAFACQAFADADAFQAEAGABAHQADAIAAALQAAAPgEAJQgDAJgGAFQgGAFgJAAQgLAAgHgJgAgKgcQgGAIABAUQAAAVAEAHQAFAHAGAAQAHAAAFgHQAEgIAAgUQAAgUgEgHQgFgHgHAAQgGAAgEAGg");
	this.shape_6.setTransform(131,374.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAqQAAgEACgDQACgFAEgGQAFgGAJgHQAMgLAFgFQAFgHAAgGQAAgGgEgFQgFgEgHAAQgGAAgFAEQgEAFAAAIIgLgBQABgMAIgHQAHgFAKAAQAMAAAIAGQAHAHAAAKQAAAFgDAFQgCAFgEAEQgFAFgLAKIgLALIgEAFIAoAAIAAAKg");
	this.shape_7.setTransform(124.3,374.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAHAqIAAgUIgjAAIAAgJIAlg2IAJAAIAAA2IALAAIAAAJIgLAAIAAAUgAgSANIAZAAIAAglg");
	this.shape_8.setTransform(117.5,374.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAqQAAgEACgDQABgFAGgGQAEgGAJgHQAMgLAFgFQAFgHAAgGQAAgGgFgFQgEgEgHAAQgGAAgEAEQgFAFAAAIIgLgBQABgMAIgHQAHgFAKAAQANAAAGAGQAIAHAAAKQAAAFgCAFQgCAFgFAEQgFAFgMAKIgKALIgEAFIAoAAIAAAKg");
	this.shape_9.setTransform(111,374.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAkQgIgIAAgLQAAgIAEgGQAFgEAHgCQgGgCgDgFQgDgEAAgGQAAgKAGgGQAHgGAKAAQAKAAAHAGQAHAHAAAJQAAAGgDAEQgDAFgGACQAHADAFADQAEAGAAAIQAAALgIAIQgIAHgMAAQgLAAgIgHgAgLAFQgFAFAAAHQAAAEACAFQACAEAEACQAFADADAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAQgGAAgFAFgAgJgeQgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAADgEQAEgEAAgFQAAgGgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_10.setTransform(104.4,374.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAqIAAhAQgEADgEAEIgLAFIAAgKQAJgFAFgFQAGgGADgFIAGAAIAABTg");
	this.shape_11.setTransform(97.3,374.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAlQgIgHgBgLIALgBQACAJAEAEQAEAEAGAAQAGAAAFgGQAFgFAAgHQAAgIgEgEQgFgFgHAAIgGABIABgHIACAAQAFAAAFgEQAFgDAAgHQAAgGgDgEQgEgEgFAAQgGAAgEAEQgEAEgBAIIgLgCQACgLAHgGQAHgFAKAAQAFAAAGADQAGADADAFQADAFAAAGQAAAFgDAFQgDAFgGACQAIACAEAEQAFAFAAAIQAAAMgJAHQgIAIgLAAQgLAAgHgGg");
	this.shape_12.setTransform(91.1,374.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAiQgJgKAAgWQAAgXAJgMQAIgJAMAAQAKAAAHAFQAGAGABAKIgKABQgBgHgDgCQgEgFgHAAQgDAAgDADQgFAEgDAHQgDAHAAAMQAEgFAFgDQAGgDAEAAQAKAAAIAIQAHAGAAAMQAAAIgDAHQgEAHgGAEQgGADgIAAQgLAAgIgJgAgKABQgFAFAAAIQAAAFADAFQACAFAEADQAEADADAAQAHAAAEgGQAFgFAAgJQAAgJgFgFQgEgEgHAAQgGAAgFAEg");
	this.shape_13.setTransform(84.4,374.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAiQgJgKAAgYQAAgOAEgJQADgJAGgFQAGgFAIAAQAGAAAGACQAFADADAFQADAGACAHQACAIABALQgBAPgDAJQgDAJgGAFQgGAFgJAAQgLAAgHgJgAgKgcQgGAIABAUQAAAVAEAHQAFAHAGAAQAHAAAFgHQAEgIAAgUQAAgUgEgHQgFgHgHAAQgGAAgEAGg");
	this.shape_14.setTransform(77.8,374.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAFAqIAAhAQgEADgEAEIgLAFIAAgKQAJgFAFgFQAGgGADgFIAGAAIAABTg");
	this.shape_15.setTransform(70.7,374.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAlQgIgHgBgLIALgBQACAJAEAEQAEAEAGAAQAGAAAFgGQAFgFAAgHQAAgIgEgEQgFgFgHAAIgGABIABgHIACAAQAFAAAFgEQAFgDAAgHQAAgGgDgEQgEgEgFAAQgGAAgEAEQgEAEgBAIIgLgCQACgLAHgGQAHgFAKAAQAFAAAGADQAGADADAFQADAFAAAGQAAAFgDAFQgDAFgGACQAIACAEAEQAFAFAAAIQAAAMgJAHQgIAIgLAAQgLAAgHgGg");
	this.shape_16.setTransform(64.5,374.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWAqIAAhJIgrAAIAABJIgLAAIAAhTIBBAAIAABTg");
	this.shape_17.setTransform(53.5,374.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXAqIAAhBIgsBBIgLAAIAAhTIAKAAIAABBIAshBIALAAIAABTg");
	this.shape_18.setTransform(44.9,374.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWAqIAAgoIgrAAIAAAoIgLAAIAAhTIALAAIAAAjIArAAIAAgjIALAAIAABTg");
	this.shape_19.setTransform(36.2,374.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAfAAIAMABQAGAAAFADQAEAEACAEQADAGAAAHQAAAKgHAGQgHAIgSgBIgUAAIAAAjgAgUgBIAUAAQALAAAFgDQAEgFAAgHQAAgFgCgEQgDgFgFAAQgCgBgIAAIgUAAg");
	this.shape_20.setTransform(28.1,374.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIA1AAIAAAKIgqAAIAABJg");
	this.shape_21.setTransform(21.1,374.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAmQgJgGgFgKQgEgKgBgLQAAgUAMgMQALgMARAAQAMAAAJAGQAJAFAGAKQAEALAAALQABANgGAKQgFAKgKAGQgKAFgKAAQgLAAgKgGgAgTgZQgJAJAAARQAAAQAIAIQAJAJALAAQAMAAAIgJQAJgJAAgQQgBgJgDgHQgEgJgGgEQgHgEgIAAQgKAAgJAIg");
	this.shape_22.setTransform(12.8,374.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAqQAAgKADgOQAEgPAHgLQAGgNAIgKIgpAAIAAgKIA3AAIAAAJQgJAIgIAOQgIANgDAQQgDAKAAANg");
	this.shape_23.setTransform(229.5,359.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAiQgJgKAAgWQAAgXAJgMQAIgJAMAAQAKAAAHAFQAGAGABAKIgKABQgBgHgDgCQgEgFgHAAQgDAAgDADQgFAEgDAHQgDAHAAAMQAEgFAFgDQAGgDAEAAQAKAAAIAIQAHAGAAAMQAAAIgDAHQgEAHgGAEQgGADgIAAQgLAAgIgJgAgKABQgFAFAAAIQAAAFADAFQACAFAEADQAEADADAAQAHAAAEgGQAFgFAAgJQAAgJgFgFQgEgEgHAAQgGAAgFAEg");
	this.shape_24.setTransform(222.7,359.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_25.setTransform(214.5,362.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYAnIAAgRIgvAAIAAARIgJAAIAAgaIAGAAQALgNgBgmIAqAAIAAAzIAHAAIAAAagAgQANIAfAAIAAgrIgWAAQgBAegIANg");
	this.shape_26.setTransform(209.1,361.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAKQAEgCABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_27.setTransform(200.7,363.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAKgBQAKgCAGgCIAAgDQAAgGgDgDQgEgEgHABQgGAAgEACQgEADgBAHIgLgCQACgGAEgEQADgEAFgDQAGgCAHAAQAIAAAEACQAFABADADQADAEAAADIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgDABQgCACgBACQgCACAAADQAAAEAEADQACACAHAAQADAAAFgCQAFgDADgEQABgEAAgHIAAgDIgPAEg");
	this.shape_28.setTransform(195.7,360.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAfIAAg8IAYAAQAIgBADACQAFACADADQAEAEAAAGQAAAFgDADQgBADgEACQAFAAACAEQADAEAAAFQAAAJgHAEQgFAEgLABgAgOAWIAOAAQAIAAACgCQAEgDAAgEQAAgDgBgDQgDgDgDAAIgHgBIgOAAgAgOgDIAMAAIAHgBIAEgDQACgCAAgDQAAgFgDgCQgEgCgGAAIgMAAg");
	this.shape_29.setTransform(189.6,360.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAXQgIgIAAgPQAAgOAIgIQAIgJALAAQAMAAAIAJQAIAIAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAKgHAEQgHAGgLAAQgLAAgIgJgAgKgSQgFAGgBAIIAhAAQgBgIgDgFQgFgFgIAAQgFAAgFAEg");
	this.shape_30.setTransform(182.9,360.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmAfIAAg8IAKAAIAAAzIAYAAIAAgzIAJAAIAAAzIAYAAIAAgzIAKAAIAAA8g");
	this.shape_31.setTransform(174.7,360.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAYAfIAAg8IAKAAIAAA8gAghAfIAAg8IAKAAIAAAYIAOAAQALAAAHAEQAHADAAAKQAAAHgGAGQgGAFgLABgAgXAWIAMAAQAKAAACgCQAEgDAAgFQAAgFgDgCQgCgDgKAAIgNAAg");
	this.shape_32.setTransform(165.5,360.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAnQgGgFgEgIQgDgIAAgSQAAgYAIgJQAJgIAPAAIAMgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAKAAQgBAGgCADQgCACgEABIgNABQgLAAgFACQgEADgDAFQgCAGAAAIQAEgGAFgCQAGgDAEAAQANAAAIAIQAIAIAAANQAAALgEAHQgEAHgGADQgFAEgKAAQgJAAgGgFgAgLgCQgFAEAAALQAAALAFAGQAFAGAGAAQAIAAAFgHQAFgHAAgLQAAgJgFgFQgEgGgJAAQgHAAgEAHg");
	this.shape_33.setTransform(157.9,359.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZArIAAhUIAJAAIAAAIQADgFAEgCQAFgCAEAAQAIAAAGAEQAGAEADAHQADAIABAJQAAAJgEAGQgEAIgGAEQgHAEgGAAQgEAAgEgDQgFgCgCgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAFAGAGAAQAFAAAGgGQAEgGAAgKQABgMgFgGQgFgGgGAAQgFAAgGAGg");
	this.shape_34.setTransform(151.3,361.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgDQAAgGgDgDQgEgEgHABQgGAAgEACQgEADgBAHIgLgCQACgGADgEQAEgEAFgDQAGgCAHAAQAIAAAFACQAEABADADQADAEAAADIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgDABQgCACgBACQgCACAAADQAAAEAEADQACACAHAAQADAAAFgCQAFgDADgEQABgEAAgHIAAgDIgPAEg");
	this.shape_35.setTransform(144.4,360.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQArIgPgYQgEgKgEgDQgEgEgGAAIAAApIgLAAIAAhVIALAAIAAAmQAHAAAEgDQADgDADgMIAGgLQACgEAEgCQAEgCAGgBIAGAAIAAAKIgBAAIgDAAQgGAAgCADQgCACgEAKQgFAKgDADQgCADgDABQAGABAJANIARAdg");
	this.shape_36.setTransform(138.1,359.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_37.setTransform(129.1,362.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdAeIAAgJIAFAAIAEAAIACgCIABgKIAAgnIAvAAIAAA8IgLAAIAAgzIgaAAIAAAdIAAAOQgBAEgDACQgDADgGAAIgJgBg");
	this.shape_38.setTransform(123.6,360.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgWAqIgBgKIAHABIAFgBIAEgEIACgIIABgCIgXg8IAMAAIAMAkIADAMIAEgMIAOgkIAKAAIgYA9IgEAOQgDAFgDADQgDACgGAAIgHgBg");
	this.shape_39.setTransform(117.7,361.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAKQAEgCABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_40.setTransform(109.6,363.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAKgCAGgCIAAgDQAAgGgDgDQgEgEgHABQgGAAgEACQgEADgBAHIgLgCQACgGAEgEQACgEAHgDQAGgCAFAAQAIAAAGACQAEABADADQACAEABADIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgGAAgDABQgDACgCACQgBACAAADQAAAEAEADQACACAHAAQAEAAAFgCQAEgDADgEQABgEAAgHIAAgDIgPAEg");
	this.shape_41.setTransform(104.6,360.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgZArIAAhUIAJAAIAAAIQADgFAEgCQAFgCAEAAQAIAAAGAEQAGAEADAHQADAIABAJQAAAJgEAGQgEAIgGAEQgHAEgGAAQgEAAgEgDQgFgCgCgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAFAGAGAAQAFAAAGgGQAEgGAAgKQABgMgFgGQgFgGgGAAQgFAAgGAGg");
	this.shape_42.setTransform(98.2,361.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAKgBQAKgCAGgCIAAgDQAAgGgDgDQgEgEgHABQgGAAgEACQgEADgBAHIgLgCQACgGADgEQAEgEAFgDQAGgCAHAAQAIAAAEACQAFABADADQADAEAAADIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgDABQgCACgBACQgCACAAADQAAAEAEADQACACAHAAQADAAAFgCQAFgDADgEQABgEAAgHIAAgDIgPAEg");
	this.shape_43.setTransform(91.3,360.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAWAfIAAgxIgSAxIgIAAIgRgzIAAAzIgLAAIAAg8IARAAIAPAvIARgvIAQAAIAAA8g");
	this.shape_44.setTransform(83.9,360.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEAEgCIAHgCIAJgBQALgCAGgCIAAgDQAAgGgDgDQgEgEgHABQgGAAgEACQgDADgCAHIgKgCQABgGADgEQAEgEAFgDQAGgCAGAAQAJAAAEACQAGABACADQADAEABADIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgDABQgDACgCACQgBACAAADQAAAEADADQAEACAFAAQAEAAAGgCQAEgDACgEQACgEAAgHIAAgDIgPAEg");
	this.shape_45.setTransform(76.4,360.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAmQgJgFgEgLQgEgLgBgLQAAgNAGgKQAEgJAKgFQAJgGAKAAQANAAAIAHQAKAGADAMIgLADQgDgKgGgEQgGgEgIAAQgIAAgGAFQgIAFgCAHQgDAJAAAHQAAAKAEAIQACAIAIAEQAGAEAGAAQAJAAAHgGQAGgFADgLIAMAEQgEAOgKAGQgJAIgNAAQgMAAgJgGg");
	this.shape_46.setTransform(68.7,359.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_47.setTransform(59.3,362.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgRAfIAAg8IAiAAIAAAIIgXAAIAAA0g");
	this.shape_48.setTransform(57.3,360.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgFAKQAEgCABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_49.setTransform(49.6,363.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPAqQABgKAEgOQADgPAHgLQAGgNAIgKIgpAAIAAgKIA2AAIAAAJQgIAIgIAOQgIANgDAQQgCAKgBANg");
	this.shape_50.setTransform(44.7,359.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAiQgJgKAAgWQAAgXAJgMQAIgJAMAAQAKAAAHAFQAGAGABAKIgKABQgBgHgDgCQgEgFgHAAQgDAAgDADQgFAEgDAHQgDAHAAAMQAEgFAFgDQAGgDAEAAQAKAAAIAIQAHAGAAAMQAAAIgDAHQgEAHgGAEQgGADgIAAQgLAAgIgJgAgKABQgFAFAAAIQAAAFADAFQACAFAEADQAEADADAAQAHAAAEgGQAFgFAAgJQAAgJgFgFQgEgEgHAAQgGAAgFAEg");
	this.shape_51.setTransform(37.9,359.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgSAiQgJgKABgYQAAgOACgJQAEgJAGgFQAGgFAIAAQAGAAAFACQAGADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgEAJgGAFQgGAFgJAAQgLAAgHgJgAgKgcQgFAIAAAUQAAAVAEAHQAFAHAGAAQAHAAAEgHQAFgIABgUQgBgUgFgHQgEgHgHAAQgGAAgEAGg");
	this.shape_52.setTransform(31.3,359.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgSAlQgIgHgBgLIALgBQACAJAEAEQAEAEAGAAQAGAAAFgGQAFgFAAgHQAAgIgEgEQgFgFgHAAIgGABIABgHIACAAQAFAAAFgEQAFgDAAgHQAAgGgDgEQgEgEgFAAQgGAAgEAEQgEAEgBAIIgLgCQACgLAHgGQAHgFAKAAQAFAAAGADQAGADADAFQADAFAAAGQAAAFgDAFQgDAFgGACQAIACAEAEQAFAFAAAIQAAAMgJAHQgIAIgLAAQgLAAgHgGg");
	this.shape_53.setTransform(24.7,359.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAHArIAAgVIgjAAIAAgKIAlg2IAJAAIAAA2IALAAIAAAKIgLAAIAAAVgAgSAMIAZAAIAAglg");
	this.shape_54.setTransform(17.8,359.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAHArIAAgVIgjAAIAAgKIAlg2IAJAAIAAA2IALAAIAAAKIgLAAIAAAVgAgSAMIAZAAIAAglg");
	this.shape_55.setTransform(11.2,359.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_56.setTransform(113.4,347.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAfAAQAJAAAGACQAGADADAGQAEAFAAAFQAAAGgDAFQgDAFgGADQAIABAEAFQAEAFAAAHQAAAHgDAFQgCAFgEADIgJAEQgGACgIgBgAgUAgIAUAAIAIAAQADAAADgCQADgCABgDQACgEAAgEQAAgEgCgDQgDgFgEAAQgFgCgGAAIgUAAgAgUgFIATAAIAJgBQAEgCACgDQADgDAAgEQAAgFgCgDQgDgDgDgBQgEgCgHABIgSAAg");
	this.shape_57.setTransform(107.8,343.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_58.setTransform(102.1,347.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAWAqIAAgoIgrAAIAAAoIgLAAIAAhTIALAAIAAAjIArAAIAAgjIALAAIAABTg");
	this.shape_59.setTransform(96,343.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgCQALgBAGgCIAAgCQAAgHgDgDQgEgDgHgBQgGABgEACQgEADgBAGIgLgBQACgHADgEQAEgDAFgDQAGgCAHAAQAIAAAFABQAEACADAEQADACAAAFIABAKIAAALIAAATQABAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgFgFgAgBADQgHABgDABQgCACgBACQgCACAAADQAAAEAEADQACACAHAAQADAAAFgCQAFgDADgFQABgDAAgHIAAgDIgPADg");
	this.shape_60.setTransform(85,345);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAOAeIAAgbIgbAAIAAAbIgLAAIAAg8IALAAIAAAaIAbAAIAAgaIALAAIAAA8g");
	this.shape_61.setTransform(78.4,345);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAOAeIAAgsIgbAsIgLAAIAAg8IAKAAIAAAuIAbguIAMAAIAAA8g");
	this.shape_62.setTransform(71.7,345);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgmAeIAAg8IAKAAIAAA0IAYAAIAAg0IAJAAIAAA0IAYAAIAAg0IAKAAIAAA8g");
	this.shape_63.setTransform(63.5,345);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAFgBAHIAhAAQgBgHgDgEQgFgHgIAAQgFAAgFAGg");
	this.shape_64.setTransform(55.4,345);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgdAeIAAgJIAFAAIAEAAIACgCIABgKIAAgnIAvAAIAAA8IgLAAIAAgzIgaAAIAAAdIAAAOQgBAEgDACQgDADgGAAIgJgBg");
	this.shape_65.setTransform(48.2,345);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAFgBAHIAhAAQgBgHgDgEQgFgHgIAAQgFAAgFAGg");
	this.shape_66.setTransform(42.2,345);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAeAqIAAhGIgZBGIgJAAIgZhHIAABHIgKAAIAAhTIARAAIAUA6IACANIAFgOIAUg5IAPAAIAABTg");
	this.shape_67.setTransform(33.7,343.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAWAqIAAhJIgrAAIAABJIgLAAIAAhTIBBAAIAABTg");
	this.shape_68.setTransform(21,343.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAXAqIAAhBIgsBBIgLAAIAAhTIAKAAIAABBIAshBIALAAIAABTg");
	this.shape_69.setTransform(12.4,343.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},125).wait(81));

	// buggy
	this.instance_8 = new lib.Tween16("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.4,297,1.142,1.142);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(97).to({_off:false},0).to({y:287,alpha:1},19).to({_off:true},9).wait(81));

	// soska
	this.instance_9 = new lib.Tween13("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(120.4,167,1.374,1.374);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).to({y:177,alpha:1},19).to({_off:true},32).wait(81));

	// Text-2
	this.instance_10 = new lib.Tween9("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(122.5,171);

	this.instance_11 = new lib.Tween10("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(122.5,171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},73).to({state:[]},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},73).wait(133));

	// Text - 1
	this.instance_12 = new lib.Tween11("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(58,121.5);

	this.instance_13 = new lib.Tween12("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(58,121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},73).to({state:[]},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},73).wait(133));

	// Logo
	this.instance_14 = new lib.logo1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(50,7,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(206));

	// White-back
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.357,1],-0.1,-35,-0.1,34.9).s().p("Ay4FdIAAq5MAlxAAAIAAK5g");
	this.shape_70.setTransform(120,236.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.612,1],0.1,-37.9,0.1,38).s().p("AzsF7IAAr1MAnYAAAIAAL1g");
	this.shape_71.setTransform(119.9,218.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70}]}).to({state:[{t:this.shape_71}]},73).to({state:[]},1).wait(132));

	// Blue-background
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#136DB3").s().p("AzDGZIAAsxMAmHAAAIAAMxg");
	this.shape_72.setTransform(121.1,40.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(206));

	// Blue-background
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#136DB3").s().p("AzDGYIAAsvMAmHAAAIAAMvg");
	this.shape_73.setTransform(121.1,360.9);
	this.shape_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(125).to({_off:false},0).wait(81));

	// Photo
	this.instance_15 = new lib.Tween29("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(201.5,310);

	this.instance_16 = new lib.Tween30("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(141.5,310);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},73).to({state:[]},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true,x:141.5},73,cjs.Ease.get(1)).wait(133));

	// Layer 7
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ay1dyQg+AAAAiaMAAAg2uQAAibA+AAMAlrAAAQA+AAAACbMAAAA2uQAACag+AAg");
	this.shape_74.setTransform(120.6,209.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(206));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,199.1,663,403);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
var Alloy = require('alloy'),
	Backbone = Alloy.Backbone,
	_ = Alloy._,
	$;

function postLayout(args) {
	$.id = $.row.id = args.id;
	$.name.text = args.name || '<no name>';
	$.score.text = args.score || 0;
}
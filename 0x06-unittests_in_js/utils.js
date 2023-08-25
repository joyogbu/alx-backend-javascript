const Utils = { 
	calculateNumber: function(type, a, b) {
		if (type == 'SUM') {
			return (Math.round(a) + Math.round(b));
		}
		if (type == 'SUBTRACT') {
			return (Math.round(a) - Math.round(b));
		}
		if (type == 'DIVIDE') {
			const div = Math.round(a) / Math.round(b);
			if (div == 'Infinity' || div == '-Infinity') {
				return ('Error');
			}
			return (div);
		}
	}
};
module.exports = Utils

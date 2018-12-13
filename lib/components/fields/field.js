import props from '../mixins/props'
import data from '../mixins/data'
import methods from '../mixins/methods'
import computed from '../mixins/computed'
import mounted from '../mixins/mounted'
import field from '../../templates/field.jsx'
import watch from '../mixins/watch'

export default function() {
	return {
		render: field,
		mixins: [
			props,
			data,
			methods,
			computed,
			mounted,
			watch
		],
		methods: {
			setValue: function(value) {
				this.curValue = value;
				this.dirty = true;
			},
			updateValue: function(e) {
				this.curValue = e.target.value;
			},
			getValue: function() {
				return this.curValue;
			},
			reset: function() {
				this.wasReset = true;
				this.curValue = '';
			},
			focus: function() {
				this.$el.getElementsByTagName(this.tagName)[0].focus();
			}
		}
	}
}

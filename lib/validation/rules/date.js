export default function(field) {

		if (!field.curValue) return true;

		return field.curValue.isValid();
}

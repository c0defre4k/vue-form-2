import requiredIfBase from './required-if-base'
import hasValue from './has-value'

export default function(that) {

  var required = requiredIfBase(that,'requiredAndShownIf');

  that.shouldShow = required;

  return !required || hasValue(that) || that.fieldType=='checkbox';

}

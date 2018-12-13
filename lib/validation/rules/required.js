import hasValue from './has-value'

export default function(that) {

  if (!that.Rules.required) {
    return true;
  }

  return hasValue(that);
}


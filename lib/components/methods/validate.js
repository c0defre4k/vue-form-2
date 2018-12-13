import between from '../../validation/rules/between'
import digits from '../../validation/rules/digits'
import email from '../../validation/rules/email'
import greaterThan from '../../validation/rules/greater-than'
import smallerThan from '../../validation/rules/smaller-than'
import integer from '../../validation/rules/integer'
import max from '../../validation/rules/max'
import min from '../../validation/rules/min'
import number from '../../validation/rules/number'
import requiredIf from '../../validation/rules/required-if'
import requiredAndShownIf from '../../validation/rules/required-if-and-shown'
import required from '../../validation/rules/required'
import url from '../../validation/rules/url'
import date from '../../validation/rules/date'
import daterange from '../../validation/rules/daterange'
import matches from '../../validation/rules/matches'

var validator = {
  between,
  digits,
  email,
  greaterThan,
  smallerThan,
  integer,
  max,
  min,
  number,
  requiredIf,
  requiredAndShownIf,
  required,
  url,
  date,
  daterange,
  matches
}

var merge = require('merge');

function shouldShow(that, rule) {
  return !that.pristine || ['greaterThan','smallerThan'].indexOf(rule)>-1;
}

export default function() {

 var formError;
 var isValid;

 validator = merge.recursive(validator, this.getForm().opts.customRules);

 for (var rule in this.Rules) {

  if (validator[rule]) {

   isValid = (!this.curValue && rule!='required' && rule!='requiredIf' && rule!='requiredAndShownIf') || validator[rule](this);

   formError = {
    name:this.name,
    rule:rule,
    show:shouldShow(this, rule)
  };

  if (isValid) {
    this.errors = this.errors.filter(function(r) {
      return r!=rule;
    })

    if (this.inForm()) this.removeFormError(formError);

  } else {

    if (shouldShow(this, rule))  {
      if (this.errors.indexOf(rule)==-1)
        this.errors.push(rule);
    }
    if (this.inForm())  {
      this.addFormError(formError,!this.pristine, rule);
    }
  }

}

}

if (this.errors.length) this.hadErrors = true;
}

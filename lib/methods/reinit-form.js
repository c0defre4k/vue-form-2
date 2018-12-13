var clone = require('clone');

export default function() {

    this.fields.forEach(function(field) {
      field.initialValue = clone(field.curValue);
      field.dirty = false;
    });
}


import merge from 'merge'

export default {
  mounted: function() {

    if (this.value)
      this.setValue(this.value);

    if (this.required) {
      this.Rules.required = true;
    }

    this.Rules = merge(this.Rules, this.rules);

    let inForm = this.inForm();

    if (inForm) {

    let form = this.getForm();

      if (!this.getForm().options.sendOnlyDirtyFields)
        form.fields.push(this);

      if (this.getForm().options.sendOnlyDirtyFields) {

       this.$watch('dirty', function(isDirty) {
        if (isDirty) {
          form.fields.push(this);
        } else {
           form.fields =  form.fields.filter((field) => field.name!=this.name)
        }

      }.bind(this));

     }

     let v = this.getForm().validation;

     if (v.rules && v.rules.hasOwnProperty(this.name)) {
      this.Rules = v.rules[this.name];
    }

    if (typeof v.messages!='undefined' &&  v.messages.hasOwnProperty(this.name))
      this.messages = v.messages[this.name];

    setTimeout(function() {
      this.validate();
    }.bind(this),0);

    if (form.relatedFields.hasOwnProperty(this.name))
      this.foreignFields = form.relatedFields[this.name].map(function(name) {
        return form.getField(name);
      });


    if (form.triggeredFields.hasOwnProperty(this.name))
     this.triggeredFields = form.triggeredFields[this.name].map(function(name) {
      return form.getField(name);
    });

   this.handleTriggeredFields();

 }
}
}

import merge from 'merge'
import formTemplate from './lib/templates/form.jsx'
import opts from './lib/computed/opts'
import statusBar from './lib/components/status-bar'
import Submit from './lib/components/submit'

import labelClass from './lib/computed/label-class'
import fieldClass from './lib/computed/field-class'
import hasErrors from './lib/computed/has-errors'
import submit from './lib/methods/submit'
import formData from './lib/methods/form-data'
import getField from './lib/methods/get-field'
import showAllErrors from './lib/methods/show-all-errors'
import reinitForm from './lib/methods/reinit-form'
import registerInterfieldsRules from './lib/methods/register-interfields-rules'
import registerTriggers from './lib/methods/register-triggers'
import childrenOf from './lib/methods/children-of'
import getStatusBar from './lib/methods/get-status-bar'
import dispatch from './lib/methods/dispatch'

import text from './lib/components/fields/text'
import password from './lib/components/fields/password'
import fields from './lib/templates/fields'
import Email from './lib/components/fields/email'
import Number from './lib/components/fields/number'
import File from './lib/components/fields/file'
import TextArea from './lib/components/fields/textarea'
import Select from './lib/components/fields/select'
import ButtonsList from './lib/components/fields/buttons-list'
import Date from './lib/components/fields/date'
import Checkbox from './lib/components/fields/checkbox'

const install = function(Vue, globalOptions, customFields) {

  customFields = customFields?customFields:{};

  var vfForm = {
    render: formTemplate,
    props: {
      name:{
        type:String,
        required:false
      },
      client:{
        type:Boolean,
        required:false,
        default: false
      },
      ajax: {
        type: Boolean,
        required: false,
        default: false
      },
      action: {
        type: String
      },
      method: {
        type: String,
        required:false,
        default: 'POST'
      },
      validation: {
        type: Object,
        required:false,
        default: function() {
          return {
          }
        }
      },
      triggers:{
        type: Object,
        required:false,
        default: function() {
          return {
          }
        }
      },
      options:{
        type: Object,
        required:false,
        default: function() {
          return {
          }
        }
      }
    },

    created: function() {

      if (!this.ajax && !this.client) {
        var payload = this.options.additionalPayload;
        for (var key in payload) {
          this.additionalValues.push({name:key,value:payload[key]});
        }
      }

      this.registerInterfieldsRules();
      this.registerTriggers();

    },
    data: function() {
      return {
        globalOptions: globalOptions?globalOptions:{},
        templates: merge.recursive(fields, customFields),
        isForm: true,
        fields:[],
        additionalValues:[],
        errors:[],
        relatedFields:{},
        triggeredFields:{},
        sending:false
      }
    },
    computed: {
      labelClass,
      fieldClass,
      hasErrors,
      server: () => {
        return !this.ajax && !this.client;
      },
      opts,
      pristine: function() {
        return this.fields.length==0;
      }
    },
    methods: {
      submit,
      formData,
      getField,
      showAllErrors,
      reinitForm,
      registerInterfieldsRules,
      registerTriggers,
      childrenOf,
      getStatusBar,
      dispatch,
      getOptions: opts
    }

  }

  Vue.component('vf-form',vfForm);

  Vue.component('vf-text',text());
  Vue.component('vf-email',Email());
  Vue.component('vf-number', Number());
  Vue.component('vf-password',password());
  Vue.component('vf-file',File());
  Vue.component('vf-textarea',TextArea());
  Vue.component('vf-select',Select());
  Vue.component('vf-buttons-list', ButtonsList());
  Vue.component('vf-date',Date());
  Vue.component('vf-checkbox',Checkbox());

  Vue.component('vf-status-bar', statusBar);
  Vue.component('vf-submit', Submit)


}

export default {
  install
}

import clone from 'clone'

export default {
  data: function() {
  return {
    isField:true,
    curValue:'',
    tagName:'input',
    messages:{},
    isRequired:false,
    shouldShow:true,
    dirty:false,
    pristine:true,
    wasReset:false,
    initialValue:clone(this.value),
    hadErrors:false,
    errors:[],
    relatedFields:[],
    triggeredFields:[],
    Rules:{}
  }
 }
}

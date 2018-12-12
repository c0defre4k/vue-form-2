import ajaxSubmitter from'./submitters/ajax'
import clientSubmitter from './submitters/client'
import serverSubmitter from './submitters/server'

export default function(vm) {

  if (vm.ajax) return ajaxSubmitter(vm);
  if (vm.client) return clientSubmitter(vm);

    return serverSubmitter(vm);

}

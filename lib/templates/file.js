export default function(h) {
let value = '';
var val = this.value;

if (val)
value = <span class="VF-Field__file_uploaded glyphicon glyphicon-ok"
        title={val}>
        </span>

return <span class="VF-Field__file-upload">
  <span class='glyphicon glyphicon-upload VF-Field__file-upload-icon'></span>
  <input disabled={this.disabled}
         type="file"
         name={this.Name}
         value={this.value}
         class="form-control-file" />
         {value}
</span>

}

export default function(h) {
const props = {
    placeholder: this.placeholder,
    disabled: this.disabled
}
if (this.rows) {
    props.rows = this.rows
}
return <textarea
        name={this.name}
        id={"textarea_" + this.name}
        class="form-control"
        on-change={this.updateValue.bind(this)}
        on-keyup={this.updateValue.bind(this)}
        {...props}>
        	{this.curValue}
        </textarea>

}

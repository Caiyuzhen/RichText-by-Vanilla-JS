const editor = document.querySelector('#editor')
// console.log(editor.childElementCount)
// console.log(editor.children, editor.children[0].innerHTML = 'ABC')



//⚡️使用 execCommand 方法能够编辑 contenteditable 内部元素的属性!!
function action(self) {
	if(!action){
		console.log("没有选择值")
		return
	}
	// console.log(self.getAttrData('data-value'))//点击后，获得元素身上的属性（data-value）然后传递给下面的方法！
	// window.a = self
	console.log(self)

	// execCommand('属性',false,true)
	let bool = document.execCommand(self.getAttribute('data-event') , false , self.getAttribute('data-value'))
	console.log(bool);
}
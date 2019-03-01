//1.处理弹出的登录框
hideByClassName('login-mark')
hideByClassName('login-box')

//2.处理“阅读更多”
hideByClassName('hide-article-box')
expandContent()

//3.底部登录栏
hideByClassName('pulllog-box')

//4.左边栏
//hideByClassId('asideFooter')
// hideByClassId('asideNewComments')//最新评论

function hideByClassName(className){
	let elements = document.getElementsByClassName(className);
	if(elements && elements.length > 0){
		elements[0].style.display='none'
	}
}

function hideByClassId(idName){
	let element = document.getElementById(idName);
	if(element){
		element.style.display='none'
	}
}

function expandContent(){
	let element = document.getElementById('article_content');
	if(element){
		element.style.height='100%'
	}
}
document.getElementById('wrap')
document.querySelector("#wrap")

document.getElementsByClassName('container')
document.querySelector('.container')
document.querySelectorAll(".container")

document.getElementsByTagName('div')
document.querySelector('div')
document.querySelectorAll('div')

// <div data-product-id="G123">Guitar</div>
// $('div').data('product-id')
document.querySelector('div').dataset.productId //'G123'

//속성변경
document.querySelector('div').dataset.productId = 'G456'

// dataset 은 IE 11미만에서는 미작동
// getAttribute() 와 setAttribute() 함수로 호환
document.querySelector('div').getAttribute('data-product-id') //'G123'

// ready() 함수
document.addEventListener('DOMContentLoaded', () => {
    // start ..
})

// click 이벤트 
documnet.querySelector('a').addEventListener('click', evt => {
    // 이벤트 처리 ...
})

// emit(방출) 이벤트
documnet.querySelector('a').click()

// 커스텀 이벤트
// $('a').trigger('@click')
const evt = new CustomEvent('@click')
documnet.dispatchEvent(evt)

const evt = new CustomEvent('@click', {detail: ' some data'})
document.dispatchEvent(evt)

// IE 11 이하 버전에서는 CustomEvent 미지원
document.querySelector('a').addEventListener('@click', evt => {
    evt.detail // 'some soda'
})

const evt = document. createEvent('CustomEvent')
//매개변수 ( 이벤트명, 버블, 취소가능여부 , 전달할 데이터 )
evt.initCustomEvent('@click', true, false, 'some data')
document.dispatchEvent(evt)

// css 클래스 추가하기
// $('#foo').addClass('active')
document.querySelector('foo').classList.add('active');

document.querySelector('#foo').className += ' active';

// $('#foo').\\.text('Hello Chris;)
document.querySelector('#foo').innerHTML = 'Hello Chris'

// $.ajax('/resource').then(success, fail)
const req = new XMLHttpRequest()
req.open('GET', '/resource', true);
req.onreadystatechange = () => {
    if ( req.readyState === 4) {
        if( req.status === 200) success()
        else faile()
    }
}
req.send(null)

/*  엘레멘트 배열 순회  / j-query each()함수
$('li').each(() => {
    $(this) // li element
    })
*/
Array.from(document.querySelectorAll('li')).forEach(li => {

})

// const obj3 = $.extend(obj, obj2)
const obj3 = Object.assign({}, obj1, obj2)
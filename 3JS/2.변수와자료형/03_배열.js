
window.onload = function(){

    let area = document.getElementById('area1');
    let btn1 = document.getElementById('btn1');


    // btn1 요소에 click이벤트가 발생하면 함수를 실행
    btn1.addEventListener('click',function(){
        // area.innerHTML = '실행!'

        let array1 = new Array(); // [] , 빈배열 생성
        let array2 = new Array(3); // [empty * 3]
        let array3 = new Array('빨강', '파랑', '노랑', '초록');
        let array4 = ['java', 'oracle', 'html5', 'css3', 'javascript'];

        console.log('array1 : ', array1);
        console.log('array2 : ', array2);
        console.log('array3 : ', array3);
        console.log('array4 : ', array4);
        
        // 여러가지 타입을 입력
        let array5 = [
            '고경희'            // 문자
            , 20                // 숫자
            , true              // 논리값
            , [1, 2, 3, 4]      // 배열
            , function(){       // 함수
                return 1
            }
            , {}                // 객체
        ];

        console.log('array5 : ', array5);

        // 2. 배열에 값을 추가하기
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';
        array1[3] = '망고';
        array1[4] = '포도';

        console.log('-----------', array1);

        area.innerHTML = `array1(빈배열)에 값 대입 : [${array1}]<br>`
                        + `array1.length : ${array1.length} <br><br>`;

        // 배열의 길이를 3으로 정했지만 길이가 자동으로 늘어남
        array2[0] = '자동차';
        array2[1] = '비행기';
        array2[2] = '기차';
        array2[3] = '배';

        area.innerHTML += `array1(빈배열)에 값 대입 : [${array2}]<br>`
                        + `array1.length : ${array2.length} <br><br>`;

        console.log('-----------', array2);

    });

    // 2. 배열의 메소드
    // 1) indexOf() : 항목의 index 번호를 반환
    let area2 = document.getElementById('area2');
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click',function(){
        // area2.innerHTML = '실행완료';
        let array = ['귤', '복숭아', '사과', '망고', '자몽'];

        area2.innerHTML = `array: [${array}]<br><br>`;
        // 복숭아의 index
        area2.innerHTML += `복숭아가 있는 배열의 인덱스 : ${array.indexOf('복숭아')}<br>`;
        // 자몽의 index
        area2.innerHTML += `자몽이 있는 배열의 인덱스 : ${array.indexOf('자몽')}<br>`;
    
    });

    let area3 = document.getElementById('area3');
    let btn3 = document.getElementById('btn3');

    // 2) concat() : 배열을 연결하여 반환
    // 배열1.concat(배열2)
    // 배열1의 요소, 배열2의 요소를 결합하여 새로운 배열을 만들어 반환
    // 원본에 영향을 미치지 않는다.
    btn3.addEventListener('click',function(){
        // area3.innerHTML = '실행됐다네';

        let array1 = ['귤', '사과'];
        let array2 = ['바나나', '수박', '오렌지'];

        area3.innerHTML = `array1 : [${array1}] <br>`;
        area3.innerHTML += `array2 : [${array2}] <br>`;
        
        area3.innerHTML += `결합 : [${array1.concat(array2)}]<br>`;
        // 원본에 영향을 미치지 않는다.
        area3.innerHTML += `array1 : [${array1}]<br>`;

        area3.innerHTML += `결합 : [${array2.concat(array1)}]<br>`;
        // 원본에 영향을 미치지 않는다.
        area3.innerHTML += `array2 : [${array2}]<br>`;

    });

    // 3) join() 배열의 요소들을 결합하여 문자열로 반환
    // 매개값으로 구분자를 입력할 수 있다
    // array.toString() 과 별반 다르지 않지만 구분자를 이용하여 구분할수있다
    let area4 = document.getElementById('area4');
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click',function(){
        // area4.innerHTML = '실행이요';
        let array = ['서울', '강원', '경기'];

        area4.innerHTML = `array : [${array}] <br>`;
        area4.innerHTML += `typeOf(array) : [${typeof(array)}]<br>`;
        area4.innerHTML += `array.toString() : [${array.toString()}] <br>`;
        // 배열 -> 문자열
        area4.innerHTML += `array.join() : [${array.join()}]<br>`;
        area4.innerHTML += `array.join(|) : [${array.join('|')}]<br>`;
        area4.innerHTML += `typeOf(array.join() : [${typeof(array.join('|'))}]<br>`;

        // 공백을 구분자로 문자열 생성
        let str = array.join(' ');
        // 문자열 -> 배열
        str.split(' ');
        area4.innerHTML += `str.split(' ') : [${str.split(' ')}]<br>`;
        area4.innerHTML += `typeof(str.split(' ')) : [${typeof(str.split(' '))}]<br>`;
    });

    let area5 = document.getElementById('area5');
    let btn5 = document.getElementById('btn5');

    // 4) reverse()
    /* 원본에 영향을 미치는 메소드
        Array.of(10, 5, 3, 6)
        (4) [10, 5, 3, 6]
        arr = Array.of(10, 5, 3, 6)
        (4) [10, 5, 3, 6]
        arr.reverse()
        (4) [6, 3, 5, 10]
        arr
        (4) [6, 3, 5, 10]
    */
    btn5.addEventListener('click',function(){
        // area5.innerHTML = '실행합니다';

        // ES6 추가된 배열 생성 메소드

        let array = Array.of(10, 5, 3, 6);

        area5.innerHTML = `array : [${array}] <br><br>`;
        // 주의!!! 함수를 실행하기 위해서는 ()를 붙여 주어야함
        area5.innerHTML += `array : [${array.reverse()}] <br><br>`;
        area5.innerHTML += `array : [${array}] <br><br>`;

    });

    let area6 = document.getElementById('area6');
    let btn6 = document.getElementById('btn6');

    // 5) sort()
    /*
    매개변수가 없는 경우 ASCII 문자 오름차순으로 정렬
    원본 배열에 영향을 미치는 메소드
    */
    btn6.addEventListener('click',function(){
        // area6.innerHTML = '실행열튜플컬럼';
        let array1 = [10, 35, 230, 100, 885];
        let array2 = ['Cherry', 'apple', 'Apple', 'Banana', 'Melon'];

        area6.innerHTML += `array1 : [${array1}]<br>`;
        area6.innerHTML += `typeof(array1) : [${typeof(array1)}]<br>`;
        area6.innerHTML += `array2 : [${array2}]<br>`;
        area6.innerHTML += `typeof(array2) : [${typeof(array2)}]<br>`;
        area6.innerHTML += `array1.sort() : [${array1.sort()}]<br>`;
        area6.innerHTML += `typeof(array2) : [${typeof(array1.sort())}]<br>`;
        area6.innerHTML += `array2.sort() : [${array2.sort()}]<br>`;
        area6.innerHTML += `typeof(array2) : [${typeof(array2.sort())}]<br>`;
        area6.innerHTML += `array1 : [${array1}]<br>`;
        area6.innerHTML += `typeof(array1) : [${typeof(array1)}]<br>`;
        area6.innerHTML += `array2 : [${array2}]<br>`;
        area6.innerHTML += `typeof(array2) : [${typeof(array2)}]<br>`;

        // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        array1.sort(function(left, right){
            return left - right; //오름차순정렬
        });
    
        area6.innerHTML += `array1 오름차순 정렬 : [${array1}] <br>`;

        array1.sort(function(left, right){
            return right - left; // 내림차순정렬
        });

        area6.innerHTML += `array1 내림차순 정렬 : [${array1}] <br>`;
        area6.innerHTML += `array2 내림차순 정렬 : [${array2.sort().reverse()}] <br>`;

    });


    let area7 = document.getElementById('area7');
    let btn7 = document.getElementById('btn7');

    // 6) push(), pop()
    /*
    
    */
    btn7.addEventListener('click',function(){
        // area7.innerHTML = '실행';
        let array = ['아이유', 'GD', '방탄소년단', '박효신'];

        area7.innerHTML += `array : [${array}]<br>`;
        // 배열의 요소를 추가 후 길이를 반환
        console.log('push()', array.push('coldplay'));
        area7.innerHTML += `array : [${array}]<br>`;
        // 배열의 요소를 추가 후 길이를 반환
        console.log('push()', array.push('임창정'));
        area7.innerHTML += `array : [${array}]<br>`;

        // 배열의 마지막요소를 반환하고 제거
        area7.innerHTML += `array.pop() : ${array.pop()} <br>`;
        area7.innerHTML += `array : [${array}]`;

    });


    let area8 = document.getElementById('area8');
    let btn8 = document.getElementById('btn8');

    // 7) shift(), unshift
    /*
    
    */
    btn8.addEventListener('click',function(){
        // area8.innerHTML = '실행이유';
        let array = ['아이유', '방탄소년단', '크러쉬', '박효신'];

        area8.innerHTML += `array : [${array}]<br>`;
        // 맨앞에 요소를 추가 후 요소의 개수를 리턴한다.
        array.unshift('에스파');
        area8.innerHTML += `array에 '에스파' unshift 후 : [${array}]<br>`;
        // unshift 후 요소의 개수를 리턴한다.
        array.unshift('NCT127');
        area8.innerHTML += `array에 'NCT127' unshift 후 : [${array}]<br>`;

        // 맨앞에 요소를 반환 후 제거
        area8.innerHTML += `array.shift() : ${array.shift()}<br>`;
        area8.innerHTML += `array에 shift() 후 : [${array}]<br>`;
        area8.innerHTML += `array.shift() : ${array.shift()}<br>`;
        area8.innerHTML += `array에 shift() 후 : [${array}]<br>`;
    });


    let area9 = document.getElementById('area9');
    let btn9 = document.getElementById('btn9');

    // 8) slice(), splice()
    /*
    
    */
    // 함수에 매개변수에 함수담기..
    btn9.addEventListener('click',function(){
        // area9.innerHTML = '실행히햐';
        let array = ['java', 'oracle', 'HTML5', 'CSS3', 'JS'];

        area9.innerHTML += `array : [${array}]<br>`
        // array.slice(시작인덱스, 끝인덱스)
        // 시작인덱스 ~ (끝인덱스 -1) 요소를 추출
        // 끝인덱스는 포함하지 않습니다.
        // 원본 배열에는 영향을 미치지 않습니다.
        area9.innerHTML += `array.slice(2, 4) : [${array.slice(2, 4)}]<br>`;
        area9.innerHTML += `array : [${array}]<br>`;
        area9.innerHTML += `array.slice(0, 3) : [${array.slice(0, 3)}]<br>`;


        // array.slice(2, 0, 'spring')
        // 시작인덱스, 삭제할 갯수, 추가할 요소
        // 반환 : 삭제된 요소
        // 원본 배열에 영향을 미치는 메소드이다.
        area9.innerHTML += `array.splice(2, 0, 'spring', 'mybatis) :`
                            + `[${array.splice(2, 0, 'spring', 'mybatis')}]<br>`;
        area9.innerHTML += `array : [${array}]<br><br>`;


        
    });




};

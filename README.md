recoil, query 세팅하기

유틸 파일에 atoms 설정

타입 지정하기 제네릭 타입 조합하기

.env로 baseurl 설정


api.ts
endsWith() 특정 문자열로 끝나는지 확인

new URL() 쿼리파라미터 제어용으로만 썼는데 뭔가 더 있는듯

const url = new URL(path.replace(/^\//, ""), base);
(/^\//, "") << 맨 앞의 슬래시 제거해서 문자열 앞에 / 하나만 존재하게 만들기

Object.entries() 객체를 key value 형태의 배열로 바꿔줌

async와 Promise, await이란
비동기 프로그래밍인데 작업이 끝나기 전에 기다리는게 아니라 다른 코드를 실행 또는 기다리는 동안 로딩 UI를 보여주려고

await는 결과 나오기 전까지 async 함수 내부 실행을 그 줄에서 기다렸다가 결과 나오면 결과를 반환한다

Promise는 미래에 결과가 들어올 상자다
상태는 진행 중(pending), 성공(fulfilled), 실패(rejected)로 나뉘고
지금 당장은 결과가 없어도 then이나 await을 통해 결과를 받을 위치를 지정해둘 수 있다.

async function은 택배 주문처럼 Promise(결과 상자)를 생성하고,
await은 그 택배가 도착할 때까지 해당 지점에서 기다렸다가 상자를 여는 역할이다. Promise는 도착하지 않은 미래의 결과를 표현하는 상자다.

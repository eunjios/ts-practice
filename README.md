# 타입스크립트 간단한 예제들
> 타입스크립트를 빠르게 배워보자

## Why TypeScript?
1. Strong type 언어에 익숙한 개발자?
2. **버그를 줄이고** 생산성을 높이자
    - JS는 에러에 너무 관대하다.
    - 개발하는 중에는 에러가 발생하지 않을 수 있다. 그만큼 실행 중에 예상치 못한 버그가 발생하게 될 것..! (유저로부터 피드백을 받고 고쳐야 하는 상황 🤯)

## TypeScript가 뭔데?
- 쉽게 말해서 JS의 에러를 방지하는 보호장치
- TS는 Node.js나 브라우저에서 실행될 수 없다. 즉, JS로 변경되어야 실행이 가능한데, 타입스크립트 컴파일러가 TS를 JS로 트랜스파일링 한다.

## 중요 개념
- optional
- alias
- readonly
- tuple
- unknown/void/never
- call signature
- overloading
- generic
    ```ts
    // React에서의 generic
    type Todo = { id: number; text: string; done: boolean };
    const [todos, setTodos] = useState<Todo[]>([]);
    ```


## class
- TS에서는 JS에서 constructor 내부에 `this.prop = prop`과 같은 (번거로운) 코드를 작성하지 않아도 된다.
- 프로퍼티와 메서드를 정의할 때 사용할 수 있는 키워드는 다음과 같다. 키워드에 따라 접근 범위가 달라진다.
    | 키워드 | 해당 클래스 내부 | 자식 클래스 내부 | 인스턴스 |
    | :---: | :---: | :---: | :---: |
    | public <br> (default) | O | O | O |
    | private | O | X | X |
    | protected | O | O | X | 


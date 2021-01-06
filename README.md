# One-Tooth Project

원메딕스 인더스트리 1팀 토이프로젝트


## 개발스택
* Next.js
-React 를 이용하여 Client Side Rendering (CSR) 와 Server Side Rendering (SSR) <br/>
를 쉽게 혼합 하여 빠른 성능 을 낼 수 있게 도와주는 프레임워크.
* Typescript
-Javascript의 type을 엄격하게 지킬 수 있도록 도와줌.
* Redux-saga
-리액트/리덕스 애플리케이션의 사이드 이펙트, 데이터 fetching/캐시접근하지 않는 비동기 동작을,<br/>
더 쉽고 좋게 만드는 것을 목적으로 하는 라이브러리.


## nextjs 

```bash
npx create-next-app
```

## typescript

```
npm install --save-dev typescript
npm install --save-dev @types/react @types/react-dom @types/node
```
Next.js는 현재 TypeScript에 대한 내장 지원이 있으므로 <br/>
@zeit/next-typescript을 사용할 필요가 없었다. 
## redux-saga
```
    "next-redux-wrapper": "^6.0.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-redux": "^7.2.2",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3",
    "reselect": "^4.0.0"
```
**참고

next-redux-wrapper가 saga를 지원, <br/>
next-redux-saga을 사용할 필요가 없었다. 

https://github.com/vercel/next.js/tree/canary/examples/with-redux-saga

## babel 설정 

## prettier 설정

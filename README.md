# Backend

> **설치 & 실행**
> - 설치 : npm install
> - 테이블 생성 : sequelize db:create
> - 실행 : nodemon app

## DB 테이블
### 1. users (사용자 정보 테이블)
- userName : 사용자 이름
- userEmail : 사용자 이메일
- userPassword : 사용자 비밀번호
- investType : 투자 타입
- created_at : 가입 날짜

### 2. stocks (종목 정보 테이블)
- stockName : 종목 이름
- stockPrice : 현재가
- stockOpen : 시가 (장 열리고 가장 처음으로 매매된 가격)
- ROF : 등락률
- amountTransaction : 누적 거래 대금
- stockHigh : 고가
- stockLow : 저가
- interestStatus : 관심 종목 여부 (BOOLEAN)

### 3. selected (선택 종목 정보 테이블)
- interestStock : 관심종목
- upperLimit : 상한가
- lowerLimit : 하한가
- holdStock : 보유종목
<br/>

## API 주소
### 1. 사용자 정보 관리 /auth
- 회원가입 : /auth/register
- 로그인 : /auth/login
- 로그아웃 : /auth/logout

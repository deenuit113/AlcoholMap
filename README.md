# [GreenBottle](https://greenbottle.site) <span style="font-size:18px; color: green;">v 1.0.5-beta</span> 
> 애주가들을 위한 주점 가이드 웹 서비스
---
## 기획의도
> 애주가들만을 위한 편리한 주점 찾기 / 숨겨진 나만의 술집 공유
---
## 세부기능
|구분|기능|설명|
|:---|:---|:---|
|1|주변 주점 찾기|지도 드래그로 편리한 검색, 반경 설정하여 가까운 주점 검색, 키워드로 주변 주점 검색|
|2|리뷰 기능|리뷰와  평점 남기기, 평점/리뷰별 주점 정렬|
|3|찜 기능|찜하기 기능을 통한 나만의 술집 목록 만들기||
|4|SNS 기능|좋아요/팔로우 기능, 업적 달성하여 뱃지 획득 기능 [추후 기능 추가]||
|5|주점 추천|주변의 주점 추천, 지역별 Top N주점 표시 [추후 기능 추가]||
---
## ERD 설계 (v1.0.0)
![image](https://github.com/deenuit113/GreenBottle/assets/125295095/a126effd-af6d-4a6a-8401-0fbf8f5c4a2c)


---
## 사용 예시 Mobile Ver.
- **시작 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/b304236b-7f58-4bd4-b98b-b9c1f9b33615/>
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/029945f1-447d-4227-a361-e430ca523793/>
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/e1581e4c-c3ce-4762-8e28-31db8feb99d5/>

```
사이트 접속시 화면 - 이미지 캐러셀로 간단한 사이트 사용법 안내
```

- **회원가입 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/b1835cf5-90f3-4bdd-8c8d-becc9ef78142/>

```
회원가입 화면 - 이메일, 비밀번호, 닉네임, 주량 기입
```

- **로그인 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/baf4508a-8853-4784-824e-81cbeb4e61ce/>

```
로그인 화면 - 이메일, 비밀번호로 로그인
```

- **메인 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/a50b6257-cc65-4a87-9fb5-c40aa8d79490/>
<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/3ed47f86-ef3b-4558-b70e-ea610a65eeea/>
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/8743cc26-82ea-45f1-8570-93a3e4726487/>

```
메인 화면 - Kakao Map Api 이용해서 지도와 기능 사용
  1. 검색 기능 - 드래그 이용하여 검색, 키워드 검색, 반경 설정하여 검색
  2. 리뷰 기능 - 리뷰/평점 남기기 기능, 평점별 마커 다르게 표시
  3. 도움말 기능 - 검색 사용법, 마커 정보 표시
```

- **마이페이지 화면**

<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/64860c23-e287-4c82-b686-c3566ba40155/>

```
마이페이지 화면 - 회원정보 표시
  1. SNS 기능 - 팔로우 기능
  2. 찜한 가게, 평가한 가게 목록 - 슬라이더로 구현
  2. 뱃지 기능 - 업적 달성하여 다른 사용자에게 표시되는 뱃지 [추후 추가]
```
- **지역별 추천 술집 Top 10 화면**

<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/566f2146-efe6-4294-9217-daba78ee8419/>
<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/60f59794-7f4b-4edf-90c7-b203dc312a44/>

```
지역별 추천 술집 Top 10 화면 - 전국과 서울 지역별로 상위 10개의 가게 추천
  1. 지역 선택 - TopoJson 데이터를 사용하여 d3로 구현
```
---
## 사용 예시 Web Ver.
- **시작 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/31c8e453-1db0-4e62-9535-54b364267c97/>

```
사이트 접속시 화면 - 이미지 캐러셀로 간단한 사이트 사용법 안내
```

- **회원가입 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/45369c35-8238-4abd-82b4-6b371cdba909/>

```
회원가입 화면 - 이메일, 비밀번호, 닉네임, 주량 기입
```

- **로그인 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/7c92813c-9e6d-457e-929e-9fffc9ca13e8/>

```
- 로그인 화면 - 이메일, 비밀번호로 로그인
```

- **메인 화면**
  
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/98263b78-6db7-4773-b36b-a77cea30c6f0/>
<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/8d8dd56a-1cec-4cac-a1df-e5bef4dc62c7/>
<img src=https://github.com/deenuit113/GreenBottleFE/assets/70631016/b8d7b91a-2715-4388-abff-5fb02f316e45/>

```
메인 화면 - Kakao Map Api 이용해서 지도와 기능 사용
  1. 검색 기능 - 드래그 이용하여 검색, 키워드 검색, 반경 설정하여 검색
  2. 리뷰 기능 - 리뷰/평점 남기기 기능, 평점별 마커 다르게 표시
  3. 도움말 기능 - 검색 사용법, 마커 정보 표시
```

- **마이페이지 화면**

<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/1bbd3701-ae73-4e2b-ae6d-89aa203a2897/>

```
마이페이지 화면 - 회원정보 표시
  1. SNS 기능 - 팔로우 기능
  2. 찜한 가게, 평가한 가게 목록 - 슬라이더로 구현
  2. 뱃지 기능 - 업적 달성하여 다른 사용자에게 표시되는 뱃지 [추후 추가]
```
- **지역별 추천 술집 Top 10 화면**

<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/514e1ff0-537f-4ea8-bb30-28612ebef93a/>
<img src=https://github.com/deenuit113/GreenBottle/assets/70631016/f90b43b4-0e6f-4154-ab63-84964939efa9/>

```
지역별 추천 술집 Top 10 화면 - 전국과 서울 지역별로 상위 10개의 가게 추천
  1. 지역 선택 - TopoJson 데이터를 사용하여 d3로 구현
```
---
## 기술 스택

#### 프론트엔드: NextJs. TypeScript, HTML, CSS, Vercel
#### 백엔드: Spring boot, MySQL, JPA, AWS (EC2, RDS, Route 53)
---
## 개발 일정

### ~ 24/02/24 (프로젝트 시작 전)
#### **기획:**
- **개발자의 요구사항에 따라 기능 구현 기획**
  
#### **협업:**
- **원활한 소통 위한 협업툴로 슬랙 선정**
  
#### **프론트엔드:**
- **개발 환경 설정**
- **와이어 프레임 구상**
  
#### **백엔드:**
- **개발 환경 설정**


### 24/02/25 ~ 24/03/02 (1주차)
#### **협업:**
- **브랜치&커밋 규약 세우기**
  
#### **프론트엔드:**
- **뷰 및 컴포넌트 구현**
  
#### **백엔드:**
- **엔티티 설계**
- **회원가입 기능 구현**
  



### 24/03/03 ~ 24/03/09 (2주차)
#### **프론트엔드:**
- **백엔드와 통신 위한 API 요청 관리**

  토큰, rewrite 등 통신 관련 설정 관리
- **로그인 상태별 뷰와 컴포넌트 구성**
- **장소별 리뷰 및 평점 작성 기능 구현**

#### **백엔드:**
- **로그인 기능 구현**
- **jwt, 스프링 시큐리티 이용**
- **사용자에 대한 CRUD 구현**



### 24/03/10 ~ 24/03/16 (3주차)
#### **프론트엔드:**
- **반응형 웹 구현**
- **성능 향상 위한 컴포넌트 내용 수정**
  로그인 및 회원가입 입력창 react-hook-form으로 변경
- **배포 전 API 통신 점검**
  
#### **백엔드:**
- **기본적인 리뷰 기능 구현**
- **jwt 구성 수정**


### 24/03/17 ~ 24/03/23 (4주차)
#### **공통:**
- **가비아에서 도메인 구매**
  
#### **프론트엔드:**
- **프론트엔드 배포 & 도메인 연결**
- **맵 페이지 기능 추가**
  검색 결과 정렬 기능 추가
  도움말 토글 추가
  
#### **백엔드:**
- **배포 전 로컬에서 API 테스트**
- **초기 맵 화면 리뷰 불러오기 기능 구현**
- **AWS EC2, RDS, Route 53 + 가비아 도메인 서버를 사용한 프로젝트 배포**


### 24/03/24 ~ 24/03/30 (5주차)
#### **프론트엔드:**
- **장소 모달창 댓글 좋아요 기능 추가**


### 24/03/31 ~ 24/04/06 (6주차)
#### **프론트엔드:**
- **마이페이지 프로필 사진 편집 기능 추가**
- **찜목록 & 평가한 가게 리스트 슬라이더 뷰 및 컴포넌트 추가**


### 24/04/07 ~ 24/04/13 (7주차)
#### **프론트엔드:**
- **지역별 (전국, 서울) 추천 술집 뷰 및 컴포넌트 추가**
- **유저 정보 페이지 뷰 및 컴포넌트 추가**
- **유저 팔로우 기능 추가**

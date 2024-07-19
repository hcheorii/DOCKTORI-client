# 📔 서비스 소개

<img width="1710" alt="image" src="https://github.com/user-attachments/assets/5d0c1bb0-7044-4dc8-b7a6-3d46e5e724af">


- ** 전체 프로젝트 기간 :** 2024-6-24 ~ 2024-7-10

 <br>



DOCKTORI는 독서를 좋아하거나 독서 습관을 들이고 싶은 사람들을 위한 독서 기록 서비스입니다. <br> 
자신만의 학습 스타일에 맞게 **집중 시간, 쉬는 시간, 큰 휴식 시간,** 그리고 **뽀모도로 사이클 횟수**를 설정하여 타이머를 생성해보세요! <br> 

- 사용자는 읽고 있는 책과 읽은 책을 분리하여 관리할 수 있고 기억에 남는 구절과 서평을 남길 수 있습니다.
- 마음에 드는 도서는 즐겨찾기에 추가하여 나중에 다시 찾아볼 수 있는 서비스를 제공하는 자신만의 서재서비스 입니다.

<br>



## 🛠️ 기술스택
![image](https://github.com/user-attachments/assets/f6e253d5-790a-4344-913f-f04617d65ea1)

<br>
<br>

#  페이지별 기능
###  메인페이지
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/a2ed251f-6f1c-48e3-bda0-607072e320dc">
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/7a18bd58-4963-4e2b-abad-ac28f8dcd847">


- 닉네임 및 목표 설정 기능
- 독서 현황 확인 기능을 통해 읽는 중인 도서의 개수, 완독한 도서의 개수를 한눈에 확인할 수 있습니다.
- 읽고 있는 도서와 다 읽은 도서의 일부를 캐러셀 슬라이드 형식으로 확인할 수 있습니다.
- 도서 검색 및 등록 기능을 통해 알라딘의 API를 호출하여 결과를 받아오고 원하는 도서를 클릭시 나만의 서재에 추가할 수 있습니다.
<br>

###  회원가입
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/933d55af-1582-4b2b-9ac5-231eac116bec">

- 첫 페이지에서 시작해보기 버튼을 클릭하여 로그인 화면으로 이동 후 아래의 링크를 통해 이동할 수 있습니다. 
- 회원가입 시 입력받은 데이터를 토대로 유효성 검사를 진행 후 에러가 발생한다면 안내 메시지를 통해 오류가 출력됩니다.
  - 이메일 형식 요구
  - 빈 값이면 안됩니다.
- 회원가입이 성공한다면 로그인 페이지로 이동합니다.

<br>

###  로그인
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/1a3d8b4e-714f-477b-855b-886b0dcd9080">


- 잘못된 정보를 입력할 경우에 안내메시지를 통해 오류 메시지가 출력됩니다.


<br>

###  로그아웃
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/c31b49ed-5770-43af-8da9-f4cc626ad5df">
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/fda8f6fc-87ef-4dfe-a446-e2255b1e0dc8">

- 사이드바 왼쪽아래의 유저 아이콘을 누르면 나오는 드롭다운 메뉴를 통해서 이루어집니다.
- 로그아웃 성공시, 로그인 화면으로 이동합니다.

<br>

## 도서 관련 페이지
### 즐겨찾기 페이지
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/f23b8ffa-d287-4aca-a532-ec8ed8731ab0">

- 즐겨찾기 페이지는 좋아요 버튼을 클릭한 도서를 확인할 수 있습니다.
- 좋아요 버튼은 각 도서 아이템에 모두 있습니다.

<br>

### 읽고 있는 책 페이지

<img width="1710" alt="image" src="https://github.com/user-attachments/assets/70fbc77a-8c7d-4563-ace8-fb50e0ff2bc0">


- 읽고 있는 책 페이지에는 아직 완료 버튼을 클릭하지 않은 읽는 중인 책만 표시됩니다.


### 다 읽은 책 페이지
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/a258aa53-f46e-4175-b691-6708b4a29451">


- 다 읽은 책 페이지에는 도서 요소에서 완료버튼을 클릭한 요소만 표시하게 됩니다.

### 도서 상세 페이지
<img width="1710" alt="image" src="https://github.com/user-attachments/assets/d49f71f2-883f-401c-8a56-30a01553d0af">

- 시작일, 완료일 수정기능
- 도서 삭제기능
- 서평 작성
- 기억하고 싶은 구절 작성

# 🎼 감정 기반 음악 추천 일기장 (Backend)

> 일기장의 내용을 분석하여 감정을 추출한 후, 감정에 해당하는 음악을 추천해주는 일기장

---
 프로젝트는 전체적으로 `backend`, `LLM`, `frontend` 로 구성되어 있습니다.
 **백엔드 파트 개발을 담당했습니다.**
 🛠 본 레포지토리의 `back/` 디렉토리는 **Flask 기반의 백엔드 서버**로,
 **OAuth 인증, JWT 보안, 일기 CRUD, 감정 기반 음악 추천 API**를 구현하였습니다.

---

## 📌 주요 기능 요약

| 기능 영역       | 상세 설명                                                                 |
|----------------|----------------------------------------------------------------------------|
| 사용자 인증     | Kakao OAuth 로그인, JWT 기반 인증 및 토큰 갱신                             |
| 데이터베이스 모델 | 사용자, 일기, 감정, 음악             |
| 일기 관리       | 일기 CRUD(Create, Read, Update, Delete)                          |
| 음악 추천       | OpenAI API 기반 감정 분석 → 음악 추천 + DB 저장                             |
| 달력 UI         | FullCalendar 기반 일기 조회 및 생성 UI 제공                                |
| 유틸리티  | 쿠키 관리, JWT 요청 처리, 자동 로그인, 로그아웃 및 재인증                   |

---

## ⚙️ 백엔드 구성 (Flask + SQLAlchemy)

### 📁 데이터베이스 모델

#### `UserModel` - 사용자 관리
- `serialize()` : JSON 변환
- `upsert_user()` : 사용자 추가 또는 수정
- `get_user()` : 사용자 조회
- `remove_user()` : 사용자 삭제

#### `Diary` - 일기 관리
- 사용자, 날짜, 제목, 내용, 감정 필드 포함
- `serialize()` : 일기 JSON 변환

#### `Emotion` - 감정 종류 관리
- 기본 감정: `"angry", "sad", "anxiety", "calm", "happy", "surprised"`

#### `Music` - 추천 음악 정보
- 일기와 연결된 음악 정보 저장 (`artist`, `title`, `url`)

---

### 🔐 OAuth 인증 (Kakao + JWT)

- `auth()` : 인증 코드로 토큰 요청
- `refresh()` : 리프레시 토큰으로 갱신
- `userinfo()` : 액세스 토큰으로 사용자 정보 획득


---

### 🌐 API 명세

#### ✅ 사용자 인증 관련

| 라우트               | 설명                               |
|----------------------|------------------------------------|
| `GET /oauth`         | Kakao OAuth 인증 처리              |
| `GET /token/refresh` | 액세스 토큰 갱신                   |
| `GET /token/remove`  | 로그아웃 처리 (JWT 제거)          |
| `GET /userinfo`      | 인증된 사용자 정보 반환            |

#### 📓 일기 관련

| 라우트                            | 설명                             |
|----------------------------------|----------------------------------|
| `POST /diary/save`               | 일기 저장                         |
| `GET /diary/event`               | 특정 날짜 일기 조회              |
| `GET /diary/events`              | 전체 일기 조회                    |
| `PUT /diary/update/<int:id>`     | 특정 일기 수정                    |
| `DELETE /diary/delete/<int:id>`  | 특정 일기 삭제                    |

#### 🎵 음악 추천/저장

| 라우트                     | 설명                                  |
|---------------------------|---------------------------------------|
| `POST /api/rcmd/openai`   | OpenAI API로 감정 기반 음악 추천      |
| `GET /today_music`        | 오늘의 추천 음악 목록 조회            |
| `POST /diary/save_music`  | 음악 정보 데이터베이스에 저장         |


### 🎼 음악 추천 기능
- `requestMusicRecommendation` : 감정 기반 음악 추천 요청
- `saveMusicToDatabase` : 추천 음악을 DB에 저장

### 📅 캘린더 UI 기능
- `initCalendar` : FullCalendar 초기화
- `fetchEvents` : 서버에서 일기 목록 가져오기
- `handleDateClick` : 날짜 클릭 시 일기 작성 UI 호출

---

## 🧰 기타 유틸리티

### Python
- `config.py`: 환경 변수 (`CLIENT_ID`, `SECRET_KEY`) 관리

### JavaScript
- `getCookie`: 쿠키 값 읽기
- `makeAuthorizedRequest`: JWT 포함 요청 처리
- `autoLogin`: 페이지 로딩 시 자동 로그인 처리
- `handleLogoutAndReauth`: 로그아웃 + 재인증 처리

---

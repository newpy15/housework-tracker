# 집안일 기록장 (Housework Tracker)

달력에서 날짜를 고르고, 그날 한 집안일을 체크해 기록하는 단일 HTML 앱.

## 만든 이유
집안일을 했는데도 누가 언제 무엇을 했는지 기억나지 않아 불편했습니다. 한 일을 눈으로 확인할 수 있는 간단한 기록 도구가 필요했습니다.

## 대상 사용자
가족·룸메이트와 집안일을 나눠 하는 사람, 청소 주기를 놓치기 쉬운 1인 가구

## 주요 기능
- 달력에서 날짜를 선택해 그날 한 집안일을 체크하고 기록
- 설치나 가입 없이 브라우저에서 바로 사용 (HTML 단일 파일)
- 기록은 브라우저에 저장

## 사용 방법
- `index.html` 하나로 동작 (빌드 없음). 브라우저로 열면 됨.
- 데이터는 브라우저 localStorage (`housework-v2`)에 저장.
- Claude 아티팩트로 게시된 버전: https://claude.ai/artifact/UAWuJ28yaznf5mJC6uFfR5

## 사용 기술
HTML, JavaScript, localStorage, GitHub, Claude Code

## 앞으로 할 일
- 기기 간 동기화
- 알림 / 통계

---

## English

**Why I built it:** I often couldn't remember who did which chore and when. I needed a simple tool to see what has been done at a glance.

**Who it's for:** People who share chores with family or roommates, and people living alone who tend to miss cleaning cycles.

**What it does:** Pick a date on a calendar and check off the chores done that day. Runs in the browser from a single HTML file, with no sign-up. Records are stored locally.

**Tech:** HTML, JavaScript, localStorage, GitHub, Claude Code

**Next:** cross-device sync, reminders, statistics

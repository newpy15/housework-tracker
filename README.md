# 집안일 기록장 (Housework Tracker)

달력에서 날짜를 고르고, 그날 할 집안일을 정해 체크하며 기록하는 앱. 폰(아이폰·안드로이드)에서 홈 화면에 설치해 쓸 수 있습니다.

**사용해 보기:** https://newpy15.github.io/housework-tracker/

## 만든 이유
집안일을 했는데도 누가 언제 무엇을 했는지 기억나지 않아 불편했습니다. 한 일을 눈으로 확인할 수 있는 간단한 기록 도구가 필요했습니다.

## 대상 사용자
가족·룸메이트와 집안일을 나눠 하는 사람, 청소 주기를 놓치기 쉬운 1인 가구

## 주요 기능
- **주/월 달력**: 화면을 꽉 채우는 달력. 칸마다 그날 상태가 보임 (✓ 완료 / 안해? / 할 일 / 예정)
- **날짜별 집안일**: 날짜를 누르면 아래에서 창이 올라와 집안일을 추가하고, 눌러서 완료·미완료 체크
- **🏆 내가 해낸 일**: 이 달에 해낸 횟수, 연속 달성, 이 달의 으뜸 집안일, 오래 안 한 집안일 알림
- **집안일별 아이콘·색**, 자주 하는 집안일 빠른 추가
- **⚙️ 설정**: 스킨 4종(민트 산책·카페 오후·별밤·비 오는 숲)과 배경음악, 카드 투명도, 내 사진으로 배경 바꾸기(영역 직접 선택), 글자체 9종 선택, 내 기록 내보내기/가져오기
- 가입·설치 없이 브라우저에서 바로 사용, 기록은 내 기기에만 저장

## 사용 방법
- **폰에서**: 위 주소를 열고 아이폰은 Safari의 공유 → *홈 화면에 추가*, 안드로이드는 Chrome 메뉴 → *앱 설치*
- **PC에서 직접 실행**: 폴더에서 `python -m http.server 5500` 후 `http://localhost:5500` 접속
- 기록은 브라우저 localStorage(`housework-v3`)에 저장되어 기기끼리 자동으로 합쳐지지 않습니다. 옮기려면 설정의 내보내기/가져오기를 쓰세요.
- 배경 사진을 폴더에 넣어 기본 배경으로 쓰는 방법은 [backgrounds/README.md](backgrounds/README.md) 참고
- 날짜별 변경 내용은 [CHANGELOG.md](CHANGELOG.md)

## 사용 기술
HTML, CSS, JavaScript(프레임워크·빌드 없음), localStorage·IndexedDB, Web Audio, Service Worker(PWA), GitHub Pages, Claude Code

## 앞으로 할 일
- 반복 집안일 (매주 월요일 빨래 등)
- 기기 간 자동 동기화
- 푸시 알림 (지금은 앱을 열었을 때만 알림)
- 배경 사진·음악 다듬기, 움직이는 배경(영상)

---

## English

A calendar-based housework tracker for phones (iOS/Android, installable to the home screen).

**Try it:** https://newpy15.github.io/housework-tracker/

**Why I built it:** I often couldn't remember who did which chore and when. I needed a simple tool to see what has been done at a glance.

**Who it's for:** People who share chores with family or roommates, and people living alone who tend to miss cleaning cycles.

**What it does:**
- Week/month calendar where each day shows its status (done / unfinished / to do / planned)
- Tap a day to add that day's chores and tap to check them off
- "Achievements" screen: monthly count, streaks, top chores, and reminders for chores not done for a while
- Per-chore icons and colors, quick-add list
- Settings: 4 skins with synthesized background music, card transparency, custom photo background with a crop step, 9 font pairings, export/import of your records
- No sign-up; records are stored only on your device

**Tech:** HTML, CSS, JavaScript (no framework or build), localStorage/IndexedDB, Web Audio, Service Worker (PWA), GitHub Pages, Claude Code

**Next:** recurring chores, cross-device sync, push notifications, polished backgrounds and music, video backgrounds

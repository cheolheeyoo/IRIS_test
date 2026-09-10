# IRIS Lab — GitHub Pages HTML 버전

기준 사이트: https://irisunist.wixsite.com/irislab
자료 확인일: 2026-09-10

이 버전은 원본의 메뉴, 본문, 구성원 정보, 연구 그림, 논문 목록을 일반 HTML·CSS·JavaScript로 다시 구성했습니다. 화면 크기에 따라 배치가 바뀌며, Wix 로고·홍보 배너·‘시작하기’ 버튼과 Wix 실행 스크립트는 포함하지 않습니다.

## 포함 내용

- 상단 메뉴: HOME / PROFESSOR / MEMBERS / RESEARCH / PUBLICATIONS
- 연구 주제 상세 페이지 9개와 연구 슬라이드 45개
- SDG별 논문 페이지 9개
- 구성원 65명의 정보와 단체 사진 슬라이드 4개
- 원본에 남아 있던 이전 페이지 4개를 포함하여 HTML 페이지 총 27개
- 메인 YouTube 영상: https://youtu.be/p5E69Pc8GWg
- 연구 그림·사진 확대, 슬라이드 이동·일시정지, 작은 화면용 메뉴

원본의 내용과 이미지 자료는 보존하면서 글자 크기, 여백, 카드 배치, 모바일 화면을 정돈했습니다. 원본 사이트를 픽셀 단위로 복제한 디자인은 아닙니다.

## GitHub Pages에 올리기

1. 이 ZIP 파일의 압축을 풉니다.
2. GitHub 저장소의 최상위 폴더에 압축을 푼 **내용물**을 올립니다. `index.html`, `assets/`, `.nojekyll`이 같은 위치에 있어야 합니다. ZIP 자체만 업로드하면 홈페이지가 열리지 않습니다.
3. 저장소의 **Settings → Pages**를 엽니다.
4. **Build and deployment → Source**에서 **Deploy from a branch**를 선택합니다.
5. 업로드한 브랜치(보통 `main`)와 **/ (root)**를 선택하고 **Save**를 누릅니다.
6. 배포가 끝나면 Pages 설정에 표시된 주소로 접속합니다.

GitHub 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

별도의 npm 설치나 빌드가 필요하지 않습니다. 이전 홈페이지 파일을 교체하는 경우 새 `index.html`과 `assets/`를 함께 올려 주세요. 하위 경로의 프로젝트 페이지에서도 사용할 수 있도록 내부 링크는 상대 경로로 작성했습니다.

## 파일 구성

- `index.html`: 메인 화면
- `professor.html`, `members.html`, `research.html`, `publications.html`: 주요 메뉴
- `ocean.html` 등: 연구 주제별 상세 페이지
- `sdg-02.html` 등: SDG별 논문 목록
- `photo.html`, `lab-news.html`, `home-legacy.html`, `research-legacy.html`: 기존에 남아 있던 이전 페이지
- `assets/site.css`: 공통 디자인
- `assets/site.js`: 모바일 메뉴·슬라이드·이미지 확대
- `assets/images/`, `assets/videos/`: 로컬 이미지·영상
- `.nojekyll`: 정적 파일을 그대로 게시하도록 하는 설정

## 확인한 사항

- 원본 본문 텍스트 항목과 이미지 참조의 누락 여부를 대조했습니다.
- 데스크톱에서 메인 화면, 구성원 카드, 논문 목록을 확인했습니다.
- 폭 390px 환경에서 메뉴와 연구 슬라이드 전환을 확인했습니다.
- 내부 링크와 로컬 이미지·영상 파일 경로를 점검했습니다.
- 이 ZIP을 사용자의 GitHub 저장소에 실제 배포하는 작업은 수행하지 않았습니다.

YouTube 플레이어는 제공된 영상 ID로 연결되어 있습니다. 재생에는 인터넷 연결이 필요하며, 자동 재생은 브라우저·YouTube 설정에 따라 제한될 수 있습니다. 로컬 HTML 파일을 직접 열 때보다 GitHub Pages의 HTTPS 주소에서 확인하는 것이 좋습니다.

이 파일은 확인일 기준의 정적 사본입니다. 이후 원본 사이트가 바뀌어도 자동으로 동기화되지 않습니다. 본문 수정은 각 HTML 파일에서, 공통 디자인 수정은 `assets/site.css`에서 하면 됩니다.

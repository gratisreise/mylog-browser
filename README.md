# MyLog Frontend

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.1-38B2AC.svg)](https://tailwindcss.com/)

MyLog는 개인 블로그 및 일상 기록을 위한 모던 프론트엔드 애플리케이션입니다. Linear 스타일의 다크 모드 전용 디자인 시스템을 기반으로 유려한 UI/UX를 제공합니다.

## ✨ 주요 기능

- **다크 모드 최적화 UI**: Linear 디자인 시스템의 감각적인 어두운 테마 기본 제공
- **게시글 관리**: Markdown 기반의 글 작성, 수정, 조회 및 목록 기능 (에디터 내장)
- **사용자 인증**: 시각적으로 직관적인 로그인 및 회원가입 흐름
- **검색 시스템**: 실시간 하이라이팅을 지원하는 게시글 검색 기능
- **프로필 관리**: 사용자 개인정보 및 작성된 글들을 관리하는 프로필 페이지
- **반응형 디자인**: 모바일, 태블릿, 데스크탑을 모두 포괄하는 레이아웃 구조

## 🚀 설치 및 로컬 실행

### 사전 요구사항
- [Node.js](https://nodejs.org/) v18.0.0 이상
- npm v9 이상

### 설치 방법

1. 저장소를 클론합니다:
```bash
git clone https://github.com/gratisreise/mylog-browser.git
cd mylog-browser
```

2. 프로젝트 의존성을 설치합니다:
```bash
npm install
```

3. 개발 서버를 실행합니다:
```bash
npm run dev
```

터미널에 출력된 로컬 주소(보통 `http://localhost:5173`)로 접속하여 프로젝트를 확인할 수 있습니다.

## 🛠️ 기술 스택

### Core
- **Framework**: React 19
- **Language**: TypeScript
- **Bundler**: Vite
- **Routing**: React Router v7

### State Management & Data Fetching
- **Client State**: Zustand
- **Server State**: TanStack React Query

### Styling & UI
- **Styling**: Tailwind CSS v4, Custom CSS Variables
- **UI Components**: Radix UI (Avatar)
- **Icons**: Material Symbols, Lucide React

### Testing
- **Test Runner**: Vitest
- **Testing Library**: React Testing Library (@testing-library/react)

## 📂 프로젝트 구조

```text
mylog-frontend/
├── .agent/              # AI 에이전트 스킬 및 워크플로우 정의
├── .docs/               # 디자인 테마 및 에셋 (linear-colortheme.json)
├── public/              # 정적 경로 애셋 (Vite 로고 등)
├── src/                 
│   ├── assets/          # 프로젝트 에셋 (이미지, 아이콘)
│   ├── components/      # 재사용 가능한 공통 UI 컴포넌트 및 레이아웃
│   ├── pages/           # 라우트 매핑용 페이지 컴포넌트 모음
│   ├── store/           # 전역 상태 관리 (Zustand)
│   ├── test/            # 테스트 설정 파일 (Setup)
│   ├── App.tsx          # 애플리케이션 라우터 진입점
│   ├── index.css        # 디자인 시스템 토큰 및 전역 스타일 정의
│   └── main.tsx         # React DOM 렌더러 진입점
```
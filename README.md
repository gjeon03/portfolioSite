배포 사이트 : https://gjeon03.github.io/portfolioSite
# 설명

JGY`s Portfolio

# 사용한 기술

## useRef

useRef를 사용해 이동하고 싶은 위치 컴포넌트의 HTMLDIvElement 를 넣고 Header.tsx에서 `current?.scrollIntoView();` 로 해당 위치 이동

## framer-motion

애니메이션을 타나내는데 활용하였습니다.

- 스크롤에 따른 헤더 색 변화
- logo, project 이미지에 마우스를 올릴시 애니메이션
- project 이미지 클릭시 디테일 페이지로 이어지면서 넘어가기
- 디테일 페이지에서 슬라이터에서 버튼 이동 및 드래그 이동

## Model

MVVM패턴에 대한 연습으로 만들어 보았습니다. 비동기 호출은 사용하지 않았지만 json 파일을 따로 만들어 데이터를 관리하는 파일만을 모아놓고 사용하였습니다.

## Grid

css의 grid를 활용해서 창이 작아졌을 경우 적절한 배치가 되게 사용하였습니다.

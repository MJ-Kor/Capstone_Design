# Capstone_Design
2022-2학기 capstone_design

/css 		- css 파일 폴더
 └main.css : css
 			
/js 		- js(api) 폴더
 └ squat.js : squat 실행 js
 └ lunge.js : lungh 실행 js

/pages 		- 웹 페이지(html) 폴더
 └ start.html : 초기화면 페이지
 └ fit.html : 운동 종류 선택 페이지
 └ squat.html : 스쿼트 수행 페이지
 └ lunge.html : 런지 수행 페이지


/models 	- 자세 별 모델 가중치 폴더
 └ /squat_model : 스쿼트 모델 폴더
    └ model.json : 가중치 파일
    └ metadata.json : 메타데이터 파일
 └ /lunge_model : 런지 모델 폴더

/node_modules 	- node.js 모듈들

main.js 	- electron main 실행 js

package-lock.json
package.json


Rule
- 페이지 명 : 영어로 
- 

TODO(가장 중요)
- 자세 데이터셋 따기 (스쿼트, 런지)
- 음성인식 탑재
- 절전 모드 구현
- 각 운동 페이지에서 운동 횟수, 시간 출력 및 저장

TODO later
- 캘린더 api 구현
- 캘린더에 운동 기록 저장

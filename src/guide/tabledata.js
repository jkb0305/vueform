// src/mock/tableData.js

export const mockTableData = {
  titleData: ['번호', '제목', '작성자', '작성일', '비고'],
  infoList: [
    {
      
      info: 'guide',
      name: '정광범',
      date: '2026.09.21',
      more: '뷰 공부중',
      path: '/guide' // 👈 이동할 라우터 경로를 객체 안에 추가
    },
    {
      
      info: '첫 번째 목업 링크입니다. (메인 홈으로 이동)',
      name: '정광범',
      date: '2026.09.21',
      more: '뷰 공부중',
      path: '/home' // 👈 이동할 라우터 경로를 객체 안에 추가
    },
    {
      
      info: '두 번째 목업 링크입니다. (소개 페이지로 이동)',
      name: '정광범',
      date: '2026.09.21',
      more: '뷰 공부중',
      path: '/about' // 👈 다른 페이지로도 유연하게 지정 가능
    },
  ]
}

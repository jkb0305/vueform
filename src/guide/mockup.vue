<template>
  <!-- 데이터가 정상 결합되어 테이블은 1개만 생성됩니다 -->
  <table class="table">
    <caption class="visually-hidden">목업 리스트</caption>
    <thead>
      <tr>
        <!-- 💡 item.titleData를 직접 깔끔하게 출력 -->
        <th v-for="(title, titleIndex) in listItem.titleData" :key="titleIndex" scope="col">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- 💡 실제 목록(infoList)을 기반으로 반복 실행 -->
      <tr v-for="(desc, index) in listItem.infoList" :key="index">
        <td>{{ ++index }}</td>
        <td>
          <!-- 💡 methods에 등록된 goToHome을 정상 호출 -->
          <button @click="handleNavigation(desc.path)" class="btn-link" type="button">
            {{ desc.info }}
          </button>
        </td>
        <td>{{ desc.name }}</td>
        <td>{{ desc.date }}</td>
        <td>{{ desc.more }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mockTableData } from '@/guide/tabledata.js'
export default {
  name: 'MockupTable',
  data() {
    return {
      // 💡 흩어져 있던 제목과 내용을 하나의 유기적인 객체 구조로 묶었습니다.
      listItem: mockTableData,
    }
  },
  methods: {
    // 💡 Options API 환경에서는 기존 방식대로 this.$router를 사용하는 것이 정석입니다.
    handleNavigation(targetPath) {
      if (targetPath) {
        this.$router.push(targetPath)
      }
    }
  }
}
</script>

<!-- 💡 scope를 scoped로 철자 교정 완료 -->
<style lang="scss" scoped>
// 테이블 전용 스타일 테마 변수
$border-color: #e2e8f0;
$header-bg: #f8fafc;
$header-text: #334155;
$row-hover-bg: #f1f5f9;
$text-main: #475569;

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  line-height: 1.5;
  color: $text-main;
  
  thead {
    tr {
      background-color: $header-bg;
      border-top: 2px solid #1e293b;
      border-bottom: 1px solid $border-color;
    }
    
    th {
      padding: 14px 12px;
      font-weight: 600;
      color: $header-text;
      text-align: center;
    }
  }
  
  tbody {
    tr {
      border-bottom: 1px solid $border-color;
      transition: background-color 0.15s ease;
      
      &:hover {
        background-color: $row-hover-bg;
        cursor: pointer;
      }
      
      &:last-child {
        border-bottom: 2px solid $border-color;
      }
    }
    
    td {
      padding: 14px 12px;
      text-align: center;
      vertical-align: middle;
      
      &:nth-child(2) {
        text-align: left;
        padding-left: 20px;
        color: #1e293b;
        font-weight: 500;
      }

      // 💡 추가된 링크용 버튼 스타일링 추가
      .btn-link {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
        cursor: pointer;
        text-align: left;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

<template>
  <q-page padding>
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      row-key="id"
      class="table"
    >
      <template v-slot:top>
      <div class="table__title">
        <span>РАЗДЕЛ I. </span>
        <span>НАЛИЧИЕ АВТОМОБИЛЬНЫХ ТРАНСПОРТНЫХ СРЕДСТВ СПЕЦИАЛЬНОГО НАЗНАЧЕНИЯ</span>
      </div>
    </template>
    <!-- Кастомный заголовок таблицы -->
      <template v-slot:header="props">
        <q-tr>
          <q-th rowspan="2"  class="header">Наименование показателя</q-th>
          <q-th rowspan="2"  class="header">Номер строки</q-th>
          <q-th rowspan="2"  class="header">Наличие на конец года</q-th>
          <q-th colspan="4" align="center" class="header">Из них со сроком службы</q-th>
          <q-th rowspan="2" class="header">Поступило <wbr/>в отчётном году</q-th>
          <q-th rowspan="2" class="header">Выбыло <wbr/>(списано) <wbr/>в отчётном году <wbr/>по износу или <wbr/>непригодности</q-th>
        </q-tr>
        <q-tr>
          <q-th class="header">до 5 лет <wbr/>включительно</q-th>
          <q-th class="header"><div>свыше 5 лет<wbr/> до 10 лет <wbr/></div></q-th>
          <q-th class="header"><div>свыше 10 лет<wbr/> до 15 лет <wbr/>включительно</div></q-th>
          <q-th class="header">свыше 15 лет</q-th>
        </q-tr>
        <q-tr>
          <q-th class="header">А</q-th>
          <q-th class="header">Б</q-th>
          <q-th class="header">1</q-th>
          <q-th class="header">2</q-th>
          <q-th class="header">3</q-th>
          <q-th class="header">4</q-th>
          <q-th class="header">5</q-th>
          <q-th class="header">6</q-th>
          <q-th class="header">7</q-th>
        </q-tr>
      </template>

      <template v-slot:body-cell="props">
        <q-td :props="props" class="cell-bordered">
          {{ props.row[props.col.field] || '' }}
        </q-td>
      </template>
      <!-- <template v-slot:body-cell="props">
        <q-td :props="props" class="cell-bordered fixed-width" :style="{ width: props.col.style.width }">
          {{ props.row[props.col.field] }}
        </q-td>
      </template> -->
    </q-table>

    <q-btn label="Load Data" color="primary" @click="loadData" class="q-mt-md" />
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // Колонки таблицы
      columns: [
        { name: 'header11', label: 'header11', field: 'header11', align: 'left' },
        { name: 'header12', label: 'header12', field: 'header12', align: 'left' },
        { name: 'header13', label: 'header13', field: 'header13', align: 'left' },
        { name: 'header14', label: 'header14', field: 'header14', align: 'left' },
        { name: 'header15', label: 'header15', field: 'header15', align: 'left' },
        { name: 'header16', label: 'header16', field: 'header16', align: 'left' },
        { name: 'header17', label: 'header17', field: 'header17', align: 'left' },
        { name: 'header18', label: 'header18', field: 'header18', align: 'left' },
        { name: 'header19', label: 'header19', field: 'header19', align: 'left' },
      ],
      // Начальные строки таблицы
      rows: [
        { id: 1, header11: 'Инвентарное количество автомобильных транспортных средств',  header12: '01', header13: '0', header14: '0', header15: '0', header16: '0', header17: '0', header18: '0', header19: '0' },
        { id: 2, header11: 'в том числе: \r\nлетние подметально-уборочные', header12: '02', header13: '', header14: '' },
        { id: 3, header11: 'поливочно-моечные', header12: '03', header13: '', header14: '' },
        { id: 4, header11: '\tиз них оборудобванные под пескоразбрасыватели', header12: '04', header13: '', header14: '' },
        { id: 5, header11: 'пескохлоридоразбрасыватели', header12: '05', header13: '', header14: '' },
        { id: 6, header11: 'снегопогрузчики', header12: '06', header13: '', header14: '' },
        { id: 7, header11: 'роторные снегоочистители', header12: '07' },
        { id: 7, header11: 'тракторы со специализированным оборудованием для уборки', header12: '08' },
      ]
    };
  },
  methods: {
    async loadData() {
      try {
        //const response = await axios.get('http://localhost:28521/api/random');
        const response = await axios.get('http://localhost:5000/api/random');
        console.log(response.data[0]);
        const data = response.data;

        // Встраивание данных в таблицу
        for (let i = 0; i < data.length; i++) {
          this.rows[i + 1].header13 = data[i].column1;
          this.rows[i + 1].header14 = data[i].column2;
          this.rows[i + 1].header15 = data[i].column3;
          this.rows[i + 1].header16 = data[i].column4;
          this.rows[i + 1].header17 = data[i].column5;
          this.rows[i + 1].header18 = data[i].column6;
          this.rows[i + 1].header19 = data[i].column6;
        }

      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }
  }
};
</script>

<style scoped>
.table {
  width: 100%;
}

.header {
  background-color: #cdffcc;
  /* color: white; */
  border: 1px solid black;
  /* max-width: 20px;
  width: 20px;
  text-align: center; */
  white-space: pre-wrap;
}

.cell-bordered {
  border: 1px solid black;
  white-space: pre-wrap;
}

.fixed-width {
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.table__title {
  /* white-space: pre-wrap;
  word-break: break-all; */
}
</style>

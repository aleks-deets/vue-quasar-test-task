<template>
  <q-page class="q-pa-md">
    <q-table
      flat bordered
      title="РАЗДЕЛ I НАЛИЧИЕ АВТОМОБИЛЬНЫХ ТРАНСПОРТНЫХ СРЕДСТВ СПЕЦИАЛЬНОГО НАЗНАЧЕНИЯ"
      :rows="rows"
      :columns="columns"
      row-key="id"
    >
      <!-- Кастомный заголовок таблицы -->
      <template v-slot:header="props">
        <q-tr>
          <q-th rowspan="2" class="header-green">Наименование показателя</q-th>
          <q-th rowspan="2" class="header-green">Номер строки</q-th>
          <q-th colspan="2" align="center" class="header-green">Из них со сроком службы</q-th>
          <q-th rowspan="2" class="header-green">Поступило в отчётном году</q-th>
        </q-tr>
        <q-tr>
          <q-th class="header-green">до 5 лет включительно</q-th>
          <q-th class="header-green">свыше 5 лет до 10 лет включительно</q-th>
        </q-tr>
        <q-tr>
          <q-th class="header-green">А</q-th>
          <q-th class="header-green">Б</q-th>
          <q-th class="header-green">2</q-th>
          <q-th class="header-green">3</q-th>
          <q-th class="header-green">6</q-th>
        </q-tr>
      </template>

      <template v-slot:body-cell="props">
        <q-td :props="props" class="cell-bordered">
          {{ props.row[props.col.field] }}
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { name: 'col1', label: 'Проверка', field: 'col1', align: 'left' },
        { name: 'col2', label: 'Header 32', field: 'col2', align: 'left' },
        { name: 'col3', label: 'Header 33', field: 'col3', align: 'left', style: 'width: 10px; max-width: 10px;' },
        { name: 'col4', label: 'Header 34', field: 'col4', align: 'left' },
        { name: 'col5', label: 'Header 34', field: 'col5', align: 'center' },
      ],
      rows: [
        {
          id: 1, col1: 'Инвентарное количество', col2: '01', col3: '0', col4: '0', col5: '0'
        },
        {
          id: 2, col1: 'в том числе', col2: '02', col3: 'Row 2 - Col 3', col4: 'Row 2 - Col 4', col5: '-'
        },
        {
          id: 3, col1: 'поливочно-моечные', col2: '03', col3: 'Row 3 - Col 3', col4: 'Row 3 - Col 4', col5: ''
        },
      ]
    };
  }
}
</script>

<style scoped>
.header-green {
  background-color: #cdffcc;
  /* color: white; */
  border: 1px solid black;
}

.cell-bordered {
  border: 1px solid black;
}
</style>

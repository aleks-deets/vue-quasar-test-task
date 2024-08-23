<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-column-table"
        flat bordered
        title="РАЗДЕЛ I НАЛИЧИЕ АВТОМОБИЛЬНЫХ ТРАНСПОРТНЫХ СРЕДСТВ СПЕЦИАЛЬНОГО НАЗНАЧЕНИЯ"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </q-page>
</template>

<script setup>
  const columns = [
    {
      name: 'name',
      required: true,
      label: 'Наименование показателя',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'calories', align: 'center', label: 'Номер строки', field: 'calories', sortable: true },
    { name: 'fat', label: 'Наличие на конец года', field: 'fat', sortable: true },
    { name: 'carbs', label: 'до 5 лет включительно', field: 'carbs' },
    { name: 'protein', label: 'свыше 5 лет до 10 лет включительно', field: 'protein', width: '5px', class: 'first' },
    { name: 'sodium', label: 'свыше 10 лет до 15 лет включительно', field: 'sodium' },
    { name: 'calcium', label: 'свыше 15 лет', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Поступило в отчётном году', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
  ]

  const rows = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: '8%',
      iron: '1%'
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      sodium: 337,
      calcium: '6%',
      iron: '7%'
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: '3%',
      iron: '8%'
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      sodium: 327,
      calcium: '7%',
      iron: '16%'
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      sodium: 50,
      calcium: '0%',
      iron: '0%'
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      sodium: 38,
      calcium: '0%',
      iron: '2%'
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      sodium: 562,
      calcium: '0%',
      iron: '45%'
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      sodium: 326,
      calcium: '2%',
      iron: '22%'
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      sodium: 54,
      calcium: '12%',
      iron: '6%'
    }
  ]

  // export default {
  //   setup () {
  //     return {
  //       columns,
  //       rows
  //     }
  //   }
  // }
</script>

<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  // height: 310px

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  // max-width: 600px

  td:first-child
    /* bg color is important for td; just specify one */
    // background-color: $positive

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: $positive

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3

  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px

  .first
    width: 5px
</style>

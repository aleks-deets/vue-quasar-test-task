<template>
  <q-page>
    <q-table :data="matrixData" :rows-per-page-options="[0]" :auto-pagination="true">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="cell in props.row" :key="cell">{{ cell }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      matrixData: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ]
    }
  }
}
</script>

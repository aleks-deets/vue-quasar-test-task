<template>
  <q-page>
    <q-btn label="Загрузить данные" @click="fetchData" />
    <q-form class="q-mt-md" @submit="onSubmit">
      <q-input v-model="formData.colu1" label="Значение colu1" />
      <div v-if="error" class="text-red">{{ error }}</div>
    </q-form>

    <!-- <q-card>
      <q-card-section>
        {{ tableData[0].colu1 }}
      </q-card-section>
    </q-card> -->
    <div>{{ tableData[0].colu1 }}</div>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        colu1: ''
      },
      tableData: [],
      error: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:28521/api/data'); // Замените на ваш адрес
        console.log(response.data[0]);
        this.formData.colu1 = response.data[0].colu1;
        this.tableData = response.data;
        console.log("TABLE DATA: " + this.tableData[0].colu2);
      } catch (error) {
        this.error = 'Ошибка при загрузке данных';
        console.error(error);
      }
    },
    onSubmit() {
      console.log('Форма отправлена:', this.formData);
    }
  }
}
</script>

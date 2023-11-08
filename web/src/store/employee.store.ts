import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Employee } from '@/models/employee.model';

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<Employee[]>([
    {
      firstName: 'Terry',
      lastName: 'McCormick',
      title: 'Founder & CEO',
      image: 'terry.jpg',
    },
    {
      firstName: 'Kelly',
      lastName: 'McCormick',
      title: 'COO',
      image: 'kelly.jpg',
    },
    {
      firstName: 'Josh',
      lastName: 'McCormick',
      title: 'EVP',
      image: 'josh.jpg',
    },
    {
      firstName: 'Amber',
      lastName: 'Gilbert',
      title: 'Project Manager',
      image: 'amber.jpg',
    },

    {
      firstName: 'Adam',
      lastName: 'Vaughan',
      title: 'Field Appraiser',
      image: 'adam.jpg',
    },
    {
      firstName: 'Jim',
      lastName: 'Vaughan',
      title: 'Field Appraiser',
      image: 'jim.jpg',
    },
    {
      firstName: 'Jacob',
      lastName: 'Rickett',
      title: 'Field Appraiser',
      image: 'jacob_rickett.jpg',
    },
    {
      firstName: 'Ethan',
      lastName: 'Delong',
      title: 'Field Appraiser',
      image: 'ethan_delong.jpg',
    },
    {
      firstName: 'Cody',
      lastName: 'Samples',
      title: 'Field Appraiser',
      image: 'cody_samples.jpg',
    },
  ]);

  return { employees };
});

import { defineStore } from "pinia";
export const useShowStore = defineStore('show',{
    state: () => ({
        showModal: '',
        showInputTitle: '',
        showTextarea: '',
        showDescription: '',
        showTitle: '',
        showDateUp: '',
        showDateDown: '',
        showInputDateUp: '',
        showInputDateDown: '',
        showStatus: '',
        showInputStatus: '',
        showDeleteModal: '',
    })
})
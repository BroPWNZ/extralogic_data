<template>
    <div class="container">
        <div class="d-flex justify-content-between mb-4">
            <div class="justify-content-start">
                <a class="btn btn-outline-secondary" :href="`/`" >Назад</a>
            </div>
            <div class="justify-content-end">
                <a class="btn btn-outline-success ms-3" @click="save" :href="`/`">Сохранить</a>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Имя формы" v-model="title">
                    <textarea type="text" class="form-control mt-3" placeholder="Описание формы" v-model="description"></textarea>
                </div>
            </div>
        </div>

        <FormImputItem v-for="(form, index) of FormItems" :key="form" @Question="(n) =>change(n, index)" @removeQuestion="removeQuestion(index)"></FormImputItem>

        <div class="mt-3" >
            <button class="btn btn-outline-secondary ms-3" @click="addQuestion">Добавить поле</button>
        </div>

    </div>
</template>


<script>

    import FormImputItem from "@/components/FormImputItem";
    import apiClass from "@/api";

    export default {
        name: 'FormNew',
        components: {FormImputItem},
        data() {
            return {
                FormItems: [],
                Questions: []
            }
        },
        methods: {
            save: async function () {
                let result = {
                    title: this.title,
                    description: this.description,
                    questions: this.Questions
                }
                await apiClass.request("createForm", {form: result})
                    .then((response) => this.stock = response);

            },
            change(value, index) {
                this.Questions.splice(index, 1, value)
            },
            addQuestion: function () {
                let index = this.FormItems.length
                this.FormItems.splice(index, 1, {value: ''})
            },
            removeQuestion: function (index) {
                this.FormItems.splice(index, 1)
                this.Questions.splice(index, 1)
            }
        },
        created() {

        }
    }
</script>
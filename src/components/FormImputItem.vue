<template>

    <div class="card mb-3" @change="onChange" >
        <div class="card-body">
            <div class="input-group form-row mb-3">
                <input type="text" class="form-control" aria-describedby="inputGroup-sizing-sm" placeholder="Название"
                       v-model="this.Question.name" >

                <select class="form-select" aria-label="Default select example col-1" v-model="inputType" @change="removeSelect()">
                    <option :value="1">Текст (строка)</option>
                    <option :value="2">Текст (абзац)</option>
                    <option :value="3">Выпадающий список</option>
                </select>

                <button type="button" class="btn btn-outline-danger" @click="removeQuestion">X</button>

            </div>

            <textarea class="form-control mb-3" placeholder="Описание" v-model="this.Question.description"></textarea>

            <input type="text" class="form-control" aria-describedby="inputGroup-sizing-sm" disabled v-if="inputType == 1">

            <textarea class="form-control mt-3" disabled v-if="inputType == 2"></textarea>

            <div class="mt-3" v-if="inputType == 3">
                <div class="input-group mb-3" v-for="(item, index) of selectItems" :key="item.id">
                    <input type="text" :id="index" class="form-control" @change="selectItem(index)" :value="this.selectItems[index].value">
                    <div>
                        <button type="button" class="btn btn-outline-danger" @click="removeItem(index)">X</button>
                    </div>
                </div>

                <div class="form-check text-start mt-3">
                    <button type="submit" class="btn btn-secondary" @click="addItem">Добавить вариант</button>
                </div>
            </div>
        </div>
    </div>


</template>


<script>

    export default {
        name: 'FormImputItem',
        data() {
            return {
                inputType: '1',
                Question: [],
                selectItems: []
            }
        },
        methods: {
            addItem: function () {
                let index = this.selectItems.length
                this.selectItems.splice(index, 1, {value: ''})
            },
            removeItem: function (index) {
                this.selectItems.splice(index, 1)
            },
            removeSelect: function () {
                this.selectItems.splice(0, this.selectItems.length)
            },
            selectItem: function (index) {
                this.selectItems.splice(index, 1, {value: document.getElementById(index).value})
            },
            onChange: function () {
                this.Question = {
                    name: this.Question.name,
                    type: this.inputType,
                    description: this.Question.description,
                    selectItems: this.selectItems
                }
                this.$emit('Question', this.Question)
            },
            removeQuestion: function () {
                this.$emit('removeQuestion')
            }
        }
    }
</script>
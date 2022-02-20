<template>
<div v-if="getKey">
    <p class="mb-2 categoria">{{getKey}}</p>
    <p>{{getDetail}}</p>
</div>
</template>

<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => {}
        }
    },
    data: () => ({
        keys: {
            title: 'Título',
            slug: 'Slug',
            resume: 'Resumo',
            categories: 'Categoria',
            inicio: 'Início',
            fim: 'Fim',
            valor: 'Valor',
            local: 'Local'
        }
    }),
    computed: {
        getDetail() {
            if (typeof this.detail.detail == "object") {
                const arr = [];
                this.detail.detail.forEach(element => {
                    arr.push(element.name)
                });
                return arr.toString()
            }else {
                return this.detail.detail
            }
        },
        getKey() {
            return this.keys[this.detail.key]
        }
    }
}
</script>

<style scoped>
.categoria{
    color: #6c757d;
}
</style>
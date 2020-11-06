Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amountFormatted: {
            get: function () {
                return `${this.amount}`
            },
            set: function (newValue) {
                this.amount = newValue;
            }
        }
    },
    template: `
        <div>
            <h2>Computed properties Get y Set</h2>
            <input v-model="amount">
            <p>{{amountFormatted | currency_filter('$')}}</p>
        </div>
    `
});
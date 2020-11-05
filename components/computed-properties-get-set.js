Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amountFormatted: {
            get() {
                return 10
            }
            set(newValue) {

            }
        }
    },
    template: `
        <div>
        <h2>Computed properties Get y Set</h2>
        <p>{{amountFormatted}}</p>
        </div>
    `
});
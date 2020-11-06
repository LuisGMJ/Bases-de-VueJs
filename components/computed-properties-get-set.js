Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amountFormatted: {
            get: function() {
                return 10
            },
            set: function(newValue) {

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
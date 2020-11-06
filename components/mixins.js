let myMixin = {
    mounted() {
        console.log('MIXIN Init');
        console.log(this.mixinData);
        this.test();
    },
    data() {
        return {
            mixinData: 'Mixin Data'
        };
    },
    methods: {
        test() {
            console.log('test from mixin');
        }
    }
};

Vue.component('mixins', {
    mixins: [myMixin],
    data() {
        return {
            mixinData: 'Mixin Data from component'
        };
    },
    mounted() {
        console.log('Mounted from component with mixins');
    },
    template: `
        <div>
            <h2>Uso de Mixins</h2>
            <p>{{mixinData}}</p>
        </div>
    `
});
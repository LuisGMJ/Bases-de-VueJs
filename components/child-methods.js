Vue.component('child-methods', {
    data() {
        return {
            componentName: 'Child methods component'
        };
    },
    methods: {
        showComponentName() {
            console.log('Llamada al metodo showComponentName', this.componentName);
        }
    },
    template: `
        <div>
            <h2>Acceso a metodos del componente hijo desde el componete padre</h2>
        </div>
    `
});
Vue.component('child-data', {
    data() {
        return {
            componentName: 'Child data component'
        };
    },
    template: `
        <div>
            <h2>Acceso a datos del componente hijo desde el componete padre</h2>
        </div>
    `
});
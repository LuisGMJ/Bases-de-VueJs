Vue.component('parent-data', {
    template: `
        <div>
            <h2>Acceso a datos del componente padre desde el componen hijo</h2>
            <p>{{ $parent.appName }}</p>
        </div>
    `
});
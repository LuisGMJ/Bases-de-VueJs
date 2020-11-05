Vue.component('emit', {
    data() {
        return {
            carBrand: 'Toyota'
        }
    },
    template: `
        <div>
            <h2>Emitir eventos con Vuejs 2</h2>
            <p @click="$emit('show_car_brand', carBrand)">
                Pulsa aqui para emitir un evento a la instancia Root de vuejs
            </p>
        </div>
    `
});
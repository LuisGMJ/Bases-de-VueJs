Vue.component('slots', {
    template: `
        <div>
            <h2>Slots, ejemplo de layout</h2>
            <div>
                <header>
                    <slot name="header"></slot>
                </header>
                <main>
                    <slot></slot>
                </main>
                <slot name="footer"></slot>
            </div>
        </div>
    `
});
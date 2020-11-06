const AboutMe = {
    install: (Vue, options) => {
        const { job } = options; /* Se destructura el objeto: const job = options.job; */
        Vue.prototype.$me = (name, age) => {
            return `Mi nombre es ${name}, tengo ${age} años y trabajo como ${job}`;
        };
    }
};

Vue.use(AboutMe, {
    job: 'Programador'
});
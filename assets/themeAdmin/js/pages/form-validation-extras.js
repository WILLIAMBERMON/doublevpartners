//validacion para seleccionar fecha valida
window.Parsley.addValidator('datevalid', {
    validate: function(value, id) {
        let fecha = moment(value, "YYYY-MM-DD", true)
        return fecha.isValid()
    },
    messages: {
        es: 'Debe usar un formato DD/MM/YYYY'
    }
})

//validacion para seleccionar fecha mayor al dia de hoy
window.Parsley.addValidator('dateformatmax', {
    validate: function(value, id) {
        let hoy = moment(new Date(), "DD/MM/YYYY", true)
        let fecha = moment(value, "YYYY-MM-DD", true)
        let diff = hoy.diff(fecha, 'days')
        return (diff > 0 || isNaN(diff)) ? false : true
    },
    messages: {
        es: 'No puede ser menor al día de hoy y debe usar un formato DD/MM/YYYY'
    }
})

//validacion para seleccionar fecha menor al dia de hoy
window.Parsley.addValidator('dateformatmin', {
    validate: function(value, id) {
        let hoy = moment(new Date(), "DD/MM/YYYY", true)
        let fecha = moment(value, "YYYY-MM-DD", true)
        let diff = hoy.diff(fecha, 'days')
        return (diff < 0 || isNaN(diff)) ? false : true
    },
    messages: {
        es: 'No puede ser mayor al día de hoy y debe usar un formato DD/MM/YYYY'
    }
})

//validacion para seleccionar fecha de nacimiento condicion que dia mayor de edad
window.Parsley.addValidator('dateformatborn', {
    validate: function(value, id) {
        let fecha = moment(value, "YYYY-MM-DD", true)
        let years = moment().diff(fecha, 'years', false); //false para evitar fraccion

        return (years < 18) ? false : true
    },
    messages: {
        es: 'Debe ser mayor de edad y usar un formato DD/MM/YYYY'
    }
})

//validacion para seleccionar fecha de nacimiento condicion que dia mayor de edad
window.Parsley.addValidator('select', {
    validate: function(value, id) {
        return (value < 0) ? false : true
    },
    messages: {
        es: 'Debe seleccionar un valor de la lista.'
    }
})

//validacion para indicar el tipo de archivo valido con la cantidad definida de peso 2MB 
window.Parsley.addValidator('filetype', {
    validate: function(value, requerimiento) {
        let ext = value.split('.').pop().toLowerCase();
        return (ext != requerimiento) ? false : true;
    },
    messages: {
        es: 'El archivo solo puede ser cargado en formato PDF'
    }
})

window.Parsley.addValidator('filemaxmb', {
    validate: function(value, requerimiento, parsleyInstance) {
        let file = parsleyInstance.$element[0].files;
        let maxBytes = requerimiento * 1048576;
        return (file.length === 1 && file[0].size <= maxBytes) ? true : false;
    },
    messages: {
        es: 'El archivo solo puede tener un tamaño no mayor a 25MB'
    }
})
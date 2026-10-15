/* Preguntas, respuestas correctas y explicaciones. Compartido por la encuesta y el panel. */
window.QUESTIONS = [
  // Bloque A: perfil (sin puntuación)
  { id:'area', block:'Perfil profesional', text:'¿Cuál es tu área de trabajo principal actual?', options:[
    ['urgencias','Urgencias / Emergencias'],
    ['criticos','Cuidados críticos (UCI / Reanimación)'],
    ['planta','Planta de hospitalización (médica o quirúrgica)'],
    ['primaria','Atención Primaria / Centro de salud'],
    ['sociosanitario','Centro sociosanitario / Residencia'],
    ['otros','Consultas externas / Otros']]},
  { id:'experiencia', block:'Perfil profesional', text:'¿Cuántos años de experiencia tienes como TCAE?', options:[
    ['<2','Menos de 2 años'],['2-5','Entre 2 y 5 años'],['6-10','Entre 6 y 10 años'],['>10','Más de 10 años']]},
  { id:'formacion', block:'Perfil profesional', text:'¿Cuándo realizaste tu última formación práctica en RCP y DEA?', options:[
    ['<1','En el último año'],['1-2','Hace entre 1 y 2 años'],['>2','Hace más de 2 años'],['nunca','Nunca he recibido formación práctica']]},
  { id:'confianza', block:'Perfil profesional', text:'Si mañana presenciaras una parada cardíaca, ¿cómo de preparado/a te sentirías para actuar?', options:[
    ['1','1 · Nada preparado/a'],['2','2 · Poco preparado/a'],['3','3 · Algo preparado/a'],['4','4 · Bastante preparado/a'],['5','5 · Totalmente preparado/a']]},

  // Bloque B: conocimientos (puntúan)
  { id:'k1', block:'Conocimientos', text:'Encuentras a una persona tendida en el suelo que no responde. ¿Cuál es el primer paso?', correct:'b', options:[
    ['a','Abrir la vía aérea con la maniobra frente-mentón.'],
    ['b','Comprobar que el entorno es seguro para ti y para la víctima.'],
    ['c','Iniciar de inmediato las compresiones torácicas.'],
    ['d','Llamar al 112 antes de acercarte.']],
    why:'La seguridad de la escena es siempre el primer paso. Antes de tocar a la víctima hay que descartar riesgos (tráfico, electricidad, gases, derrumbes) para no sumar más víctimas.'},
  { id:'k2', block:'Conocimientos', text:'La víctima no responde a estímulos verbales ni físicos. ¿Cómo valoras si está en parada cardíaca?', correct:'b', options:[
    ['a','Tomando el pulso radial durante al menos 30 segundos.'],
    ['b','Abriendo la vía aérea (frente-mentón) y comprobando si respira con normalidad durante no más de 10 segundos.'],
    ['c','Colocando directamente el DEA sin valorar la respiración.'],
    ['d','Aplicando un estímulo doloroso en el esternón durante 2 minutos.']],
    why:'El ERC indica abrir la vía aérea y observar si la respiración es normal durante un máximo de 10 segundos. La toma de pulso no es fiable para reconocer la parada y retrasa el inicio de la RCP.'},
  { id:'k3', block:'Conocimientos', text:'La víctima inconsciente hace boqueadas lentas y ruidosas (respiración agónica o “gasping”). ¿Cómo lo interpretas?', correct:'c', options:[
    ['a','Es una respiración normal: la coloco en posición lateral de seguridad.'],
    ['b','Es una obstrucción de la vía aérea que se resuelve con palmadas en la espalda.'],
    ['c','Es un signo de parada cardíaca: actúo como si no respirara e inicio RCP.'],
    ['d','Es una hiperventilación: espero a que se recupere sola.']],
    why:'Las boqueadas son frecuentes en los primeros minutos de una parada cardíaca. Si la persona no responde y no respira con normalidad, se debe tratar como una parada e iniciar RCP.'},
  { id:'k4', block:'Conocimientos', text:'Confirmas que la persona no responde y no respira con normalidad. ¿Cuál es la siguiente acción?', correct:'b', options:[
    ['a','Hacer 5 insuflaciones de rescate.'],
    ['b','Llamar al 112 (o pedir que alguien llame) y solicitar un DEA.'],
    ['c','Hacer masaje cardíaco 5 minutos antes de llamar.'],
    ['d','Buscar el pulso central durante 20 segundos.']],
    why:'Activar cuanto antes el sistema de emergencias y conseguir un DEA son los primeros eslabones de la cadena de supervivencia. Si estás solo/a, usa el manos libres del teléfono y empieza la RCP mientras hablas.'},
  { id:'k5', block:'Conocimientos', text:'Al llamar al 112 por una parada cardíaca, ¿qué información es prioritaria?', correct:'a', options:[
    ['a','Dirección exacta, que la víctima no responde ni respira con normalidad, y si hay un DEA disponible.'],
    ['b','Antecedentes médicos del paciente antes de dar la ubicación.'],
    ['c','Pedir una ambulancia y colgar rápido para no perder tiempo.'],
    ['d','Nombre y datos del personal presente.']],
    why:'La ubicación exacta y la sospecha de parada permiten activar el recurso adecuado. No cuelgues: el operador puede guiarte en la RCP e indicarte el DEA más cercano.'},
  { id:'k6', block:'Conocimientos', text:'En la RCP de un adulto, ¿cuál es la relación entre compresiones e insuflaciones?', correct:'c', options:[
    ['a','15 compresiones y 2 insuflaciones.'],
    ['b','30 compresiones y 5 insuflaciones.'],
    ['c','30 compresiones y 2 insuflaciones.'],
    ['d','50 compresiones y 2 insuflaciones.']],
    why:'La secuencia estándar del ERC para adultos es 30:2. Si no puedes o no sabes ventilar, haz compresiones continuas sin interrupciones.'},
  { id:'k7', block:'Conocimientos', text:'¿Con qué profundidad y frecuencia se hacen las compresiones torácicas en un adulto?', correct:'b', options:[
    ['a','3-4 cm de profundidad a 80-100 por minuto.'],
    ['b','5-6 cm de profundidad a 100-120 por minuto.'],
    ['c','Más de 6 cm de profundidad a 120-140 por minuto.'],
    ['d','Según el peso del paciente, a 90 por minuto.']],
    why:'Comprimir en el centro del pecho al menos 5 cm sin superar los 6 cm, a 100-120 compresiones por minuto, dejando que el tórax se reexpanda por completo entre compresiones.'},
  { id:'k8', block:'Conocimientos', text:'Acabas de encender el DEA. ¿Qué haces a continuación?', correct:'a', options:[
    ['a','Seguir sus instrucciones y colocar los parches en el pecho descubierto del paciente.'],
    ['b','Pulsar el botón de descarga de forma preventiva.'],
    ['c','Hacer 2 insuflaciones antes de colocar los parches.'],
    ['d','Esperar a que llegue el equipo de emergencias para usarlo.']],
    why:'El DEA guía por voz. Hay que colocar los parches cuanto antes, como indica el dibujo, para que pueda analizar el ritmo. Si hay otra persona, que siga con las compresiones mientras tanto.'},
  { id:'k9', block:'Conocimientos', text:'Mientras el DEA analiza el ritmo y antes de una descarga, ¿qué debes hacer?', correct:'b', options:[
    ['a','Seguir con las compresiones torácicas.'],
    ['b','Asegurarte en voz alta y con la vista de que nadie, ni tú, toca al paciente.'],
    ['c','Retirar los parches del pecho.'],
    ['d','Comprobar el pulso del paciente.']],
    why:'Tocar al paciente puede alterar el análisis del ritmo y provocar una descarga a otra persona. Se avisa en voz alta (“¡Nadie toque al paciente!”) y se comprueba visualmente.'},
  { id:'k10', block:'Conocimientos', text:'El DEA acaba de administrar una descarga. ¿Qué haces después?', correct:'c', options:[
    ['a','Comprobar el pulso durante 1 minuto.'],
    ['b','Esperar a ver si el paciente recupera la consciencia.'],
    ['c','Reanudar de inmediato la RCP (30:2) y seguir las indicaciones del DEA.'],
    ['d','Retirar los parches y colocar al paciente en posición lateral de seguridad.']],
    why:'Tras la descarga hay que reanudar las compresiones sin demora. El DEA volverá a analizar el ritmo cada 2 minutos y avisará cuándo parar.'},
  { id:'k11', block:'Conocimientos', text:'El Día Europeo del Paro Cardíaco (“Restart a Heart Day”), ¿cuándo se celebra y con qué objetivo?', correct:'b', options:[
    ['a','El 12 de mayo, para recaudar fondos para hospitales.'],
    ['b','El 16 de octubre, para concienciar sobre la RCP y aumentar el número de personas formadas.'],
    ['c','El 20 de noviembre, para certificar a los sanitarios en soporte vital avanzado.'],
    ['d','El 8 de marzo, para regular el uso de desfibriladores.']],
    why:'Cada 16 de octubre el ERC promueve esta jornada para que más personas, sanitarias o no, sepan reconocer una parada, llamar al 112, hacer RCP y usar un DEA.'}
];

// Material de aprendizaje: por qué falla cada opción incorrecta y la idea clave para recordar.
window.LEARN = {
  k1:{ tip:'Primero tu seguridad: una víctima más no ayuda a nadie.', bad:{
    a:'Abrir la vía aérea viene después. Si te acercas sin mirar el entorno, puedes convertirte en otra víctima.',
    c:'Antes de comprimir hay que asegurar la escena y comprobar que no responde y no respira con normalidad.',
    d:'Primero se asegura la escena y se valora a la víctima. Así, al llamar al 112, puedes dar información útil.'}},
  k2:{ tip:'Abrir vía aérea y mirar si respira con normalidad: máximo 10 segundos.', bad:{
    a:'El pulso, y más el radial, es poco fiable incluso para sanitarios. Buscarlo 30 segundos retrasa la RCP.',
    c:'Primero hay que reconocer la parada valorando la respiración. El DEA se pide y se coloca después.',
    d:'Dos minutos sin actuar en una parada son decisivos. Cada minuto sin RCP reduce la supervivencia.'}},
  k3:{ tip:'No responde y no respira con normalidad = parada. Las boqueadas NO son respiración normal.', bad:{
    a:'Las boqueadas no son respiración normal. Poner a la víctima en lateral de seguridad retrasaría una RCP que necesita ya.',
    b:'La obstrucción por atragantamiento se ve en una persona consciente que tose o no puede hablar. No es este caso.',
    d:'La hiperventilación ocurre en una persona consciente. Esperar aquí es perder minutos vitales.'}},
  k4:{ tip:'Llamar al 112 y pedir un DEA. Si estás solo/a, usa el manos libres y empieza la RCP.', bad:{
    a:'Las 5 insuflaciones iniciales son de la RCP pediátrica. En el adulto se llama, se pide un DEA y se empieza por compresiones.',
    c:'Retrasar la llamada retrasa la llegada del DEA y de la ayuda avanzada.',
    d:'Buscar el pulso no está recomendado para reconocer la parada y retrasa la ayuda.'}},
  k5:{ tip:'Dónde estás, qué pasa y no colgar: el 112 te guía.', bad:{
    b:'Los antecedentes no son prioritarios. Sin la ubicación exacta no puede salir ningún recurso.',
    c:'No hay que colgar: el operador puede guiarte en la RCP y decirte dónde está el DEA más cercano.',
    d:'Esos datos no ayudan a activar el recurso. Hay que centrarse en la ubicación y en la situación de la víctima.'}},
  k6:{ tip:'Adulto: 30 compresiones y 2 insuflaciones.', bad:{
    a:'15:2 es la relación de la RCP pediátrica realizada por sanitarios, no la del adulto.',
    b:'Las 5 insuflaciones son las de rescate iniciales en niños, no la relación de la RCP del adulto.',
    d:'50:2 no figura en ninguna guía. La relación del adulto es 30:2.'}},
  k7:{ tip:'Centro del pecho, 5-6 cm, 100-120 por minuto, y dejar que el pecho vuelva.', bad:{
    a:'Con 3-4 cm y un ritmo lento no se genera suficiente flujo de sangre al cerebro ni al corazón.',
    c:'Demasiado profundo puede causar lesiones. Demasiado rápido no deja que el corazón se llene entre compresiones.',
    d:'En el adulto la profundidad no depende del peso, y 90 por minuto es una frecuencia insuficiente.'}},
  k8:{ tip:'Enciende el DEA, escúchalo y pon los parches cuanto antes.', bad:{
    b:'No existen descargas preventivas: el DEA solo descarga si detecta un ritmo que lo necesita, tras analizarlo.',
    c:'No hay que retrasar la colocación de los parches. Cuanto antes analice el DEA, más opciones de supervivencia.',
    d:'El DEA está diseñado para que lo use cualquiera. Esperar a los equipos de emergencia pierde minutos clave.'}},
  k9:{ tip:'Durante el análisis y la descarga: “¡Nadie toque al paciente!”', bad:{
    a:'Comprimir durante el análisis genera interferencias y puede dar un análisis erróneo.',
    c:'Los parches deben quedarse colocados durante toda la reanimación.',
    d:'Comprobar el pulso en ese momento obliga a tocar al paciente y retrasa la actuación.'}},
  k10:{ tip:'Tras la descarga, compresiones sin pausa. El DEA te avisará cada 2 minutos.', bad:{
    a:'No hay que comprobar el pulso después de la descarga: se reanuda la RCP de inmediato.',
    b:'Aunque la descarga funcione, el corazón tarda en bombear con eficacia. Esperar deja al cerebro sin flujo.',
    d:'Los parches no se retiran nunca. La posición lateral de seguridad solo se usa si recupera la respiración normal.'}},
  k11:{ tip:'16 de octubre: formar a más personas salva más vidas.', bad:{
    a:'Ni la fecha ni el objetivo son correctos: es el 16 de octubre y su fin es la formación, no recaudar fondos.',
    c:'Ni la fecha ni el objetivo son correctos: es una jornada de concienciación, no de certificación.',
    d:'Ni la fecha ni el objetivo son correctos: el 8 de marzo es el Día Internacional de la Mujer.'}}
};


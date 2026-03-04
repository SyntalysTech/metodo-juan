export interface Question {
    id: string;
    pregunta: string;
    opciones: string[];
    respuestaCorrecta: number; // índice 0, 1, 2, o 3
    explicacion: string;
    categoria: string;
}

export const mockQuestions: Question[] = [
    {
        id: "Q1", categoria: "Inglés",
        pregunta: "Which sentence is grammatically correct?",
        opciones: ["She don't like playing tennis.", "She doesn't likes playing tennis.", "She doesn't like playing tennis.", "She not likes playing tennis."],
        respuestaCorrecta: 2, explicacion: "En inglés, don't aplica a I/we/you/they. Para la 3ª persona del singular (he/she/it) en negativo se usa 'doesn't' + verbo en infinitivo sin 's'."
    },
    {
        id: "Q2", categoria: "Ortografía",
        pregunta: "Selecciona la palabra correctamente escrita:",
        opciones: ["Exhuberante", "Exuberante", "Eshuberante", "Exhuverante"],
        respuestaCorrecta: 1, explicacion: "Exuberante nunca lleva H intercalada. Proviene del latín 'exuberans'."
    },
    {
        id: "Q3", categoria: "Psicotécnicos",
        pregunta: "Si todos los ZORROS son ANIMALES y todos los ANIMALES respiran, entonces:",
        opciones: ["Algunos zorros no respiran.", "Todos los zorros respiran.", "Solo los animales respiran.", "Ninguna de las opciones."],
        respuestaCorrecta: 1, explicacion: "Silogismo puro: la categoría 'Zorro' está incluida en 'Animales', y esta a su vez cuenta con la característica 'respirar'."
    },
    {
        id: "Q4", categoria: "Gramática",
        pregunta: "¿Cuál es el antónimo de 'efímero'?",
        opciones: ["Breve", "Fugaz", "Perdurable", "Rápido"],
        respuestaCorrecta: 2, explicacion: "Efímero significa que dura muy poco tiempo. Su antónimo claro es perdurable o duradero."
    },
    {
        id: "Q5", categoria: "Psicotécnicos",
        pregunta: "Continúa la serie numérica: 5, 10, 20, 40, ...",
        opciones: ["50", "60", "70", "80"],
        respuestaCorrecta: 3, explicacion: "La serie es una progresión geométrica multiplicando por 2 en cada paso."
    },
    {
        id: "Q6", categoria: "Ortografía",
        pregunta: "¿Qué palabra es esdrújula?",
        opciones: ["Móvil", "Corazón", "Lápiz", "Párroco"],
        respuestaCorrecta: 3, explicacion: "Las palabras esdrújulas son aquellas cuya fuerza de pronunciación recae en la antepenúltima sílaba, como pá-rro-co (y siempre llevan tilde)."
    },
    {
        id: "Q7", categoria: "Inglés",
        pregunta: "If I _____ rich, I would travel the world.",
        opciones: ["am", "was", "were", "been"],
        respuestaCorrecta: 2, explicacion: "Se trata de la segunda condicional. Con el verbo to be se usa 'were' para todas las personas."
    },
    {
        id: "Q8", categoria: "Gramática",
        pregunta: "¿En qué modo se encuentra el verbo 'Hagamos'?",
        opciones: ["Indicativo", "Subjuntivo", "Imperativo", "Gerundio"],
        respuestaCorrecta: 1, explicacion: "Corresponde al presente de subjuntivo de la primera persona del plural (nosotros) del verbo hacer."
    },
    {
        id: "Q9", categoria: "Psicotécnicos",
        pregunta: "Tres albañiles construyen un muro en 12 horas. ¿Cuánto tardarán 6 albañiles?",
        opciones: ["24 horas", "9 horas", "6 horas", "4 horas"],
        respuestaCorrecta: 2, explicacion: "Regla de tres inversa: a doble número de trabajadores, mitad de tiempo. 12 / 2 = 6 horas."
    },
    {
        id: "Q10", categoria: "Ortografía",
        pregunta: "Indica la palabra en la que existe un hiato:",
        opciones: ["Camión", "Cuaderno", "Aéreo", "Pingüino"],
        respuestaCorrecta: 2, explicacion: "Un hiato es el encuentro de dos vocales que se pronuncian en sílabas distintas. En 'A-é-re-o' las vocales abiertas (a, e, o) sucesivas siempre forman hiato."
    },
    {
        id: "Q11", categoria: "Inglés",
        pregunta: "We have lived here _____ 2015.",
        opciones: ["for", "since", "from", "in"],
        respuestaCorrecta: 1, explicacion: "'Since' se utiliza para identificar un punto concreto en el tiempo de inicio de una acción; 'for' indica duración."
    },
    {
        id: "Q12", categoria: "Gramática",
        pregunta: "Señala la oración que tiene un adjetivo en grado superlativo absoluto:",
        opciones: ["El coche es tan rápido como el avión.", "Ese postre está buenísimo.", "Juan es el más alto de su clase.", "La casa era muy grande, pero menos luminosa."],
        respuestaCorrecta: 1, explicacion: "El sufijo -ísimo denota el grado superlativo absoluto, a diferencia del relativo o del grado comparativo."
    },
    {
        id: "Q13", categoria: "Psicotécnicos",
        pregunta: "¿Cuál es la letra que sigue: A, C, F, J...?",
        opciones: ["M", "N", "Ñ", "O"],
        respuestaCorrecta: 2, explicacion: "Serie: de A(+2)->C(+3)->F(+4)->J. Sigue +5: J(k,l,m,n)->Ñ. El abecedario español incluye la letra Ñ."
    },
    {
        id: "Q14", categoria: "Ortografía",
        pregunta: "¿Por qué 'móvil' lleva tilde?",
        opciones: ["Por ser aguda terminada en L.", "Por ser llana y no terminar en N, S o Vocal.", "Por ser llana y terminar en L.", "Porque es esdrújula y todas se acentúan."],
        respuestaCorrecta: 2, explicacion: "La palabra móvil tiene la fuerza en la penúltima (mó-vil) haciéndola llana, y al terminar en consonante 'L' (diferente a N y S) debe tildarse."
    },
    {
        id: "Q15", categoria: "Inglés",
        pregunta: "I always look _____ to seeing you.",
        opciones: ["for", "up", "forward", "after"],
        respuestaCorrecta: 2, explicacion: "La expresión 'look forward to' significa estar deseoso o ansiar algo. Siempre va seguida de gerundio (seeing)."
    },
    {
        id: "Q16", categoria: "Gramática",
        pregunta: "¿Qué tipo de proposición subordinada es: 'Dime si vienes'?",
        opciones: ["Sustantiva", "Adjetiva", "Adverbial de tiempo", "Adverbial condicional"],
        respuestaCorrecta: 0, explicacion: "Es una subordinada sustantiva, ya que equivale al sustantivo o pronombre que funciona como OD: 'Dímelo'."
    },
    {
        id: "Q17", categoria: "Psicotécnicos",
        pregunta: "¿Qué número sobra en la serie? 2, 4, 8, 16, 20, 32",
        opciones: ["8", "16", "20", "32"],
        respuestaCorrecta: 2, explicacion: "La secuencia lógica es el doble del anterior (2x2=4, 4x2=8, 8x2=16, 16x2=32). El número 20 rompe el patrón."
    },
    {
        id: "Q18", categoria: "Ortografía",
        pregunta: "Solo una de las siguientes opciones contiene todas las palabras correctas:",
        opciones: ["Halla, vaya, rallo", "Haya, valla, rayo", "Ambas opciones A y B son correctas, pero significan cosas diferentes", "Halla, balla, rayo"],
        respuestaCorrecta: 2, explicacion: "Ambas contienen palabras reales con sus respectivas acepciones. Halla (hallar), haya (haber/árbol). Vaya (ir), valla (cerco). Rallo (rallar), rayo (luz)."
    },
    {
        id: "Q19", categoria: "Inglés",
        pregunta: "By next year, they _____ the bridge.",
        opciones: ["will build", "will be building", "built", "will have built"],
        respuestaCorrecta: 3, explicacion: "La expresión 'By next year' requiere usar Future Perfect para indicar que la acción estará concluida antes de esa fecha."
    },
    {
        id: "Q20", categoria: "Gramática",
        pregunta: "El prefijo 'sub-' aporta la idea de:",
        opciones: ["Oposición", "Por debajo de", "Negación", "Superioridad"],
        respuestaCorrecta: 1, explicacion: "El prefijo latino sub- literalmente significa 'debajo de' o 'inferior a' (submarino, subestimar, subcomité)."
    },
    {
        id: "Q21", categoria: "Psicotécnicos",
        pregunta: "Si el ayer de mañana es jueves, ¿qué día fue el pasado mañana del anteayer?",
        opciones: ["Lunes", "Martes", "Miércoles", "Jueves"],
        respuestaCorrecta: 3, explicacion: "Ayer de mañana = Hoy. Hoy es Jueves. Pasado mañana (+2) del anteayer (-2) es el propio Jueves."
    },
    {
        id: "Q22", categoria: "Ortografía",
        pregunta: "¿Cuál opción presenta pleonasmo (vicio de dicción)?",
        opciones: ["Subir para arriba", "Entrar apresuradamente", "Beber agua", "Caer al suelo"],
        respuestaCorrecta: 0, explicacion: "Subir implica ir hacia arriba. Emplearlo junto con 'para arriba' es una redundancia innecesaria o pleonasmo."
    },
    {
        id: "Q23", categoria: "Inglés",
        pregunta: "Are you interested _____ joining our club?",
        opciones: ["at", "in", "on", "for"],
        respuestaCorrecta: 1, explicacion: "El adjetivo 'interested' siempre rige la preposición 'in'."
    },
    {
        id: "Q24", categoria: "Gramática",
        pregunta: "La oración 'La ciudad fue asediada por las tropas' está en:",
        opciones: ["Voz activa", "Voz pasiva", "Voz reflexiva", "Voz recíproca"],
        respuestaCorrecta: 1, explicacion: "Construida con verbo ser + participio + complemento agente (por las tropas), es una pasiva perifrástica."
    },
    {
        id: "Q25", categoria: "Psicotécnicos",
        pregunta: "¿Cuántos meses tienen 28 días?",
        opciones: ["1", "2", "6", "12"],
        respuestaCorrecta: 3, explicacion: "Pregunta capciosa. Todos los 12 meses del año tienen al menos 28 días."
    },
    {
        id: "Q26", categoria: "Ortografía",
        pregunta: "¿Cual de las siguientes expresiones se escribe siempre separada?",
        opciones: ["Aún así", "O sea", "Así mismo", "A penas"],
        respuestaCorrecta: 1, explicacion: "'O sea' es la locución explicativa que equivale a 'es decir', se escribe siempre en dos palabras."
    },
    {
        id: "Q27", categoria: "Inglés",
        pregunta: "He was too tired _____ any further.",
        opciones: ["walking", "walk", "to walk", "walked"],
        respuestaCorrecta: 2, explicacion: "La estructura 'too + adjetivo' siempre va seguida del infinitivo con 'to'."
    },
    {
        id: "Q28", categoria: "Gramática",
        pregunta: "Identifica el pronombre enclítico en la siguiente palabra: 'Dáselo'",
        opciones: ["Dá", "se y lo", "lo", "No hay pronombre enclítico"],
        respuestaCorrecta: 1, explicacion: "Los pronombres 'se' y 'lo' van pospuestos y unidos al verbo 'Da', formando los enclíticos."
    },
    {
        id: "Q29", categoria: "Psicotécnicos",
        pregunta: "Un coche va a 60 km/h. ¿Cuántos kilómetros recorrerá en 45 minutos?",
        opciones: ["30", "40", "45", "60"],
        respuestaCorrecta: 2, explicacion: "A 60 km/h el coche recorre 1 km por minuto. En 45 minutos recorre 45 kilómetros."
    },
    {
        id: "Q30", categoria: "Temario General",
        pregunta: "¿Qué órgano supremo es intérprete de la Constitución en España?",
        opciones: ["Tribunal Supremo", "Tribunal Constitucional", "Rey de España", "Cortes Generales"],
        respuestaCorrecta: 1, explicacion: "El Tribunal Constitucional es el intérprete supremo de la Constitución en España y conoce los recursos de amparo e inconstitucionalidad."
    }
];

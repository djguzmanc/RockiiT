import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../../horizontal-timeline/timeline-element';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(){
  }

  ngOnInit( ) {

  }

  img_paths = [
    '/assets/images/1995_arreglado.jpg' ,
    '/assets/images/1996_0.jpg' ,
    '/assets/images/1997.arreglado (1).jpg' ,
  ]

  data = [
    {
      content: `Primera edición de Rock al parque, sólo este año se cobró el ingreso a los conciertos en la Plaza de Toros. Se destaca en el cartel nacional la presencia de Aterciopelados, Minga Metal, Morfonía, 1280 Almas, Catedral, Danny Dodge, Marlohabil y La Derecha. El cartel internacional lo conforman Fobia de México y Seguridad Social de España.`,
      img_path: '/assets/images/1995_arreglado.jpg',
      title: 'Rock al parque',
      selected: true,
      caption: '29 Mayo',
      date: new Date( 1995, 5, 26 ),
      cartel: 'VÉRTIGO, DANNY DODGE, WHY SIX, MR. CROWLEY, LA CORTE, LEIT MOTIV, TABORA DEBORA, MINGA MENTAL, CABEZA DE JABALI, SEX, HADES, CARPE DIEM, DARKNESS, ACUTOR, INSANIA, KILCROPS, SANGRE PICHA, LEISHMANIASIS, EX-3, MARLOHÁBIL, 1280 ALMAS, LA DERECHA, ATERCIOPELADOS , BRUMA SÓLIDA, AFRE, RADIESTESIA, ZIGMA, K´NUTO POWERTRIO, YURI GAGARIN Y LOS CORRECAMINOS, CATEDRAL, ZUT, NUEVE, ESTRATO SOCIAL, LA GIGANTA, LOS CHEACLES, CIEGOS SORDOMUDOS, TOM ABELLA, LA SONORA CANÍBAL, N.P.I., MORFONIA, SOCIEDAD ANÓNIMA, MONÓXIDO BAJO CERO, LA DERECHA, SEGURIDAD SOCIAL (ESPAÑA), FOBIA (MÉXICO)'
    },
    {
      content: `Participan bandas nacionales como Grupo Atico, Danny Dodge, Dogma, Sagrada escritura, Policarpa y sus viciosas, La Pestilencia y Agony. La cuota internacional corre por cuenta de Lucybell y Los Tetas de Chile, Los Auténticos Decadentes de Argentina, Spias y Zapato 3 de Venezuela, Zopilotes de Perú, La Lupita de México y Puya de Puerto Rico.`,
      img_path: '/assets/images/1996_0.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 1996, 5, 18 ),
      cartel: "LOS DEL CENTRO, ZIGMA, LA FAMILIA BASTARDA, ESTATIKA, UNA TAL SOPHIA, CARPE DIEM, DOGMA , POLICARPA Y SUS VICIOSAS , MORFONIA, LOS ZOPILOTES (PERÚ) , OJOS ROJOS , LA LUPITA (MÉXICO), LADO B , POR CAUSA DEL , MONO , LA REBECA , JUNGLA , RAZA , MARLOHÁBIL , N.P.I. , DARKNESS, SPIAS (VENEZUELA) , LA DERECHA , INFIERNO , SILENTS OF MOON SET , PÁNICO , BASTARD , LA PESTILENCIA , SANTUARIO , PURULENT , KIDRON , KILCROPS , HEREJIA , SANGRE PICHA , AGONY, MEDICINA LEGAL , FELIPE IRAGORRY , XUMAPAZ, EL MEDIO , EL JARDÍN DE DANIELA , CIEGO SORDOMUDOS , PEPA FRESA , ZAPATO 3 (VENEZUELA) , YURI GAGARIN , LUCYBELL (CHILE) , LOS TETAS (CHILE), ÁTICO , DUODENOS Y LOS INTESTINOS , BANDA SONORA , LA GARDENIA , LEIT MOTIV , BANGLADESH , SAGRADA ESCRITURA , OBRA NEGRA , AUTÉNTICOS DECADENTES (ARGENTINA) , ZAPATO 3 (VENEZUELA) , DANNY DODGE , 1280 ALMAS, CIRCO MANDARINA , SV2 , NUEVE , VÉRTIGO , BISMARK , HADES , MR. CROWLEY , LA CORTE , WHY SIX , LOS ZOPILOTES (PERÚ) , CABEZA DE JABALÍ Y PUYA (PUERTO RICO)"
    },
    {
      content: `En éste año, el festival pasa a ser parte del programa de Cultura Ciudadana de la Alcaldía Mayor de Bogotá. También se realizan por primera vez eliminatorias en vivo, lo cual amplía la participación de las bandas de la ciudad. Se presentan bandas como Kraken de Medellín, Grupo Atico de Bogotá, Cancerbero de Bogotá, Control Machete y La Maldita Vecindad de México, Todos Tus Muertos, Los 7 Delfines y A.N.I.M.A.L de Argentina y Chancho en Piedra de Chile.`,
      img_path: '/assets/images/1997.arreglado (1).jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 1997, 5, 18 ),
      cartel: "1997	INGRAND, NO ES NO, CANCERBERO , DEATHLESS, NEUS, POSGUERRA, NEUROSIS INC., SANGRE PICHA, LA TRIFULLKA (ECUADOR), MASACRE, LA PESTILENCIA (MEDELLÍN), AGONY, CÁUSTICO, HIERBAKANA, RAPUNZELL, LAMTARRA, HOMBRES PÁJARO, SECTOR 16, ZOMA, EL CARTEL, LOS CHARCONAUTAS, LA DERECHA, TODOS TUS MUERTOS (ARGENTINA), MORFONIA, FERRANS BANDA, RADAR, TRES VECES, ALBERT EINSTEIN, SV2, RADIO BABILONIA, CLAROSCURO (VENEZUELA), YURI GAGARIN , CARPE DIEM, LOS SIETE DELFINES (ARGENTINA), EL HUECO (MEDELLÍN), LA MALDITA VECINDAD Y LOS HIJOS DEL QUINTO PATIO (MÉXICO), BAJO TIERRA (MEDELLÍN), LA TINA, IGNEA, CORPORACIÓN MACONDO, LA FAMILIA BASTARDA, KABALA (PEREIRA), LA SEVERA MATACERA, BOMBALACRÁN, LOS ELEFANTES, SONORA 100 FUEGOS, LADY DICK, MATARRATÓN , ÁTICO , ZARATHUSTRA , PSICODELIA , LA GIGANTA, LA HOZ, LAS VACAS (CALI), CONTROL MACHETE (MÉXICO), JUANITA DIENTES VERDES (MEDELLÍN), BLOQUE DE BÚSQUEDA, LOKAPALA, XUMAPAZ, POR CAUSA DEL MONO, REAL ZULU, ROJO SILENTE , EL ZUT, LOS DEL CENTRO, BANGLADESH, CLAROSCURO (VENEZUELA), VÉRTIGO, CHANCHO EN PIEDRA (CHILE), PEPA FRESA, RUIDO ROSA, 667, SÉPTIMO ÁNGEL, VUDÚ, NAVARRA, TENEBRARUM (MEDELLÍN), LECHOZA, TAL CUAL, PERRO MUERTO, CRUKS EN KARNAK (ECUADOR), L.M.P., DARKNESS, ANGORA, PITHAUS, ALGUNO MÁS, BOCA ABAJO, CABEZA DE JABALÍ, CONTACTO, ULTRÁGENO, A.N.I.M.A.L. (ARGENTINA), KRAKEN, ESTILO BAJO"
    },
    {
      content: `Éste año Rock al parque estuvo a punto de desaparecer al considerarse poco prioritario para el desarrollo cultural de la ciudad. Ante la oposición de miles de personas el festival se realiza en el mes de octubre, fecha que se mantuvo hasta el 2008 (Entre octubre y noviembre). Participan PollitoChicken, Morfonia, Ultrágeno, SuperLitio de Cali, Tenebrarum de Medellín, Indio Uribe, Raíz, Dogma Sinaca, La Severa Matacera, A.N.I.M.A.L de Argentina, Robi Draco Rosa de Puerto Rico, Resorte de México, Desorden Público de Venezuela y Niños Con Bombas de Hamburgo con miembros de Chile, Brazil y Alemania.`,
      img_path: '/assets/images/1998.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 1998, 5, 18 ),
      cartel: "1998	POLLITO CHICKEN , MORFONIA , CHATOBAND , PEPA FRESA , LA BANDA DEL GUSANO , MARIMONDA , RAÍZ , RESORTE (MÉXICO) , ULTRÁGENO , ABORIGEN , PERRO MUERTO , ROBI DRACO ROSA (PUERTO RICO), SUPERLITIO (CALI), LOS FELICS, DHARKMA , ACUTOR , INFECTED , PURULENT , TENEBRARUM (MEDELLÍN), KILCROPS , ATRIUM , DARKNESS , CRIMINAL (CHILE) , AGONY , ETHEREAL , LA PESTILENCIA , CUERVO BLANCO , INGRAND , INDIO URIBE , DOGMA SINACA , PLOMO (VENEZUELA) , VOLUMEN CERO (ESTADOS UNIDOS) , 1280 ALMAS , DESORDEN PÚBLICO (VENEZUELA) , VÉRTIGO , NIÑOS CON BOMBAS[3] (CHILE - BRAZIL - ALEMANIA) , ATERCIOPELADOS, LA FUNKERA , ARAWAK , MONARKO , CANDELARIA BLUES , RAPUNZELL , CHAMANES , LA FLORIPONDIO (CHILE), CHARCONAUTAS, PLOMO (VENEZUELA) , SHA-I, LA FORTALEZA , RAPPERS SPIDERS , ISSIDORE DUCASSE , JOHNNIE WALKER (MEDELLÍN), LA SEVERA MATACERA , ANGELES CON CARA SUCIA , POLVO DE INDIO, EL PEZ (MEDELLÍN), ESTADO ALTERADOS (MEDELLÍN), A.N.I.M.A.L. (ARGENTINA), NO2 , RESORTE (MÉXICO) , CIEGOS SORDOMUDOS Y AJI BABOSO"
    },
    {
      content: `Las bandas internacionales invitadas son Café Tacuba, Molotov, Julieta Venegas, Niños Con Bombas de Alemania, Control Machete, Guillotina y Las Víctimas del Doctor Cerebro, de México; Eminence de Brasil e Illya Kuryaki & The Valderramas de Argentina. Huelga de hambre de Perú. Según la crítica ha sido una de las mejores ediciones del festival por la calidad de las bandas invitadas.`,
      img_path: '/assets/images/1999.corregido.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 1999, 5, 18 ),
      cartel: "LA HIJA DEL VERDUGO, MONARKO, LOS FELICS, POLICARPA Y SUS VICIOSAS, ESCUELAS DE ROCK Y RAP, QUINTA ESTACIÓN, EL GLOBO, CORPORACIÓN MACONDO, CASA ROJA, GUILLOTINA (MÉXICO), SHA-I, VÍCTIMAS DEL DOCTOR CEREBRO (MÉXICO), LA BANDA DEL GUSANO, ILLYA KURYAKI AND THE VALDERRAMAS (ARGENTINA), SUPERLITIO (CALI), ETHEREAL, ION, NO2, INGRAND, KAALA, CUERVO BLANCO, KILCROPS, ADLIBITUM, EMINENCE (BRASIL), BOCA ABAJO, LABERINTO (HOLANDA), LA PESTILENCIA, EARTH CRISIS (ESTADOS UNIDOS), NEUS (MEDELLÍN), CIUDAD ETERNA, ISSIDORE DUCASSE, ABORIGEN, CIEGOS SORDOMUDOS, SÉPTIMO APOSENTO, HUELGA DE HAMBRE (PERÚ), EL PEZ, CONTROL MACHETE (MÉXICO), CONAGUA (BUCARAMANGA), AJÌ BABOSO, EL BLOQUE, CAFÉ TACUBA (MÉXICO), ULTRÁGENO, MOLOTOV (MÉXICO), CANAL SUR, LEÓN BRUNO(BARRANQUILLA), CANDELARIA, VÉRTIGO, DOGMA SINACA, SAL Y MILETO (ECUADOR), GUILLOTINA (MÉXICO), JULIETA VENEGAS (MÉXICO), MORFONIA, LA VIOLETA, MARIMONDA, DARATH, CANIBALSMITH, NAVARRA, PAN (VENEZUELA), ZOMA, CHARCONAUTAS, 1280 ALMAS, DEFENZA, CONTROL MACHETE (MÉXICO)"
    },
    {
      content: `Se cuenta con la participación de Manu Chao de Francia; La Sarita de Perú; Los Pericos, Divididos y La Mosca Tse Tse de Argentina y Octavia de Bolivia; Doctor Krápula, Los De Adentro, Vulgarxito, Pornomotora, Koyi K Utho, Ion, Radar, La Severa Matacera, Ultrágeno y Aterciopelados.`,
      img_path: '/assets/images/2000.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2000, 5, 18 ),
      cartel: "NAVARRA , SÉPTIMO APOSENTO , SEÑAL NOCTURNA , 69 NOMBRES , OCTAVIA (BOLIVIA) , LA SARITA (PERÚ) , LA SEVERA MATACERA , LUCIBELL (CHILE) , LOS DE ADENTRO, ELECTROLIQUIDO (MEDELLÍN), ATERCIOPELADOS, VULGARXITO , RAPUNZELL , MOCHACABEZAS , LEGEND MAKER (CALI), RITUAL , ASKARIX , BORG (ARMENIA) , TIMMY O´ TOOL (ARGENTINA) , GOLPE BAJO (CALI), LOS MISERABLES (CHILE), ADLIBITUM , DRACMA (CHILE) , TRIBAL (MEDELLÍN), UNDERTREATH, CUATRO , CANIBALSMITH , KOYI K UTHO , ION , DOGMA SINACA , VÉRTIGO , LA MOSCA TSE-TSÉ (ARGENTINA) , LOS PERICOS (ARGENTINA), ULTRÁGENO , DIVIDIDOS (ARGENTINA) , SHA-I , MANU CHAO (FRANCIA), DE2 , LA CONTRA (BUCARAMANGA), NEUTRO , CUERVO BLANCO , PORNOMOTORA , DEFENZA , ABORIGEN , INGRAND , LOS FELICS , DOCTOR KRÁPULA , LA UNIVERSAL (MEDELLÍN), LA ESPIRAL (MEDELLÍN), RIESGO DE CONTAGIO (MÉXICO) , LA TERCA , CONAGUA (BUCARAMANGA), RADAR , CERO , DESORDEN SOCIAL , MR. FONG , SANTA FAUNA , PARCHE FUNK , LOS MENTAS (VENEZUELA) Y SUPERLITIO (CALI)"
    },
    {
      content: `Por única ocasión, el festival se extendió por toda una semana, además se incluyeron nuevos escenarios como el Parque El Tunal y el Parque El Renacimiento. Originalmente se planeó realizar una jornada en la Universidad Nacional, pero por problemas de seguridad se reemplazó por el Parque el Renacimiento. Se incluyó una jornada exclusiva para la música electrónica. Se contó con la presencia internacional de Caramelos de Cianuro, El Gran Silencio, King Chango, Kinky, Los Amigos Invisibles, Los Mentas, Los Mox y Los Tetas entre otros.`,
      img_path: '/assets/images/2001.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2001, 5, 18 ),
      cartel: "2001	NOIZE, ATAQUE EN CONTRA, ADLIBITUM, HIJOS DE LA CRIADA (MEDELLÍN), ULTRÁGENO, RESORTE (MÉXICO), GOLPE BAJO (CALI), LA HIJA DEL VERDUGO, ISSIDORE DUCASSE, CONAGUA (BUCARAMANGA), LOS OCEÁNICOS (VENEZUELA), THE KLAXON, COFFE MAKERS (MEDELLÍN), SKAMPIDA, LA SEVERA MATACERA, KING CHANGÓ, KOYI K UTHO, VULGARXITO, BORG (ARMENIA), TRAUMA, INJURY, LA SS (BUCARAMANGA), AGRESIÓN (HOLANDA), INSANE, RESORTE (MÉXICO), OBSCURA (ECUADOR), PORNOMOTORA, LOS MOX (CHILE), SUR CARABELA (VENEZUELA), SANCHEZ Y RUIZ (MÉXICO), SISTEMA LOCAL SONORO SELECTIVO (MÉXICO), KINKY (MÉXICO), SUSSIE 4 (MÉXICO), DOUBLE HELIX (NOPAL BEAT) (MÉXICO), FUSSIBLE (MÉXICO), BATUKA, AVISPAS MOSTOVOI, LEÓN BRUNO, CARAMELOS DE CIANURO (VENEZUELA), ELECTROLÍQUIDO (MEDELLÍN), LOS TETAS (CHILE), LA RUEDA DE LA FORTUNA, LOS AMIGOS INVISIBLES (VENEZUELA), TOXIC, NEUROSIS INC, NOVILUNION, RAVENLORD, SOUL BURNER, PURULENT, EVERMIND, INGRAND, OCCISOR, MASACRE (MEDELLÍN), PLAGA SÉSAMO, DEFENZA, SHA-I, MANGUALA, PLANETA RICA (MEDELLÍN), EL GRAN SILENCIO (MÉXICO), SUPERLITIO (CALI)"
    },
    {
      content: `El festival vuelve a su formato de tres días. Entre las bandas internacionales están Volován de México y Lenine de Brasil.`,
      img_path: '/assets/images/2002.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2002, 5, 18 ),
      cartel: "2002	ODIO A BOTERO, DESORDEN SOCIAL , DOCTOR KRÁPULA, SKAMPIDA, THE KLAXON, ELECTROLÍQUIDO (MEDELLÍN), VOLOVÁN (MÉXICO), LÚKUMA, DEFENZA, DE2, VULGARXITO, PORNOMOTORA, TOXIC, INGRAND, EMINENCE (BRASIL), AGONY, LUMPENGROUND,CARAJO (ARGENTINA), MASSIVE EXPERIENCIE, LA FÁBRICA (CALI), SANTAFUMA, FLOR DEL HITO (CALI), LEON BRUNO (BARRANQUILLA), LENINE (BRASIL)"
    },
    {
      content: `Las bandas internacionales participantes fueron La Mississipi Blues Band, 69 Nombres, Catupecu Machu de Argentina; Plastilina Mosh, Panteón Rococó de México y Monstrosity de Estados Unidos. Las bandas locales sobresalientes fueron La Pestilencia, Diva Gash 1280 Almas y The Ganjas`,
      img_path: '/assets/images/2003-varreglado.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2003, 5, 18 ),
      cartel: "PALA, LA RUEDA DE LA FORTUNA, MORFONIA, DISTRITO ESPECIAL, MISSISSIPI BLUES BAND (ARGENTINA), ALERTA, INSPECTOR (MËXICO), DOCTOR KRÁPULA, RAPUNZELL, KOYI K UTHO, DE2, NO SILENCE, NOISZART, LA PESTILENCIA, NEUROSIS INC, MONSTROSITY (ESTADOS UNIDOS), EMINENCE (BRASIL), AGONY , 69 NOMBRES, LOS ELEFANTES, MOJIGANGA (MEDELLÍN), CATUPECU MACHU (ARGENTINA), DIVA GASH, PLASTILINA MOSH (MÉXICO), PANTEÓN ROCOCÓ (ARGENTINA), 1280 ALMAS"
    },
    {
      content: `Se celebraban diez años de vida del festival. La cuota internacional fue dada por Catupecu Machu, Luis Alberto Spinetta, Los Auténticos Decadentes y Babasónicos de Argentina; The Skatalites de Jamaica; Ely Guerra, Café Tacuba, Molotov, Julieta Venegas y Kinky de México; Robi Draco Rosa de Puerto Rico y Libido de Perú. El festival se caracterizó por su gran asistencia y las enormes críticas a los organizadores por incluir en un festival característicamente rockero a artistas pop y de música electrónica. La influencia de patrocinadores como Coca-Cola y Mtv disgustó a muchos de los antiguos seguidores del festival y rockeros tradicionales.`,
      img_path: '/assets/images/2004-1.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2004, 5, 18 ),
      cartel: "RAIZ, AWAKEN, INSANE, NO SILENCE, UNDERTHREAT, INJURY, KOYI K UTHO, DESECRATE, KRAKEN, MOLOTOV (MÉXICO), EL SIE7E, DE2, INJURY, CATUPECU MACHU (ARGENTINA), LA SEVERA MATACERA , SISTEMA SONORO SKARTEL, DAFNE MARAHUNTHA (IBAGUÉ), SONORAMA, LÍBIDO (PERÚ), AUTÉNTICOS DECADENTES (ARGENTINA), COFFE MAKERS (MEDELLÍN), ELY GUERRA (MÉXICO), BABASONICOS (ARGENTINA), SPINETTA (ARGENTINA), THE SKATALITES (JAMAICA), ALERTA, DOCTOR KRÁPULA, MORFONIA, ODIO A BOTERO, FUNKREAL (CHILE), VIETATO, LA RUEDA DE LA FORTUNA, 69 NOMBRES, THE BLACK CAT BONE, ANDREA ECHEVERRY, SUPERVELCRO, LOS DE ADENTRO, POST HUMAN, DIVAGASH, KINKY (MÉXICO), CAFÉ TACUBA (MÉXICO), SUPERLITIO (CALI), SIDESTEPPER, PORNOMOTORA, JULIETA VENEGAS (MÉXICO) Y ROBI DRACO ROSA (PUERTO RICO)."
    },
    {
      content: `La apertura del festival, por primera vez en su historia, contó con más de cuarenta mil asistentes para la presentación de Kraken con la Orquesta Sinfónica de Bogotá. La cuota internacional estuvo representada por Suicidal Tendencies, Cabezones, Desorden Público, SIQ de Ecuador, Miranda!, A.N.I.M.A.L., Capri, Guiso, The Ganjas, VHS or Beta y Jaguares. En el aspecto nacional se destacaron Estados Alterados, Nawal, I.R.A., Tránsito, The Black Cat Bone, Raíz, Ataque En Contra, Cuerpo Meridiano, Visor, Neurosis y Sicotrópico. El evento más destacado del festival, y uno de los más recordados en la historia del evento, fue la presentación de la banda Apocalyptica (esperada desde mucho tiempo atrás), la cual logró maravillar a todos los asistentes.`,
      img_path: '/assets/images/2005.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2005, 5, 18 ),
      cartel: "KRAKEN FILARMÓNICO, SIQ (ECUADOR), HEAD CRUSHER (PEREIRA), DESECRATE, A.N.I.M.A.L. (ARGENTINA), NEUROSIS, APOCALYPTICA (FINLANDIA), ATAQUE EN CONTRA, SUICIDAL TENDENCIES (ESTADOS UNIDOS), RAIZ, CITADINO BLUES & ROCK, ZELFISH PÉREZ, CUERPO MERIDIANO, THE BLACK CAT BONE, NADIE , PR1MAL, ZONA CERO, NAWAL, JAGUARES (MÉXICO), VHS OR BETA (ESTADOS UNIDOS), ESTADOS ALTERADOS, CABEZONES (ARGENTINA), I.R.A. (MEDELLÍN), JOSE FERNANDO CORTES, REY GORDIFLÓN (MEDELLÍN), DESORDEN PÚBLICO (VENEZUELA), PSICOTRÓPICO, BIZARRO, TRANSPORTE (CALI), CAPRI (ARGENTINA), DILDO (MËXICO), NORTEC (MËXICO), VOLUMEN CERO (ESTADOS UNIDOS), VISOR, THE GANJAS (CHILE), MIRANDA! (ARGENTINA) Y GUISO (CHILE)."
    },
    {
      content: `Día De los Muertos, Death by Stereo y Fear Factory de Estados Unidos; Botafogo, Horcas, Karamelo Santo y Turf de Argentina; Filtro Medusa de Panamá; División Minúscula, Panda, Telefunka y Zoe de México; Papashanty y Chuck Norris de Venezuela y Manu Chao de Francia dieron la cuota internacional en esta edición. La cifra de asistencia fue la segunda más alta en toda la historia del Festival. 43 bandas de 7 países, 350 artistas en escena, un gran despliegue técnico y logístico y tres días de extrema convivencia caracterizaron la versión número 12 del Festival.`,
      img_path: '/assets/images/2006.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2006, 5, 18 ),
      cartel: "KILCROPS, TOM ABELLA , SOULBURNER, INTROSPECCION , AWAKEN , INGRAND , DIA DE LOS MUERTOS (ESTADOS UNIDOS) , KOYI K UTHO , FEAR FACTORY (ESTADOS UNIDOS), ZARATH , JORGE BURBANO , THE PASSENGER , TIERRADENTRO , DEAD INSIDE , NEUROSIS , TENEBRARUM , HORCAS (ARGENTINA), ODIO A BOTERO , FILTRO MEDUSA (PANAMÁ) , DIVISION MINÚSCULA (MÉXICO) , DON TETTO , PANDA (MÉXICO) , LA CIRUGIA , EL SIE7E , PORNOMOTORA , LA PESTILENCIA , BARRIO SANTO , CHUCK NORRIS (VEN) , DUB KILLER COMBO , KARAMELO SANTO (ARGENTINA) , TELEFUNKA (MÉXICO) , TURF (ARGENTINA), THE BLACK CAT BONE , DEATH BY STEREO (ESTADOS UNIDOS), PROYECTO SEIKYWIA , LO KE DIGA EL DEDO , NAWAL , VOODOO SOULJAH’S , PAPASHANTY (VENEZUELA) , BOTAFOGO (ARGENTINA) , ZOÉ (MÉXICO) , LA SEVERA MATACERA Y MANU CHAO (FRANCIA)."
    },
    {
      content: `La decimotercera entrega del festival fue especialmente realizada como un homenaje a las bandas de rock colombianas. Se planeó el festival con las habituales dos tarimas independientes, sin embargo una tremenda granizada11​ obligó a cancelar las presentaciones del día sábado y reprogramar los conciertos de los artistas internacionales para el siguiente día, que además se vio alterado en el tiempo de cada banda por el cierre del escenario Lago que no estaba en buenas condiciones después de la lluvia. La jornada del día lunes no se vio afectada, ya que se rehabilitó la segunda tarima.

      Debido a los inconvenientes climáticos, se programó de manera extraordinaria una jornada para el día 10 de noviembre para bandas de metal. Se incluyeron dos bandas más a las originalmente previstas: Koyi K Utho y la mexicana Brujería.
  `,
      img_path: '/assets/images/2007.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2007, 5, 18 ),
      cartel: "2007	BAJO TIERRA , EXPERIMENTO ALEPH, VIETATO, TOXIC, VULGARXITO, SEIS PEATONES, ZELFISH PEREZ, CUENTOS DE LOS HERMANOS GRIND, PR1MAL, RATÓN PÉREZ, INJURY, TRIPLE X, HUEVO ATÓMICO, RAIZ, IMPROMTUS AD MORTEM, SIGMA, VÍA RÚSTICA, HOTEL MAMA, K93, NADIE, TWO WAY ANALOG, 69 NOMBRES, DAR A CADA UNO LO QUE ES SUYO, BLACK SHEEP ATTACK , ATERCIOPELADOS, SIDESTEPPER, MORFONIA, ALERTA, CHUCHO MERCHÁN, THE HALL EFFECT, TRES DE CORAZÓN, SUPERLITIO (CALI), ULTRÁGENO, AGONY, NEPENTES, DE BRUCES A MI, CATUPECU MACHU (ARGENTINA), AZAFATA (ARGENTINA), CARAJO (ARGENTINA), LOS BUNKERS (CHILE), EL CUARTETO DE NOS (URUGUAY), ROCOLA BACALAO (ECUADOR), LOS AMIGOS INVISIBLES (VENEZUELA), CIENFUE (PANAMÁ), QUIERO CLUB (MÉXICO), COHEED & CAMBRIA (USA), HAVE HEART (ESTADOS UNIDOS), BRUJERÍA (ESTADOS UNIDOS), AGENT STEEL (ESTADOS UNIDOS), CUARTETO DE NOS (URUGUAY) Y CATUPECU MACHU (ARGENTINA)."
    },
    {
      content: `La decimocuarta entrega del festival tiene como novedad la incursión de la Orquesta Filarmónica de Bogotá como organizadora del evento junto con la Secretaría de Cultura, Recreación y Deporte. La lluvia impidió gravemente la realización del evento lo que llevó a la cancelación de bandas como 1280 Almas, El Sie7e, Pornomotora y Ciegosordomudos, entre otras. La tarima Lago tuvo que ser cerrada los días domingo y lunes debido a que el terreno resbaloso era un riesgo para los asistentes. Además, se había abierto tarde, porque el pasto seguía muy mojado, debido a las intensas lluvias. Por eso la organización del evento decidió seriamente cambiar la fecha del festival. La directora ejecutiva de la Orquesta Filarmónica de Bogotá, entidad que tiene a su cargo la realización del evento, afirmó que se estudiará cuál será la mejor temporada.`,
      img_path: '/assets/images/2008.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2008, 5, 18 ),
      cartel: "ODIO A BOTERO, KOYI K UTHO, DOCTOR KRÁPULA, POPCORN (MEDELLÍN), NO IMPORTA (BARRANQUILLA), KRONOS (CALI), MASACRE (MEDELLÍN), SEÑORES USUARIOS (MEDELLÍN)., CARCASS (INGLATERRA), PARADISE LOST (INGLATERRA), BLOC PARTY (INGLATERRA), BLACK REBEL MOTORCYCLE CLUB (ESTADOS UNIDOS), THERMO (MÉXICO), AUSTIN TV (MÉXICO), LOS CONCORDE (MÉXICO), PANTEÓN ROCOCÓ (MÉXICO), BABASONICOS (ARGENTINA), SARGENTO GARCIA (FRANCIA), GONDWANA (CHILE), RATOS DE PORAO (BRASIL), LA KINKY BEAT (ESPAÑA), MUSCARIA (ECUADOR), ANDRES OSORIO'S BAND, AWAKEN, BARRIOSANTO, DEEPTRIP, DELAVIL, EL HOMBRE LIMON, ELSINSENTIDO, ENEPEI, ENTROPIA, ETHEREAL, FRACTAL FLESH, F-MAC, HEARTLESS, LOS SWINGERS, LOATHSOME FAITH, MMODCATS, MONOJET, SANTAFUMA, SMOKING UNDERDOG, SOLOKARINA, THUNDERBLAST, TIO CABEZA Y VELANDIA Y LA TIGRA."
    },
    {
      content: `En la decimoquinta edición del festival se celebraron los 15 años de vida del mismo. Entre novedades del evento estuvo el cambio de fecha del festival en junio, debido a los problemas de clima del año anterior. Las jornadas iniciaron el 23 de junio con actividades académicas, que se retoman de años anteriores en los que el festival ofrecía a sus más fieles seguidores espacios educativos con personalidades del ámbito musical nacional e internacional y este año, con motivo de la celebración de los 15 años, el festival volvió a generar este espacio educativo referente al rock. Las jornadas de conciertos se llevaron a cabo para los días 27, 28 y 29 de junio en el Parque Metropolitano Simón Bolívar. Para esta versión de aniversario se instalaron tres tarimas simultáneas, en las que por primera vez en la historia del certamen, el público asistente podrá disfrutar de más bandas (60 en total).`,
      img_path: '/assets/images/2009.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2009, 5, 18 ),
      cartel: "ALFONSO ESPRIELLA, ALTO GRADO COLOMBIA, ANTÍPODA, ÁRBOL DE OJOS, BLACK SHEEP ATTACK, BRAND NEW BLOOD, CITOYENS, DAFNE MARAHUNTHA, DAYBREAK, ELIJAH, ERROR, INGRAND, INTROSPECCIÓN, JOSÉ FERNANDO CORTES, JURIS LAW, KILCROPS, LA PLANTA, LEISHMANIASIS, LOS AUTÉNTICOS WATER RESIST, LOS MCGREGORS, LOS PLANKTON, MADAME COMPLOT, NADIE, NEUROSIS, RED O’CLOCK, SKAMPIDA, THE DEVIL’S REJECTS, THE KLAXON, TWO WAY ANALOG, UNAUTHORIZED, VIA RÚSTICA, VOODOO SOULJAH’S, WALKA, ARTEFACTO (MEDELLÍN), I.R.A. (MEDELLÍN), LEGEND MAKER (CALI), SUPERLITIO (CALI), TENEBRARUM (MEDELLÍN), GAIAS PENDULUM (MEDELLÍN), THE VINTAGE (BARRANQUILLA), BAMBARABANDA (PASTO), INNER HATE (MANIZALES), SEYKIWIA , LA SEVERA MATACERA, EL SIE7E, PORNOMOTORA, NAWAL, 1280 ALMAS, CIEGOSSORDOMUDOS, 69 NOMBRES, PROFETAS, DIVA GASH, FITO PÁEZ (ARGENTINA), ÁRBOL (ARGENTINA), ELY GUERRA (MÉXICO), HAGGARD (ALEMANIA), INA ICH (FRANCIA), INSTITUTO MEXICANO DEL SONIDO (MÉXICO), KINKY (MÉXICO), KOP (ESPAÑA), LOS CAFRES (ARGENTINA), MORBID ANGEL (ESTADOS UNIDOS), PLASTILINA MOSH (MÉXICO), CANDY 66 (VENEZUELA), SEÑOR LOOP (PANAMÁ), TOM CARY (ESPAÑA), MOLOTOV (MÉXICO) Y DESCOMUNAL (ECUADOR)."
    },
    {
      content: `Para esta edición hubo una inversión total de 2.800 millones de pesos Colombianos, incluyendo gestión y alianzas estratégicas, un estimado de 266 mil personas asistentes durante los tres días y un reporte oficial de cero disturbios o heridos. Además se presentaron 5 festivales locales: Festival Rock 10 de la Localidad de Engativá, Usmetal Festival de la Localidad de Usme, Rock Hyntiba de la Localidad de Fontibón, Rockalidad 4.ª de la Localidad de San Cristóbal y Rock por los Derechos Humanos de la Localidad de Ciudad Bolívar que dieron una oportunidad a las bandas distritales de preparase técnicamente para el evento.`,
      img_path: '/assets/images/2010.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2010, 5, 18 ),
      cartel: "ASIAN DUB FOUNDATION, MUTEMATH, KY-MANI MARLEY, ANDRÉS CALAMARO, A PLACE TO BURY STRANGERS, SHADOWS FALL, SUDAKAYA, SAMAEL, BIOHAZARD , STICK TO YOUR GUNS, PUYA, HELLO SEAHORSE, ZOÉ, NO TE VA GUSTAR (CONVENIO PEPSI MUSIC), DEF CON DOS, THE HALL EFFECT, ALERTA KAMARADA, ESTADOS ALTERADOS, THE BLACK CAT BONE, THE MILLS, EL SIN SENTIDO, PITBULL, DESECRATE, V FOR VOLUME, VELANDIA Y LA TIGRA, MOJIGANGA, PROVIDENCIA (CONVENIO ALTAVOZ), FERTIL MISERIA (CONVENIO ALTAVOZ), CROMLECH (CONVENIO ALTAVOZ), A.C.M.E. (CONVENIO IBAGUÉ CIUDAD ROCK), WITCHTRAP, WITHERING VOID , CUENTOS DE LOS HERMANOS GRIND , PATRICIO STIGLICH PROJECT , MALSANO , SOULBURNER , AIRE COMO PLOMO, FYHURA, STONEFLEX, LOATHSOME FAITH, NARCOPSYCHOTIC, LO KE DIGA EL DEDO , CHITE , K-93 , DURAN, LA URBAND, RAS JAHONNAN & NATURAL SELECTION, SMOKING UNDERDOG, JIMENA ANGEL , RADIO SUITE , THOSE , SEIS PEATONES , NICER DICERS, FAT OLD ELVIS, TONY PELIGRO! Y MONARETA."
    },
    {
      content: `Con el mayor registro de asistencia en sus 17 años de historia con 336 mil personas a lo largo de los cuatro días, en el Parque Simón Bolívar que fue adecuado desde cualquier punto de vista con una infraestructura impresionante; entre zonas de público, tarimas, producción de luces y video, 560 mil vatios de sonido.`,
      img_path: '/assets/images/2011.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2011, 5, 18 ),
      cartel: "FOBIA, TOREROS MUERTOS, BURAKA SOM SYSTEM, FISCHERSPOONER, CULTURA PROFETICA, BLACK UHURU, ASTRO, BLK JKS, DESCARTES A KANT, DESTRUCTION, OVERKILL, DRI, DEAD KENNEDYS, DISCHORD, PRIME MINISTER, COLD CAVE, DE BRUCES A MI, PARLANTES, NEPENTES, DETERMINACION, ATHANATOR, TWLIGHT GLIMMER, VELO DE OZA, GRITO, DAFNE MARAHUNTA, PANORAMA, CHOC QUIB TOWN, BOMBA ESTEREO, LA DERECHA, LA PESTILENCIA, DR KRAPULA, VOODOO SOULJAH’S, SKAMPIDA, TRIPLE XXX, DAR A CADA UNO LO QUE ES SUYO, ATAQUE EN CONTRA, SEXY LUCY, LSCFJ, DUB KILLER, DE JUEPUCHAS, POLICARPA Y SUS VICIOSAS, EL REINO DEL MAR, DARKNESS, KILCROPS, URSUS, UNDERTREAT, SOBIBOR, NEUROSIS, PURULENT, ETHEREAL, SANGRE PICHA, LEISHMENIASIS, INGRAND, MILMARIAS, BRAND NEW BLOOD, BHANG, STAINED GLORY, PULENTA, ANTIPODA, ALFONSO ESPRIELLA, RED O CLOCK, UNDER RED BLOOD, HYBRID MINDS, JOSE FERNANDO CORTES, MANIATIKATZ, INFO, VULGARXITO, TANTAN MORGAN, STAYWAY, DEEPTRIP EN LA CASA, LARVANTE, HIGH RATE EXTINCTION, HOLOCAUST OF BLOOD, NOSFERATU, ROAD WAILER, THE PASSENGER, LAVANDA INGLESA, CUANTICA, ANGER RISE, SIGMA, PURPLE ZIPPERS, ALTOGRADO, TELEBIT, ENTROPIA, ALLIGATOR, PRIMAL, ENDARK Y ZAGREB."
    },
    {
      content: `Durante este año se llevó a cabo el Festival entre el 30 de junio y el 2 de julio en el Parque Metropolitano Simón Bolívar. Este año Rock al Parque es la Fuerza de la Diversidad. Una apuesta para que la vitrina de la música independiente y alternativa más importante del país pueda proyectarse al siglo XXI con las puertas abiertas, reencontrando el legado de las grandes bandas e incluyendo los colores y sonidos de las nuevas propuestas.

      62 agrupaciones entre bandas distritales ganadoras por convocatoria, bandas nacionales e internacionales invitadas, estuvieron compartiendo durante estos tres días en las tres tarimas del festival, el cual tuvo su cierre a cargo del músico argentino Charly García.`,
      img_path: '/assets/images/2012.jpg',
      title: 'Rock al parque: La fuerza de la diversidad',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2012, 5, 18 ),
      cartel: "CHARLY GARCÍA, SURTEK COLLECTIVE, LA MAKINA DEL KARIBE, COLECTRO, LOS PIRAÑAS, BIGOTT, CAMILA MORENO, CONECTOR, NOFX, TR3S DE CORAZÓN, SINIESTRO TOTAL, JUANITA DIENTES VERDES, VICENTE GAYO, THOSE , PLANES ESTUDIOS , NIVERSALES, GLOBOS DE AIRE, 1280 ALMAS, CIEGOSORDOMUDOS, SICOTRÓPICO, 69 NOMBRES, SEIS PEATONES , CARLOS REYES Y LA KILLER BAND, CHITE , DESARME, R.A.Z.A., LOS MALDITOS, RESINA LALA, LAS ROBERTAS, BENJAMIN, SKINDRED, MALALMA, SAUL WILLIAMS, BLONDE REDHEAD, PROFETAS, DON PALABRA, STEEL PULSE, SYSTEMA SOLAR, DUB INCORPORATION, VÍA RÚSTICA, RAAS JAHONNAN NATURAL SELECTION, SATIVA REGGAE, EL SAGRADO, PITBULL, COMPROMISO 5-4, LEGACY OF THE FALLEN, REVEZ, 8BM EIGHT BIT MEMORY, BLIND ONE CAME, THE DILLINGER ESCAPE PLAN, HEADCRUSHER, KRISIUN, KOYI K UTHO, TERMINAL WAR, INFESTED CO, BLOODFATE, DIONE, VADER, LOATHSOME FAITH, INQUISITION, DAYCORE, CAMBIO DE FRENTE, AIRE COMO PLOMO, ETERNAL Y PATRICIO STIGLICH PROJECT ."
    },
    {
      content: `Durante este año, los bogotanos disfrutaron entre el 30 de junio y el 2 de julio de 34 bandas distritales, 15 internacionales y 12 nacionales. Como novedad este año, la Eco Carpa Distrito Rock 2013 visibilizó iniciativas auto sostenibles de proyectos artísticos y se proyectaron películas rockeras recientes, producidas en América Latina.

      Otra Novedad de Rock al Parque 2013 fue la alianza entre el Instituto Distrital de las Artes - IDARTES, la Alta Consejería Distrital TIC y la Unidad Administrativa Especial de Espacio Público - UAESP para trabajar por el medio ambiente a través de la música y la tecnología, al organizar la recolección de residuos tecnológicos en el marco del Festival.`,
      img_path: '/assets/images/2013.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2013, 5, 18 ),
      cartel: "VITA IMANA, SYMPHONY X, REBEL CATS, LIVING COLOUR, JUNIOR KELLY, JAQUE.REINA, ILLYA KURYAKI & THE VALDERRAMAS, HAVOK, ERUCA SATIVA, DUBIOZA KOLECTIV, DOWNSET, CANNIBAL CORPSE, BOSNIAN RAINBOWS, BLACK DRAWING CHALKS, ANTINOWHERE LEAGUE, THE MONAS, INTERNAL SUFFERING, TARMAC (INVITADA NACIONAL), SOULEDGE (INVITADA NACIONAL), SABIA ACTITUD (INVITADA NACIONAL), PESTE MUTANTE X (INVITADO NACIONAL), MASACRE (INVITADA NACIONAL), JDHK (INVITADA NACIONAL), ESTOYPUTO (INVITADA NACIONAL), BAMBARABANDA (INVITADA NACIONAL), A.C.M.E. (INVITADA NACIONAL), 5 DE MENOS (INVITADA NACIONAL), VICTIMIZED (FESTIVALES LOCALES), UBERGEHEN (FESTIVALES LOCALES), SAVAGE TORMENT (FESTIVALES LOCALES), ARGALS (FESTIVALES LOCALES), VÉRTIGO, PORNOMOTORA (INVITADO DISTRITAL), LA SEVERA MATACERA (INVITADO DISTRITAL), HORAL LOCAL (INVITADO DISTRITAL), CHUCHO MERCHÁN (INVITADO DISTRITAL), UNA FUERZA, THRESHOLD END, THA KLAXON, TAPPAN, STONEFLEX, SCHUTMAAT TRIO, SAUTI, SACRED GOAT, PULENTA, PESCADO VIVO, OH'LAVILLE, NO FEEDBACK, MET, LIANNA, LA REAL ACADEMIA DEL SONIDO, LA NUEVA FUERZA, LA MERCOSUR, INDELUSION, IKARUS FALLING, F.A.R.E.W.E.L.L., DURAZNO, DIAMANTE ELÉCTRICO, CUATRO ESPANTOS, CONSULADO POPULAR, AŔBOL DE OJOS, ANTOMBO, ANDRÉS GUALDRÓN Y LOS ANIMALES BLANCOS, ALTO GRADO Y ALFONSO ESPRIELLA."
    },
    {
      content: `La asistencia al evento este año fue masiva y sobrepasó el récord respecto a los años anteriores. Este gran cartel, fue indispensable y responsable de la oda a la música que hizo superar la mayor asistencia que había tenido hasta el momento, cuando en el año 2004 y cumpliendo diez años tuvo más 350.000 espectadores. Aproximadamente 400.000 personas durante los tres días de celebración en este 2014.la gran ausencia fue jas ensamble.`,
      img_path: '/assets/images/2014.jpg',
      title: 'Rock al parque: 20 años',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2014, 5, 18 ),
      cartel: "AGORA, AIRE COMO PLOMO, ALERTA KAMARADA, ANTHRAX, ARKANOT, ATERCIOPELADOS, BEHOLDER, BLACK LABEL SOCIETY, CACTOPUS, CATEDRAL, COLOMBIAN BLUES SOCIETY, CULTURA PROFÉTICA, DANICATTACK, DE LA TIERRA, DEEP SILENCE, DOCTOR KRÁPULA, EDSON VELANDIA, EL FREAKY, EL SAGRADO, EL SIE7E, ESTEMAN, EXODUS, FATSO, FISHBONE, FLORA CANÍBAL, FRIKSTAILERS, GEPE, GLOBOS DE AIRE, GUADALUPE PLATA, GUERRA TOTAL, HEADCRUSHER, HOPPO, I.R.A., INFO, JÁRANATAMBÓ, JOB SAAS & THE HEART BEAT, JUAN PABLO VEGA, KILLSWITCH ENGAGE, KONTRAGOLPE, LA DERECHA, LA ETNNIA, LA GUSANA CIEGA, LA PESTILENCIA, LA RONERA, LA SONIDERA, LITURGIA, LOST ABOVE ETHER, LUCIFERIAN, MAD PROFESSOR, MEMPHIS MAY FIRE, MERIDIAN BROTHERS, MÖBIUS, MOLOTOV, MUCHACHITO BOMBO INFIERNO, NAWAL, NEPENTES, NEUROSIS, NILE, NO TE VA GUSTAR, NOSFERATU, OUTERNACIONAL, POLIKARPA Y SUS VICIOSAS, PRO-PAIN, RAS JAHONNAN & NATURAL SELECTION, SIDESTEPPER, SKAMPIDA, SLY & ROBBIE, SOULFLY, SUPERLITIO, THE CASUALTIES, THY ANTICHRIST Y VOLCÁN."
    },
    {
      content: `La versión número veintiuno del festival de rock más emblemático del  continente dejó en el aire las sonoridades, estéticas y propuestas musicales de 74 bandas nacionales, locales e internacionales que se subieron a los escenarios del Parque Metropolitano Simón Bolívar y al de la Media Torta, para ofrecerle toda la potencia de su talento a los miles de espectadores que demostraron una vez más, que la de los colombianos es una capital roquera.`,
      img_path: '/assets/images/2015.jpg',
      title: 'Rock al parque: Cultura de paz',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2015, 5, 18 ),
      cartel: ""
    },
    {
      content: `La versión número veintidos del festival de rock más,61 bandas nacionales, locales e internacionales que se subieron al escenario del Parque Metropolitano Simón Bolívar. Este tomo como eje tematico el punk contando con invitados especiales del genero como Charged GBH.`,
      img_path: '/assets/images/2016.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2016, 5, 18 ),
      cartel: ""
    },
    {
      content: `La versión número veintitres del festival de rock más,61 bandas nacionales, locales e internacionales que se subieron al escenario del Parque Metropolitano Simón Bolívar.`
      img_path: '/assets/images/2017.jpg',
      title: 'Rock al parque',
      selected: false,
      caption: '20 Mayo',
      date: new Date( 2017, 5, 18 ),
      cartel: ""
    }
  ]


  timeline: TimelineElement[] = [
    this.data[0],
    this.data[1],
    this.data[2],
    this.data[3],
    this.data[4],
    this.data[5],
    this.data[6],
    this.data[7],
    this.data[8],
    this.data[9],
    this.data[10],
    this.data[11],
    this.data[12],
    this.data[13],
    this.data[14],
    this.data[15],
    this.data[16],
    this.data[17],
    this.data[18],
    this.data[19],
    this.data[20],
    this.data[21],
    this.data[22]
  ];

}

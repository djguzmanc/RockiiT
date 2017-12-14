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
  ]

  timeline: TimelineElement[] = [
    this.data[ 0 ],
    this.data[ 1 ],
    this.data[ 2 ],
  ];

}

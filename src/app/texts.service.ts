import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

type LanguageCode = 'ES' | 'FR' | 'DE' | 'EN' | 'IT'

interface LanguageTextHome {
  botones: string[];
  titulos: string[];
  textos: string[];
  carta: string[];
  formulario: string[];
  horario: string[];
  errores: string[];
}

interface TextsHome {
  ES: LanguageTextHome;
  FR: LanguageTextHome;
  DE: LanguageTextHome;
  EN: LanguageTextHome;
  IT: LanguageTextHome;
}

interface LanguageTextCarta {
  botones: string[];
  titulo: string;
  titulos: string[];
  menu_sections: menuSections;
}

interface menuSections {
  EyE: menuItem[];
  S: menuItem[];
  P: menuItem[];
  C: menuItem[];
  PyB: menuItem2[];
}

interface menuItem {
  titulo: string;
  texto: string[];
  precio: string[];
}

interface menuItem2 {
  titulo: string;
  texto: string[];
  precio: string[];
  especial: string;
}

interface TextsCarta {
  ES: LanguageTextCarta;
  FR: LanguageTextCarta;
  DE: LanguageTextCarta;
  EN: LanguageTextCarta;
  IT: LanguageTextCarta;
}

interface TextsCartaSg {
  ES: LanguageTextCarta;
  FR: LanguageTextCarta;
  DE: LanguageTextCarta;
  EN: LanguageTextCarta;
  IT: LanguageTextCarta;
}

@Injectable({
  providedIn: 'root'
})
export class TextsService {
  private current_language = new BehaviorSubject<LanguageCode>('ES');

  es_lang_home: LanguageTextHome = {
    botones: ['Carta', 'Reservar'],
    titulos: ['desde 1981', 'Bienvenidos', 'a Il Piccolino della Farfalla', 'A medida para tí', 'Nuestra Carta', '¿Quieres venir?', 'Nuestro Horario', 'Reservar'],
    textos: [
      'Il Piccolino della Farfalla abrió sus puertas en 1981 como un pequeño negocio familiar, convirtiéndose rápidamente en un punto de encuentro para actores, músicos, bailarines y magos. Tras sus actuaciones, buscaban aquí un rincón acogedor donde disfrutar de platos caseros, frescos, abundantes y a un precio irresistible.',
      'En Il Piccolino della Farfalla, consideramos importante que todos puedan disfrutar de una experiencia gastronómica inolvidable, sin importar sus necesidades o preferencias. Por eso, hemos diseñado un menú con opciones para todos: <span class="highlight">platos vegetarianos, recetas veganas</span> y, sobre todo, <span class="highlight">una gran selección sin gluten</span>, pensada para que disfrutes sin preocupaciones y sin renunciar al sabor.'
    ],
    carta: ['Entrantes y Ensaladas', 'Segundos Platos', 'Pizzas', 'Carnes', 'Postres y Bebidas'],
    formulario: ['Nombre', 'Teléfono de contacto', 'Fecha', 'Hora', 'Número de personas', 'He leído y acepto la Política de Privacidad', "Reservar"],
    horario: ['Domingo a Jueves<br>13:00 - 02:00', 'Viernes, Sábados y Festivos<br>13:00 - 02:30', 'Teléfono: 913694391', 'La última reserva será 1h15min antes del cierre'],
    errores: [
      'El nombre es obligatorio.',
      'El nombre debe ser solo letras y tener entre 3 y 40 caracteres.',
      'El teléfono es obligatorio.',
      'El teléfono es inválido. Asegúrate de introducir un número de España',
      'El email es obligatorio.',
      'El email es inválido.',
      'La fecha es obligatoria.',
      'La hora es obligatoria.',
      'La hora debe estar entre ',
      ' y ',
      'El número de personas es obligatorio.',
      'El mínimo de personas es 1.',
      'El máximo de personas es 12 personas, si son más, llámenos.',
      "Es obligatorio aceptar la política de privacidad"]
  };

  fr_lang_home: LanguageTextHome = {
    botones: ['Carte', 'Réserver'],
    titulos: ['depuis 1981', 'Bienvenue', 'à Il Piccolino della Farfalla', 'Sur mesure pour vous', 'Notre carte', 'Voulez-vous venir ?', 'Nos horaires', 'Réserver'],
    textos: [
      'Il Piccolino della Farfalla a ouvert ses portes en 1981 en tant que petite entreprise familiale, devenant rapidement un lieu de rencontre pour les acteurs, musiciens, danseurs et magiciens. Après leurs performances, ils cherchaient ici un coin accueillant pour profiter de plats faits maison, frais, copieux et à un prix imbattable.',
      'Chez Il Piccolino della Farfalla, nous considérons qu\'il est important que chacun puisse profiter d\'une expérience gastronomique inoubliable, peu importe ses besoins ou préférences. C\'est pourquoi nous avons conçu un menu avec des options pour tous : plats végétariens, recettes véganes et, surtout, une grande sélection sans gluten, pensée pour que vous puissiez profiter sans souci et sans renoncer à la saveur.'
    ],
    carta: ['Entrées et Salades', 'Plats principaux', 'Pizzas', 'Viandes', 'Desserts et boissons'],
    formulario: ['Nom', '\'Numéro de contact (en Espagne)\'<br>', 'Date', 'Heure', 'Nombre de personnes', 'J\'ai lu et j\'accepte la politique de confidentialité', "Réserver"],
    horario: ['Dimanche à Jeudi<br>13:00 - 02:00', 'Vendredi, Samedi et Jours Fériés<br>13:00 - 02:30', 'Téléphone : 913694391', 'La dernière réservation sera 1h15 avant la fermeture.'],
    errores: [
      'Le nom est obligatoire.',
      'Le nom doit contenir uniquement des lettres et comporter entre 3 et 40 caractères.',
      'Le numéro de téléphone est obligatoire.',
      'Le numéro de téléphone est invalide. Il doit s\'agir d\'un numéro de téléphone espagnol.',
      'L\'email est obligatoire.',
      'L\'email est invalide.',
      'La date est obligatoire.',
      'L\'heure est obligatoire.',
      'L\'heure doit être comprise entre ',
      ' et ',
      'Le nombre de personnes est obligatoire.',
      'Le minimum de personnes est 1.',
      'Le maximum de personnes est de 12, pour plus de personnes, veuillez nous appeler.',
      'Il est obligatoire d\'accepter la politique de confidentialité.'
    ]

  };

  de_lang_home: LanguageTextHome = {
    botones: ['Karte', 'Reservieren'],
    titulos: ['seit 1981', 'Willkommen', 'im Il Piccolino della Farfalla', 'Maßgeschneidert für Sie', 'Unsere Karte', 'Möchten Sie kommen?', 'Unsere Öffnungszeiten', 'Reservieren'],
    textos: [
      'Il Piccolino della Farfalla öffnete 1981 seine Türen als kleines Familienunternehmen und wurde schnell zu einem Treffpunkt für Schauspieler, Musiker, Tänzer und Zauberer. Nach ihren Aufführungen suchten sie hier eine gemütliche Ecke, um hausgemachte, frische, reichhaltige Gerichte zu genießen, die zu einem unschlagbaren Preis angeboten wurden.',
      'Im Il Piccolino della Farfalla halten wir es für wichtig, dass jeder ein unvergessliches gastronomisches Erlebnis genießen kann, unabhängig von seinen Bedürfnissen oder Vorlieben. Deshalb haben wir ein Menü mit Optionen für alle entwickelt: vegetarische Gerichte, vegane Rezepte und vor allem eine große Auswahl an glutenfreien Gerichten, die dafür sorgen, dass Sie ohne Sorgen genießen können, ohne auf Geschmack zu verzichten.'
    ],
    carta: ['Vorspeisen und Salate', 'Hauptgerichte', 'Pizzen', 'Fleisch', 'Desserts und Getränke'],
    formulario: ['Name', '\'Kontakttelefonnummer (in Spanien)\'', 'Datum', 'Uhrzeit', 'Anzahl der Personen', 'Ich habe die Datenschutzrichtlinie gelesen und akzeptiere sie', "Reservieren"],
    horario: ['Sonntag bis Donnerstag<br>13:00 - 02:00', 'Freitag, Samstag und Feiertage<br>13:00 - 02:30', 'Telefon: 913694391', 'Die letzte Reservierung erfolgt 1h15min vor Schließung.'],
    errores: [
      'Der Name ist erforderlich.',
      'Der Name darf nur Buchstaben enthalten und muss zwischen 3 und 40 Zeichen lang sein.',
      'Die Telefonnummer ist erforderlich.',
      'Die Telefonnummer ist ungültig. Es muss eine spanische Telefonnummer sein.',
      'Die E-Mail ist erforderlich.',
      'Die E-Mail ist ungültig.',
      'Das Datum ist erforderlich.',
      'Die Uhrzeit ist erforderlich.',
      'Die Uhrzeit muss zwischen ',
      ' und ',
      'Die Anzahl der Personen ist erforderlich.',
      'Die Mindestanzahl an Personen ist 1.',
      'Die Höchstanzahl an Personen beträgt 12; bei mehr Personen kontaktieren Sie uns bitte.',
      'Es ist erforderlich, die Datenschutzrichtlinie zu akzeptieren.'
    ]

  };

  en_lang_home: LanguageTextHome = {
    botones: ['Menu', 'Reserve'],
    titulos: ['since 1981', 'Welcome', 'to Il Piccolino della Farfalla', 'Made specially for you', 'Our Menu', 'Do you want to come?', 'Our Schedule', 'Reserve'],
    textos: [
      'Il Piccolino della Farfalla opened its doors in 1981 as a small family business, quickly becoming a meeting point for actors, musicians, dancers, and magicians. After their performances, they would seek a cozy corner here to enjoy homemade, fresh, abundant dishes at an unbeatable price.',
      'At Il Piccolino della Farfalla, we believe it\'s important that everyone can enjoy an unforgettable dining experience, regardless of their needs or preferences. That\'s why we have designed a menu with options for everyone: vegetarian dishes, vegan recipes, and, most importantly, a great selection of gluten-free options, so you can enjoy without worries and without sacrificing taste.'
    ],
    carta: ['Starters and Salads', 'Main Dishes', 'Pizzas', 'Meats', 'Desserts and beverages'],
    formulario: ['Name', 'Spanish Contact Number', 'Date', 'Time', 'Number of people', 'I have read and accept the Privacy Policy', "Reserve"],
    horario: ['Sunday to Thursday<br>13:00 - 02:00', 'Friday, Saturday, and Holidays<br>13:00 - 02:30', 'Phone: 913694391', 'The last reservation will be 1h15min before closing.'],
    errores: [
      'The name is required.',
      'The name must contain only letters and be between 3 and 40 characters.',
      'The phone number is required.',
      'The phone number is invalid. It must be a Spanish phone number.',
      'The email is required.',
      'The email is invalid.',
      'The date is required.',
      'The time is required.',
      'The time must be between ',
      ' and ',
      'The number of people is required.',
      'The minimum number of people is 1.',
      'The maximum number of people is 12; if there are more, please call us.',
      'It is mandatory to accept the privacy policy.'
    ]

  };

  it_lang_home: LanguageTextHome = {
    botones: ['Carta', 'Prenotare'],
    titulos: ['dal 1981', 'Benvenuti', 'a Il Piccolino della Farfalla', 'Su misura per te', 'Il nostro menù', 'Vuoi venire?', 'I nostri orari', 'Prenotare'],
    textos: [
      'Il Piccolino della Farfalla ha aperto le sue porte nel 1981 come una piccola attività familiare, diventando rapidamente un punto di incontro per attori, musicisti, ballerini e maghi. Dopo le loro esibizioni, cercavano qui un angolo accogliente dove gustare piatti fatti in casa, freschi, abbondanti e a un prezzo imbattibile.',
      'Da Il Piccolino della Farfalla, riteniamo che sia importante che tutti possano godere di un\'esperienza gastronomica indimenticabile, indipendentemente dalle loro necessità o preferenze. Per questo motivo, abbiamo progettato un menù con opzioni per tutti: piatti vegetariani, ricette vegane e, soprattutto, una grande selezione senza glutine, pensata per permetterti di gustare senza preoccupazioni e senza rinunciare al sapore.'
    ],
    carta: ['Antipasti e Insalate', 'Piatti principali', 'Pizze', 'Carni', 'Desserts e bevande'],
    formulario: ['Nome', 'Numero di contatto (spagnolo)', 'Data', 'Orario', 'Numero di persone', 'Ho letto e accetto la Politica sulla Privacy', "Prenotare"],
    horario: ['Domenica a Giovedì<br>13:00 - 02:00', 'Venerdì, Sabato e Festivi<br>13:00 - 02:30', 'Telefono: 913694391', 'L\'ultima prenotazione sarà 1h15min prima della chiusura.'],
    errores: [
      'Il nome è obbligatorio.',
      'Il nome deve contenere solo lettere e avere tra 3 e 40 caratteri.',
      'Il numero di telefono è obbligatorio.',
      'Il numero di telefono non è valido. Deve essere un numero di telefono spagnolo.',
      'L\'email è obbligatorio.',
      'L\'email è invalido.',
      'La data è obbligatoria.',
      'L\'orario è obbligatorio.',
      'L\'orario deve essere tra ',
      ' e ',
      'Il numero di persone è obbligatorio.',
      'Il numero minimo di persone è 1.',
      'Il numero massimo di persone è 12; per un numero maggiore, contattaci.',
      'È obbligatorio accettare la politica sulla privacy.'
    ]

  };

  es_lang_carta: LanguageTextCarta = {
    botones: ['Sin Gluten', 'Inicio', 'Reservar'],
    titulo: 'Nuestra Carta',
    titulos: ['Ensaladas y Entrantes', 'Segundos Platos', 'Pizzas', 'Carnes', 'Postres y Bebidas'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Entrantes',
          texto: [
            'Mejillones al vapor y emulsión de tomate (solo en invierno)',
            'Porción de tarta de cebolla o de setas y puerro',
            'Porción de berenjena de la abuela gratinada con tomate y queso',
            'Chorizo de León al horno con vino',
            'Gazpacho casero (solo en verano)',
            'Caldo espesito casero de verduras y carne (solo en invierno)',
            'Sopa de cebolla en caldo de verdura y carne (solo en invierno)',
            'Empanada chilena de carne',
            'Papa rellena de carne o de queso',
            'Crema de Calabacín',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '5,50', '8,10', '8,10',
            '6,75', '8,15', '6,10', '6,50', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Raciones Españolas',
          texto: [
            'Huevos rotos con jamón ibérico',
            'Calamares a la andaluza con alioli',
            'Gambones al Whiskey',
            'Croquetas de jamón, pollo o mixtas (6u)',
            'Patatas bravas, alioli o mixtas',
            'Gambas al ajillo',
            'Gulas al ajillo',
            'Morcilla de Burgos',
            'Matrimonio',
            'Pulpo a la andaluza',
            'Pimientos de Padrón',
            'Jamón ibérico con queso'
          ],
          precio: [
            '12,50', '10,50', '14,00', '8,00', '8,20',
            '11,75', '7,50', '9,00', '8,10', '18,05',
            '7,00', '18,00'
          ]
        },
        {
          titulo: 'Ensaladas',
          texto: [
            'Baby: espinacas, mezclum, queso cabra, cebolleta, frutos secos',
            'Caprese: tomate, mozzarella búfala y pesto',
            'Mixta: mezclum, tomate, bonito y cebolla',
            'Blanca: mezclum, apio, manzana, nueces, salsa roquefort',
            'De la casa: mezclum, pollo frito, picatostes, manzana y salsa de la casa',
            'Colorida: remolacha, patata, zanahoria, huevo duro y salsa de la casa',
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15',
            '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pastas y Arroces',
          texto: [
            'Hamburguesa vegana',
            'Arroz integral con verduras y tofu',
            'Lasaña de verduras frescas',
            'Berenjenas de la abuela gratinadas con tomate y queso',
            'Tarta de cebolla o de setas y puerro (entera)',
            'Canelones de espinacas, champiñones y nueces',
            'Gnocchi de patata con salsa',
            'Ravioli de espinacas y requesón con salsa',
            'Risotto de champiñones y gambas',
            'Lasaña de carne',
            'Spaghetti con salsa a elegir',
            'Sorrentinos de jamón y requesón con salsa'
          ],
          precio: [
            '12,50', '12,00', '12,75', '11,25', '18,00', '12,25',
            '11,50', '11,50', '12,70', '12,50', '10,20', '12,50'
          ]
        },
        {
          titulo: 'Salsa para Pastas',
          texto: [
            'Carbonara: nata, huevo y beicon',
            'Pesto: albahaca, ajo y nueces',
            'Arrabbiata: tomate y guindilla',
            'Boloñesa: tomate y carne picada',
            'Salmón ahumado y espárragos',
            'Cuatro quesos'
          ],
          precio: [
            '0', '0', '0', '0', '0',
            '0'
          ]
        }
      ],
      P: [
        {
          titulo: 'Pizzas',
          texto: [
            'Margarita: mozzarella, tomate y orégano',
            'Caprichosa: jamón',
            'Funghi: champiñones',
            'Kokido: pollo',
            'Exquisita: tomate en rodajas y ajo',
            'Vegetal: maíz, champiñones y pimientos',
            'Napolitana: anchoas y alcaparras',
            'Erótica: roquefort, apio y nueces',
            'Cuatro quesos',
            'Hawaiana: piña y jamón',
            'Especial: beicon, cebolla y champiñones',
            'Carnosa: carne de ternera',
            'Mediterránea: atún',
            'Castellana: chorizo, salami o bacon',
            'Picantona: pepperoni y pimienta',
            'Sabrosa: picadillo de chorizo',
            'Hazla tú mismo: base margarita + 2 ingredientes de otras pizzas',
            'Hazla vegana: cambia la mozzarella por queso vegano'
          ],
          precio: [
            '8,75€', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,90', '+1,40'
          ]
        }
      ],
      C: [
        {
          titulo: 'Carnes a la Parrilla de Carbón',
          texto: [
            'Asado de tira',
            'Vacío',
            'Entraña',
            'Entrecot o Chuletón',
            'Parrillada para dos personas'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: 'Otras Carnes',
          texto: [
            'Alitas de pollo',
            'Pollo de corral al curry con leche de coco y guarnición',
            'Escalope de ternera napolitano',
            'Escalope de pollo',
            'Escalope de pollo gratinado con tomate y queso',
            'Albóndigas de ternera caseras',
            'Hamburguesa de ternera',
            'Salmón a la plancha'
          ],
          precio: [
            '9,00', '14,10', '14,50', '12,50', '13,90',
            '11,00', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Postres',
          texto: [
            'Caprichos de dulce de leche',
            'Tarta casera de queso al horno',
            'Strudel de manzana casero con helado',
            'Brownie casero con helado y chocolate caliente',
            'Tarta de chocolate vegana, sin gluten y sin lactosa',
            'Charlotte: helado de nata con chocolate caliente y nueces',
            'Helado (vainilla, chocolate o nata)',
            'Tiramisú casero',
            'Trufas con nata',
            'Alfajor de maicena con dulce de leche y coco',
            'Fruta del día'
          ],
          precio: [
            '7,15', '5,70', '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70', '5,70', '4,00',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: 'Vinos',
          texto: ['Albariño - Blanco',
            'De la casa: Lanchares - tempranillo Blanco o Tinto','Ribera del Duero - Tinto','Cune Rioja Crianza - Tinto','½ Cune Rioja Crianza - Tinto','Blanco de Rueda','Rosado de Navarra','Lambrusco - Tinto o Rosado','Jarra de Sangría','Jarra de Tinto de verano','Cava','Benjamín - Mini Cava','Protos - Tinto','Azpilicueta - Rioja Crianza Tinto','Alma - Blanco, Tinto o Rosado semidulce','Diamante - Blanco semidulce','Dulce Maria - Blanco'],
          precio: ['17,50','13,50','17,50','18,00','9,80','16,90','16,50','13,25','17,50','15,50','24,00','9,50','22,00','22,00','17,50','18,00','18,50'],
          especial: 'Pregúntanos por nuestra selección especial'
        },
        {
          titulo: 'Copas de Vino',
          texto: ['De la casa: Lanchares - tempranillo Blanco o Tinto','Ribera del Duero - Tinto','Cune Rioja Crianza - Tinto','Blanco de Rueda','Rosado de Navarra','Alma - Blanco, Tinto o Rosado semidulce','Diamante - Blanco semidulce','Dulce Maria - Blanco'],
          precio: ['3,40','3,80','4,30','4,05','3,90','3,80','4,00','4,10'],
          especial: ""
        },
        {
          titulo: 'Refrescos y Otros',
          texto: ['Refrescos','Jarritos','Zumos','Agua con gas o mineral','Café','Café - sin lactosa o vegetal','Té o infusión'],
          precio: ['3,50','4,25','3,50','2,25','1,95','2,15','1,95'],
          especial: ""
        },
        {
          titulo: 'Otros Alcoholes y Cervezas',
          texto: ['Pinta de Cerveza','Copa de Cerveza','Tinto de Verano','Ladrón de Manzanas','Mahou (33cl)','Alhambra 1925 (33cl)','Cibeles Rubia (33cl)','Corona (33cl)','Peroni (33cl)','Maestra (33cl)','Sin Gluten (33cl)'],
          precio: ['4,25','3,20','4,50','3,75','3,80','4,50','5,00','4,20','4,50','4,20','4,20'],
          especial: ""
        }
      ]
    }
  };
  es_lang_carta_sg: LanguageTextCarta = {
    botones: ['Sin Gluten', 'Inicio', 'Reservar'],
    titulo: 'Nuestra Carta',
    titulos: ['Ensaladas y Entrantes', 'Segundos Platos', 'Pizzas', 'Carnes', 'Postres y Bebidas'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Entrantes',
          texto: [
            'Mejillones al vapor y emulsión de tomate (solo en invierno)',
            'Porción de berenjena gratinada con tomate y queso',
            'Chorizo de León al horno con vino',
            'Caldo espesito casero de verduras y carne (solo en invierno)',
            'Sopa de cebolla en caldo de verdura y carne (solo en invierno)',
            'Crema de Calabacín',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '8,10', '6,75', '8,45', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Ensaladas',
          texto: [
            'Baby: espinacas, lechugas, queso de cabra, cebolleta, frutos secos',
            'Caprese: tomate, mozzarella búfala y pesto',
            'Mixta: lechugas coloridas, tomate, bonito y cebolla',
            'Blanca: lechuga, apio, manzana, nueces, salsa roquefort',
            'Colorida: remolacha, patata, zanahoria, huevo duro',
            'Especial: lechuga, barritas de cangrejo y espárragos blancos'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15', '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pastas y Arroces',
          texto: [
            'Hamburguesa vegana',
            'Arroz integral con verduras y tofu',
            'Berenjenas gratinadas con tomate y queso',
            'Tarta de cebolla o de setas y puerro (entera)',
            'Risotto de champiñones y gambas',
            'Spaghetti con salsa a elegir'
          ],
          precio: [
            '12,50', '12,00', '11,25', '18,00', '12,70', '10,20'
          ]
        },
        {
          titulo: 'Salsa para Pastas',
          texto: [
            'Carbonara: nata, huevo y beicon',
            'Pesto: albahaca, ajo y nueces',
            'Arrabbiata: tomate y guindilla',
            'Boloñesa: tomate y carne picada',
            'Salmón ahumado y espárragos',
            'Cuatro quesos'
          ],
          precio: [
            '0', '0', '0', '0', '0', '0'
          ]
        }
      ],
      P: [
        {
          titulo: 'Pizzas',
          texto: [
            'Margarita: mozzarella, tomate y orégano',
            'Caprichosa: jamón',
            'Funghi: champiñones',
            'Kokido: pollo',
            'Exquisita: tomate en rodajas y ajo',
            'Vegetal: maíz, champiñones y pimientos',
            'Napolitana: anchoas y alcaparras',
            'Erótica: roquefort, apio y nueces',
            'Cuatro quesos',
            'Hawaiana: piña y jamón',
            'Especial: beicon, cebolla y champiñones',
            'Carnosa: carne de ternera',
            'Mediterránea: atún',
            'Castellana: chorizo, salami o bacon',
            'Picantona: pepperoni y pimienta',
            'Sabrosa: picadillo de chorizo',
            'Hazla tú mismo: base margarita + 2 ingredientes de otras pizzas',
            'Hazla para tí: cambia la mozzarella por queso vegano o sin lactosa'
          ],
          precio: [
            '9,50', '10,50', '10,50', '10,50', '10,50', '10,50', '10,50', '10,50',
            '10,50', '10,50', '10,50', '10,50', '10,50', '10,50', '10,50', '10,50',
            '10,95', '+1,40'
          ]
        }
      ],
      C: [
        {
          titulo: 'Carnes a la Parrilla de Carbón',
          texto: [
            'Asado de tira',
            'Vacío',
            'Entraña',
            'Entrecot',
            'Parrillada para dos personas'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: 'Otras Carnes',
          texto: [
            'Pollo de corral al curry con leche de coco y guarnición',
            'Hamburguesa de ternera',
            'Salmón a la plancha'
          ],
          precio: [
            '14,10', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Postres',
          texto: [
            'Tarta casera de queso al horno',
            'Brownie casero con helado y chocolate caliente',
            'Tarta de chocolate vegana, sin gluten y sin lactosa',
            'Charlotte: helado de nata con chocolate caliente y nueces',
            'Helado (vainilla, chocolate o nata)',
            'Trufas con nata',
            'Fruta del día'
          ],
          precio: [
            '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: 'Vinos',
          texto: ['Albariño - Blanco',
            'De la casa: Lanchares - tempranillo Blanco o Tinto','Ribera del Duero - Tinto','Cune Rioja Crianza - Tinto','½ Cune Rioja Crianza - Tinto','Blanco de Rueda','Rosado de Navarra','Lambrusco - Tinto o Rosado','Jarra de Sangría','Jarra de Tinto de verano','Cava','Benjamín - Mini Cava','Protos - Tinto','Azpilicueta - Rioja Crianza Tinto','Alma - Blanco, Tinto o Rosado semidulce','Diamante - Blanco semidulce','Dulce Maria - Blanco'],
          precio: ['17,50','13,50','17,50','18,00','9,80','16,90','16,50','13,25','17,50','15,50','24,00','9,50','22,00','22,00','17,50','18,00','18,50'],
          especial: 'Pregúntanos por nuestra selección especial'
        },
        {
          titulo: 'Copas de Vino',
          texto: ['De la casa: Lanchares - tempranillo Blanco o Tinto','Ribera del Duero - Tinto','Cune Rioja Crianza - Tinto','Blanco de Rueda','Rosado de Navarra','Alma - Blanco, Tinto o Rosado semidulce','Diamante - Blanco semidulce','Dulce Maria - Blanco'],
          precio: ['3,40','3,80','4,30','4,05','3,90','3,80','4,00','4,10'],
          especial: ""
        },
        {
          titulo: 'Refrescos y Otros',
          texto: ['Refrescos','Jarritos','Zumos','Agua con gas o mineral','Café','Café - sin lactosa o vegetal','Té o infusión'],
          precio: ['3,50','4,25','3,50','2,25','1,95','2,15','1,95'],
          especial: ""
        },
        {
          titulo: 'Otros Alcoholes y Cervezas',
          texto: ['Tinto de Verano','Ladrón de Manzanas','Cerveza Sin Gluten (33cl)'],
          precio: ['4,50','3,75','4,20'],
          especial: ""
        }
      ]
    }
  };


  all_texts_home: TextsHome = {
    ES: this.es_lang_home,
    FR: this.fr_lang_home,
    DE: this.de_lang_home,
    EN: this.en_lang_home,
    IT: this.it_lang_home,
  };

  all_texts_carta: TextsCarta = {
    ES: this.es_lang_carta,
    FR: this.es_lang_carta,
    DE: this.es_lang_carta,
    EN: this.es_lang_carta,
    IT: this.es_lang_carta,
  }

  all_texts_carta_sg: TextsCarta = {
    ES: this.es_lang_carta_sg,
    FR: this.es_lang_carta_sg,
    DE: this.es_lang_carta_sg,
    EN: this.es_lang_carta_sg,
    IT: this.es_lang_carta_sg,
  }

  constructor() { }

  setLanguage(lang: LanguageCode) {
    this.current_language.next(lang);
  }

  get currentLanguage$() {
    return this.current_language.asObservable();
  }

  getTextsHome() {
    const lang: LanguageCode = this.current_language.getValue();
    return this.all_texts_home[lang];
  }

  getTextsCarta(): LanguageTextCarta {
    const lang: LanguageCode = this.current_language.getValue();
    return this.all_texts_carta[lang];
  }
  getTextsCartaSg(): LanguageTextCarta {
    const lang: LanguageCode = this.current_language.getValue();;
    return this.all_texts_carta_sg[lang];
  }

  getTextsPolicy(page: string) {
    const lang: LanguageCode = this.current_language.getValue();
    return this.all_texts_home[lang];
  }
}

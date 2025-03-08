import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

type LanguageCode = 'ES' | 'FR' | 'DE' | 'EN' | 'IT' | 'ZH';

interface LanguageTextHome {
  botones: string[];
  titulos: string[];
  textos: string[];
  carta: string[];
  formulario: string[];
  horario: string[];
  errores: string[];
  alts: string[];
}

interface TextsHome {
  ES: LanguageTextHome;
  FR: LanguageTextHome;
  DE: LanguageTextHome;
  EN: LanguageTextHome;
  IT: LanguageTextHome;
  ZH: LanguageTextHome;
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
  ZH: LanguageTextCarta;
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
    horario: ['Domingo a Jueves<br>13:00 - 02:00', 'Viernes, Sábados y Festivos<br>13:00 - 02:30', 'Teléfono: 913694391', 'La última reserva será 1h15min antes del cierre.'],
    errores: [
      'El nombre es obligatorio.',
      'El nombre debe ser solo letras y tener entre 3 y 40 caracteres.',
      'El teléfono es obligatorio.',
      'El teléfono es inválido. Asegúrate de introducir un número de España',
      'El email es obligatorio.',
      'El email es inválido.',
      'La fecha es obligatoria.',
      'La hora es obligatoria.',
      'No es posible reservar sábados, domingos o festivos entre las 14:01 y las 15:29, sentimos las molestias.',
      'La hora debe estar entre ',
      ' y ',
      'El número de personas es obligatorio.',
      'El mínimo de personas es 1.',
      'El máximo de personas es 12 personas, si son más, llámenos.',
      "Es obligatorio aceptar la política de privacidad"],
    alts: [
      'Fachada del restaurante Il Piccolino della Farfalla',
      'flecha indicando posible scroll hacia abajo',
      'una de nuestras mesas preparada para comer, con un plato, cubiertos y una botella de vino',
      'una de nuestras cocineras preparando la masa de las pizzas sin gluten',
      'icono de ',
    ]
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
      "Il n'est pas possible de réserver les samedis, dimanches ou jours fériés entre 14h01 et 15h29, nous sommes désolés pour le désagrément.",
      'L\'heure doit être comprise entre ',
      ' et ',
      'Le nombre de personnes est obligatoire.',
      'Le minimum de personnes est 1.',
      'Le maximum de personnes est de 12, pour plus de personnes, veuillez nous appeler.',
      'Il est obligatoire d\'accepter la politique de confidentialité.'
    ],
    alts: [
      'Façade du restaurant Il Piccolino della Farfalla',
      'flèche indiquant un possible défilement vers le bas',
      'une de nos tables préparée pour manger, avec une assiette, des couverts et une bouteille de vin',
      'une de nos cuisinières préparant la pâte des pizzas sans gluten',
      'icône de ',
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
      'Es ist nicht möglich, samstags, sonntags oder an Feiertagen zwischen 14:01 und 15:29 Uhr zu reservieren, wir bitten um Entschuldigung.',
      'Die Uhrzeit muss zwischen ',
      ' und ',
      'Die Anzahl der Personen ist erforderlich.',
      'Die Mindestanzahl an Personen ist 1.',
      'Die Höchstanzahl an Personen beträgt 12; bei mehr Personen kontaktieren Sie uns bitte.',
      'Es ist erforderlich, die Datenschutzrichtlinie zu akzeptieren.'
    ],
    alts: [
      'Fassade des Restaurants Il Piccolino della Farfalla',
      'Pfeil, der mögliches Scrollen nach unten anzeigt',
      'einer unserer Tische, der zum Essen vorbereitet ist, mit einem Teller, Besteck und einer Flasche Wein',
      'eine unserer Köchinnen, die den Teig für die glutenfreien Pizzen zubereitet',
      'Icon von ',
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
      'It is not possible to reserve on Saturdays, Sundays, or holidays between 14:01 and 15:29, we apologize for the inconvenience.',
      'The time must be between ',
      ' and ',
      'The number of people is required.',
      'The minimum number of people is 1.',
      'The maximum number of people is 12; if there are more, please call us.',
      'It is mandatory to accept the privacy policy.'
    ],
    alts: [
      'Facade of the Il Piccolino della Farfalla restaurant',
      'arrow indicating possible scroll down',
      'one of our tables prepared for eating, with a plate, cutlery, and a bottle of wine',
      'one of our cooks preparing the dough for the gluten-free pizzas',
      'icon of ',
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
      "Non è possibile prenotare il sabato, la domenica o nei giorni festivi tra le 14:01 e le 15:29. Ci scusiamo per il disagio.",
      'L\'orario deve essere tra ',
      ' e ',
      'Il numero di persone è obbligatorio.',
      'Il numero minimo di persone è 1.',
      'Il numero massimo di persone è 12; per un numero maggiore, contattaci.',
      'È obbligatorio accettare la politica sulla privacy.'
    ],
    alts: [
      'Facciata del ristorante Il Piccolino della Farfalla',
      'freccia che indica un possibile scroll verso il basso',
      'uno dei nostri tavoli preparato per mangiare, con un piatto, posate e una bottiglia di vino',
      'uno dei nostri cuochi che prepara l\'impasto per le pizze senza glutine',
      'icona di ',
    ]
  };
  zh_lang_home: LanguageTextHome = {
    botones: ['菜单', '预订'],
    titulos: [
      '自1981年',
      '欢迎',
      '来到 Il Piccolino della Farfalla',
      '专为您打造',
      '我们的菜单',
      '您想来吗？',
      '我们的营业时间',
      '预订'
    ],
    textos: [
      'Il Piccolino della Farfalla 于1981年作为一家小型家族企业开业，很快成为演员、音乐家、舞者和魔术师们的聚集地。表演结束后，他们会在这里寻找一个舒适的角落，享用物美价廉、自制新鲜丰盛的菜肴。',
      '在 Il Piccolino della Farfalla，我们相信每个人都应享受难忘的用餐体验，无论其需求或偏好如何。因此，我们设计了一个适合所有人的菜单：素食菜肴、纯素食食谱，最重要的是大量的无麸质选项，让您无忧享受美味，而不牺牲口感。'
    ],
    carta: ['开胃菜与沙拉', '主菜', '比萨', '肉类', '甜点与饮品'],
    formulario: [
      '姓名',
      '西班牙联系电话',
      '日期',
      '时间',
      '人数',
      '我已阅读并接受隐私政策',
      '预订'
    ],
    horario: [
      '周日至周四\n13:00 - 02:00',
      '周五、周六及节假日\n13:00 - 02:30',
      '电话：913694391',
      '最后预订时间为关门前1小时15分钟。'
    ],
    errores: [
      '姓名为必填项。',
      '姓名只能包含字母，长度须在3到40个字符之间。',
      '电话号码为必填项。',
      '电话号码无效。必须是西班牙电话号码。',
      '电子邮件为必填项。',
      '电子邮件无效。',
      '日期为必填项。',
      '时间为必填项。',
      "14:01 至 15:29 之间，周六、周日或节假日无法预订，对此造成的不便我们深表歉意。",
      '时间必须在 ',
      ' 和 ',
      '人数为必填项。',
      '最少人数为1。',
      '最多人数为12；如果超过，请致电联系我们。',
      '必须接受隐私政策。'
    ],
    alts: [
      'Il Piccolino della Farfalla 餐厅外观',
      '指示可能向下滚动的箭头',
      '我们的一张桌子准备好用餐，上面有一个盘子、餐具和一瓶葡萄酒',
      '我们的一位厨师正在准备无麸质比萨的面团',
      '图标 ',
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
            '8,75', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
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
  en_lang_carta: LanguageTextCarta = {
    botones: ['Gluten Free', 'Home', 'Book'],
    titulo: 'Our Menu',
    titulos: ['Salads & Starters', 'Main Courses', 'Pizzas', 'Meats', 'Desserts & Drinks'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Starters',
          texto: [
            'Vaporized mussels with tomato emulsion (only in winter)',
            'Pie portion: onion or mushrooms and leek',
            'Portion of eggplant au gratin topped with tomato and cheese',
            'Chorizo de León baked with wine',
            'Gazpacho (only in summer)',
            'Homemade soup with veggies and meat (only in winter)',
            'Onion soup with vegies and meat (only in winter)',
            'Chilean meat pasty',
            'Filled potato: meat or cheese (only on weekends)',
            'Zucchini Soup',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '5,50', '8,10', '8,10',
            '6,75', '8,15', '6,10', '6,50', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Spanish Portions',
          texto: [
            'Huevos rotos with spanish ham (fried eggs with ham)',
            'Andalusian style calamari with aioli',
            'Whiskey Prawns',
            'Ham, chicken or mixed croquettes (6u)',
            'Patatas bravas, aioli or mixed',
            'Garlic prawns',
            'Garlic baby eels',
            'Burgos black pudding',
            'Matrimonio',
            'Andalusian style octopus',
            'Padrón peppers',
            'Iberian ham with cheese'
          ],
          precio: [
            '12,50', '10,50', '14,00', '8,00', '8,20',
            '11,75', '7,50', '9,00', '8,10', '18,05',
            '7,00', '18,00'
          ]
        },
        {
          titulo: 'Salads',
          texto: [
            'Baby: spinach, mesclun, goat cheese, onions, nuts',
            'Caprese: sliced tomato, buffalo mozzarella and pesto',
            'Mixta: mesclun, tomato, bonito and onion',
            'Blanca: mesclun, celery, apple, walnuts and Roquefort sauce',
            'House: mesclun, fried chicken, apple and fried bread',
            'Colorida: beet, potato, carrot and boiled eggs'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15',
            '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pasta and Rice',
          texto: [
            'Vegan Burger',
            'Brown rice with veggies and tofu',
            'Veggie lasagne',
            'Eggplant au gratin topped with tomato and cheese',
            'Entire pie: onion or mushrooms and leek',
            'Cannelloni: spinach, mushrooms and walnut',
            'Potato Gnocchi with sauce',
            'Ravioli: spinach and ricotta cheese with sauce',
            'Mushroom and shrimp Risotto',
            'Meat lasagne',
            'Spaghetti with sauce',
            'Sorrentinos (Ravioli): ham and ricotta cheese with sauce'
          ],
          precio: [
            '12,50', '12,00', '12,75', '11,25', '18,00', '12,25',
            '11,50', '11,50', '12,70', '12,50', '10,20', '12,50'
          ]
        },
        {
          titulo: 'Pasta Sauces',
          texto: [
            'Carbonara: egg, milk cream and bacon',
            'Pesto: basil, garlic and walnut',
            'Arrabbiata: tomato and chili pepper',
            'Bolognese: tomato and minced meat',
            'Smoked salmon and asparagus',
            'Four cheeses'
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
            'Margarita: mozzarella, tomato and oregano',
            'Capricciosa: ham',
            'Funghi: mushrooms',
            'Kokido: chicken',
            'Exquisite: sliced tomato and garlic',
            'Vegetal: corn, mushrooms and peppers',
            'Napolitan: anchovies and capers',
            'Erotic: roquefort, celery and walnut',
            'Four Cheeses',
            'Hawaiian: pineapple and ham',
            'Special: bacon, onion and mushrooms',
            'Carnosa: beef meat',
            'Mediterranean: tuna',
            'Castellana: chorizo, salami or bacon',
            'Pepper Fiesta: pepperoni and ground pepper',
            'Juicy: chopped chorizo',
            'Make it yourself: margarita base + 2 pizza toppings',
            'Make it vegan: change the mozzarella base by vegan or lactose-free cheese'
          ],
          precio: [
            '8,75', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,90', '+1,40'
          ]
        }
      ],
      C: [
        {
          titulo: 'Charcoal Grilled Meat',
          texto: [
            'Beef Short ribs',
            'Beef Flank Steak',
            'Beef Skirt Steak',
            'Beef Rib-eye Steak or Entrecôte',
            'Grilled meat for two'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: 'Other Meats',
          texto: [
            'Chicken Wings',
            'Chicken curry with coconut milk and garnish',
            'Beef Napolitan escalope',
            'Chicken escalope',
            'Chicken escalope: grilled with cheese and tomato',
            'Beef meatballs',
            'Beef Burger',
            'Grilled Salmon'
          ],
          precio: [
            '9,00', '14,10', '14,50', '12,50', '13,90',
            '11,00', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Desserts',
          texto: [
            'Milk caramel delights',
            'Baked Cheesecake',
            'Apple Strudel with ice cream',
            'Brownie with ice cream and hot chocolate',
            'Vegan and Gluten-free Brownie',
            'Charlotte: ice cream with hot chocolate and walnuts',
            'Ice Cream (vanilla, chocolate or cream)',
            'Tiramisu',
            'Truffles with cream',
            'Alfajor: corn flour biscuit filled with milk caramel and coconut',
            'Fruit or lactose-free dessert'
          ],
          precio: [
            '7,15', '5,70', '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70', '5,70', '4,00',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: 'Wines',
          texto: [
            'Albariño - White',
            'House wine: Lanchares - Tempranillo, White or Red',
            'Ribera del Duero - Red',
            'Cune Rioja Crianza - Red',
            '½ Cune Rioja Crianza - Red',
            'Rueda variant - White',
            'Rosé from Navarra',
            'Lambrusco - Red or Rosé',
            'Pitcher of Sangria',
            'Pitcher of Tinto de Verano - Summer Red Wine mix',
            'Cava',
            'Benjamín - Mini Cava',
            'Protos - Red',
            'Azpilicueta - Rioja Crianza Red',
            'Alma - White, Red or Rosé semi-sweet',
            'Diamante - White semi-sweet',
            'Dulce Maria - White Sweet'
          ],
          precio: [
            '17,50','13,50','17,50','18,00','9,80','16,90','16,50','13,25',
            '17,50','15,50','24,00','9,50','22,00','22,00','17,50','18,00','18,50'
          ],
          especial: 'Ask us about our special selection'
        },
        {
          titulo: 'Wine by Glass',
          texto: [
            'House wine: Lanchares - Tempranillo, White or Red',
            'Ribera del Duero - Red',
            'Cune Rioja Crianza - Red',
            'Rueda White',
            'Rosé from Navarra',
            'Alma - White, Red or Rosé semi-sweet',
            'Diamante - White semi-sweet',
            'Dulce Maria - White Sweet'
          ],
          precio: [
            '3,40','3,80','4,30','4,05','3,90','3,80','4,00','4,10'
          ],
          especial: ""
        },
        {
          titulo: 'Soft Drinks and Others',
          texto: [
            'Soda',
            'Jarritos',
            'Fruit Juice',
            'Water (Sparkling or Mineral)',
            'Coffee or Latté',
            'Latté with vegetal or lactose-free milk',
            'Tea or infusion'
          ],
          precio: [
            '3,50','4,25','3,50','2,25','1,95','2,15','1,95'
          ],
          especial: ""
        },
        {
          titulo: 'Other Alcoholic Drinks and Beers',
          texto: [
            'Beer Pint',
            'Beer Glass',
            'Tinto de Verano',
            'Ladrón de Manzanas (cider)',
            'Mahou',
            'Alhambra 1925',
            'Cibeles Rubia',
            'Corona',
            'Peroni',
            'Maestra',
            'Gluten-free'
          ],
          precio: [
            '4,25','3,20','4,50','3,75','3,80','4,50','5,00','4,20','4,50','4,20','4,20'
          ],
          especial: ""
        }
      ]
    }
  };
  it_lang_carta: LanguageTextCarta = {
    botones: ['Senza Glutine', 'Home', 'Prenota'],
    titulo: 'Il Nostro Menu',
    titulos: ['Antipasti e Insalate', 'Primi e Secondi', 'Pizze', 'Carni', 'Dolci e Bevande'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Antipasti',
          texto: [
            'Cozze al vapore con emulsione al pomodoro (disponibile solo in inverno)',
            'Porzione di torta salata alle cipolle o ai funghi e porri',
            'Porzione di melanzane gratinate "della nonna" con pomodoro e formaggio',
            'Salsiccia di León al forno con vino',
            'Salmorejo fatto in casa (disponibile solamente in estate)',
            'Brodo corposo di verdure e carne fatto in casa (disponibile solamente in inverno)',
            'Zuppa di cipolle con verdure e carne (disponibile solo in inverno)',
            'Empanada cilena con carne',
            'Patata ripiena di carne o formaggio (solo nei fine settimana)',
            'Crema di Zucchine',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '5,50', '8,10', '8,10',
            '6,75', '8,15', '6,10', '6,50', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Porzioni Spagnole',
          texto: [
            'Ouva con jamon iberico',
            'Calamari alla andalusa con aioli',
            'Gamberi al whiskey',
            'Crocchette di prosciutto, pollo o miste (6u)',
            'Patatas bravas, aioli o miste',
            'Gamberi all\'aglio',
            'Anguilline all\'aglio',
            'Sanguinaccio di Burgos',
            'Matrimonio',
            'Polpo alla andalusa',
            'Peperoni di Padrón',
            'Prosciutto iberico con formaggio'
          ],
          precio: [
            '12,50', '10,50', '14,00', '8,00', '8,20',
            '11,75', '7,50', '9,00', '8,10', '18,05',
            '7,00', '18,00'
          ]
        },
        {
          titulo: 'Insalate',
          texto: [
            'Baby: Spinaci, lattuga, formaggio di capra, cipollotto, frutta secca e emulsione',
            'Caprese: pomodoro, mozzarella di bufala e pesto',
            'Mista: Misticanza, pomodoro, sgombro e cipolle',
            'Bianca: Misticanza, sedano, mele, noci, salsa roquefort',
            'Della casa: Misticanza, pollo fritto, crostini, mele',
            'Colorata: Barbabietola, patate, carote, uovo sodo'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15',
            '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pasta e Riso',
          texto: [
            'Hamburger vegano',
            'Riso integrale con verdure e tofu',
            'Lasagna alle verdure',
            'Melanzane gratinate "della nonna" con pomodoro e formaggio',
            'Torta salata di cipolle o di funghi e porri (intera)',
            'Cannelloni agli spinaci, funghi e noci',
            'Gnocchi di patate con salsa',
            'Ravioli ricotta e spinaci con salsa',
            'Risotto ai funghi e gamberi',
            'Lasagna di carne',
            'Spaghetti con salsa',
            'Sorrentini ricotta e prosciutto con salsa'
          ],
          precio: [
            '12,50', '12,00', '12,75', '11,25', '18,00', '12,25',
            '11,50', '11,50', '12,70', '12,50', '10,20', '12,50'
          ]
        },
        {
          titulo: 'Salse per la Pasta',
          texto: [
            'Carbonara: panna, uovo e pancetta',
            'Pesto: basilico, aglio e noci',
            'Arrabbiata: pomodoro e peperoncino',
            'Ragú alla Bolognese: pomo e carne macinata',
            'Salmone affumicato e asparagi',
            'Quattro formaggi'
          ],
          precio: [
            '0', '0', '0', '0', '0',
            '0'
          ]
        }
      ],
      P: [
        {
          titulo: 'Pizze',
          texto: [
            'Margherita: mozzarella, pomodoro e origano',
            'Capricciosa: prosciutto',
            'Funghi: champignon',
            'Kokido: pollo',
            'Squisita: pomodoro a fette e aglio',
            'Vegetale: mais, funghi e peperoni',
            'Napoletana: acciughe e capperi',
            'Erotica: formaggio Roquefort, sedano e noci',
            'Quattro formaggi',
            'Hawaiana: prosciutto e ananas',
            'Speciale: Pancetta, cipolla e funghi',
            'Carnosa: Carne di manzo',
            'Mediterranea: tonno',
            'Castigliana: salsiccia, salame o pancetta',
            'Piccante: Salame piccante e pepe macinato',
            'Gustosa: chorizo tritato',
            'Creala tu: Base margherita + 2 ingredienti a scelta delle altre pizze',
            'Vegana: Puoi cambiare la mozzarella con formaggio vegano o senza lattosio'
          ],
          precio: [
            '8,75', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,90', '+1,40'
          ]
        }
      ],
      C: [
        {
          titulo: 'Carne alla Griglia',
          texto: [
            'Costine di manzo',
            'Bavetta',
            'Lombatello',
            'Costata di manzo',
            'Grigliata per due persone'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: 'Altre Carni',
          texto: [
            'Ali di pollo',
            'Pollo ruspante al curry con latte di cocco e guarnizione',
            'Scaloppina di vitello napoletana',
            'Scaloppina di pollo',
            'Scaloppina di pollo gratinata con formaggio e pomodoro',
            'Polpette di manzo fatte in casa',
            'Hamburger di Kobe',
            'Salmone alla piastra'
          ],
          precio: [
            '9,00', '14,10', '14,50', '12,50', '13,90',
            '11,00', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Dolci',
          texto: [
            'Capricci al "dulce de leche"',
            'Torta al formaggio fatta in casa',
            'Strudel fatto in casa alle mele con gelato',
            'Brownie fatto in casa con gelato e cioccolato caldo',
            'Brownie Senza Glutine, Senza Latticini e Vegano',
            'Charlotte: gelato alla panna con cioccolato caldo e noci',
            'Gelato (vaniglia, panna o cioccolato)',
            'Tiramisú fatto in casa',
            'Tartufi con panna',
            'Alfajores argentini con maizena, "dulce de leche" e cocco',
            'Frutta o dessert senza lattosio'
          ],
          precio: [
            '7,15', '5,70', '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70', '5,70', '4,00',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: 'Vini',
          texto: [
            'Albariño - Bianco',
            'Vino della casa: Lanchares - Tempranillo, Bianco o Rosso',
            'Ribera del Duero - Rosso',
            'Cune - Rioja Crianza Rosso',
            '½ Cune - Rioja Crianza Rosso',
            'Bianco di Rueda',
            'Rosato di Navarra',
            'Lambrusco - Rosso o Rosato',
            'Caraffa di Sangria',
            'Caraffa di Tinto de Verano',
            'Cava',
            'Cava Benjamin - Bottiglia Mini',
            'Protos - Rosso',
            'Azpilicueta Rioja Crianza Rosso',
            'Alma - Bianco, Rosso o Rosato semidolce',
            'Diamante - Bianco semidolce',
            'Dulce Maria - Bianco Dolce'
          ],
          precio: [
            '17,50','13,50','17,50','18,00','9,80','16,90','16,50','13,25',
            '17,50','15,50','24,00','9,50','22,00','22,00','17,50','18,00','18,50'
          ],
          especial: 'Chiedi della nostra selezione speciale'
        },
        {
          titulo: 'Vino al Bicchiere',
          texto: [
            'Vino della casa: Lanchares - Tempranillo, Bianco o Rosso',
            'Ribera del Duero - Rosso',
            'Cune - Rioja Crianza Rosso',
            'Bianco di Rueda',
            'Rosato di Navarra',
            'Alma - Bianco, Rosso o Rosato semidolce',
            'Diamante - Bianco semidolce',
            'Dulce Maria - Bianco Dolce'
          ],
          precio: [
            '3,40','3,80','4,30','4,05','3,90','3,80','4,00','4,10'
          ],
          especial: ""
        },
        {
          titulo: 'Bibite e Altro',
          texto: [
            'Bibite',
            'Jarritos',
            'Succhi',
            'Aqua frizzante o naturale',
            'Caffé o Latte',
            'Latte senza lattosio o vegetale',
            'Té o tisane'
          ],
          precio: [
            '3,50','4,25','3,50','2,25','1,95','2,15','1,95'
          ],
          especial: ""
        },
        {
          titulo: 'Altre Bevande Alcoliche e Birre',
          texto: [
            'Birra in Pinta',
            'Bicchiere di Birra',
            'Tinto de Verano',
            'Ladrón de Manzanas (sidro)',
            'Mahou',
            'Alhambra 1925',
            'Cibeles Rubia',
            'Corona',
            'Peroni',
            'Maestra',
            'Senza Glutine'
          ],
          precio: [
            '4,25','3,20','4,50','3,75','3,80','4,50','5,00','4,20','4,50','4,20','4,20'
          ],
          especial: ""
        }
      ]
    }
  };
  fr_lang_carta: LanguageTextCarta = {
    botones: ['Sans Gluten', 'Accueil', 'Réserver'],
    titulo: 'Notre Carte',
    titulos: ['Salades et Entrées', 'Plats Principaux', 'Pizzas', 'Viandes', 'Desserts et Boissons'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Entrées',
          texto: [
            'Moules à la vapeur avec émulsion de tomate (uniquement en hiver)',
            'Part de tarte aux oignons ou aux champignons et poireaux',
            "Part d'aubergine gratinée avec de la tomate et du fromage façon grand-mère",
            'Chorizo de Leon au four avec du vin',
            'Gazpacho fait maison (uniquement en été)',
            'Velouté aux légumes avec viande (uniquement en hiver)',
            "Soupe à l'oignon avec viande (uniquement en hiver)",
            'Empanadas chiliennes à la viande',
            'Pomme de terre farcie à la viande ou fromage',
            'Crème de courgette',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '5,50', '8,10', '8,10',
            '6,75', '8,15', '6,10', '6,50', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Portions Espagnoles',
          texto: [
            'Œufs cassés avec du jambon ibérique',
            'Calamars à l\'andalouse avec aïoli',
            'Crevettes au Whiskey',
            'Croquettes au jambon, poulet ou mixtes (6u)',
            'Pommes de terre bravas, aïoli ou mixtes',
            "Crevettes à l'ail",
            "Gulas à l'ail",
            'Boudin de Burgos',
            'Mariage',
            'Poulpe à l\'andalouse',
            'Piments de Padrón',
            'Jambon ibérique avec fromage'
          ],
          precio: [
            '12,50', '10,50', '14,00', '8,00', '8,20',
            '11,75', '7,50', '9,00', '8,10', '18,05',
            '7,00', '18,00'
          ]
        },
        {
          titulo: 'Salades',
          texto: [
            'Baby: Épinards, mesclun, fromage de chèvre, échalote, fruits secs',
            'Caprese: Tomate, mozzarella de bufala, assaisonnée avec du pesto',
            'Mixte: Mesclun, tomate, bonite et oignon',
            'Blanche: Mesclun, céleri, pomme, noix, sauce roquefort',
            'De la maison: Mesclun, poulet frit, croûtons, pomme',
            'Colorée: betterave cuite, pomme de terre, carotte et œuf dur'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15',
            '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pâtes et Riz',
          texto: [
            'Hamburger végane',
            'Riz complet aux légumes et tofu',
            'Lasagne de légumes saison',
            'Aubergines gratinées avec de la tomate et du fromage façon grand-mère',
            'Tarte aux oignons ou aux champignons et poireaux (entière)',
            'Cannelloni aux épinards, champignons et noix',
            'Gnocchi de pomme de terre avec sauce',
            'Ravioli aux épinards et au fromage frais avec sauce',
            'Risotto aux champignons et aux crevettes',
            'Lasagne à la viande',
            'Spaghetti avec sauce',
            'Sorrentinos au jambon et au fromage frais avec sauce'
          ],
          precio: [
            '12,50', '12,00', '12,75', '11,25', '18,00', '12,25',
            '11,50', '11,50', '12,70', '12,50', '10,20', '12,50'
          ]
        },
        {
          titulo: 'Sauces pour Pâtes',
          texto: [
            'Carbonara: crème fraîche, œuf et bacon',
            'Pesto: Basilic, ail et noix',
            'Arrabbiata: Tomate et piment rouge',
            'Bolognaise: Viande hachée et sauce tomate',
            'Saumon fumé et asperges',
            'Quatre fromages'
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
            'Marguerite: mozzarella, tomate et origan',
            'Capricieuse: jambon',
            'Funghi: champignons',
            'Kokido: poulet',
            'Excellente: tomate en tranches et sel à l\'ail',
            'Végétale: maïs, champignons, poivrons',
            'Napolitaine: anchois et câpres',
            'Erotique: roquefort, céleri et noix',
            'Quatre fromages',
            'Hawaïen: ananas et jambon',
            'Spéciale: bacon, oignon et champignons',
            'Carnivore: viande de bœuf',
            'Méditerranéen: thon',
            'L\'espagnole: chorizo, salami ou bacon',
  'Épicée: pepperoni et poivre',
  'Savoureuse: chorizo haché',
  'À vous de composer: base de marguerite + 2 ingrédients d\'autre(s) pizza(s)',
  'Option végane: change la mozzarella par du fromage végane'
],
  precio: [
    '8,75', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
    '9,35', '9,35', '9,35', '9,35', '9,35', '9,90', '+1,40'
  ]
}
],
C: [
  {
    titulo: 'Viandes au Gril de Charbon',
    texto: [
      'Côtes de bœuf',
      'Bavette de bœuf',
      'Onglet de bœuf',
      'Entrecôte ou Côtelette',
      'Grillé pour deux'
    ],
    precio: [
      '15,50', '16,50', '16,50', '18,50', '33,00'
    ]
  },
  {
    titulo: 'Autres Viandes',
    texto: [
      'Ailes de poulet',
      'Poulet fermier au curry avec du lait de coco et accompagnement',
      'Escalope bœuf à la napolitaine',
      'Escalope de poulet',
      'Escalope de poulet gratiné avec tomate et fromage',
      'Boulettes de bœuf (fait maison)',
      'Hamburger de bœuf',
      'Saumon Grillé'
    ],
    precio: [
      '9,00', '14,10', '14,50', '12,50', '13,90',
      '11,00', '15,10', '15,20'
    ]
  }
],
  PyB: [
  {
    titulo: 'Desserts',
    texto: [
      'Caprices avec sauce de caramel',
      'Cheesecake fait maison',
      'Strudel aux pommes fait maison avec glace',
      'Brownie fait maison avec glace et chocolat chaud',
      'Brownie sans gluten, sans produits laitiers, et végétalien',
      'Charlotte: crème de glace avec chocolat chaud et noix',
      'Glace à la vanille, crème ou chocolat',
      'Tiramisu',
      'Truffe en chocolat avec crème',
      'Alfajor à la fécule de maïs avec sauce de caramel et noix de coco',
      'Fruit du jour ou dessert sans lactose'
    ],
    precio: [
      '7,15', '5,70', '5,70', '5,70', '5,70',
      '5,70', '4,50', '5,70', '5,70', '4,00',
      '2,75'
    ],
    especial: ""
  },
  {
    titulo: 'Vins',
    texto: [
      'Albariño - Blanc',
      'Vin de la maison: Lanchares Tempranillo, Blanc ou Rouge',
      'Ribera del Duero - Rouge',
      'Cune - Rioja Crianza Rouge',
      '½ Cune Rioja Crianza - Rouge',
      'Blanc de Rueda',
      'Rosé de Navarre',
      'Lambrusco - Rouge ou Rosé',
      'Pichet de Sangria',
      'Pichet de Vin Rouge d\'été',
      'Cava',
      'Cava Bouteille Mini Benjamín',
      'Protos - Rouge',
      'Azpilicueta - Rioja Crianza Rouge',
      'Alma - Blanc, Rouge ou Rosé semi-doux',
      'Diamante - Blanc semi-doux',
      'Dulce Maria - Blanc doux'
    ],
    precio: [
      '17,50', '13,50', '17,50', '18,00', '9,80', '16,90', '16,50',
      '13,25', '17,50', '15,50', '24,00', '9,50', '22,00', '22,00',
      '17,50', '18,00', '18,50'
    ],
    especial: "Demandez-nous notre sélection spéciale."
  },
  {
    titulo: 'Verres de Vin',
    texto: [
      'Vin de la maison: Lanchares Tempranillo, Blanc ou Rouge',
      'Ribera del Duero - Rouge',
      'Cune - Rioja Crianza Rouge',
      'Blanc de Rueda',
      'Rosé de Navarre',
      'Alma - Blanc, Rouge ou Rosé semi-doux',
      'Diamante - Blanc semi-doux',
      'Dulce Maria - Blanc doux'
    ],
    precio: [
      '3,40', '3,80', '4,30', '4,05', '3,90', '3,80', '4,00', '4,10'
    ],
    especial: ""
  },
  {
    titulo: 'Boissons et Autres',
    texto: [
      'Sodas',
      'Jarritos',
      'Jus',
      'Eau gazeuse ou minérale',
      'Café',
      'Café sans lactose ou végétal',
      'Thé ou Infusion'
    ],
    precio: [
      '3,50', '4,25', '3,50', '2,25', '1,95', '2,15', '1,95'
    ],
    especial: ""
  },
  {
    titulo: 'Autres Alcools et Bières',
    texto: [
      'Pinte de Bière',
      'Verre de Bière',
      'Tinto de Verano',
      'Ladrón de Manzanas (cidre)',
      'Mahou',
      'Alhambra 1925',
      'Cibeles Rubia',
      'Corona',
      'Peroni',
      'Maestra',
      'Sans Gluten'
    ],
    precio: [
      '4,25', '3,20', '4,50', '3,75', '3,80', '4,50', '5,00',
      '4,20', '4,50', '4,20', '4,20'
    ],
    especial: ""
  }
]
}
};
  de_lang_carta: LanguageTextCarta = {
    botones: ['Glutenfrei', 'Startseite', 'Reservieren'],
    titulo: 'Unsere Speisekarte',
    titulos: ['Salate & Vorspeisen', 'Hauptgerichte', 'Pizzas', 'Fleischgerichte', 'Desserts & Getränke'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Vorspeisen',
          texto: [
            'Gedämpfte Muscheln mit Tomatenemulsion (nur im Winter)',
            'Kuchenstück: Zwiebel oder Pilze und Lauch',
            'Portion überbackene Auberginen mit Tomate und Käse',
            'Im Wein gebackene León-Chorizo',
            'Gazpacho (nur im Sommer)',
            'Hausgemachte Suppe mit Gemüse und Fleisch (nur im Winter)',
            'Zwiebelsuppe mit Gemüse und Fleisch (nur im Winter)',
            'Chilenische Fleischpastete',
            'Gefüllte Kartoffel: Fleisch oder Käse (nur am Wochenende)',
            'Zucchinisuppe',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '5,50', '8,10', '8,10',
            '6,75', '8,15', '6,10', '6,50', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Spanische Portionen',
          texto: [
            'Huevos rotos mit spanischem Schinken (Spiegeleier mit Schinken)',
            'Calamari nach andalusischer Art mit Aioli',
            'Whiskey-Garnelen',
            'Schinken-, Hühnchen- oder gemischte Kroketten (6 Stück)',
            'Patatas bravas, Aioli oder gemischt',
            'Knoblauchgarnelen',
            'Babygarnelen in Knoblauch',
            'Burgos Blutwurst',
            'Matrimonio',
            'Oktopus nach andalusischer Art',
            'Padrón-Paprika',
            'Iberischer Schinken mit Käse'
          ],
          precio: [
            '12,50', '10,50', '14,00', '8,00', '8,20',
            '11,75', '7,50', '9,00', '8,10', '18,05',
            '7,00', '18,00'
          ]
        },
        {
          titulo: 'Salate',
          texto: [
            'Baby: Spinat, Mesclun, Ziegenkäse, Zwiebeln, Nüsse',
            'Caprese: Tomatenscheiben, Büffelmozzarella und Pesto',
            'Mixta: Mesclun, Tomate, Thunfisch und Zwiebel',
            'Blanca: Mesclun, Sellerie, Apfel, Walnüsse und Roquefort-Sauce',
            'Haus: Mesclun, gebratenes Hähnchen, Apfel und geröstetes Brot',
            'Colorida: Rote Bete, Kartoffel, Karotte und gekochte Eier'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15',
            '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pasta und Reis',
          texto: [
            'Veganer Burger',
            'Naturreis mit Gemüse und Tofu',
            'Gemüselasagne',
            'Überbackene Auberginen mit Tomate und Käse',
            'Ganzer Kuchen: Zwiebel oder Pilze und Lauch',
            'Cannelloni: Spinat, Pilze und Walnuss',
            'Kartoffel-Gnocchi mit Sauce',
            'Ravioli: Spinat und Ricotta mit Sauce',
            'Pilz-Garnelen-Risotto',
            'Fleischlasagne',
            'Spaghetti mit Sauce',
            'Sorrentinos (Ravioli): Schinken und Ricotta mit Sauce'
          ],
          precio: [
            '12,50', '12,00', '12,75', '11,25', '18,00', '12,25',
            '11,50', '11,50', '12,70', '12,50', '10,20', '12,50'
          ]
        },
        {
          titulo: 'Pasta-Saucen',
          texto: [
            'Carbonara: Ei, Sahne und Speck',
            'Pesto: Basilikum, Knoblauch und Walnuss',
            'Arrabbiata: Tomate und Chilischote',
            'Bolognese: Tomate und Hackfleisch',
            'Räucherlachs und Spargel',
            'Vier Käse'
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
            'Margherita: Mozzarella, Tomate und Oregano',
            'Capricciosa: Schinken',
            'Funghi: Pilze',
            'Kokido: Hähnchen',
            'Exquisit: Tomatenscheiben und Knoblauch',
            'Vegetarisch: Mais, Pilze und Paprika',
            'Napoli: Sardellen und Kapern',
            'Erotik: Roquefort, Sellerie und Walnuss',
            'Vier Käse',
            'Hawaii: Ananas und Schinken',
            'Spezial: Speck, Zwiebel und Pilze',
            'Fleisch: Rindfleisch',
            'Mediterran: Thunfisch',
            'Castellana: Chorizo, Salami oder Speck',
            'Paprika-Fiesta: Peperoni und gemahlener Pfeffer',
            'Saftig: gehackte Chorizo',
            'Selbst zusammenstellen: Margherita-Basis + 2 Pizzabeläge',
            'Vegan gestalten: Mozzarella durch veganen oder laktosefreien Käse ersetzen'
          ],
          precio: [
            '8,75', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,90', '+1,40'
          ]
        }
      ],
      C: [
        {
          titulo: 'Grillfleisch vom Holzkohlegrill',
          texto: [
            'Rinder-Kurzrippen',
            'Rinder-Flanksteak',
            'Rinder-Bürgermeisterstück',
            'Rinder-Ribeye-Steak oder Entrecôte',
            'Grillfleisch für zwei'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: 'Andere Fleischgerichte',
          texto: [
            'Hähnchenflügel',
            'Hähnchen-Curry mit Kokosmilch und Beilage',
            'Rindfleisch-Schnitzel nach Napoli-Art',
            'Hähnchenschnitzel',
            'Hähnchenschnitzel: gegrillt mit Käse und Tomate',
            'Rindfleisch-Frikadellen',
            'Rindfleisch-Burger',
            'Gegrillter Lachs'
          ],
          precio: [
            '9,00', '14,10', '14,50', '12,50', '13,90',
            '11,00', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Desserts',
          texto: [
            'Karamell-Köstlichkeiten',
            'Gebackener Käsekuchen',
            'Apfelstrudel mit Eis',
            'Brownie mit Eis und heißer Schokolade',
            'Veganer und glutenfreier Brownie',
            'Charlotte: Eis mit heißer Schokolade und Walnüssen',
            'Eis (Vanille, Schokolade oder Sahne)',
            'Tiramisu',
            'Trüffel mit Sahne',
            'Alfajor: Maismehl-Keks gefüllt mit Karamell und Kokos',
            'Frucht- oder laktosefreies Dessert'
          ],
          precio: [
            '7,15', '5,70', '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70', '5,70', '4,00',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: 'Weine',
          texto: [
            'Albariño - Weißwein',
            'Hauswein: Lanchares - Tempranillo, Weiß oder Rot',
            'Ribera del Duero - Rotwein',
            'Cune Rioja Crianza - Rotwein',
            '½ Cune Rioja Crianza - Rotwein',
            'Rueda Variant - Weißwein',
            'Rosé aus Navarra',
            'Lambrusco - Rot oder Rosé',
            'Krug Sangria',
            'Krug Tinto de Verano - Sommerrotwein-Mix',
            'Cava',
            'Benjamín - Mini-Cava',
            'Protos - Rotwein',
            'Azpilicueta - Rioja Crianza Rotwein',
            'Alma - Weiß, Rot oder Rosé halbtrocken',
            'Diamante - Weißwein halbtrocken',
            'Dulce Maria - Weißwein lieblich'
          ],
          precio: [
            '17,50','13,50','17,50','18,00','9,80','16,90','16,50','13,25',
            '17,50','15,50','24,00','9,50','22,00','22,00','17,50','18,00','18,50'
          ],
          especial: 'Fragen Sie nach unserer speziellen Auswahl'
        },
        {
          titulo: 'Wein im Glas',
          texto: [
            'Hauswein: Lanchares - Tempranillo, Weiß oder Rot',
            'Ribera del Duero - Rotwein',
            'Cune Rioja Crianza - Rotwein',
            'Rueda Weißwein',
            'Rosé aus Navarra',
            'Alma - Weiß, Rot oder Rosé halbtrocken',
            'Diamante - Weißwein halbtrocken',
            'Dulce Maria - Weißwein lieblich'
          ],
          precio: [
            '3,40','3,80','4,30','4,05','3,90','3,80','4,00','4,10'
          ],
          especial: ""
        },
        {
          titulo: 'Alkoholfreie Getränke und Andere',
          texto: [
            'Limonade',
            'Jarritos',
            'Fruchtsaft',
            'Wasser (Mit oder Ohne Kohlensäure)',
            'Kaffee oder Latte',
            'Latte mit pflanzlicher oder laktosefreier Milch',
            'Tee oder Aufguss'
          ],
          precio: [
            '3,50','4,25','3,50','2,25','1,95','2,15','1,95'
          ],
          especial: ""
        },
        {
          titulo: 'Andere alkoholische Getränke und Biere',
          texto: [
            'Bier vom Fass 0,5l',
            'Bier 0,3l',
            'Tinto de Verano',
            'Ladrón de Manzanas (Apfelwein)',
            'Mahou',
            'Alhambra 1925',
            'Cibeles Rubia',
            'Corona',
            'Peroni',
            'Maestra',
            'Glutenfrei'
          ],
          precio: [
            '4,25','3,20','4,50','3,75','3,80','4,50','5,00','4,20','4,50','4,20','4,20'
          ],
          especial: ""
        }
      ]
    }
  };
  zh_lang_carta: LanguageTextCarta = {
    botones: ['无麸质', '主页', '预订'],
    titulo: '我们的菜单',
    titulos: ['沙拉和开胃菜', '主菜', '披萨', '肉类', '甜点和饮品'],
    menu_sections: {
      EyE: [
        {
          titulo: '开胃菜',
          texto: [
            '番茄酱蒸贻贝（仅冬季供应）',
            '派切块：洋葱或蘑菇韭菜',
            '茄子奶酪焗烤配番茄',
            '烤里昂香肠配红酒',
            '西班牙冷汤（仅夏季供应）',
            '自制蔬菜肉汤（仅冬季供应）',
            '法式洋葱汤配蔬菜和肉（仅冬季供应）',
            '智利肉馅饼',
            '馅料土豆：肉馅或奶酪（仅周末供应）',
            '西葫芦汤',
            '布拉塔奶酪'
          ],
          precio: [
            '12,00', '5,50', '5,50', '8,10', '8,10',
            '6,75', '8,15', '6,10', '6,50', '6,85', '8,15'
          ]
        },
        {
          titulo: '西班牙小吃',
          texto: [
            '破碎鸡蛋配西班牙火腿',
            '安达卢西亚风味炸鱿鱼配蒜泥蛋黄酱',
            '威士忌大虾',
            '火腿、鸡肉或混合可乐饼（6个）',
            '辣土豆、蒜味蛋黄酱或混合',
            '蒜香大虾',
            '蒜香银鱼',
            '布尔戈斯黑布丁',
            '马特里莫尼奥',
            '安达卢西亚风味章鱼',
            '帕德龙青椒',
            '伊比利亚火腿配奶酪'
          ],
          precio: [
            '12,50', '10,50', '14,00', '8,00', '8,20',
            '11,75', '7,50', '9,00', '8,10', '18,05',
            '7,00', '18,00'
          ]
        },
        {
          titulo: '沙拉',
          texto: [
            '婴儿沙拉：菠菜、混合生菜、山羊奶酪、洋葱、坚果',
            '卡普雷塞：切片番茄、水牛马苏里拉奶酪和罗勒酱',
            '混合沙拉：混合生菜、番茄、金枪鱼和洋葱',
            '白色沙拉：混合生菜、芹菜、苹果、核桃和蓝纹奶酪酱',
            '招牌沙拉：混合生菜、炸鸡、苹果和炸面包',
            '彩色沙拉：甜菜根、土豆、胡萝卜和水煮蛋'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15',
            '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: '意面和饭类',
          texto: [
            '素食汉堡',
            '糙米配蔬菜和豆腐',
            '素食千层面',
            '茄子奶酪焗烤配番茄',
            '整个派：洋葱或蘑菇韭菜',
            '意式卷面：菠菜、蘑菇和核桃',
            '土豆团子配酱料',
            '意式云吞：菠菜和里科塔奶酪配酱料',
            '蘑菇虾仁烩饭',
            '肉酱千层面',
            '意大利面配酱料',
            '索伦蒂诺斯（大云吞）：火腿和里科塔奶酪配酱料'
          ],
          precio: [
            '12,50', '12,00', '12,75', '11,25', '18,00', '12,25',
            '11,50', '11,50', '12,70', '12,50', '10,20', '12,50'
          ]
        },
        {
          titulo: '意面酱料',
          texto: [
            '卡邦尼：鸡蛋、奶油和培根',
            '罗勒酱：罗勒、大蒜和核桃',
            '阿拉比亚塔：番茄和辣椒',
            '博洛尼亚：番茄和碎肉',
            '烟熏三文鱼和芦笋',
            '四种奶酪'
          ],
          precio: [
            '0', '0', '0', '0', '0',
            '0'
          ]
        }
      ],
      P: [
        {
          titulo: '披萨',
          texto: [
            '玛格丽特：马苏里拉奶酪、番茄和牛至',
            '卡普里乔萨：火腿',
            '蘑菇披萨：蘑菇',
            '可基多：鸡肉',
            '精致：切片番茄和大蒜',
            '素食：玉米、蘑菇和青椒',
            '那不勒斯：凤尾鱼和酸豆',
            '情调：蓝纹奶酪、芹菜和核桃',
            '四种奶酪',
            '夏威夷：菠萝和火腿',
            '特制：培根、洋葱和蘑菇',
            '多肉：牛肉',
            '地中海：金枪鱼',
            '卡斯蒂利亚：西班牙香肠、萨拉米或培根',
            '辣椒盛宴：意大利辣香肠和胡椒粉',
            '多汁：切碎的西班牙香肠',
            '自制：玛格丽特基底 + 2种披萨配料',
            '素食改装：将马苏里拉奶酪换成素食或无乳糖奶酪'
          ],
          precio: [
            '8,75', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35', '9,35',
            '9,90', '+1,40'
          ]
        }
      ],
      C: [
        {
          titulo: '炭烤肉类',
          texto: [
            '牛肋排',
            '牛腹肉',
            '牛横膈膜',
            '牛肉眼或沙朗牛排',
            '双人份烤肉'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: '其他肉类',
          texto: [
            '鸡翅',
            '椰奶咖喱鸡配配菜',
            '那不勒斯风味牛肉片',
            '鸡肉片',
            '鸡肉片：烤制配奶酪和番茄',
            '牛肉丸',
            '牛肉汉堡',
            '烤三文鱼'
          ],
          precio: [
            '9,00', '14,10', '14,50', '12,50', '13,90',
            '11,00', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: '甜点',
          texto: [
            '焦糖牛奶甜点',
            '烤芝士蛋糕',
            '苹果司特鲁德配冰淇淋',
            '布朗尼配冰淇淋和热巧克力',
            '素食无麸质布朗尼',
            '夏洛特：冰淇淋配热巧克力和核桃',
            '冰淇淋（香草、巧克力或奶油）',
            '提拉米苏',
            '奶油松露',
            '阿尔法霍：玉米粉饼干夹焦糖奶油和椰子',
            '水果或无乳糖甜点'
          ],
          precio: [
            '7,15', '5,70', '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70', '5,70', '4,00',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: '葡萄酒',
          texto: [
            '阿尔巴利诺 - 白葡萄酒',
            '店家特酿：兰查雷斯 - 丹魄、白葡萄酒或红葡萄酒',
            '杜埃罗河岸 - 红葡萄酒',
            '库内里奥哈陈酿 - 红葡萄酒',
            '半瓶库内里奥哈陈酿 - 红葡萄酒',
            '卢埃达品种 - 白葡萄酒',
            '纳瓦拉桃红葡萄酒',
            '兰布鲁斯科 - 红葡萄酒或桃红',
            '一壶桑格利亚',
            '一壶夏日红酒混饮',
            '卡瓦起泡酒',
            '本杰明 - 迷你卡瓦',
            '普罗托斯 - 红葡萄酒',
            '阿兹皮利库埃塔 - 里奥哈陈酿红葡萄酒',
            '阿尔玛 - 白葡萄酒、红葡萄酒或半甜桃红',
            '钻石 - 半甜白葡萄酒',
            '甜玛利亚 - 甜白葡萄酒'
          ],
          precio: [
            '17,50','13,50','17,50','18,00','9,80','16,90','16,50','13,25',
            '17,50','15,50','24,00','9,50','22,00','22,00','17,50','18,00','18,50'
          ],
          especial: '询问我们的特选酒单'
        },
        {
          titulo: '单杯葡萄酒',
          texto: [
            '店家特酿：兰查雷斯 - 丹魄、白葡萄酒或红葡萄酒',
            '杜埃罗河岸 - 红葡萄酒',
            '库内里奥哈陈酿 - 红葡萄酒',
            '卢埃达白葡萄酒',
            '纳瓦拉桃红葡萄酒',
            '阿尔玛 - 白葡萄酒、红葡萄酒或半甜桃红',
            '钻石 - 半甜白葡萄酒',
            '甜玛利亚 - 甜白葡萄酒'
          ],
          precio: [
            '3,40','3,80','4,30','4,05','3,90','3,80','4,00','4,10'
          ],
          especial: ""
        },
        {
          titulo: '软饮料和其他',
          texto: [
            '汽水',
            '哈里托斯',
            '果汁',
            '水（气泡或矿泉水）',
            '咖啡或拿铁',
            '素食或无乳糖拿铁',
            '茶或花草茶'
          ],
          precio: [
            '3,50','4,25','3,50','2,25','1,95','2,15','1,95'
          ],
          especial: ""
        },
        {
          titulo: '其他酒精饮品和啤酒',
          texto: [
            '品脱啤酒',
            '杯装啤酒',
            '夏日红酒',
            '苹果小偷（苹果酒）',
            '马奥啤酒',
            '阿尔罕布拉1925',
            '西贝莱斯金啤',
            '科罗娜',
            '佩罗尼',
            '迈斯特拉',
            '无麸质啤酒'
          ],
          precio: [
            '4,25','3,20','4,50','3,75','3,80','4,50','5,00','4,20','4,50','4,20','4,20'
          ],
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
  en_lang_carta_sg: LanguageTextCarta = {
    botones: ['Gluten Free', 'Home', 'Reserve'],
    titulo: 'Our Menu',
    titulos: ['Salads and Starters', 'Main Courses', 'Pizzas', 'Meats', 'Desserts and Drinks'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Starters',
          texto: [
            'Steamed mussels with tomato emulsion (only in winter)',
            'Portion of eggplant au gratin with tomato and cheese',
            'Chorizo de León baked with wine',
            'Homemade thick vegetable and meat broth (only in winter)',
            'Onion soup with vegetable and meat broth (only in winter)',
            'Zucchini cream',
            'Burrata'
          ],
          precio: [
            '12.00', '5.50', '8.10', '6.75', '8.45', '6.85', '8.15'
          ]
        },
        {
          titulo: 'Salads',
          texto: [
            'Baby: spinach, lettuce, goat cheese, spring onion, nuts',
            'Caprese: tomato, buffalo mozzarella and pesto',
            'Mixta: mixed lettuce, tomato, bonito and onion',
            'Blanca: lettuce, celery, apple, walnuts, Roquefort sauce',
            'Colorida: beetroot, potato, carrot, boiled egg',
            'Especial: lettuce, crab sticks and white asparagus'
          ],
          precio: [
            '8.15', '8.15', '8.15', '8.15', '8.15', '8.15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pasta and Rice',
          texto: [
            'Vegan burger',
            'Brown rice with vegetables and tofu',
            'Eggplant au gratin with tomato and cheese',
            'Onion or mushroom and leek pie (whole)',
            'Mushroom and shrimp risotto',
            'Spaghetti with sauce of your choice'
          ],
          precio: [
            '12.50', '12.00', '11.25', '18.00', '12.70', '10.20'
          ]
        },
        {
          titulo: 'Pasta Sauces',
          texto: [
            'Carbonara: cream, egg and bacon',
            'Pesto: basil, garlic and walnuts',
            'Arrabbiata: tomato and chili',
            'Bolognese: tomato and minced meat',
            'Smoked salmon and asparagus',
            'Four cheeses'
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
            'Margherita: mozzarella, tomato and oregano',
            'Capricciosa: ham',
            'Funghi: mushrooms',
            'Kokido: chicken',
            'Exquisite: sliced tomato and garlic',
            'Vegetal: corn, mushrooms and peppers',
            'Napolitana: anchovies and capers',
            'Erotic: Roquefort, celery and walnuts',
            'Four cheeses',
            'Hawaiian: pineapple and ham',
            'Special: bacon, onion and mushrooms',
            'Carnosa: beef',
            'Mediterranean: tuna',
            'Castellana: chorizo, salami or bacon',
            'Pepper Fiesta: pepperoni and ground black pepper',
            'Juicy: minced chorizo',
            'Make it yourself: Margherita base + 2 ingredients from other pizzas',
            'Make it vegan: change mozzarella to vegan or lactose-free cheese'
          ],
          precio: [
            '9.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50',
            '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50',
            '10.95', '+1.40'
          ]
        }
      ],
      C: [
        {
          titulo: 'Charcoal Grilled Meats',
          texto: [
            'Beef short ribs',
            'Flank steak',
            'Skirt steak',
            'Rib-eye steak or Entrecôte',
            'Grilled meat for two'
          ],
          precio: [
            '15.50', '16.50', '16.50', '18.50', '33.00'
          ]
        },
        {
          titulo: 'Other Meats',
          texto: [
            'Free-range chicken curry with coconut milk and garnish',
            'Beef burger',
            'Grilled salmon'
          ],
          precio: [
            '14.10', '15.10', '15.20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Desserts',
          texto: [
            'Homemade baked cheesecake',
            'Homemade brownie with ice cream and hot chocolate',
            'Vegan chocolate cake, gluten-free and lactose-free',
            'Charlotte: cream ice cream with hot chocolate and walnuts',
            'Ice cream (vanilla, chocolate or cream)',
            'Truffles with cream',
            'Fruit of the day'
          ],
          precio: [
            '5.70', '5.70', '5.70',
            '5.70', '4.50', '5.70',
            '2.75'
          ],
          especial: ""
        },
        {
          titulo: 'Wines',
          texto: ['Albariño - White',
            'House wine: Lanchares - Tempranillo White or Red','Ribera del Duero - Red','Cune Rioja Crianza - Red','½ Cune Rioja Crianza - Red','White from Rueda','Rosé from Navarra','Lambrusco - Red or Rosé','Pitcher of Sangria','Pitcher of Tinto de Verano','Cava','Benjamin - Mini Cava','Protos - Red','Azpilicueta - Rioja Crianza Red','Alma - White, Red or Rosé semi-sweet','Diamante - White semi-sweet','Dulce Maria - White'],
          precio: ['17.50','13.50','17.50','18.00','9.80','16.90','16.50','13.25','17.50','15.50','24.00','9.50','22.00','22.00','17.50','18.00','18.50'],
          especial: 'Ask us about our special selection'
        },
        {
          titulo: 'Wine Glasses',
          texto: ['House wine: Lanchares - Tempranillo White or Red','Ribera del Duero - Red','Cune Rioja Crianza - Red','White from Rueda','Rosé from Navarra','Alma - White, Red or Rosé semi-sweet','Diamante - White semi-sweet','Dulce Maria - White'],
          precio: ['3.40','3.80','4.30','4.05','3.90','3.80','4.00','4.10'],
          especial: ""
        },
        {
          titulo: 'Soft Drinks and Others',
          texto: ['Soft drinks','Jarritos','Juices','Sparkling or mineral water','Coffee','Coffee - lactose-free or plant-based','Tea or infusion'],
          precio: ['3.50','4.25','3.50','2.25','1.95','2.15','1.95'],
          especial: ""
        },
        {
          titulo: 'Other Alcohols and Beers',
          texto: ['Tinto de Verano','Ladrón de Manzanas','Gluten-Free Beer (33cl)'],
          precio: ['4.50','3.75','4.20'],
          especial: ""
        }
      ]
    }
  };
  fr_lang_carta_sg: LanguageTextCarta = {
    botones: ['Sans Gluten', 'Accueil', 'Réserver'],
    titulo: 'Notre Carte',
    titulos: ['Salades et Entrées', 'Plats Principaux', 'Pizzas', 'Viandes', 'Desserts et Boissons'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Entrées',
          texto: [
            'Moules à la vapeur avec émulsion de tomate (uniquement en hiver)',
            'Portion d’aubergine gratinée avec tomate et fromage',
            'Chorizo de León au four avec vin',
            'Bouillon épais de légumes et viande fait maison (uniquement en hiver)',
            'Soupe à l’oignon avec bouillon de légumes et viande (uniquement en hiver)',
            'Crème de courgette',
            'Burrata'
          ],
          precio: [
            '12.00', '5.50', '8.10', '6.75', '8.45', '6.85', '8.15'
          ]
        },
        {
          titulo: 'Salades',
          texto: [
            'Baby: épinards, laitue, fromage de chèvre, oignon nouveau, noix',
            'Caprese: tomate, mozzarella de buffle et pesto',
            'Mixta: laitue mélangée, tomate, bonite et oignon',
            'Blanche: laitue, céleri, pomme, noix, sauce Roquefort',
            'Colorée: betterave, pomme de terre, carotte, œuf dur',
            'Spéciale: laitue, bâtonnets de crabe et asperges blanches'
          ],
          precio: [
            '8.15', '8.15', '8.15', '8.15', '8.15', '8.15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pâtes et Riz',
          texto: [
            'Burger vegan',
            'Riz complet avec légumes et tofu',
            'Aubergine gratinée avec tomate et fromage',
            'Tarte à l’oignon ou aux champignons et poireaux (entière)',
            'Risotto aux champignons et crevettes',
            'Spaghetti avec sauce au choix'
          ],
          precio: [
            '12.50', '12.00', '11.25', '18.00', '12.70', '10.20'
          ]
        },
        {
          titulo: 'Sauces pour Pâtes',
          texto: [
            'Carbonara: crème, œuf et bacon',
            'Pesto: basilic, ail et noix',
            'Arrabbiata: tomate et piment',
            'Bolognaise: tomate et viande hachée',
            'Saumon fumé et asperges',
            'Quatre fromages'
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
            'Margherita: mozzarella, tomate et origan',
            'Capricciosa: jambon',
            'Funghi: champignons',
            'Kokido: poulet',
            'Exquise: tomate en tranches et ail',
            'Végétale: maïs, champignons et poivrons',
            'Napolitaine: anchois et câpres',
            'Érotique: Roquefort, céleri et noix',
            'Quatre fromages',
            'Hawaïenne: ananas et jambon',
            'Spéciale: bacon, oignon et champignons',
            'Carnivore: bœuf',
            'Méditerranéenne: thon',
            'Castillane: chorizo, salami ou bacon',
            'Épicée: pepperoni et poivre noir moulu',
            'Savoureuse: chorizo haché',
            'Faites-la vous-même: base Margherita + 2 ingrédients d’autres pizzas',
            'Faites-la vegan: remplacez la mozzarella par du fromage vegan ou sans lactose'
          ],
          precio: [
            '9.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50',
            '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50',
            '10.95', '+1.40'
          ]
        }
      ],
      C: [
        {
          titulo: 'Viandes Grillées au Charbon',
          texto: [
            'Côtes de bœuf',
            'Bavette',
            'Onglet',
            'Entrecôte ou Côtelette',
            'Grillade pour deux'
          ],
          precio: [
            '15.50', '16.50', '16.50', '18.50', '33.00'
          ]
        },
        {
          titulo: 'Autres Viandes',
          texto: [
            'Poulet fermier au curry avec lait de coco et garniture',
            'Burger de bœuf',
            'Saumon grillé'
          ],
          precio: [
            '14.10', '15.10', '15.20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Desserts',
          texto: [
            'Cheesecake fait maison',
            'Brownie fait maison avec glace et chocolat chaud',
            'Gâteau au chocolat vegan, sans gluten et sans lactose',
            'Charlotte: glace à la crème avec chocolat chaud et noix',
            'Glace (vanille, chocolat ou crème)',
            'Truffes avec crème',
            'Fruit du jour'
          ],
          precio: [
            '5.70', '5.70', '5.70',
            '5.70', '4.50', '5.70',
            '2.75'
          ],
          especial: ""
        },
        {
          titulo: 'Vins',
          texto: ['Albariño - Blanc',
            'Vin de la maison: Lanchares - Tempranillo Blanc ou Rouge','Ribera del Duero - Rouge','Cune Rioja Crianza - Rouge','½ Cune Rioja Crianza - Rouge','Blanc de Rueda','Rosé de Navarre','Lambrusco - Rouge ou Rosé','Pichet de Sangria','Pichet de Tinto de Verano','Cava','Benjamin - Mini Cava','Protos - Rouge','Azpilicueta - Rioja Crianza Rouge','Alma - Blanc, Rouge ou Rosé semi-doux','Diamante - Blanc semi-doux','Dulce Maria - Blanc'],
          precio: ['17.50','13.50','17.50','18.00','9.80','16.90','16.50','13.25','17.50','15.50','24.00','9.50','22.00','22.00','17.50','18.00','18.50'],
          especial: 'Demandez-nous notre sélection spéciale'
        },
        {
          titulo: 'Verres de Vin',
          texto: ['Vin de la maison: Lanchares - Tempranillo Blanc ou Rouge','Ribera del Duero - Rouge','Cune Rioja Crianza - Rouge','Blanc de Rueda','Rosé de Navarre','Alma - Blanc, Rouge ou Rosé semi-doux','Diamante - Blanc semi-doux','Dulce Maria - Blanc'],
          precio: ['3.40','3.80','4.30','4.05','3.90','3.80','4.00','4.10'],
          especial: ""
        },
        {
          titulo: 'Boissons Non Alcoolisées et Autres',
          texto: ['Boissons gazeuses','Jarritos','Jus','Eau gazeuse ou minérale','Café','Café - sans lactose ou végétal','Thé ou infusion'],
          precio: ['3.50','4.25','3.50','2.25','1.95','2.15','1.95'],
          especial: ""
        },
        {
          titulo: 'Autres Alcools et Bières',
          texto: ['Tinto de Verano','Ladrón de Manzanas','Bière Sans Gluten (33cl)'],
          precio: ['4.50','3.75','4.20'],
          especial: ""
        }
      ]
    }
  };
  it_lang_carta_sg: LanguageTextCarta = {
    botones: ['Senza Glutine', 'Home', 'Prenotare'],
    titulo: 'Il Nostro Menu',
    titulos: ['Insalate e Antipasti', 'Secondi Piatti', 'Pizze', 'Carni', 'Dolci e Bevande'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Antipasti',
          texto: [
            'Cozze al vapore con emulsione al pomodoro (solamente in inverno)',
            'Porzione di melanzane gratinate con pomodoro e formaggio',
            'Salsiccia di León al forno con vino',
            'Brodo corposo di verdure e carne fatto in casa (solamente in inverno)',
            'Zuppa di Cipolle, verdure e carne (solamente in inverno)',
            'Crema di Zucchine',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '8,10', '6,75', '8,45', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Insalate',
          texto: [
            'Baby: Spinaci, lattuga, formaggio di capra, cipollotto, frutta secca',
            'Caprese: pomodoro, mozzarella di bufala e pesto',
            'Mista: Misticanza, pomodoro, sgombro e cipolle',
            'Bianca: Misticanza, sedano, mele, noci, salsa roquefort',
            'Colorata: Barbabietola, patate, carote, uovo sodo',
            'Speciale: Misticanza, bastoncini di granchio e asparagi bianchi'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15', '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pasta e Risi',
          texto: [
            'Hamburger vegano',
            'Riso integrale con verdure e tofu',
            'Melanzane gratinate con pomodoro e formaggio',
            'Torta salata di cipolle o di funghi e porri (Intera)',
            'Risotto ai funghi e gamberi',
            'Spaghetti con salsa'
          ],
          precio: [
            '12,50', '12,00', '11,25', '18,00', '12,70', '10,20'
          ]
        },
        {
          titulo: 'Salse per la Pasta',
          texto: [
            'Carbonara: panna, uovo e pancetta',
            'Pesto: basilico, aglio e noci',
            'Arrabbiata: pomodoro e peperoncino',
            'Ragú alla Bolognese: pomodoro e carne macinata',
            'Salmone affumicato e asparagi',
            'Quattro formaggi'
          ],
          precio: [
            '0', '0', '0', '0', '0', '0'
          ]
        }
      ],
      P: [
        {
          titulo: 'Le Nostre Pizze',
          texto: [
            'Margherita: mozzarella, pomodoro e origano',
            'Capricciosa: prosciutto',
            'Funghi: champignon',
            'Kokido: pollo',
            'Squisita: pomodoro a fette e aglio',
            'Vegetale: mais, funghi e peperoni',
            'Napoletana: acciughe e capperi',
            'Erotica: formaggio Roquefort, sedano e noci',
            'Quattro formaggi',
            'Hawaiana: prosciutto e ananas',
            'Speciale: Pancetta, cipolla e funghi',
            'Carnosa: Carne',
            'Mediterranea: tonno',
            'Castigliana: salsiccia, salame o pancetta',
            'Piccante: Salame piccante e pepe macinato',
            'Gustosa: chorizo tritato',
            'Crea la tu: Base margherita + 2 ingredienti a scelta delle altre pizze',
            'Vegana: Puoi cambiare la mozzarella con formaggio vegano o senza lattosio'
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
          titulo: 'Grigliate al Carbone',
          texto: [
            'Costine di manzo alla griglia',
            'Bavetta',
            'Lombatello',
            'Costata di manzo',
            'Grigliata per due persone'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: 'Altre Carni',
          texto: [
            'Pollo ruspante al curry con latte di cocco e guarnizione',
            'Hamburger di vitello',
            'Salmone alla piastra'
          ],
          precio: [
            '14,10', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Dolci',
          texto: [
            'Torta al formaggio fatta in casa',
            'Brownie fatto in casa con gelato e cioccolato caldo',
            'Brownie Senza Latticini e Vegano',
            'Charlotte: gelato alla panna con cioccolato caldo e noci',
            'Gelato (vaniglia, panna o cioccolato)',
            'Tartufi con panna',
            'Frutta'
          ],
          precio: [
            '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: 'Vini',
          texto: [
            'Albariño - Bianco',
            'Della casa: Lanchares - Tempranillo, Bianco o Rosso',
            'Ribera del Duero - Rosso',
            'Cune - Rioja Crianza Rosso',
            '½ Cune - Rioja Crianza Rosso',
            'Bianco di Rueda',
            'Rosato di Navarra',
            'Lambrusco - Rosso o Rosato',
            'Caraffa di Sangria',
            'Caraffa di Tinto de Verano',
            'Cava',
            'Cava Benjamin - Bottiglia Mini',
            'Protos - Rosso',
            'Azpilicueta Rioja Crianza Rosso',
            'Alma - Bianco, Rosso o Rosato semidolce',
            'Diamante - Bianco semidolce',
            'Dulce Maria - Bianco Dolce'
          ],
          precio: [
            '17,50', '13,50', '17,50', '18,00', '9,80', '16,90', '16,50', '13,25',
            '17,50', '15,50', '24,00', '9,50', '22,00', '22,00', '17,50', '18,00', '18,50'
          ],
          especial: 'Chiedi della nostra selezione speciale'
        },
        {
          titulo: 'Calici di Vino',
          texto: [
            'Della casa: Lanchares - Tempranillo, Bianco o Rosso',
            'Ribera del Duero - Rosso',
            'Cune - Rioja Crianza Rosso',
            'Bianco di Rueda',
            'Rosato di Navarra',
            'Alma - Bianco, Rosso o Rosato semidolce',
            'Diamante - Bianco semidolce',
            'Dulce Maria - Bianco Dolce'
          ],
          precio: [
            '3,40', '3,80', '4,30', '4,05', '3,90', '3,80', '4,00', '4,10'
          ],
          especial: ""
        },
        {
          titulo: 'Bibite e Altro',
          texto: [
            'Bibite',
            'Jarritos',
            'Succhi',
            'Agua frizzante o naturale',
            'Caffé o Latte',
            'Latte senza lattosio o vegetale',
            'Té o tisane'
          ],
          precio: [
            '3,50', '4,25', '3,50', '2,25', '1,95', '2,15', '1,95'
          ],
          especial: ""
        },
        {
          titulo: 'Altri Alcolici e Birre',
          texto: [
            'Tinto de Verano',
            'Ladrón de Manzanas, sidro di mele',
            'Birra Senza Glutine'
          ],
          precio: [
            '4,50', '3,75', '4,20'
          ],
          especial: ""
        }
      ]
    }
  };
  de_lang_carta_sg: LanguageTextCarta = {
    botones: ['Glutenfrei', 'Start', 'Reservieren'],
    titulo: 'Unsere Speisekarte',
    titulos: ['Salate und Vorspeisen', 'Hauptgerichte', 'Pizzas', 'Fleischgerichte', 'Desserts und Getränke'],
    menu_sections: {
      EyE: [
        {
          titulo: 'Vorspeisen',
          texto: [
            'Gedämpfte Muscheln mit Tomatenemulsion (nur im Winter)',
            'Portion gratinierte Auberginen mit Tomaten und Käse',
            'Léon-Chorizo aus dem Ofen mit Wein',
            'Hausgemachte dicke Gemüse-Fleisch-Brühe (nur im Winter)',
            'Zwiebelsuppe in Gemüse-Fleisch-Brühe (nur im Winter)',
            'Zucchinicremesuppe',
            'Burrata'
          ],
          precio: [
            '12,00', '5,50', '8,10', '6,75', '8,45', '6,85', '8,15'
          ]
        },
        {
          titulo: 'Salate',
          texto: [
            'Baby: Spinat, Salate, Ziegenkäse, Frühlingszwiebeln, Nüsse',
            'Caprese: Tomaten, Büffelmozzarella und Pesto',
            'Gemischt: bunte Salate, Tomaten, Thunfisch und Zwiebeln',
            'Weiß: Salat, Sellerie, Apfel, Walnüsse, Roquefort-Sauce',
            'Bunt: Rote Bete, Kartoffeln, Karotten, hartgekochtes Ei',
            'Spezial: Salat, Krabbenstäbchen und weißer Spargel'
          ],
          precio: [
            '8,15', '8,15', '8,15', '8,15', '8,15', '8,15'
          ]
        }
      ],
      S: [
        {
          titulo: 'Pasta und Reis',
          texto: [
            'Veganer Burger',
            'Vollkornreis mit Gemüse und Tofu',
            'Gratinierte Auberginen mit Tomaten und Käse',
            'Zwiebel- oder Pilz-Lauch-Kuchen (ganz)',
            'Champignon-Garnelen-Risotto',
            'Spaghetti mit Sauce nach Wahl'
          ],
          precio: [
            '12,50', '12,00', '11,25', '18,00', '12,70', '10,20'
          ]
        },
        {
          titulo: 'Pasta-Saucen',
          texto: [
            'Carbonara: Sahne, Ei und Speck',
            'Pesto: Basilikum, Knoblauch und Walnüsse',
            'Arrabbiata: Tomaten und Chili',
            'Bolognese: Tomaten und Hackfleisch',
            'Räucherlachs und Spargel',
            'Vier-Käse-Sauce'
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
            'Margherita: Mozzarella, Tomaten und Oregano',
            'Capricciosa: Schinken',
            'Funghi: Champignons',
            'Kokido: Hähnchen',
            'Exquisit: Tomatenscheiben und Knoblauch',
            'Vegetarisch: Mais, Champignons und Paprika',
            'Napoli: Sardellen und Kapern',
            'Erotika: Roquefort, Sellerie und Walnüsse',
            'Vier Käse',
            'Hawaii: Ananas und Schinken',
            'Spezial: Speck, Zwiebeln und Champignons',
            'Fleisch: Rindfleisch',
            'Mediterran: Thunfisch',
            'Kastilisch: Chorizo, Salami oder Speck',
            'Scharf: Pepperoni und Pfeffer',
            'Würzig: gehackte Chorizo',
            'Selbst zusammenstellen: Margherita-Basis + 2 Zutaten anderer Pizzen',
            'Für dich: Mozzarella gegen veganen oder laktosefreien Käse tauschen'
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
          titulo: 'Fleisch vom Holzkohlegrill',
          texto: [
            'Rippchen vom Grill',
            'Bauchlappen',
            'Hängerbauch',
            'Entrecôte',
            'Grillplatte für zwei Personen'
          ],
          precio: [
            '15,50', '16,50', '16,50', '18,50', '33,00'
          ]
        },
        {
          titulo: 'Andere Fleischgerichte',
          texto: [
            'Freiland-Hähnchen-Curry mit Kokosmilch und Beilage',
            'Rindfleisch-Burger',
            'Gegrillter Lachs'
          ],
          precio: [
            '14,10', '15,10', '15,20'
          ]
        }
      ],
      PyB: [
        {
          titulo: 'Desserts',
          texto: [
            'Hausgemachter gebackener Käsekuchen',
            'Hausgemachter Brownie mit Eis und heißer Schokolade',
            'Veganer Schokoladenkuchen, glutenfrei und laktosefrei',
            'Charlotte: Sahneeis mit heißer Schokolade und Walnüssen',
            'Eis (Vanille, Schokolade oder Sahne)',
            'Trüffel mit Sahne',
            'Obst des Tages'
          ],
          precio: [
            '5,70', '5,70', '5,70',
            '5,70', '4,50', '5,70',
            '2,75'
          ],
          especial: ""
        },
        {
          titulo: 'Weine',
          texto: [
            'Albariño - Weißwein',
            'Hauswein: Lanchares - Tempranillo Weiß oder Rot',
            'Ribera del Duero - Rotwein',
            'Cune Rioja Crianza - Rotwein',
            '½ Cune Rioja Crianza - Rotwein',
            'Weißwein aus Rueda',
            'Roséwein aus Navarra',
            'Lambrusco - Rot oder Rosé',
            'Krug Sangria',
            'Krug Rotweinschorle',
            'Sekt',
            'Piccolo - Mini-Sekt',
            'Protos - Rotwein',
            'Azpilicueta - Rioja Crianza Rotwein',
            'Alma - Weiß, Rot oder Rosé halbtrocken',
            'Diamante - Weißwein halbtrocken',
            'Dulce Maria - Weißwein'
          ],
          precio: [
            '17,50', '13,50', '17,50', '18,00', '9,80', '16,90', '16,50', '13,25',
            '17,50', '15,50', '24,00', '9,50', '22,00', '22,00', '17,50', '18,00', '18,50'
          ],
          especial: 'Fragen Sie nach unserer speziellen Auswahl'
        },
        {
          titulo: 'Wein im Glas',
          texto: [
            'Hauswein: Lanchares - Tempranillo Weiß oder Rot',
            'Ribera del Duero - Rotwein',
            'Cune Rioja Crianza - Rotwein',
            'Weißwein aus Rueda',
            'Roséwein aus Navarra',
            'Alma - Weiß, Rot oder Rosé halbtrocken',
            'Diamante - Weißwein halbtrocken',
            'Dulce Maria - Weißwein'
          ],
          precio: [
            '3,40', '3,80', '4,30', '4,05', '3,90', '3,80', '4,00', '4,10'
          ],
          especial: ""
        },
        {
          titulo: 'Erfrischungsgetränke und Andere',
          texto: [
            'Erfrischungsgetränke',
            'Jarritos',
            'Säfte',
            'Mineralwasser mit oder ohne Kohlensäure',
            'Kaffee',
            'Kaffee - laktosefrei oder pflanzlich',
            'Tee oder Aufguss'
          ],
          precio: [
            '3,50', '4,25', '3,50', '2,25', '1,95', '2,15', '1,95'
          ],
          especial: ""
        },
        {
          titulo: 'Andere Alkoholische Getränke und Biere',
          texto: [
            'Rotweinschorle',
            'Ladrón de Manzanas',
            'Glutenfreies Bier (33cl)'
          ],
          precio: [
            '4,50', '3,75', '4,20'
          ],
          especial: ""
        }
      ]
    }
  };
  zh_lang_carta_sg: LanguageTextCarta = {
    botones: ['无麸质', '主页', '预订'],
    titulo: '我们的菜单',
    titulos: ['沙拉和前菜', '主菜', '披萨', '肉类', '甜点和饮品'],
    menu_sections: {
      EyE: [
        {
          titulo: '前菜',
          texto: [
            '番茄酱蒸贻贝（仅冬季供应）',
            '茄子番茄奶酪焗烤',
            '莱昂香肠配烤酒',
            '自制浓汤配蔬菜和肉（仅冬季供应）',
            '洋葱汤配蔬菜和肉汤（仅冬季供应）',
            '西葫芦奶油汤',
            '布拉塔奶酪'
          ],
          precio: [
            '12.00', '5.50', '8.10', '6.75', '8.45', '6.85', '8.15'
          ]
        },
        {
          titulo: '沙拉',
          texto: [
            '婴儿沙拉：菠菜、生菜、山羊奶酪、青葱、坚果',
            '卡普雷塞：番茄、水牛奶酪和罗勒酱',
            '混合：什锦生菜、番茄、金枪鱼和洋葱',
            '白色：生菜、芹菜、苹果、核桃、蓝纹奶酪酱',
            '彩色：甜菜根、土豆、胡萝卜、水煮蛋',
            '特色：生菜、蟹棒和白芦笋'
          ],
          precio: [
            '8.15', '8.15', '8.15', '8.15', '8.15', '8.15'
          ]
        }
      ],
      S: [
        {
          titulo: '意面和米饭',
          texto: [
            '素食汉堡',
            '糙米配蔬菜和豆腐',
            '茄子番茄奶酪焗烤',
            '洋葱或蘑菇韭葱派（整个）',
            '蘑菇虾仁烩饭',
            '意大利面配自选酱料'
          ],
          precio: [
            '12.50', '12.00', '11.25', '18.00', '12.70', '10.20'
          ]
        },
        {
          titulo: '意面酱料',
          texto: [
            '卡邦尼：奶油、鸡蛋和培根',
            '罗勒酱：罗勒、大蒜和核桃',
            '阿拉比亚塔：番茄和辣椒',
            '博洛尼亚：番茄和绞肉',
            '烟熏三文鱼和芦笋',
            '四种奶酪'
          ],
          precio: [
            '0', '0', '0', '0', '0', '0'
          ]
        }
      ],
      P: [
        {
          titulo: '披萨',
          texto: [
            '玛格丽特：马苏里拉奶酪、番茄和牛至',
            '卡普里乔萨：火腿',
            '蘑菇：蘑菇',
            '鸡肉：鸡肉',
            '精致：切片番茄和大蒜',
            '素食：玉米、蘑菇和彩椒',
            '那不勒斯：凤尾鱼和刺山柑',
            '情调：蓝纹奶酪、芹菜和核桃',
            '四种奶酪',
            '夏威夷：菠萝和火腿',
            '特色：培根、洋葱和蘑菇',
            '肉食：牛肉',
            '地中海：金枪鱼',
            '卡斯蒂利亚：西班牙香肠、萨拉米或培根',
            '辣椒派对：意大利辣香肠和黑胡椒',
            '多汁：碎香肠',
            '自制：玛格丽特基底 + 2种其他披萨配料',
            '素食改装：将马苏里拉换成素食或无乳糖奶酪'
          ],
          precio: [
            '9.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50',
            '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50', '10.50',
            '10.95', '+1.40'
          ]
        }
      ],
      C: [
        {
          titulo: '炭烤肉类',
          texto: [
            '牛肋排',
            '牛腹肉',
            '牛肚裙',
            '肋眼牛排或嫩肉牛排',
            '双人烤肉'
          ],
          precio: [
            '15.50', '16.50', '16.50', '18.50', '33.00'
          ]
        },
        {
          titulo: '其他肉类',
          texto: [
            '椰奶咖喱散养鸡配配菜',
            '牛肉汉堡',
            '烤三文鱼'
          ],
          precio: [
            '14.10', '15.10', '15.20'
          ]
        }
      ],
      PyB: [
        {
          titulo: '甜点',
          texto: [
            '自制烤芝士蛋糕',
            '自制布朗尼配冰淇淋和热巧克力',
            '素食巧克力蛋糕，无麸质和无乳糖',
            '夏洛特：奶油冰淇淋配热巧克力和核桃',
            '冰淇淋（香草、巧克力或奶油）',
            '奶油松露',
            '当日水果'
          ],
          precio: [
            '5.70', '5.70', '5.70',
            '5.70', '4.50', '5.70',
            '2.75'
          ],
          especial: ""
        },
        {
          titulo: '葡萄酒',
          texto: [
            '阿尔巴利诺 - 白葡萄酒',
            '店家推荐：兰查雷斯 - 丹魄白葡萄酒或红葡萄酒',
            '杜罗河岸 - 红葡萄酒',
            '库内里奥哈陈酿 - 红葡萄酒',
            '半瓶库内里奥哈陈酿 - 红葡萄酒',
            '卢埃达产区 - 白葡萄酒',
            '纳瓦拉产区 - 桃红葡萄酒',
            '兰布鲁斯科 - 红葡萄酒或桃红葡萄酒',
            '一壶桑格利亚',
            '一壶夏日红酒',
            '起泡酒',
            '迷你起泡酒',
            '普罗托斯 - 红葡萄酒',
            '阿兹皮利库埃塔 - 里奥哈陈酿红葡萄酒',
            '阿尔玛 - 白葡萄酒、红葡萄酒或半甜桃红葡萄酒',
            '钻石 - 半甜白葡萄酒',
            '甜美玛利亚 - 白葡萄酒'
          ],
          precio: [
            '17.50','13.50','17.50','18.00','9.80','16.90','16.50','13.25','17.50',
            '15.50','24.00','9.50','22.00','22.00','17.50','18.00','18.50'
          ],
          especial: '询问我们的特选酒单'
        },
        {
          titulo: '葡萄酒（杯）',
          texto: [
            '店家推荐：兰查雷斯 - 丹魄白葡萄酒或红葡萄酒',
            '杜罗河岸 - 红葡萄酒',
            '库内里奥哈陈酿 - 红葡萄酒',
            '卢埃达产区 - 白葡萄酒',
            '纳瓦拉产区 - 桃红葡萄酒',
            '阿尔玛 - 白葡萄酒、红葡萄酒或半甜桃红葡萄酒',
            '钻石 - 半甜白葡萄酒',
            '甜美玛利亚 - 白葡萄酒'
          ],
          precio: [
            '3.40','3.80','4.30','4.05','3.90','3.80','4.00','4.10'
          ],
          especial: ""
        },
        {
          titulo: '软饮和其他',
          texto: [
            '软饮',
            '墨西哥果味汽水',
            '果汁',
            '气泡水或矿泉水',
            '咖啡',
            '咖啡 - 无乳糖或植物基',
            '茶或花草茶'
          ],
          precio: [
            '3.50','4.25','3.50','2.25','1.95','2.15','1.95'
          ],
          especial: ""
        },
        {
          titulo: '其他酒精饮品和啤酒',
          texto: [
            '夏日红酒',
            '苹果贼',
            '无麸质啤酒（330毫升）'
          ],
          precio: [
            '4.50','3.75','4.20'
          ],
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
    ZH: this.zh_lang_home
  };

  all_texts_carta: TextsCarta = {
    ES: this.es_lang_carta,
    FR: this.fr_lang_carta,
    DE: this.de_lang_carta,
    EN: this.en_lang_carta,
    IT: this.it_lang_carta,
    ZH: this.zh_lang_carta
  }

  all_texts_carta_sg: TextsCarta = {
    ES: this.es_lang_carta_sg,
    FR: this.fr_lang_carta_sg,
    DE: this.de_lang_carta_sg,
    EN: this.en_lang_carta_sg,
    IT: this.it_lang_carta_sg,
    ZH: this.zh_lang_carta_sg
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

import { CustomIconsComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaButtonsComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaCalendarComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaCheckboxComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaDoubleCalendarComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaDropdownComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaInputfileComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaInputnumberComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaInputtextComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaMultiselectComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { GondolaTextareaComponent } from '@gondola-librery-front/shared-ui-components-v17';
import { InputIncrementalValueComponent } from '@gondola-librery-front/shared-ui-components-v17';

export const directivasV17 = [
  {
    name: 'gondola-input-text',
    selector: '[GondolaInputText]',
    descripcion:
      'Directiva que aplica estilos personalizados a elementos de entrada de texto, incluyendo gradientes, sombras y animaciones de enfoque.',
    inputs: [
      {
        name: 'GondolaInputText',
        type: 'string',
        optional: true,
        descripcion: 'Clase CSS personalizada que se aplicará al elemento.',
      },
      {
        name: 'customStyles',
        type: '{ [key: string]: string }',
        optional: true,
        descripcion:
          'Estilos CSS personalizados aplicados directamente al elemento.',
      },
      {
        name: 'customAttributes',
        type: '{ [key: string]: string }',
        optional: true,
        descripcion: 'Atributos personalizados aplicados al elemento.',
      },
      {
        name: 'inconField',
        type: 'boolean',
        optional: true,
        descripcion:
          'Indica si el campo tiene un ícono asociado, ajustando el padding izquierdo.',
        default: false,
      },
      {
        name: 'boxShadow',
        type: 'boolean',
        optional: true,
        descripcion: 'Activa/desactiva la sombra del campo.',
        default: true,
      },
    ],
    outputs: [],
    ejemplo:
      '<input type="text" GondolaInputText="custom-class" [inconField]="true">',
  },
  {
    name: 'gondola-button-rounded',
    selector: '[GondolaButtonRounded]',
    descripcion:
      'Directiva que transforma elementos de botón en botones redondos con gradientes de color personalizables.',
    inputs: [
      {
        name: 'GondolaButtonRounded',
        type: 'string',
        optional: true,
        descripcion: 'Clase CSS personalizada que se aplicará al botón.',
      },
      {
        name: 'customColor',
        type: "'purple' | 'blue' | 'orange' | 'green' | 'red' | 'gray' | 'transparent' | 'black'",
        optional: true,
        descripcion: 'Color del gradiente del botón.',
        default: "'purple'",
      },
    ],
    outputs: [],
    ejemplo:
      '<button GondolaButtonRounded="btn-custom" customColor="green">Click</button>',
  },
  {
    name: 'gondola-input-number',
    selector: '[GondolaInputNumber]',
    descripcion:
      'Directiva especializada para inputs numéricos con validación y formato.',
    inputs: [],
    outputs: [],
    ejemplo: '<input type="number" GondolaInputNumber>',
  },
  {
    name: 'gondola-input-textarea',
    selector: '[GondolaInputTextArea]',
    descripcion: 'Directiva para áreas de texto con estilos personalizados.',
    inputs: [],
    outputs: [],
    ejemplo: '<textarea GondolaInputTextArea></textarea>',
  },
  {
    name: 'gondola-input-select',
    selector: '[GondolaInputSelect]',
    descripcion: 'Directiva para elementos select con estilos consistentes.',
    inputs: [],
    outputs: [],
    ejemplo: '<select GondolaInputSelect><option>Opción 1</option></select>',
  },
  {
    name: 'gondola-steper',
    selector: '[GondolaSteper]',
    descripcion:
      'Directiva que añade funcionalidad de steper a elementos de entrada numérica.',
    inputs: [],
    outputs: [],
    ejemplo: '<input type="number" GondolaSteper>',
  },
];

export const componentesV17 = [
  {
    name: 'custom-icons',
    value: 'app-custom-icons',
    component: CustomIconsComponent,
    descripcion:
      'Componente para mostrar íconos personalizados de la librería Gondola.',
    selector: 'app-custom-icons',
    inputs: [],
    outputs: [],
    ejemplo: '<app-custom-icons></app-custom-icons>',
  },
  {
    name: 'gondola-buttons',
    value: 'app-gondola-buttons',
    component: GondolaButtonsComponent,
    descripcion:
      'Componente de botón con estilos personalizables y gradientes de color.',
    selector: 'app-gondola-buttons',
    inputs: [
      {
        name: 'label',
        type: 'string',
        optional: false,
        descripcion: 'Texto que se muestra en el botón.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        optional: true,
        descripcion: 'Desactiva el botón y cambia su apariencia.',
        default: false,
      },
      {
        name: 'icon',
        type: 'string',
        optional: true,
        descripcion: 'Nombre del ícono a mostrar en el botón.',
        default: "''",
      },
      {
        name: 'borderRadius',
        type: 'string',
        optional: true,
        descripcion: 'Radio del borde del botón.',
        default: "'24px'",
      },
      {
        name: 'backgroundColor',
        type: 'string',
        optional: true,
        descripcion:
          'Color de fondo del botón (puede ser un nombre de gradiente definido).',
        default: "''",
      },
      {
        name: 'customStyle',
        type: 'any',
        optional: true,
        descripcion: 'Estilos CSS personalizados aplicados al botón.',
        default: undefined,
      },
    ],
    outputs: [
      {
        name: 'clickButton',
        type: 'void',
        descripcion: 'Evento emitido cuando se hace clic en el botón.',
      },
    ],
    ejemplo:
      '<app-gondola-buttons label="Mi Botón" backgroundColor="green-gradient" (clickButton)="onClick()"></app-gondola-buttons>',
  },
  {
    name: 'gondola-dropdown',
    value: 'app-gondola-dropdown',
    component: GondolaDropdownComponent,
    descripcion:
      'Componente dropdown con funcionalidad avanzada, filtrado y plantillas personalizables.',
    selector: 'app-gondola-dropdown',
    inputs: [
      {
        name: 'optionList',
        type: 'any[]',
        optional: false,
        descripcion: 'Lista de opciones disponibles en el dropdown.',
      },
      {
        name: 'optionSelect',
        type: 'any',
        optional: false,
        descripcion: 'Opción actualmente seleccionada.',
      },
      {
        name: 'optionLabel',
        type: 'string',
        optional: true,
        descripcion: 'Propiedad del objeto opción que se usará como etiqueta.',
        default: "'name'",
      },
      {
        name: 'placeholder',
        type: 'string',
        optional: true,
        descripcion: 'Texto placeholder cuando no hay selección.',
        default: "''",
      },
      {
        name: 'filter',
        type: 'boolean',
        optional: true,
        descripcion: 'Activa el filtrado de opciones.',
        default: true,
      },
      {
        name: 'showClear',
        type: 'boolean',
        optional: true,
        descripcion: 'Muestra el botón para limpiar la selección.',
        default: true,
      },
    ],
    outputs: [],
    ejemplo:
      '<app-gondola-dropdown [optionList]="opciones" [(optionSelect)]="seleccionada" optionLabel="label"></app-gondola-dropdown>',
  },
  {
    name: 'gondola-calendar',
    value: 'app-gondola-calendar',
    component: GondolaCalendarComponent,
    descripcion: 'Componente calendario para selección de fechas.',
    selector: 'app-gondola-calendar',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-calendar></app-gondola-calendar>',
  },
  {
    name: 'gondola-checkbox',
    value: 'app-gondola-checkbox',
    component: GondolaCheckboxComponent,
    descripcion: 'Componente checkbox personalizado.',
    selector: 'app-gondola-checkbox',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-checkbox></app-gondola-checkbox>',
  },
  {
    name: 'gondola-double-calendar',
    value: 'app-gondola-double-calendar',
    component: GondolaDoubleCalendarComponent,
    descripcion:
      'Componente para selección de rango de fechas con dos calendarios.',
    selector: 'app-gondola-double-calendar',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-double-calendar></app-gondola-double-calendar>',
  },
  {
    name: 'gondola-inputfile',
    value: 'app-gondola-inputfile',
    component: GondolaInputfileComponent,
    descripcion: 'Componente para selección y subida de archivos.',
    selector: 'app-gondola-inputfile',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-inputfile></app-gondola-inputfile>',
  },
  {
    name: 'gondola-inputnumber',
    value: 'app-gondola-inputnumber',
    component: GondolaInputnumberComponent,
    descripcion: 'Componente de entrada numérica con validación.',
    selector: 'app-gondola-inputnumber',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-inputnumber></app-gondola-inputnumber>',
  },
  {
    name: 'gondola-inputtext',
    value: 'app-gondola-inputtext',
    component: GondolaInputtextComponent,
    descripcion: 'Componente de entrada de texto con validación y estilos.',
    selector: 'app-gondola-inputtext',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-inputtext></app-gondola-inputtext>',
  },
  {
    name: 'gondola-multiselect',
    value: 'app-gondola-multiselect',
    component: GondolaMultiselectComponent,
    descripcion: 'Componente multiselect para selección múltiple de opciones.',
    selector: 'app-gondola-multiselect',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-multiselect></app-gondola-multiselect>',
  },
  {
    name: 'gondola-textarea',
    value: 'app-gondola-textarea',
    component: GondolaTextareaComponent,
    descripcion: 'Componente textarea con expansión automática.',
    selector: 'app-gondola-textarea',
    inputs: [],
    outputs: [],
    ejemplo: '<app-gondola-textarea></app-gondola-textarea>',
  },
  {
    name: 'input-incremental-value',
    value: 'app-input-incremental-value',
    component: InputIncrementalValueComponent,
    descripcion: 'Componente de entrada con controles incrementales.',
    selector: 'app-input-incremental-value',
    inputs: [],
    outputs: [],
    ejemplo: '<app-input-incremental-value></app-input-incremental-value>',
  },
];

export const funcionesV17 = [];

import { GondolaButtonsComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaCalendarComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaCardComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaCheckboxComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaDropdownComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaInputtextComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaMultiselectComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaSingleCheckboxListComponent } from '@gondola-librery-front/shared-ui-components-v19';
import { GondolaTextareaComponent } from '@gondola-librery-front/shared-ui-components-v19';

export const directivasV19 = [];

export const componentesV19 = [
  {
    name: 'custom-icons',
    value: 'app-custom-icons',
    component: null, // If there's a custom icons component
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
        name: 'letterColor',
        type: 'string',
        optional: true,
        descripcion: 'Color del texto del botón.',
        default: "'#fff'",
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
      {
        name: 'custonElements',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion: 'Plantilla personalizada para el contenido del botón.',
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
      'Componente dropdown con funcionalidad avanzada, filtrado y plantillas personalizables. Soporta modelos bidireccionales con two-way binding.',
    selector: 'app-gondola-dropdown',
    inputs: [
      {
        name: 'optionList',
        type: 'DropOptions[]',
        optional: false,
        descripcion:
          'Lista de opciones disponibles en el dropdown. Objeto DropOptions: { name: string, value: any, query?: any[] }.',
      },
      {
        name: 'optionSelect',
        type: 'DropOptions | undefined',
        optional: false,
        descripcion:
          'Opción actualmente seleccionada. Soporta two-way binding con [(optionSelect)].',
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
        default: '"\'"',
      },
      {
        name: 'filter',
        type: 'boolean',
        optional: true,
        descripcion: 'Activa el filtrado de opciones.',
        default: true,
      },
      {
        name: 'filterBy',
        type: 'string',
        optional: true,
        descripcion: 'Propiedad por la que filtrar opciones.',
        default: "'name'",
      },
      {
        name: 'showClear',
        type: 'boolean',
        optional: true,
        descripcion: 'Muestra el botón para limpiar la selección.',
        default: true,
      },
      {
        name: 'disabled',
        type: 'boolean',
        optional: true,
        descripcion: 'Desactiva el componente dropdown.',
        default: false,
      },
      {
        name: 'selectItemCustom',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion:
          'Plantilla personalizada para mostrar opciones seleccionadas.',
        default: undefined,
      },
      {
        name: 'itemListCustom',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion:
          'Plantilla personalizada para mostrar la lista de opciones.',
        default: undefined,
      },
      {
        name: 'headerCustom',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion: 'Plantilla personalizada para el encabezado del dropdown.',
        default: undefined,
      },
      {
        name: 'dropIconCustom',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion: 'Plantilla personalizada para el ícono del dropdown.',
        default: undefined,
      },
      {
        name: 'footerCustom',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion: 'Plantilla personalizada para el pie del dropdown.',
        default: undefined,
      },
    ],
    outputs: [], // No direct outputs, uses model signals for data binding
    ejemplo:
      '<app-gondola-dropdown [(optionList)]="opciones" [(optionSelect)]="seleccionada" [placeholder]="Seleccione una opción"></app-gondola-dropdown>',
  },
  {
    name: 'gondola-card',
    value: 'app-gondola-card',
    component: GondolaCardComponent,
    descripcion:
      'Componente de tarjeta personalizable con título, contenido y pie opcionales.',
    selector: 'app-gondola-card',
    inputs: [
      {
        name: 'title',
        type: 'string',
        optional: true,
        descripcion: 'Título mostrado en la parte superior de la card.',
        default: '"\'"',
      },
      {
        name: 'footer',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion: 'Contenido para el pie de la card.',
        default: undefined,
      },
      {
        name: 'content',
        type: 'TemplateRef<any>',
        optional: true,
        descripcion: 'Contenido principal de la card.',
        default: undefined,
      },
    ],
    outputs: [],
    ejemplo: `
      <app-gondola-card [title]="'Mi Card'">
        <ng-template #content>
          <p>Contenido de la card</p>
        </ng-template>
        <ng-template #footer>
          <button>Acción</button>
        </ng-template>
      </app-gondola-card>
    `,
  },
  {
    name: 'gondola-calendar',
    value: 'app-gondola-calendar',
    component: GondolaCalendarComponent,
    descripcion: 'Componente calendario para selección de fechas.',
    selector: 'app-gondola-calendar',
    inputs: [
      {
        name: 'ngModel',
        type: 'Date | undefined',
        optional: true,
        descripcion: 'Fecha seleccionada. Soporta two-way binding.',
        default: undefined,
      },
      {
        name: 'dateFormat',
        type: 'string',
        optional: true,
        descripcion: 'Formato de fecha.',
        default: "'DD/MM/YY'",
      },
      {
        name: 'placeholder',
        type: 'string',
        optional: true,
        descripcion: 'Placeholder del campo de fecha.',
        default: "'Seleccione fecha'",
      },
      {
        name: 'showIcon',
        type: 'boolean',
        optional: true,
        descripcion: 'Muestra ícono del calendario.',
        default: true,
      },
      {
        name: 'disabled',
        type: 'boolean',
        optional: true,
        descripcion: 'Desactiva el calendario.',
        default: false,
      },
    ],
    outputs: [],
    ejemplo: `<app-gondola-calendar [(ngModel)]="fechaSeleccionada" placeholder="Seleccione una fecha"></app-gondola-calendar>`,
  },
  {
    name: 'gondola-checkbox',
    value: 'app-gondola-checkbox',
    component: GondolaCheckboxComponent,
    descripcion: 'Componente checkbox personalizado.',
    selector: 'app-gondola-checkbox',
    inputs: [
      {
        name: 'label',
        type: 'string',
        optional: true,
        descripcion: 'Texto del label del checkbox.',
        default: '"\'"',
      },
      {
        name: 'checked',
        type: 'boolean',
        optional: true,
        descripcion:
          'Estado seleccionado del checkbox. Soporta two-way binding.',
        default: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        optional: true,
        descripcion: 'Desactiva el checkbox.',
        default: false,
      },
    ],
    outputs: [],
    ejemplo: `<app-gondola-checkbox label='Aceptar términos' [(checked)]='termosAceptados'></app-gondola-checkbox>`,
  },
  {
    name: 'gondola-inputtext',
    value: 'app-gondola-inputtext',
    component: GondolaInputtextComponent,
    descripcion: 'Componente de entrada de texto con validación y estilos.',
    selector: 'app-gondola-inputtext',
    inputs: [
      {
        name: 'placeholder',
        type: 'string',
        optional: true,
        descripcion: 'Placeholder del campo de texto.',
        default: '"\'"',
      },
      {
        name: 'disabled',
        type: 'boolean',
        optional: true,
        descripcion: 'Desactiva el campo de entrada.',
        default: false,
      },
      {
        name: 'type',
        type: 'string',
        optional: true,
        descripcion: 'Tipo del campo de entrada.',
        default: "'text'",
      },
    ],
    outputs: [],
    ejemplo: `<app-gondola-inputtext placeholder="Ingrese su nombre" [disabled]="false"></app-gondola-inputtext>`,
  },
  {
    name: 'gondola-multiselect',
    value: 'app-gondola-multiselect',
    component: GondolaMultiselectComponent,
    descripcion: 'Componente multiselect para selección múltiple de opciones.',
    selector: 'app-gondola-multiselect',
    inputs: [
      {
        name: 'options',
        type: 'any[]',
        optional: false,
        descripcion: 'Lista de opciones disponibles.',
      },
      {
        name: 'selectedOptions',
        type: 'any[]',
        optional: true,
        descripcion: 'Opciones seleccionadas. Soporta two-way binding.',
        default: '[]',
      },
      {
        name: 'optionLabel',
        type: 'string',
        optional: true,
        descripcion: 'Propiedad del objeto opción que se usará como etiqueta.',
        default: "''",
      },
      {
        name: 'placeholder',
        type: 'string',
        optional: true,
        descripcion: 'Texto placeholder cuando no hay selecciones.',
        default: "'Seleccionar opciones'",
      },
      {
        name: 'filter',
        type: 'boolean',
        optional: true,
        descripcion: 'Activa el filtrado de opciones.',
        default: true,
      },
      {
        name: 'chipLimit',
        type: 'number',
        optional: true,
        descripcion: 'Límite de chips a mostrar.',
        default: 3,
      },
    ],
    outputs: [],
    ejemplo: `<app-gondola-multiselect [options]="opcionesDisponibles" [(selectedOptions)]="opcionesSeleccionadas"></app-gondola-multiselect>`,
  },
  {
    name: 'gondola-single-checkbox-list',
    value: 'app-gondola-single-checkbox-list',
    component: GondolaSingleCheckboxListComponent,
    descripcion:
      'Componente para selección única de opciones utilizando una lista de checkboxes.',
    selector: 'app-gondola-single-checkbox-list',
    inputs: [
      {
        name: 'options',
        type: '{ name: string; value: any }[]',
        optional: false,
        descripcion:
          'Lista de opciones donde cada opción tiene nombre y valor.',
      },
      {
        name: 'direction',
        type: "'horizontal' | 'vertical'",
        optional: true,
        descripcion: 'Dirección del layout de los checkboxes.',
        default: "'horizontal'",
      },
      {
        name: 'formControl',
        type: 'FormControl',
        optional: true,
        descripcion: 'FormControl de Reactive Forms para manejo de datos.',
        default: undefined,
      },
    ],
    outputs: [], // Implemented as ControlValueAccessor
    ejemplo: `
      <app-gondola-single-checkbox-list
        [options]="[{ name: 'Opción 1', value: '1' }, { name: 'Opción 2', value: '2' }]"
        direction="vertical"
        [formControl]="myFormControl">
      </app-gondola-single-checkbox-list>
    `,
  },
  {
    name: 'gondola-textarea',
    value: 'app-gondola-textarea',
    component: GondolaTextareaComponent,
    descripcion: 'Componente textarea con expansión automática.',
    selector: 'app-gondola-textarea',
    inputs: [
      {
        name: 'placeholder',
        type: 'string',
        optional: true,
        descripcion: 'Placeholder del textarea.',
        default: '"\'"',
      },
      {
        name: 'rows',
        type: 'number',
        optional: true,
        descripcion: 'Número de filas del textarea.',
        default: 3,
      },
      {
        name: 'disabled',
        type: 'boolean',
        optional: true,
        descripcion: 'Desactiva el textarea.',
        default: false,
      },
    ],
    outputs: [],
    ejemplo: `<app-gondola-textarea placeholder="Ingrese una descripción" rows="5"></app-gondola-textarea>`,
  },
];

export const funcionesV19 = [];

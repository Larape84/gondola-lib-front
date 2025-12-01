import {
  Component,
  computed,
  signal,
  WritableSignal,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { componentesV16 } from './componentes-v16';
import { NgClass, NgComponentOutlet, NgIf, NgFor } from '@angular/common';
import {
  componentesV17,
  directivasV17,
  funcionesV17,
} from './data-v17/constantes-v17';

import {
  componentesV19,
  directivasV19,
  funcionesV19,
} from './data-v19/constantes-v19';

interface SelectTarget {
  angular: string;
  structure: string;
}

interface ComponentItem {
  name: string;
  descripcion?: string;
  selector?: string;
  inputs?: Array<{
    name: string;
    type: string;
    optional?: boolean;
    descripcion?: string;
    default?: string | number | boolean | null;
  }>;
  outputs?: Array<{
    name: string;
    type: string;
    descripcion?: string;
  }>;
  ejemplo?: string;
  component?: any;
}

interface AngularVersion {
  value: string;
  active: boolean;
}

interface ComponentCategory {
  value: string;
  name: string;
  active: boolean;
}

@Component({
  imports: [RouterModule, NgClass, NgComponentOutlet],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  public selectTarget: WritableSignal<SelectTarget> = signal({
    angular: 'Angular 17',
    structure: 'Componetes',
  });
  public selectedItem: WritableSignal<ComponentItem | null> = signal(null);
  public activeCategory: WritableSignal<string> = signal('');
  public activeAngularVersion = signal('Angular 17');
  protected title = 'gondola-librery-front';
  public componentesV16 = componentesV16;
  public mapComponentes = [
    {
      angular: 'Angular 16',
      component: 'Componentes',
      componentes: [], // No components yet
      directivas: [], // No directives yet
      funciones: [], // No functions yet
    },
    {
      angular: 'Angular 17',
      component: 'Componentes',
      componentes: componentesV17,
      directivas: directivasV17,
      funciones: funcionesV17,
    },
    {
      angular: 'Angular 18',
      component: 'Componentes',
      componentes: [], // No components yet
      directivas: [], // No directives yet
      funciones: [], // No functions yet
    },
    {
      angular: 'Angular 19',
      component: 'Componentes',
      componentes: componentesV19,
      directivas: directivasV19,
      funciones: funcionesV19,
    },
    {
      angular: 'Angular 20',
      component: 'Componentes',
      componentes: [], // No components yet
      directivas: [], // No directives yet
      funciones: [], // No functions yet
    },
  ];

  public activeComponents = computed(() => {
    const versionMap = this.mapComponentes.find(
      (m) => m.angular === this.activeAngularVersion()
    );
    return versionMap?.componentes || [];
  });

  public activeDirectives = computed(() => {
    const versionMap = this.mapComponentes.find(
      (m) => m.angular === this.activeAngularVersion()
    );
    return versionMap?.directivas || [];
  });

  public activeFunctions = computed(() => {
    const versionMap = this.mapComponentes.find(
      (m) => m.angular === this.activeAngularVersion()
    );
    return versionMap?.funciones || [];
  });

  public angularVersion: AngularVersion[] = [
    {
      value: 'Angular 16',
      active: false,
    },
    {
      value: 'Angular 17',
      active: true,
    },
    {
      value: 'Angular 18',
      active: false,
    },
    {
      value: 'Angular 19',
      active: false,
    },
    {
      value: 'Angular 20',
      active: false,
    },
  ];

  public componentList: ComponentCategory[] = [
    {
      value: 'Componetes',
      name: 'Componetes',
      active: true,
    },
    {
      value: 'Directivas',
      name: 'Directivas',
      active: false,
    },
    {
      value: 'Metodos',
      name: 'Metodos',
      active: false,
    },
  ];

  public getActiveComponent(): string | undefined {
    const active = this.componentList.find((value) => !!value.active);

    return active?.name;
  }

  ngOnInit(): void {
    // Restore app state from storage if exists
    this.restoreAppState();

    this.load(this.activeAngularVersion() as any);
  }

  private restoreAppState(): void {
    const stateJson = sessionStorage.getItem('appState');
    if (stateJson) {
      const state = JSON.parse(stateJson);
      this.activeAngularVersion.set(state.version);
      this.activeCategory.set(state.category);

      // Update angularVersion array
      this.angularVersion.forEach((av) => {
        av.active = av.value === state.version;
      });

      // Update componentList array
      this.componentList.forEach((cat) => {
        cat.active = cat.name === state.category;
      });

      // Restore selected component
      if (state.selectedItemName) {
        const components = this.activeComponents();
        const item = components.find((c) => c.name === state.selectedItemName);
        if (item) {
          this.selectedItem.set(item);
        }
      }
    }
  }

  public load(
    version: 'Angular 16' | 'Angular 17' | 'Angular 19' | 'Angular 20'
  ): void {
    const map = {
      'Angular 16': 'assets/ui-styles/primeng-v16.css',
      'Angular 17': 'assets/ui-styles/primeng-v17.css',
      'Angular 18': 'assets/ui-styles/primeng-v17.css',
      'Angular 19': 'assets/ui-styles/primeng-v19.css',
      'Angular 20': 'assets/ui-styles/primeng-v19.css',
    };

    const href = map[version];
    if (!href) return;

    // Borrar *todos* los CSS previos de PrimeNG
    document
      .querySelectorAll('link[data-primeng-styles]')
      .forEach((el) => el.remove());

    // Crear nuevo <link>
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-primeng-styles', version);
    console.log(link);
    document.head.appendChild(link);
  }

  public activeMicroFront(item: AngularVersion): void {
    this.angularVersion.forEach((angular) => {
      angular.active = false;
      if (item.value === angular.value) {
        angular.active = true;
      }
    });

    this.componentList.forEach((component) => {
      component.active = false;
    });

    this.selectedItem.set(null);
    this.activeCategory.set('');

    // Update the signal for reactive computed methods
    this.activeAngularVersion.set(item.value);

    // Save full app state before reload
    const state = {
      version: this.activeAngularVersion(),
      category: this.activeCategory(),
      selectedItemName: this.selectedItem()?.name || null,
    };
    sessionStorage.setItem('appState', JSON.stringify(state));

    // Reload to load styles
    location.reload();
  }

  public getAngularButtonActive(version: string): boolean {
    return this.activeAngularVersion() === version;
  }

  public activemicroComponent(item: ComponentCategory): void {
    this.componentList.forEach((component) => {
      component.active = false;
      if (item === component) {
        component.active = true;
      }
    });
    // Actualizar categoría activa y limpiar selección
    this.activeCategory.set(item.name);
    this.selectedItem.set(null);
    console.log();
    const angularActive = this.angularVersion.find((a) => !!a.active);
    if (!angularActive) {
      return;
    }
    this.load(
      angularActive?.value as
        | 'Angular 16'
        | 'Angular 17'
        | 'Angular 19'
        | 'Angular 20'
    );
  }

  public selectComponent(component: ComponentItem): void {
    // Establecer el elemento seleccionado
    this.selectedItem.set(component);
  }

  public getActiveItems(): ComponentItem[] {
    if (this.getActiveComponent() === 'Componetes') {
      return this.activeComponents();
    } else if (this.getActiveComponent() === 'Directivas') {
      return this.activeDirectives();
    } else if (this.getActiveComponent() === 'Metodos') {
      return this.activeFunctions();
    }
    return [];
  }
}

import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { componentesV16 } from './componentes-v16';
import { NgClass, NgComponentOutlet, NgIf, NgFor } from '@angular/common';
import {
  componentesV17,
  directivasV17,
  funcionesV17,
} from './data-v17/constantes-v17';

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
  imports: [RouterModule, NgClass, NgComponentOutlet, NgIf, NgFor],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public selectTarget: WritableSignal<SelectTarget> = signal({
    angular: 'Angular 17',
    structure: 'Componetes',
  });
  public selectedItem: WritableSignal<ComponentItem | null> = signal(null);
  public activeCategory: WritableSignal<string> = signal('');
  protected title = 'gondola-librery-front';
  public componentesV16 = componentesV16;
  public mapComponentes = [
    {
      angular: 'Angular 17',
      component: 'Componentes',
      componentes: componentesV17,
      directivas: directivasV17,
      funciones: funcionesV17,
    },
  ];

  public activeComponents = computed(() => {
    const activeAngular = this.angularVersion.find((v) => v.active);
    const versionMap = this.mapComponentes.find(
      (m) => m.angular === activeAngular?.value
    );
    return versionMap?.componentes || [];
  });

  public activeDirectives = computed(() => {
    const activeAngular = this.angularVersion.find((v) => v.active);
    const versionMap = this.mapComponentes.find(
      (m) => m.angular === activeAngular?.value
    );
    return versionMap?.directivas || [];
  });

  public activeFunctions = computed(() => {
    const activeAngular = this.angularVersion.find((v) => v.active);
    const versionMap = this.mapComponentes.find(
      (m) => m.angular === activeAngular?.value
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

  public activeMicroFront(item: AngularVersion): void {
    this.angularVersion.forEach((angular) => {
      angular.active = false;
      if (item == angular) {
        angular.active = true;
      }
    });

    this.componentList.forEach((component) => {
      component.active = false;
    });
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

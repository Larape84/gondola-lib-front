import { ConditionalElementDirective } from './conditional-display.directive';
import { GondolaButtonRoundedDirective } from './gondola-button-rounded.directive';
import { GondolaInputFechaDirective } from './gondola-input-fecha.directive';
import { GondolaInputNumberDirective } from './gondola-input-number.directive';
import { GondolaInputSelectDirective } from './gondola-input-select.directive';
import { GondolaInputTextDirective } from './gondola-input-text.directive';
import { GondolainputTextAreaDirective } from './gondola-input-textArea.directive';
import { GondolaSteperDirective } from './gondola-steper.directive';
import { GondolaTableColumnDirective } from './gondola-table-column.directive';

const directives = [
  GondolaTableColumnDirective,
  GondolaSteperDirective,
  GondolainputTextAreaDirective,
  GondolaInputTextDirective,
  GondolaInputSelectDirective,
  GondolaInputNumberDirective,
  GondolaInputFechaDirective,
  GondolaButtonRoundedDirective,
  ConditionalElementDirective,
];

export default directives;

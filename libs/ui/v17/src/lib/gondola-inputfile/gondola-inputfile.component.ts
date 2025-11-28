import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  input,
  InputSignal,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-gondola-inputfile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gondola-inputfile.component.html',
  styleUrl: './gondola-inputfile.component.scss',
})
export class GondolaInputfileComponent implements OnInit {
  placeholder: InputSignal<string> = input<string>('');
  label: InputSignal<string> = input<string>('');
  multiple: InputSignal<boolean> = input<boolean>(false);
  disabled: InputSignal<boolean> = input<boolean>(false);
  acceptFormats: InputSignal<string> = input<string>('');
  @Input() labelTemplateCustom?: TemplateRef<any>;
  @Output() onFileUpload: EventEmitter<File[]> = new EventEmitter<File[]>();
  currentFiles: File[] | undefined;
  labelCurrent: string = '';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  constructor() {}

  ngOnInit(): void {
    this.labelCurrent = this.label();
  }

  onFileSelected(e: any) {
    if (e && e.target) {
      this.currentFiles = e.target.files;

      if (this.currentFiles && this.currentFiles.length === 1) {
        this.labelCurrent = this.currentFiles[0].name;
      } else if (this.currentFiles && this.currentFiles.length > 1) {
        this.labelCurrent = this.currentFiles.length + ' archivos cargados';
      } else {
        this.labelCurrent = this.label();
      }

      this.onFileUpload.emit(this.currentFiles);
    } else {
      this.labelCurrent = this.label();
      this.onFileUpload.emit([]);
    }
  }

  preloadFiles(files: File[]) {
    const dataTransfer = new DataTransfer();

    for (let i = 0; i < files.length; i++) {
      dataTransfer.items.add(files[i]);
    }

    this.currentFiles = [...files];

    const input = this.fileInput.nativeElement;
    input.files = dataTransfer.files;

    const event = new Event('change');
    input.dispatchEvent(event);
  }

  clearFiles() {
    this.currentFiles = [];
    this.onFileUpload.emit([]);
    this.labelCurrent = this.label();
    this.fileInput.nativeElement.value = '';
  }
}

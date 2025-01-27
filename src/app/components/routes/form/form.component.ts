import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface StyleOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  step: number = 1;
  formGroup: FormGroup;
  
  styleOptions: StyleOption[] = [
    { label: 'Minimalista', value: 'minimalista' },
    { label: 'Colorido', value: 'colorido' },
    { label: 'Moderno', value: 'moderno' },
    { label: 'Clásico', value: 'clasico' }
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      projectType: ['', [Validators.required]],
      style: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  canProceedStep1(): any {
    return this.formGroup.get('name')?.valid && 
           this.formGroup.get('email')?.valid;
  }

  canProceedStep2(): any {
    return this.formGroup.get('projectType')?.valid;
  }

  canSubmit(): boolean {
    return this.formGroup.valid;
  }

  nextStep(): void {
    if (this.step < 4) {
      this.step++;
    }
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  async submitForm(): Promise<void> {
    if (this.formGroup.valid) {
      try {
        // Aquí iría tu lógica para enviar el formulario
        console.log('Formulario enviado:', this.formGroup.value);
        this.step = 4;
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
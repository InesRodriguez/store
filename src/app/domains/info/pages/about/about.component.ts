import { WaveAudioComponent } from './../../components/wave-audio/wave-audio.component';
import { Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { HighLightDirective } from '@shared/directives/high-light.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HeaderComponent, HighLightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }
  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}

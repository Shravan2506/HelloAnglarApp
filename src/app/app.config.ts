
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideAnimations(),
    importProvidersFrom(FormsModule)
  ]
};

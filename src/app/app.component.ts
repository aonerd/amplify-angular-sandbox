import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AmplifyAuthenticatorModule, AuthenticatorService} from '@aws-amplify/ui-angular';
import {Amplify} from 'aws-amplify';
import outputs from '../../amplify_outputs.json';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amplify-angular-sandbox';

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}

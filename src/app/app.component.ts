import { Component, OnInit } from '@angular/core'
import { GoogleApiService } from './services/google-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private readonly googleService: GoogleApiService) { }

  async ngOnInit (): Promise<void> {
    await this.googleService.loadScript()
  }
}

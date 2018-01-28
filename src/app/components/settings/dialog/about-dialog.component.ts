import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as electron from 'electron';

const GITHUB_URL = 'https://github.com/Mokkapps/scrum-daily-standup-picker';
const MOKKAPPS_URL = 'https://www.mokkapps.de';

@Component({
  selector: 'app-about-dialog',
  templateUrl: 'about-dialog.component.html',
  styleUrls: ['about-dialog.component.scss']
})
export class AboutDialogComponent {
  appVersion: string;
  year: number;

  constructor(
    public dialogRef: MatDialogRef<AboutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.appVersion = electron.remote.app.getVersion();
    this.year = new Date().getFullYear();
  }

  openGitHubUrl() {
    electron.shell.openExternal(GITHUB_URL);
  }

  openMokkappsUrl() {
    electron.shell.openExternal(MOKKAPPS_URL);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

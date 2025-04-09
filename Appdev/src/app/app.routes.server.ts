import { RenderMode, ServerRoute } from '@angular/ssr';
// import { Component } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

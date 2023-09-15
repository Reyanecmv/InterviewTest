import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLandingComponent } from './feature-landing/feature-landing.component';
import { FeatureRoutingModule } from "./feature-routing.module";
import { FeatureComponentComponent } from './feature-component/feature-component.component';
import { FeatureSiblingComponent } from './feature-sibling/feature-sibling.component';



@NgModule({
  declarations: [
    FeatureLandingComponent,
    FeatureComponentComponent,
    FeatureSiblingComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }

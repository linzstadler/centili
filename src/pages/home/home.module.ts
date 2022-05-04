import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { FeaturedLogosComponent } from './components/featured-logos/featured-logos.component';
import {SwiperModule} from "swiper/angular";
import {HomeLayoutModule} from "../../layouts/home-layout/home-layout.module";
import {SocialNetworkModule} from "../../shared/components/social-network/social-network.module";
import { GrowthPartnerComponent } from './components/growth-partner/growth-partner.component';
import { ImpactIndustriesComponent } from './components/impact-industries/impact-industries.component';
import { EmpoweringBusinessesComponent } from './components/empowering-businesses/empowering-businesses.component';


@NgModule({
    declarations: [
        HomeComponent,
        FeaturedLogosComponent,
        GrowthPartnerComponent,
        ImpactIndustriesComponent,
        EmpoweringBusinessesComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SwiperModule,
        HomeLayoutModule,
        SocialNetworkModule
    ]
})
export class HomeModule {
}

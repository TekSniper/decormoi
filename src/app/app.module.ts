import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MentionLegaleComponent } from './mention-legale/mention-legale.component';
import { ConditionsGeneraleComponent } from './conditions-generale/conditions-generale.component';
import { FaqComponent } from './faq/faq.component';
import { EventListComponent } from './event-list/event-list.component';
import { SingleEventComponent } from './event-list/single-event/single-event.component';
import { EventFormComponent } from './event-list/event-form/event-form.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SingleArticleComponent } from './article-list/single-article/single-article.component';
import { ArticleFormComponent } from './article-list/article-form/article-form.component';
import { StockComponent } from './stock/stock.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SingleBlogComponent } from './blog-list/single-blog/single-blog.component';
import { BlogFormComponent } from './blog-list/blog-form/blog-form.component';
import { DevisListComponent } from './devis-list/devis-list.component';
import { SingleDevisComponent } from './devis-list/single-devis/single-devis.component';
import { DevisFormComponent } from './devis-list/devis-form/devis-form.component';
import { ContactComponent } from './contact/contact.component';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SignupComponent,
    SigninComponent,
    MentionLegaleComponent,
    ConditionsGeneraleComponent,
    FaqComponent,
    EventListComponent,
    SingleEventComponent,
    EventFormComponent,
    ArticleListComponent,
    SingleArticleComponent,
    ArticleFormComponent,
    StockComponent,
    HeaderComponent,
    FooterComponent,
    GalerieComponent,
    AproposComponent,
    BlogListComponent,
    SingleBlogComponent,
    BlogFormComponent,
    DevisListComponent,
    SingleDevisComponent,
    DevisFormComponent,
    ContactComponent,
    DisponibiliteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

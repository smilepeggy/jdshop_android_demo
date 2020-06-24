import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// 引入權限判断的LoginGuard
import { LoginGuard } from './services/login.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registerstep1',
    loadChildren: () => import('./registerstep1/registerstep1.module').then(m => m.Registerstep1PageModule)
  },
  {
    path: 'registerstep2',
    loadChildren: () => import('./registerstep2/registerstep2.module').then(m => m.Registerstep2PageModule)
  },
  {
    path: 'registerstep3',
    loadChildren: () => import('./registerstep3/registerstep3.module').then(m => m.Registerstep3PageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./productlist/productlist.module').then(m => m.ProductlistPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then(m => m.PersonalPageModule)
  },
  {
    path: 'pcontent',
    loadChildren: () => import('./pcontent/pcontent.module').then(m => m.PcontentPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'addressadd',
    loadChildren: () => import('./addressadd/addressadd.module').then(m => m.AddressaddPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'addresslist',
    loadChildren: () => import('./addresslist/addresslist.module').then(m => m.AddresslistPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'addressedit',
    loadChildren: () => import('./addressedit/addressedit.module').then(m => m.AddresseditPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  /* 拿掉
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  }
  */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
